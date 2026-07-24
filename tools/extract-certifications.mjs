import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const examDataDir = path.join(root, "assets/data/exams");

const sourceFiles = {
  "ux-designer": "salesforce_ux_designer_study_lab(1).html",
  "platform-administrator": "salesforce_platform_administrator_study_lab.html",
  "business-analyst": "salesforce_business_analyst_study_lab.html",
  "sales-cloud-consultant": "salesforce_sales_cloud_consultant_study_lab.html",
  "data-360-consultant": "salesforce_data_360_consultant_study_lab.html",
};

const metadata = {
  "ux-designer": {
    id: "ux-designer",
    title: "Salesforce UX Designer",
    pageTitle: "Salesforce UX Designer Certification Study Lab",
    shortTitle: "UX Designer",
    code: "UX",
    path: "certifications/ux-designer",
    sourceFile: sourceFiles["ux-designer"],
    description:
      "Practice the official domains with scenario-based questions, instant feedback, and exam-focused reasoning tips.",
    heroCopy:
      "Study the official domains with scenario-based cards. Choose an answer to reveal the correct option, a practical explanation, and a reasoning tip.",
    reasoning:
      "Identify the user's goal first, then choose the most native, accessible, and maintainable Salesforce solution that meets it.",
    habits:
      "Compare each option against user evidence, accessibility, SLDS, and declarative configuration before deciding.",
    integrity:
      "These are original questions created from public objectives and documentation. They are not leaked or memorized real exam questions.",
    blueprintNote:
      "The distribution aligns with the published weighting for the exam domains.",
    blueprint: [
      { label: "Declarative Design", weight: 27 },
      { label: "SLDS", weight: 21 },
      { label: "UX Fundamentals", weight: 16 },
      { label: "Discovery", weight: 13 },
      { label: "Human-Centered Design", weight: 12 },
      { label: "Testing", weight: 11 },
    ],
    resources: [
      {
        title: "Salesforce UX Designer Credential",
        url: "https://trailhead.salesforce.com/credentials/userexperiencedesigner",
        description: "Official credential page and recommended preparation.",
      },
      {
        title: "Official UX Designer Cert Prep",
        url: "https://trailhead.salesforce.com/content/learn/modules/ux-designer-certification-prep",
        description: "Domains, scenarios, flashcards, and related modules.",
      },
      {
        title: "W3C WCAG Overview",
        url: "https://www.w3.org/WAI/standards-guidelines/wcag/",
        description: "Web accessibility principles and standards.",
      },
    ],
  },
  "platform-administrator": {
    id: "platform-administrator",
    title: "Salesforce Platform Administrator",
    pageTitle: "Salesforce Platform Administrator Certification Study Lab",
    shortTitle: "Platform Administrator",
    code: "ADM",
    path: "certifications/platform-administrator",
    sourceFile: sourceFiles["platform-administrator"],
    description:
      "Practice realistic administration, security, data, automation, and Agentforce scenarios with instant feedback.",
    heroCopy:
      "Practice current domains through realistic administrator scenarios. Select your answers to reveal the correct option, an explanation, and an exam tip.",
    reasoning:
      "Separate permissions from sharing, identify the object and business process, then choose the most native and maintainable Salesforce capability.",
    habits:
      "Read every qualifier: best, most efficient, without code, select two, and based on record ownership often change the answer.",
    integrity:
      "This lab contains original questions created from public objectives and Salesforce documentation. It does not reproduce restricted exam content.",
    blueprintNote:
      "The bank contains questions distributed close to the published weighting for each domain.",
    blueprint: [
      { label: "Configuration and Setup", weight: 15 },
      { label: "Object Manager and Lightning App Builder", weight: 15 },
      { label: "Sales and Marketing Applications", weight: 10 },
      { label: "Service and Support Applications", weight: 10 },
      { label: "Productivity and Collaboration", weight: 10 },
      { label: "Data and Analytics Management", weight: 17 },
      { label: "Automation", weight: 15 },
      { label: "Agentforce", weight: 8 },
    ],
    resources: [
      {
        title: "Platform Administrator Credential",
        url: "https://trailhead.salesforce.com/credentials/administrator",
        description: "Official credential page and recommended preparation.",
      },
      {
        title: "Administrator Certification Prep Trail",
        url: "https://trailhead.salesforce.com/content/learn/trails/administrator-certification-prep",
        description: "Official preparation trail for the exam domains.",
      },
      {
        title: "Trailblazer Community: Salesforce Admin",
        url: "https://trailhead.salesforce.com/trailblazer-community/topics/admin",
        description: "Study advice, questions, and specialist discussion.",
      },
    ],
  },
  "business-analyst": {
    id: "business-analyst",
    title: "Salesforce Business Analyst",
    pageTitle: "Salesforce Certified Business Analyst Study Lab",
    shortTitle: "Business Analyst",
    code: "BA",
    path: "certifications/business-analyst",
    sourceFile: sourceFiles["business-analyst"],
    description:
      "Practice discovery, stakeholder, process, requirements, user story, and UAT scenarios with instant feedback.",
    heroCopy:
      "Practice current domains through realistic Salesforce business analysis scenarios. Select your answers to reveal the correct option, an explanation, and an exam tip.",
    reasoning:
      "Identify the business outcome, separate evidence from assumptions, and choose the technique or artifact that creates the clearest shared understanding.",
    habits:
      "Read every qualifier: first, best, current state, future state, select two, and most effective technique often determine the answer.",
    integrity:
      "This lab contains original questions created from public objectives, Salesforce documentation, and established business analysis practices. It does not reproduce restricted exam content.",
    blueprintNote:
      "The bank contains 100 questions, so the count reflects the published weighting for each domain.",
    blueprint: [
      { label: "Customer Discovery", weight: 17 },
      { label: "Collaboration with Stakeholders", weight: 23 },
      { label: "Business Process Mapping", weight: 12 },
      { label: "Requirements", weight: 18 },
      { label: "User Stories", weight: 18 },
      { label: "User Acceptance", weight: 12 },
    ],
    resources: [
      {
        title: "Salesforce Business Analyst Credential",
        url: "https://trailhead.salesforce.com/credentials/businessanalyst",
        description: "Official credential page and recommended preparation.",
      },
      {
        title: "Official Business Analyst Cert Prep",
        url: "https://trailhead.salesforce.com/content/learn/modules/salesforce-business-analyst-certification-prep",
        description: "Practice, flashcards, and study links for the six domains.",
      },
      {
        title: "Customer Discovery Review",
        url: "https://trailhead.salesforce.com/content/learn/modules/salesforce-business-analyst-certification-prep/learn-about-customer-discovery",
        description: "Strategy, current state, work streams, change, and Salesforce context.",
      },
      {
        title: "Stakeholder Collaboration Review",
        url: "https://trailhead.salesforce.com/content/learn/modules/salesforce-business-analyst-certification-prep/reivew-collaboration-with-stakeholders",
        description: "Elicitation, facilitation, trust, roadmaps, and prioritization.",
      },
      {
        title: "Business Process Mapping Review",
        url: "https://trailhead.salesforce.com/content/learn/modules/salesforce-business-analyst-certification-prep/study-up-on-business-process-mapping",
        description: "Scope, ownership, governance, capability maps, and process maps.",
      },
      {
        title: "User Acceptance Review",
        url: "https://trailhead.salesforce.com/content/learn/modules/salesforce-business-analyst-certification-prep/explore-user-acceptance",
        description: "UAT plans, testers, scripts, feedback, go/no-go, and sign-off.",
      },
    ],
  },
  "sales-cloud-consultant": {
    id: "sales-cloud-consultant",
    title: "Salesforce Sales Cloud Consultant",
    pageTitle: "Salesforce Sales Cloud Consultant Certification Study Lab",
    shortTitle: "Sales Cloud Consultant",
    code: "SCC",
    path: "certifications/sales-cloud-consultant",
    sourceFile: sourceFiles["sales-cloud-consultant"],
    description:
      "Practice advanced Sales Cloud consulting scenarios across lifecycle design, implementation strategy, data, and trusted AI.",
    heroCopy:
      "Practice current exam domains through advanced consulting scenarios covering discovery, solution design, forecasting, territory management, sales execution, data strategy, adoption, and trusted AI.",
    reasoning:
      "Identify the business outcome, constraints, operating model, data implications, and long-term maintainability before choosing the best-fit Salesforce solution.",
    habits:
      "Several options may be technically possible. Read qualifiers such as best, most scalable, first, and most appropriate, then choose the answer that addresses the root cause and full scenario.",
    integrity:
      "This lab contains original practice questions created from public Salesforce objectives and documentation. It does not reproduce leaked, memorized, or restricted exam content.",
    blueprintNote:
      "The bank contains 100 questions distributed according to Salesforce's published domain weighting.",
    blueprint: [
      { label: "Sales Lifecycle", weight: 20 },
      { label: "Consulting and Implementation Strategies", weight: 25 },
      { label: "Practical Application of Sales Cloud Expertise", weight: 24 },
      { label: "Data Management", weight: 18 },
      { label: "Predictive and Generative AI", weight: 13 },
    ],
    resources: [
      {
        title: "Sales Cloud Consultant Credential",
        url: "https://trailhead.salesforce.com/credentials/salescloudconsultant",
        description: "Official credential page and recommended preparation.",
      },
      {
        title: "Official Sales Cloud Consultant Exam Guide",
        url: "https://help.salesforce.com/s/articleView?id=005298976&language=en_US&type=1",
        description: "Current exam objectives, audience, and domain weighting.",
      },
      {
        title: "Official Sales Cloud Consultant Trailmix",
        url: "https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-salesforce-sales-cloud-consultant-credential",
        description: "Salesforce-curated preparation across the current domains.",
      },
      {
        title: "Sales Cloud Basics and Feature Guidance",
        url: "https://help.salesforce.com/s/articleView?id=sales.sales_core.htm&language=en_US&type=5",
        description:
          "Official entry point for leads, opportunities, forecasting, territories, and sales productivity.",
      },
      {
        title: "Salesforce Forecasting",
        url: "https://help.salesforce.com/s/articleView?id=sales.forecasts3_intro.htm&language=en_US&type=5",
        description: "Forecast setup, management, guidance, and reporting concepts.",
      },
      {
        title: "Products and Price Books",
        url: "https://help.salesforce.com/s/articleView?id=sales.products_pricebooks.htm&language=en_US&type=5",
        description: "Official product catalog, price book, and price book entry model.",
      },
      {
        title: "Drive Productivity with Salesforce AI",
        url: "https://trailhead.salesforce.com/content/learn/trails/drive-productivity-with-einstein-ai",
        description: "Predictive and generative AI, governance, and trusted implementation concepts.",
      },
      {
        title: "Salesforce Architects",
        url: "https://architect.salesforce.com/",
        description: "Architecture guidance for scalable, secure, and maintainable solution design.",
      },
      {
        title: "Trailblazer Community: Sales Cloud",
        url: "https://trailhead.salesforce.com/trailblazer-community/topics/salescloud",
        description:
          "Peer discussion and implementation perspectives; used only for study themes, never copied questions.",
      },
      {
        title: "Salesforce Help",
        url: "https://help.salesforce.com/",
        description: "Current product documentation and implementation considerations.",
      },
    ],
  },
  "data-360-consultant": {
    id: "data-360-consultant",
    title: "Salesforce Data 360 Consultant",
    pageTitle: "Salesforce Certified Data 360 Consultant Study Lab",
    shortTitle: "Data 360 Consultant",
    code: "D360",
    path: "certifications/data-360-consultant",
    sourceFile: sourceFiles["data-360-consultant"],
    description:
      "Practice advanced Data 360 consulting scenarios across positioning, setup, ingestion, unification, analysis, and activation.",
    heroCopy:
      "Practice current Data 360 exam domains through advanced consulting scenarios covering solution positioning, governance, data spaces, ingestion, Zero Copy, modeling, identity resolution, insights, AI grounding, segmentation, activation, and Flow.",
    reasoning:
      "Trace the full data lifecycle: business purpose, source and latency, DLO, transformation, DMO mapping, identity, insight, segment, activation, governance, and consumption.",
    habits:
      "Watch for grain, stable keys, relationship paths, consent freshness, false matches, destination identifiers, and end-to-end latency. Real time and more data are not automatically the best design.",
    integrity:
      "Salesforce Certified Data 360 Consultant was previously named Salesforce Certified Data Cloud Consultant. This lab uses current Data 360 terminology and contains original questions based on public Salesforce documentation.",
    blueprintNote:
      "The bank contains 100 questions distributed according to Salesforce's published domain weighting.",
    blueprint: [
      { label: "Solution Positioning", weight: 14 },
      { label: "Data 360 Setup and Administration", weight: 13 },
      { label: "Data Source Connection and Ingestion", weight: 18 },
      { label: "Harmonization and Unification", weight: 17 },
      { label: "Data Enhancements, Sharing, and Analysis", weight: 18 },
      { label: "Data Activations and Utilization", weight: 20 },
    ],
    resources: [
      {
        title: "Data 360 Consultant Credential",
        url: "https://trailhead.salesforce.com/credentials/data360consultant",
        description: "Official credential page using the current certification name.",
      },
      {
        title: "Official Data 360 Consultant Exam Guide",
        url: "https://help.salesforce.com/s/articleView?id=005298940&language=en_US&type=1",
        description: "Current objectives, exam details, and domain weighting.",
      },
      {
        title: "Official Certification Preparation Trail",
        url: "https://trailhead.salesforce.com/content/learn/trails/prepare-for-your-salesforce-data-360-consultant-exam",
        description:
          "Salesforce-curated learning across setup, ingestion, unification, insights, and activation.",
      },
      {
        title: "About Salesforce Data 360",
        url: "https://help.salesforce.com/s/articleView?id=data.c360_a_data_cloud.htm&language=en_US&type=5",
        description: "Official product concepts, capabilities, and terminology.",
      },
      {
        title: "Data 360 Integration Guide",
        url: "https://developer.salesforce.com/docs/data/data-cloud-int/guide/c360-a-data-cloud-integrations.html",
        description: "Connectors, ingestion, APIs, Zero Copy, and outbound integration patterns.",
      },
      {
        title: "Data 360 Data Modeling Guide",
        url: "https://developer.salesforce.com/docs/data/data-cloud-dmo-mapping/guide/c360dm-model-data.html",
        description: "DLOs, DMOs, standard mappings, relationships, and the Customer 360 Data Model.",
      },
      {
        title: "Identity Resolution",
        url: "https://help.salesforce.com/s/articleView?id=data.c360_a_identity_resolution_unify_source_profiles.htm&language=en_US&type=5",
        description: "Official guidance for matching source profiles and creating unified profiles.",
      },
      {
        title: "Segmentation in Data 360",
        url: "https://help.salesforce.com/s/articleView?id=data.c360_a_segments.htm&language=en_US&type=5",
        description: "Official segmentation concepts, building, publishing, and audience refinement.",
      },
      {
        title: "Data 360 Query Guide",
        url: "https://developer.salesforce.com/docs/data/data-cloud-query-guide/guide/query-guide-get-started.html",
        description: "Query APIs, profile access, calculated insights, and data graph retrieval.",
      },
      {
        title: "Data 360 Architecture",
        url: "https://architect.salesforce.com/docs/architect/fundamentals/guide/data-360-architecture.html",
        description:
          "Salesforce architecture guidance for batch, streaming, real-time, multi-org, AI, and governance patterns.",
      },
    ],
  },
};

