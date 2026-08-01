import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const rootDir = path.resolve(import.meta.dirname, "..");
const letters = ["A", "B", "C", "D", "E", "F"];
const weakDistractorPattern =
  /\b(color|palette|profile photo|blue profile|shortest name|public folder|delete all|delete the|disable all|hide from|guess|spreadsheet|larger page layout|dashboard color|campaign hierarchy|role hierarchy depth|two recycle bins|case queue|lead queue|survey flow|calendar view|public access|without analysis|only whether|locale|chatter profile photo)\b/i;

const context = { window: {} };
vm.createContext(context);

function runScript(file) {
  const source = fs.readFileSync(path.join(rootDir, file), "utf8");
  vm.runInContext(source, context, { filename: file });
}

function pct(value, total) {
  return total ? `${Math.round((value / total) * 1000) / 10}%` : "0%";
}

function summarizeQuestion(certification, question) {
  const correct = new Set(question.answers);
  const wrong = question.options
    .map((option, index) => ({ option, index, length: option.length }))
    .filter((item) => !correct.has(item.index));
  const correctLengths = question.answers.map((index) => question.options[index].length);
  const avgWrongLength = wrong.reduce((sum, item) => sum + item.length, 0) / wrong.length;
  const maxCorrectLength = Math.max(...correctLengths);
  const minWrongLength = Math.min(...wrong.map((item) => item.length));
  const weakDistractorCount = wrong.filter(
    (item) => item.length < 70 && weakDistractorPattern.test(item.option),
  ).length;
  const lengthRatio = maxCorrectLength / Math.max(avgWrongLength, 1);
  const lengthGap = maxCorrectLength - minWrongLength;
  const score =
    (lengthRatio > 1.45 ? Math.round((lengthRatio - 1) * 20) : 0) +
    weakDistractorCount * 12 +
    (lengthGap > 70 ? 8 : 0);

  return {
    certification: certification.id,
    questionId: question.id,
    select: question.select,
    score,
    lengthRatio,
    lengthGap,
    weakDistractorCount,
    correctOptions: question.answers.map(
      (index) => `${letters[index]}. ${question.options[index]}`,
    ),
    distractors: wrong.map((item) => `${letters[item.index]}. ${item.option}`),
  };
}

runScript("assets/data/certifications.js");
for (const certification of context.window.BLUEFORCE_CERTIFICATIONS) {
  runScript(certification.questionBankPath);
}

const banks = context.window.BLUEFORCE_QUESTION_BANKS;
const flagged = [];

for (const certification of context.window.BLUEFORCE_CERTIFICATIONS) {
  const questions = banks[certification.id].questions;
  const singleQuestions = questions.filter((question) => question.select === 1);
  const optionCounts = Object.fromEntries(letters.map((letter) => [letter, 0]));
  const singleCounts = Object.fromEntries(letters.map((letter) => [letter, 0]));
  let correctMarks = 0;

  for (const question of questions) {
    const summary = summarizeQuestion(certification, question);
    if (summary.score >= 18) flagged.push(summary);

    for (const answer of question.answers) {
      optionCounts[letters[answer]] += 1;
      correctMarks += 1;
    }
    if (question.select === 1) {
      singleCounts[letters[question.answers[0]]] += 1;
    }
  }

  console.log(`\n${certification.id}`);
  console.log(`Questions: ${questions.length}`);
  console.log(
    `All correct marks: ${letters
      .slice(0, 4)
      .map((letter) => `${letter}=${optionCounts[letter]} (${pct(optionCounts[letter], correctMarks)})`)
      .join(", ")}`,
  );
  console.log(
    `Single-answer only: ${letters
      .slice(0, 4)
      .map((letter) => `${letter}=${singleCounts[letter]} (${pct(singleCounts[letter], singleQuestions.length)})`)
      .join(", ")}`,
  );
}

flagged.sort((a, b) => b.score - a.score || b.lengthRatio - a.lengthRatio);

console.log(`\nFlagged quality risks: ${flagged.length}`);
for (const item of flagged.slice(0, 120)) {
  console.log(
    `\n[${item.score}] ${item.certification} #${item.questionId} select ${item.select} ratio ${item.lengthRatio.toFixed(
      2,
    )} gap ${item.lengthGap} weak ${item.weakDistractorCount}`,
  );
  console.log(`Correct: ${item.correctOptions.join(" | ")}`);
  console.log(`Distractors: ${item.distractors.join(" | ")}`);
}

if (process.argv.includes("--strict") && flagged.length > 0) {
  process.exitCode = 1;
}
