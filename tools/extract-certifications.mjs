import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const sourceFiles = {
  "ux-designer": "salesforce_ux_designer_study_lab(1).html",
  "platform-administrator": "salesforce_platform_administrator_study_lab.html",
  "business-analyst": "salesforce_business_analyst_study_lab.html",
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
      "Practica los dominios oficiales con preguntas de escenario, retroalimentacion inmediata y tips enfocados en razonamiento de examen.",
    heroCopy:
      "Estudia los dominios oficiales con tarjetas basadas en escenarios. Elige una respuesta para ver la opcion correcta, una explicacion practica y un tip de razonamiento.",
    reasoning:
      "Identifica primero el objetivo del usuario, despues elige la solucion Salesforce mas nativa, accesible y mantenible que lo cumpla.",
    habits:
      "Compara cada opcion contra evidencia de usuario, accesibilidad, SLDS y configuracion declarativa antes de decidir.",
    integrity:
      "Estas son preguntas originales creadas a partir de objetivos publicos y documentacion. No son preguntas filtradas ni memorizadas del examen real.",
    blueprintNote:
      "La distribucion se alinea con el peso publicado para los dominios del examen.",
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
        description: "Pagina oficial de la credencial y preparacion recomendada.",
      },
      {
        title: "Official UX Designer Cert Prep",
        url: "https://trailhead.salesforce.com/content/learn/modules/ux-designer-certification-prep",
        description: "Dominios, escenarios, flashcards y modulos relacionados.",
      },
      {
        title: "W3C WCAG Overview",
        url: "https://www.w3.org/WAI/standards-guidelines/wcag/",
        description: "Principios y estandares de accesibilidad web.",
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
      "Practica escenarios reales de administracion, seguridad, datos, automatizacion y Agentforce con feedback inmediato.",
    heroCopy:
      "Practica los dominios actuales con escenarios realistas de administrador. Selecciona tus respuestas para revelar la opcion correcta, una explicacion y un tip de examen.",
    reasoning:
      "Separa permisos de sharing, identifica el objeto y proceso de negocio, y despues elige la capacidad Salesforce mas nativa y mantenible.",
    habits:
      "Lee cada calificador: best, most efficient, without code, select two y based on record ownership suelen cambiar la respuesta.",
    integrity:
      "Este lab contiene preguntas originales creadas desde objetivos publicos y documentacion Salesforce. No reproduce contenido restringido del examen.",
    blueprintNote:
      "El banco contiene preguntas distribuidas cerca del peso publicado para cada dominio.",
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
        description: "Pagina oficial de la credencial y preparacion recomendada.",
      },
      {
        title: "Administrator Certification Prep Trail",
        url: "https://trailhead.salesforce.com/content/learn/trails/administrator-certification-prep",
        description: "Trail oficial de preparacion para dominios del examen.",
      },
      {
        title: "Trailblazer Community: Salesforce Admin",
        url: "https://trailhead.salesforce.com/trailblazer-community/topics/admin",
        description: "Consejos de estudio, preguntas y discusion de especialistas.",
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
      "Practica escenarios de discovery, stakeholders, procesos, requisitos, user stories y UAT con feedback inmediato.",
    heroCopy:
      "Practica los dominios actuales con escenarios realistas de analisis de negocio en Salesforce. Selecciona tus respuestas para revelar la opcion correcta, una explicacion y un tip de examen.",
    reasoning:
      "Identifica el resultado de negocio, separa evidencia de supuestos y elige la tecnica o artefacto que crea el entendimiento compartido mas claro.",
    habits:
      "Lee cada calificador: first, best, current state, future state, select two y most effective technique suelen determinar la respuesta.",
    integrity:
      "Este lab contiene preguntas originales creadas desde objetivos publicos, documentacion Salesforce y practicas establecidas de analisis de negocio. No reproduce contenido restringido del examen.",
    blueprintNote:
      "El banco contiene 100 preguntas, por lo que el conteo refleja el peso publicado para cada dominio.",
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
        description: "Pagina oficial de la credencial y preparacion recomendada.",
      },
      {
        title: "Official Business Analyst Cert Prep",
        url: "https://trailhead.salesforce.com/content/learn/modules/salesforce-business-analyst-certification-prep",
        description: "Practica, flashcards y enlaces de estudio para los seis dominios.",
      },
      {
        title: "Customer Discovery Review",
        url: "https://trailhead.salesforce.com/content/learn/modules/salesforce-business-analyst-certification-prep/learn-about-customer-discovery",
        description: "Estrategia, estado actual, work streams, cambio y contexto Salesforce.",
      },
      {
        title: "Stakeholder Collaboration Review",
        url: "https://trailhead.salesforce.com/content/learn/modules/salesforce-business-analyst-certification-prep/reivew-collaboration-with-stakeholders",
        description: "Elicitacion, facilitacion, confianza, roadmaps y priorizacion.",
      },
      {
        title: "Business Process Mapping Review",
        url: "https://trailhead.salesforce.com/content/learn/modules/salesforce-business-analyst-certification-prep/study-up-on-business-process-mapping",
        description: "Scope, ownership, governance, capability maps y process maps.",
      },
      {
        title: "User Acceptance Review",
        url: "https://trailhead.salesforce.com/content/learn/modules/salesforce-business-analyst-certification-prep/explore-user-acceptance",
        description: "Planes UAT, testers, scripts, feedback, go/no-go y sign-off.",
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

function normalizeQuestions(questions) {
  return questions.map((question) => {
    const answers = Array.isArray(question.answers) ? question.answers : [question.answer];
    return {
      id: question.id,
      category: question.category,
      select: Number(question.select || answers.length || 1),
      question: question.question,
      options: question.options,
      answers,
      explanation: question.explanation,
      tip: question.tip,
    };
  });
}

const certifications = Object.entries(sourceFiles).map(([id, file]) => {
  const source = fs.readFileSync(path.join(root, file), "utf8");
  const questions = normalizeQuestions(extractConst(source, "questions", "categoryOrder"));
  const categoryOrder = extractConst(source, "categoryOrder", "STORAGE_KEY");
  return {
    ...metadata[id],
    categoryOrder,
    questions,
  };
});

const output = `// Generated from the original Salesforce study lab HTML files.\n// To add a certification, add metadata and a source file to tools/extract-certifications.mjs, then rerun it.\nwindow.BLUEFORCE_CERTIFICATIONS = ${JSON.stringify(certifications, null, 2)};\n`;

fs.writeFileSync(path.join(root, "assets/data/certifications.js"), output);