function extractConst(source, name, nextConstName) {
  const start = source.indexOf(`const ${name} =`);
  if (start < 0) throw new Error(`Missing const ${name}`);
  const valueStart = source.indexOf("=", start) + 1;
  const endNeedle = nextConstName ? `const ${nextConstName}` : ";\n";
  const end = source.indexOf(endNeedle, valueStart);
  if (end < 0) throw new Error(`Could not find end of const ${name}`);
  let expression = source.slice(valueStart, end).trim();
  if (expression.endsWith(";")) expression = expression.slice(0, -1);
  return Function(`"use strict"; return (${expression});`)();
}

function hashString(value) {
  let hash = 2166136261;
  for (const char of value) {
    hash ^= char.charCodeAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function seededShuffle(values, seed) {
  const shuffled = [...values];
  let state = hashString(seed);
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    state = Math.imul(state ^ (state >>> 15), 2246822507) >>> 0;
    const swap = state % (index + 1);
    [shuffled[index], shuffled[swap]] = [shuffled[swap], shuffled[index]];
  }
  return shuffled;
}

function chooseBalancedSlot(counts, optionCount, seed) {
  return Array.from({ length: optionCount }, (_, index) => index).sort((a, b) => {
    const countDifference = (counts[a] || 0) - (counts[b] || 0);
    if (countDifference) return countDifference;
    return hashString(`${seed}:${a}`) - hashString(`${seed}:${b}`);
  })[0];
}

function reorderOptions(question, answers, targetSlotCounts, seed) {
  const optionIndexes = question.options.map((_, index) => index);
  if (answers.length === 1) {
    const targetSlot = chooseBalancedSlot(targetSlotCounts, question.options.length, seed);
    const [correctIndex] = answers;
    const wrongIndexes = seededShuffle(
      optionIndexes.filter((index) => index !== correctIndex),
      `${seed}:wrong`,
    );
    const availableSlots = optionIndexes.filter((index) => index !== targetSlot);
    const originalIndexByNewSlot = [];
    originalIndexByNewSlot[targetSlot] = correctIndex;
    availableSlots.forEach((slot, index) => {
      originalIndexByNewSlot[slot] = wrongIndexes[index];
    });
    targetSlotCounts[targetSlot] = (targetSlotCounts[targetSlot] || 0) + 1;
    return {
      options: originalIndexByNewSlot.map((index) => question.options[index]),
      answers: [targetSlot],
    };
  }

  const originalIndexByNewSlot = seededShuffle(optionIndexes, `${seed}:multi`);
  return {
    options: originalIndexByNewSlot.map((index) => question.options[index]),
    answers: originalIndexByNewSlot
      .map((originalIndex, newIndex) => (answers.includes(originalIndex) ? newIndex : null))
      .filter((index) => index !== null),
  };
}

function normalizeQuestions(certificationId, questions) {
  const targetSlotCounts = {};
  return questions.map((question) => {
    const answers = Array.isArray(question.answers) ? question.answers : [question.answer];
    const reordered = reorderOptions(
      question,
      answers,
      targetSlotCounts,
      `${certificationId}:${question.id}`,
    );
    return {
      id: question.id,
      category: question.category,
      select: Number(question.select || answers.length || 1),
      question: question.question,
      options: reordered.options,
      answers: reordered.answers,
      explanation: question.explanation,
      tip: question.tip,
    };
  });
}

fs.mkdirSync(examDataDir, { recursive: true });

const certifications = Object.entries(sourceFiles).map(([id, file]) => {
  const source = fs.readFileSync(path.join(root, file), "utf8");
  const questions = normalizeQuestions(id, extractConst(source, "questions", "categoryOrder"));
  const categoryOrder = extractConst(source, "categoryOrder", "STORAGE_KEY");
  const questionBank = { categoryOrder, questions };
  const questionBankFile = path.join(examDataDir, `${id}.js`);
  fs.writeFileSync(
    questionBankFile,
    `window.BLUEFORCE_QUESTION_BANKS=window.BLUEFORCE_QUESTION_BANKS||{};window.BLUEFORCE_QUESTION_BANKS[${JSON.stringify(id)}]=${JSON.stringify(questionBank)};\n`,
  );
  return {
    ...metadata[id],
    categoryOrder,
    questionBankPath: `assets/data/exams/${id}.js`,
    questionCount: questions.length,
    questionIds: questions.map((question) => question.id),
  };
});

const output = `// Generated from the original Salesforce study lab HTML files.\n// To add a certification, add metadata and a source file to tools/extract-certifications.mjs, then rerun it.\nwindow.BLUEFORCE_CERTIFICATIONS = ${JSON.stringify(certifications, null, 2)};\n`;

fs.writeFileSync(path.join(root, "assets/data/certifications.js"), output);
