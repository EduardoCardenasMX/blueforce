import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const rootDir = path.resolve(import.meta.dirname, "..");
const catalogPath = path.join(rootDir, "assets/data/certifications.js");
const assetVersion = "20260801-ui";
const studyAssetVersion = "20260815-study";
const siteUrl = "https://blueforce.cloud";
const faviconPath = "/assets/img/icono_blueforce.png";
const logoPath = "/assets/img/logo_blueforce.png";

function readCertifications() {
  const code = fs.readFileSync(catalogPath, "utf8");
  const context = { window: {} };
  vm.createContext(context);
  vm.runInContext(code, context, { filename: catalogPath });
  return context.window.BLUEFORCE_CERTIFICATIONS || [];
}

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function writeFile(filePath, content) {
  ensureDir(filePath);
  fs.writeFileSync(filePath, `${content.trim()}\n`);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function googleTag() {
  return `<!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-HEQC283GWW"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-HEQC283GWW');
  </script>`;
}

function googleAdSenseTag() {
  return `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7891390174675098"
     crossorigin="anonymous"></script>`;
}

const certCopy = {
  es: {
    "ux-designer": {
      description:
        "Practica dominios oficiales con preguntas basadas en escenarios, feedback inmediato y tips de razonamiento para el examen.",
      heroCopy:
        "Estudia los dominios oficiales con tarjetas basadas en escenarios. Elige una respuesta para ver la opcion correcta, una explicacion practica y un tip de razonamiento.",
      reasoning:
        "Identifica primero el objetivo del usuario y despues elige la solucion Salesforce mas nativa, accesible y sostenible.",
      habits:
        "Compara cada opcion contra evidencia del usuario, accesibilidad, SLDS y configuracion declarativa antes de decidir.",
      integrity:
        "Estas preguntas son originales y se crearon desde objetivos publicos y documentacion. No son preguntas reales filtradas o memorizadas del examen.",
      blueprintNote:
        "La distribucion sigue los porcentajes publicados para los dominios del examen.",
    },
    "platform-administrator": {
      description:
        "Practica escenarios realistas de administracion, seguridad, datos, automatizacion y Agentforce con feedback inmediato.",
      heroCopy:
        "Practica dominios actuales con escenarios realistas de administrador. Selecciona tus respuestas para ver la opcion correcta, una explicacion y un tip de examen.",
      reasoning:
        "Separa permisos de sharing, identifica el objeto y el proceso de negocio, y elige la capacidad Salesforce mas nativa y mantenible.",
      habits:
        "Lee cada calificativo: best, most efficient, without code, select two y based on record ownership suelen cambiar la respuesta.",
      integrity:
        "Este lab contiene preguntas originales creadas desde objetivos publicos y documentacion de Salesforce. No reproduce contenido restringido del examen.",
      blueprintNote:
        "El banco contiene preguntas distribuidas de forma cercana al peso publicado para cada dominio.",
    },
    "business-analyst": {
      description:
        "Practica discovery, stakeholders, procesos, requerimientos, user stories y UAT con feedback inmediato.",
      heroCopy:
        "Practica dominios actuales con escenarios realistas de analisis de negocio en Salesforce. Selecciona tus respuestas para ver la opcion correcta, una explicacion y un tip de examen.",
      reasoning:
        "Identifica el resultado de negocio, separa evidencia de supuestos y elige la tecnica o artefacto que cree el entendimiento compartido mas claro.",
      habits:
        "Lee cada calificativo: first, best, current state, future state, select two y most effective technique suelen determinar la respuesta.",
      integrity:
        "Este lab contiene preguntas originales creadas desde objetivos publicos, documentacion de Salesforce y practicas establecidas de analisis de negocio.",
      blueprintNote:
        "El banco contiene 100 preguntas, por lo que el conteo refleja el peso publicado para cada dominio.",
    },
    "sales-cloud-consultant": {
      description:
        "Practica escenarios avanzados de Sales Cloud sobre ciclo de vida, estrategia de implementacion, datos y trusted AI.",
      heroCopy:
        "Practica dominios actuales con escenarios avanzados de consultoria sobre discovery, diseno de solucion, forecasting, territory management, ejecucion comercial, datos, adopcion y trusted AI.",
      reasoning:
        "Identifica el resultado de negocio, restricciones, modelo operativo, impacto en datos y mantenibilidad antes de elegir la mejor solucion.",
      habits:
        "Varias opciones pueden ser tecnicamente posibles. Lee best, most scalable, first y most appropriate, y elige la respuesta que resuelve la causa raiz.",
      integrity:
        "Este lab contiene preguntas originales creadas desde objetivos publicos y documentacion de Salesforce. No reproduce contenido filtrado, memorizado o restringido.",
      blueprintNote:
        "El banco contiene 100 preguntas distribuidas segun el peso publicado por Salesforce.",
    },
    "data-360-consultant": {
      description:
        "Practica escenarios de Data 360 sobre arquitectura, ingesta, modelado, identidad, segmentacion, activacion y gobernanza.",
      heroCopy:
        "Practica dominios actuales con escenarios consultivos de Data 360 sobre datos, identidad, segmentacion, activacion, seguridad y gobernanza.",
      reasoning:
        "Identifica la fuente, el modelo de datos, la identidad, el objetivo de activacion y las restricciones de gobernanza antes de seleccionar una opcion.",
      habits:
        "Lee los detalles de latencia, consentimiento, volumen, identidad, unificacion y activacion; suelen ser la diferencia entre respuestas parecidas.",
      integrity:
        "Este lab contiene preguntas originales creadas desde objetivos publicos y documentacion de Salesforce. No reproduce contenido restringido del examen.",
      blueprintNote:
        "El banco contiene preguntas distribuidas alrededor de los dominios publicados del examen.",
    },
  },
};

const ui = {
  en: {
    htmlLang: "en",
    canonicalPath: "/en/",
    skipHome: "Skip to certifications",
    navHome: "Home",
    navStudy: "Study",
    navMockExams: "Mock Exams",
    mainNav: "Main navigation",
    brandAria: "BlueForce home",
    eyebrow: "Salesforce practice labs",
    homeTitle: "Prepare for your certification with guided practice.",
    homeDescription:
      "BlueForce turns question banks into dynamic study sessions: answer questions, get instant feedback, review missed items, and resume your progress from this browser.",
    chooseExam: "Choose an Exam",
    heroSummary: "BlueForce summary",
    certs: "Certifications",
    questions: "Questions",
    answered: "Answered",
    accuracy: "Accuracy",
    availableExams: "Available exams",
    chooseCertification: "Choose a certification",
    certSectionCopy:
      "Each exam saves progress separately and lets you review incorrect, bookmarked, or unanswered questions.",
    metaDescription:
      "BlueForce offers dynamic Salesforce certification practice exams with instant feedback, bilingual navigation, and local progress tracking.",
    title: "BlueForce | Salesforce Certification Practice Questions",
    previewAlt:
      "Preview of a practice dashboard with questions, progress, and feedback",
    homeHref: "/en/",
    certsHref: "/en/#certifications",
    mockExamsHref: "/en/mock-exams/",
    certBase: "certifications",
    mockBase: "mock-exams",
    mockListTitle: "Salesforce Mock Exams",
    mockListDescription:
      "Choose a certification and start a timed mock exam with randomized questions, official-style pacing, and results by domain.",
    mockListEyebrow: "Timed exam simulator",
    mockListHeading: "Choose a timed mock exam",
    mockListCopy:
      "Mock exams do not show feedback until the end. Unanswered questions count as incorrect, and the timer cannot be paused.",
    startMockExam: "Start Mock Exam",
    resumeMockExam: "Resume Active Exam",
    officialTiming: "Official timing",
    passingScoreLabel: "Passing score",
    domainDistribution: "Domain distribution",
    mockExamTitle: (title) => `${title} Mock Exam`,
    mockExamDescription: (title) =>
      `Timed ${title} mock exam with randomized questions, official-style distribution, and final performance feedback.`,
    mockExamEyebrow: "Timed mock exam",
    mockExamIntro:
      "Answer every question before time runs out. You can mark questions for review and finish early when you are ready.",
    mockExamAppLabel: "Timed mock exam",
    examSkip: "Skip to question",
    originalQuestions: "Original questions",
    startPractice: "Start Practice",
    shuffle: "Shuffle Questions",
    integrityLabel: "Integrity note:",
    blueprint: "Official Blueprint",
    interactiveQuestions: "Interactive questions",
    correct: "Correct",
    missed: "Missed",
    bookmarked: "Bookmarked",
    questionFilters: "Question filters",
    reviewMissed: "Review Missed",
    reviewBookmarks: "Bookmarked",
    all: "All",
    howToReason: "How to Reason",
    examHabits: "Exam Habits",
    controls: "Controls",
    goUnanswered: "Go to Unanswered",
    reset: "Reset Progress",
    shortcuts: "Shortcuts",
    shortcutsList: [
      "<kbd>1</kbd>-<kbd>6</kbd> choose options",
      "<kbd>Enter</kbd> submit multi-select",
      "<kbd>N</kbd> next",
      "<kbd>P</kbd> previous",
      "<kbd>B</kbd> bookmark",
    ],
    resources: "Study Resources",
    resourcesCopy:
      "This question bank was imported from the original HTML guide and connects to public resources for additional review.",
    certRoute: (id) => `/en/certifications/${id}`,
    alternateRoute: (id) => `/es/certificaciones/${id}`,
    pathPrefix: "/en/certifications",
  },
  es: {
    htmlLang: "es",
    canonicalPath: "/es/",
    skipHome: "Saltar a certificaciones",
    navHome: "Inicio",
    navStudy: "Estudiar",
    navMockExams: "Examenes de prueba",
    mainNav: "Navegacion principal",
    brandAria: "Inicio de BlueForce",
    eyebrow: "Practica Salesforce",
    homeTitle: "Preparate para tu certificacion con practica guiada.",
    homeDescription:
      "BlueForce convierte bancos de preguntas en sesiones dinamicas: responde, recibe feedback inmediato, repasa errores y retoma tu progreso desde este navegador.",
    chooseExam: "Elegir examen",
    heroSummary: "Resumen de BlueForce",
    certs: "Certificaciones",
    questions: "Preguntas",
    answered: "Respondidas",
    accuracy: "Precision",
    availableExams: "Examenes disponibles",
    chooseCertification: "Elige una certificacion",
    certSectionCopy:
      "Cada examen guarda su progreso por separado y te permite repasar preguntas incorrectas, marcadas o pendientes.",
    metaDescription:
      "BlueForce ofrece examenes de practica para certificaciones Salesforce con feedback inmediato, navegacion bilingue y progreso local.",
    title: "BlueForce | Examenes de practica para certificaciones Salesforce",
    previewAlt:
      "Vista previa de un panel de practica con preguntas, progreso y feedback",
    homeHref: "/es/",
    certsHref: "/es/#certifications",
    mockExamsHref: "/es/examenes-de-prueba/",
    certBase: "certificaciones",
    mockBase: "examenes-de-prueba",
    mockListTitle: "Examenes de prueba Salesforce",
    mockListDescription:
      "Elige una certificacion e inicia un examen cronometrado con preguntas aleatorias, ritmo oficial y resultados por dominio.",
    mockListEyebrow: "Simulador con tiempo",
    mockListHeading: "Elige un examen cronometrado",
    mockListCopy:
      "Los examenes no muestran feedback hasta el final. Las preguntas sin respuesta cuentan como incorrectas y el reloj no se puede pausar.",
    startMockExam: "Iniciar examen",
    resumeMockExam: "Retomar examen activo",
    officialTiming: "Tiempo oficial",
    passingScoreLabel: "Puntaje minimo",
    domainDistribution: "Distribucion por dominio",
    mockExamTitle: (title) => `Examen de prueba ${title}`,
    mockExamDescription: (title) =>
      `Examen cronometrado de ${title} con preguntas aleatorias, distribucion tipo oficial y feedback final de rendimiento.`,
    mockExamEyebrow: "Examen cronometrado",
    mockExamIntro:
      "Responde cada pregunta antes de que termine el tiempo. Puedes marcar preguntas para revisar y terminar antes si estas listo.",
    mockExamAppLabel: "Examen cronometrado",
    examSkip: "Saltar a la pregunta",
    originalQuestions: "Preguntas originales",
    startPractice: "Empezar practica",
    shuffle: "Mezclar preguntas",
    integrityLabel: "Nota de integridad:",
    blueprint: "Guia oficial",
    interactiveQuestions: "Preguntas interactivas",
    correct: "Correctas",
    missed: "Falladas",
    bookmarked: "Marcadas",
    questionFilters: "Filtros de preguntas",
    reviewMissed: "Repasar errores",
    reviewBookmarks: "Marcadas",
    all: "Todas",
    howToReason: "Como razonar",
    examHabits: "Habitos de examen",
    controls: "Controles",
    goUnanswered: "Ir a pendientes",
    reset: "Reiniciar progreso",
    shortcuts: "Atajos",
    shortcutsList: [
      "<kbd>1</kbd>-<kbd>6</kbd> elegir opciones",
      "<kbd>Enter</kbd> enviar seleccion multiple",
      "<kbd>N</kbd> siguiente",
      "<kbd>P</kbd> anterior",
      "<kbd>B</kbd> marcar",
    ],
    resources: "Recursos de estudio",
    resourcesCopy:
      "Este banco de preguntas fue importado desde la guia HTML original y conecta con recursos publicos para repasar mas.",
    certRoute: (id) => `/es/certificaciones/${id}`,
    alternateRoute: (id) => `/en/certifications/${id}`,
    pathPrefix: "/es/certificaciones",
  },
};

function localizedCert(cert, locale) {
  return { ...cert, ...(certCopy[locale]?.[cert.id] || {}) };
}

function alternateLinks(enPath, esPath, canonicalPath) {
  return `<link rel="canonical" href="${siteUrl}${canonicalPath}" />
  <link rel="alternate" hreflang="en" href="${siteUrl}${enPath}" />
  <link rel="alternate" hreflang="es" href="${siteUrl}${esPath}" />
  <link rel="alternate" hreflang="x-default" href="${siteUrl}/" />`;
}

function iconLinks() {
  return `<link rel="icon" type="image/png" sizes="500x500" href="${faviconPath}" />
  <link rel="apple-touch-icon" href="${faviconPath}" />`;
}

function languageSwitch(enPath, esPath, activeLocale) {
  return `<div class="language-switch" aria-label="Language selector">
          <a class="language-option" href="${enPath}" aria-label="View in English"${activeLocale === "en" ? ' aria-current="true"' : ""}>
            <span class="language-flag" aria-hidden="true">🇺🇸</span>
            <span class="language-code">EN</span>
          </a>
          <a class="language-option" href="${esPath}" aria-label="Ver en español"${activeLocale === "es" ? ' aria-current="true"' : ""}>
            <span class="language-flag" aria-hidden="true">🇲🇽</span>
            <span class="language-code">ES</span>
          </a>
        </div>`;
}

function navLink(href, label, isActive) {
  return `<a href="${href}"${isActive ? ' aria-current="page"' : ""}>${label}</a>`;
}

function headerNav(copy, enPath, esPath, locale, options = {}) {
  const homeHref = options.homeHref || copy.homeHref;
  const studyHref = options.studyHref || copy.certsHref;
  const active = options.active || "";

  return `<nav class="topbar-nav" aria-label="${copy.mainNav}">
        ${navLink(homeHref, copy.navHome, active === "home")}
        ${navLink(studyHref, copy.navStudy, active === "study")}
        ${navLink(copy.mockExamsHref, copy.navMockExams, active === "mock")}
        ${languageSwitch(enPath, esPath, locale)}
      </nav>`;
}

function homePage(locale, options = {}) {
  const copy = ui[locale];
  const canonicalPath = options.canonicalPath || copy.canonicalPath;
  const rootBodyAttrs = options.root
    ? ' data-locale="en" data-cert-base="en/certifications"'
    : ` data-locale="${locale}" data-cert-base="${copy.certBase}"`;
  const enPath = "/en/";
  const esPath = "/es/";
  const preloadHref = options.root
    ? "assets/img/blueforce-practice-preview.jpg"
    : "/assets/img/blueforce-practice-preview.jpg";
  const stylesheetHref = options.root
    ? `assets/css/styles.css?v=${assetVersion}`
    : `/assets/css/styles.css?v=${assetVersion}`;
  const dataSrc = options.root
    ? `assets/data/certifications.js?v=${assetVersion}`
    : `/assets/data/certifications.js?v=${assetVersion}`;
  const homeSrc = options.root
    ? `assets/js/home.js?v=${assetVersion}`
    : `/assets/js/home.js?v=${assetVersion}`;
  const imgSrc = preloadHref;
  const homeHref = options.root ? "/" : copy.homeHref;
  const certsHref = options.root ? "#certifications" : copy.certsHref;

  return `<!DOCTYPE html>
<html lang="${copy.htmlLang}">
<head>
  ${googleTag()}
  ${googleAdSenseTag()}
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="${escapeHtml(copy.metaDescription)}" />
  <meta property="og:title" content="${escapeHtml(copy.title)}" />
  <meta property="og:description" content="${escapeHtml(copy.metaDescription)}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${siteUrl}${canonicalPath}" />
  <title>${escapeHtml(copy.title)}</title>
  ${alternateLinks(enPath, esPath, canonicalPath)}
  ${iconLinks()}
  <link rel="preload" as="image" href="${preloadHref}" fetchpriority="high" />
  <link rel="stylesheet" href="${stylesheetHref}" />
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "BlueForce",
      "url": "${siteUrl}${canonicalPath}",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Any",
      "description": "${escapeHtml(copy.metaDescription)}"
    }
  </script>
</head>
<body${rootBodyAttrs}>
  <a class="skip-link" href="#certifications">${copy.skipHome}</a>

  <header class="topbar">
    <div class="shell topbar-inner">
      <a class="brand-lockup" href="${homeHref}" aria-label="${copy.brandAria}">
        <img class="brand-logo" src="${logoPath}" width="180" height="52" alt="" decoding="async" />
      </a>
      ${headerNav(copy, enPath, esPath, locale, {
        homeHref,
        studyHref: certsHref,
        active: "home",
      })}
    </div>
  </header>

  <main>
    <section class="hero" aria-labelledby="home-title">
      <div class="shell hero-grid">
        <div class="hero-copy">
          <div class="eyebrow">${copy.eyebrow}</div>
          <h1 id="home-title">${copy.homeTitle}</h1>
          <p>${copy.homeDescription}</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="${certsHref}">${copy.chooseExam}</a>
          </div>
        </div>

        <aside class="hero-panel" aria-label="${copy.heroSummary}">
          <img class="hero-preview" src="${imgSrc}" width="900" height="200" fetchpriority="high" decoding="async" alt="${copy.previewAlt}" />
          <div class="hero-panel-grid">
            <div class="mini-metric">
              <div class="mini-label">${copy.certs}</div>
              <div class="mini-value" id="certCount">0</div>
            </div>
            <div class="mini-metric">
              <div class="mini-label">${copy.questions}</div>
              <div class="mini-value" id="questionCount">0</div>
            </div>
            <div class="mini-metric">
              <div class="mini-label">${copy.answered}</div>
              <div class="mini-value" id="globalProgress">0 / 0</div>
            </div>
            <div class="mini-metric">
              <div class="mini-label">${copy.accuracy}</div>
              <div class="mini-value" id="globalAccuracy">0%</div>
            </div>
          </div>
        </aside>
      </div>
    </section>

    <section class="certifications" id="certifications" aria-labelledby="certifications-title">
      <div class="shell">
        <div class="section-heading">
          <div>
            <div class="eyebrow">${copy.availableExams}</div>
            <h2 id="certifications-title">${copy.chooseCertification}</h2>
          </div>
          <p>${copy.certSectionCopy}</p>
        </div>
        <div class="cert-grid" id="certificationGrid"></div>
      </div>
    </section>
  </main>

  <script src="${dataSrc}"></script>
  <script src="${homeSrc}"></script>
</body>
</html>`;
}

function examPage(cert, locale, options = {}) {
  const copy = ui[locale];
  const localCert = localizedCert(cert, locale);
  const enPath = `/en/certifications/${cert.id}`;
  const esPath = `/es/certificaciones/${cert.id}`;
  const canonicalPath = options.legacy ? enPath : locale === "en" ? enPath : esPath;
  const title = `${localCert.pageTitle} | BlueForce`;
  const description =
    locale === "es"
      ? `Practica para ${localCert.title} con preguntas de examen, feedback inmediato, tips y progreso guardado localmente.`
      : `Practice for ${localCert.title} with exam-style questions, instant feedback, tips, and local progress tracking.`;
  const homeHref = options.legacy ? "/" : copy.homeHref;
  const certsHref = options.legacy ? "/#certifications" : copy.certsHref;

  return `<!DOCTYPE html>
<html lang="${copy.htmlLang}">
<head>
  ${googleTag()}
  ${googleAdSenseTag()}
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="${escapeHtml(description)}" />
  <meta property="og:title" content="${escapeHtml(title)}" />
  <meta property="og:description" content="${escapeHtml(description)}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${siteUrl}${canonicalPath}" />
  <title>${escapeHtml(title)}</title>
  ${alternateLinks(enPath, esPath, canonicalPath)}
  ${iconLinks()}
  <link rel="stylesheet" href="/assets/css/styles.css?v=${studyAssetVersion}" />
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "BlueForce",
          "item": "${siteUrl}${copy.homeHref}"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "${escapeHtml(localCert.title)}",
          "item": "${siteUrl}${canonicalPath}"
        }
      ]
    }
  </script>
</head>
<body data-locale="${locale}" data-certification="${cert.id}">
  <a class="skip-link" href="#study">${copy.examSkip}</a>

  <header class="topbar">
    <div class="shell topbar-inner">
      <a class="brand-lockup" href="${homeHref}" aria-label="${copy.brandAria}">
        <img class="brand-logo" src="${logoPath}" width="180" height="52" alt="" decoding="async" />
      </a>
      ${headerNav(copy, enPath, esPath, locale, {
        homeHref,
        studyHref: certsHref,
        active: "study",
      })}
    </div>
  </header>

  <main id="examApp">
    <section class="exam-hero" aria-labelledby="pageTitle">
      <div class="shell hero-grid">
        <section class="hero-copy">
          <div class="eyebrow" id="examEyebrow">${copy.originalQuestions}</div>
          <h1 id="pageTitle">${escapeHtml(localCert.pageTitle)}</h1>
          <p id="heroCopy">${escapeHtml(localCert.heroCopy)}</p>
          <div class="hero-actions">
            <button class="btn btn-primary" id="startBtn">${copy.startPractice}</button>
            <button class="btn btn-secondary" id="shuffleBtn">${copy.shuffle}</button>
          </div>
          <div class="notice"><strong>${copy.integrityLabel}</strong> <span id="integrityNote">${escapeHtml(localCert.integrity)}</span></div>
        </section>

        <aside class="blueprint-panel" aria-label="${copy.blueprint}">
          <h2>${copy.blueprint}</h2>
          <p id="blueprintNote">${escapeHtml(localCert.blueprintNote)}</p>
          <div class="weight-list" id="blueprintList"></div>
        </aside>
      </div>
    </section>

    <section class="dashboard" id="study" aria-labelledby="studyHeading">
      <div class="shell">
        <h2 id="studyHeading" style="position:absolute;left:-9999px;">${copy.interactiveQuestions}</h2>

        <div class="stats-grid" aria-label="Study statistics">
          <div class="stat-card"><div class="stat-label">${copy.answered}</div><div class="stat-value" id="answeredStat">0</div></div>
          <div class="stat-card"><div class="stat-label">${copy.correct}</div><div class="stat-value" id="correctStat">0</div></div>
          <div class="stat-card"><div class="stat-label">${copy.accuracy}</div><div class="stat-value" id="accuracyStat">0%</div></div>
          <div class="stat-card"><div class="stat-label">${copy.missed}</div><div class="stat-value" id="wrongStat">0</div></div>
          <div class="stat-card"><div class="stat-label">${copy.bookmarked}</div><div class="stat-value" id="bookmarkStat">0</div></div>
        </div>

        <div class="toolbar" aria-label="${copy.questionFilters}">
          <div class="category-filters" id="categoryFilters"></div>
          <button class="btn btn-secondary" id="reviewWrongBtn">${copy.reviewMissed}</button>
          <button class="btn btn-secondary" id="reviewBookmarksBtn">${copy.reviewBookmarks}</button>
        </div>

        <div class="progress-block" aria-label="Study progress">
          <div class="progress-meta"><span id="progressLabel">0 ${copy.answered.toLowerCase()}</span><span id="modeLabel">${copy.all}</span></div>
          <div class="progress-track"><div class="progress-fill" id="progressFill"></div></div>
        </div>

        <div class="study-layout">
          <article class="question-card" id="questionCard" aria-live="polite"></article>

          <aside class="side-panel">
            <div class="side-card">
              <h3>${copy.howToReason}</h3>
              <p id="reasoningText">${escapeHtml(localCert.reasoning)}</p>
            </div>
            <div class="side-card">
              <h3>${copy.examHabits}</h3>
              <p id="habitsText">${escapeHtml(localCert.habits)}</p>
            </div>
            <div class="side-card">
              <h3>${copy.controls}</h3>
              <button class="btn btn-secondary" id="unansweredBtn">${copy.goUnanswered}</button>
              <button class="btn btn-danger" id="resetBtn">${copy.reset}</button>
            </div>
            <div class="side-card">
              <h3>${copy.shortcuts}</h3>
              <ul class="shortcut-list">
                ${copy.shortcutsList.map((item) => `<li>${item}</li>`).join("\n                ")}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <section class="resources" aria-labelledby="resourcesHeading">
      <div class="shell resources-card">
        <h2 id="resourcesHeading">${copy.resources}</h2>
        <p style="color:var(--muted);max-width:860px;">${copy.resourcesCopy}</p>
        <div class="resource-grid" id="resourceGrid"></div>
      </div>
    </section>
  </main>

  <script src="/assets/data/certifications.js?v=${studyAssetVersion}"></script>
  <script src="/assets/js/app.js?v=${studyAssetVersion}"></script>
</body>
</html>`;
}

function mockListPage(locale) {
  const copy = ui[locale];
  const enPath = "/en/mock-exams/";
  const esPath = "/es/examenes-de-prueba/";

  return `<!DOCTYPE html>
<html lang="${copy.htmlLang}">
<head>
  ${googleTag()}
  ${googleAdSenseTag()}
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="${escapeHtml(copy.mockListDescription)}" />
  <meta property="og:title" content="${escapeHtml(copy.mockListTitle)} | BlueForce" />
  <meta property="og:description" content="${escapeHtml(copy.mockListDescription)}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${siteUrl}${locale === "en" ? enPath : esPath}" />
  <title>${escapeHtml(copy.mockListTitle)} | BlueForce</title>
  ${alternateLinks(enPath, esPath, locale === "en" ? enPath : esPath)}
  ${iconLinks()}
  <link rel="stylesheet" href="/assets/css/styles.css?v=${assetVersion}" />
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "${escapeHtml(copy.mockListTitle)}",
      "url": "${siteUrl}${locale === "en" ? enPath : esPath}",
      "description": "${escapeHtml(copy.mockListDescription)}"
    }
  </script>
</head>
<body data-locale="${locale}" data-mock-base="${copy.mockExamsHref}">
  <a class="skip-link" href="#mockExamList">${copy.mockListHeading}</a>

  <header class="topbar">
    <div class="shell topbar-inner">
      <a class="brand-lockup" href="${copy.homeHref}" aria-label="${copy.brandAria}">
        <img class="brand-logo" src="${logoPath}" width="180" height="52" alt="" decoding="async" />
      </a>
      ${headerNav(copy, enPath, esPath, locale, { active: "mock" })}
    </div>
  </header>

  <main>
    <section class="exam-hero" aria-labelledby="mockListTitle">
      <div class="shell hero-grid">
        <section class="hero-copy">
          <div class="eyebrow">${copy.mockListEyebrow}</div>
          <h1 id="mockListTitle">${copy.mockListHeading}</h1>
          <p>${copy.mockListDescription}</p>
          <div class="notice">${copy.mockListCopy}</div>
        </section>

        <aside class="blueprint-panel" aria-label="${copy.officialTiming}">
          <h2>${copy.officialTiming}</h2>
          <p>${locale === "es" ? "Cada simulador usa una sesion activa local y conserva el reloj aunque recargues la pagina." : "Each simulator uses one local active session and keeps the clock running even if you reload the page."}</p>
          <div class="weight-list">
            <div class="weight-row">
              <span class="weight-label">${locale === "es" ? "Feedback" : "Feedback"}</span>
              <span class="weight-value">${locale === "es" ? "Al final" : "At the end"}</span>
              <div class="weight-track"><div class="weight-fill" style="width:100%"></div></div>
            </div>
            <div class="weight-row">
              <span class="weight-label">${locale === "es" ? "Pausa" : "Pause"}</span>
              <span class="weight-value">${locale === "es" ? "No" : "No"}</span>
              <div class="weight-track"><div class="weight-fill" style="width:0%"></div></div>
            </div>
          </div>
        </aside>
      </div>
    </section>

    <section class="certifications" id="mockExamList" aria-labelledby="mockExamListHeading">
      <div class="shell">
        <div class="section-heading">
          <div>
            <div class="eyebrow">${copy.domainDistribution}</div>
            <h2 id="mockExamListHeading">${copy.mockListHeading}</h2>
          </div>
          <p>${copy.mockListCopy}</p>
        </div>
        <div class="cert-grid" id="mockCertificationGrid"></div>
      </div>
    </section>
  </main>

  <script src="/assets/data/certifications.js?v=${assetVersion}"></script>
  <script src="/assets/js/mock-exam.js?v=${assetVersion}"></script>
</body>
</html>`;
}

function mockExamPage(cert, locale) {
  const copy = ui[locale];
  const localCert = localizedCert(cert, locale);
  const enPath = `/en/mock-exams/${cert.id}`;
  const esPath = `/es/examenes-de-prueba/${cert.id}`;
  const canonicalPath = locale === "en" ? enPath : esPath;
  const title = copy.mockExamTitle(localCert.title);
  const description = copy.mockExamDescription(localCert.title);

  return `<!DOCTYPE html>
<html lang="${copy.htmlLang}">
<head>
  ${googleTag()}
  ${googleAdSenseTag()}
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="${escapeHtml(description)}" />
  <meta property="og:title" content="${escapeHtml(title)} | BlueForce" />
  <meta property="og:description" content="${escapeHtml(description)}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${siteUrl}${canonicalPath}" />
  <title>${escapeHtml(title)} | BlueForce</title>
  ${alternateLinks(enPath, esPath, canonicalPath)}
  ${iconLinks()}
  <link rel="stylesheet" href="/assets/css/styles.css?v=${assetVersion}" />
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": "${escapeHtml(title)}",
      "url": "${siteUrl}${canonicalPath}",
      "learningResourceType": "Practice test",
      "description": "${escapeHtml(description)}"
    }
  </script>
</head>
<body data-locale="${locale}" data-certification="${cert.id}" data-mock-base="${copy.mockExamsHref}">
  <a class="skip-link" href="#mockExamApp">${copy.mockExamAppLabel}</a>

  <header class="topbar">
    <div class="shell topbar-inner">
      <a class="brand-lockup" href="${copy.homeHref}" aria-label="${copy.brandAria}">
        <img class="brand-logo" src="${logoPath}" width="180" height="52" alt="" decoding="async" />
      </a>
      ${headerNav(copy, enPath, esPath, locale, { active: "mock" })}
    </div>
  </header>

  <main id="mockExamApp">
    <section class="exam-hero" aria-labelledby="mockExamTitle">
      <div class="shell hero-grid">
        <section class="hero-copy">
          <div class="eyebrow">${copy.mockExamEyebrow}</div>
          <h1 id="mockExamTitle">${escapeHtml(title)}</h1>
          <p>${copy.mockExamIntro}</p>
          <div class="hero-actions">
            <button class="btn btn-primary" id="startMockBtn">${copy.startMockExam}</button>
          </div>
          <div class="notice" id="activeAttemptNotice" hidden></div>
        </section>

        <aside class="blueprint-panel" aria-label="${copy.domainDistribution}">
          <h2>${copy.officialTiming}</h2>
          <p>${cert.examConfig.officialQuestionCount} ${locale === "es" ? "preguntas" : "questions"} · ${cert.examConfig.officialDurationMinutes} ${locale === "es" ? "minutos" : "minutes"} · ${cert.examConfig.passingScore}% ${locale === "es" ? "minimo" : "passing score"}</p>
          <div class="weight-list" id="mockBlueprintList"></div>
        </aside>
      </div>
    </section>

    <section class="dashboard" id="mockExamSurface" hidden>
      <div class="shell">
        <div class="mock-status-bar" aria-label="${copy.mockExamAppLabel}">
          <div>
            <div class="stat-label">${locale === "es" ? "Tiempo restante" : "Time remaining"}</div>
            <div class="mock-timer" id="mockTimer">--:--</div>
          </div>
          <div>
            <div class="stat-label">${locale === "es" ? "Progreso" : "Progress"}</div>
            <div class="mock-progress-text" id="mockProgressText">0 / 0</div>
          </div>
          <button class="btn btn-danger" id="finishMockBtn">${locale === "es" ? "Finalizar examen" : "Finish Exam"}</button>
        </div>

        <div class="study-layout mock-layout">
          <article class="question-card" id="mockQuestionCard" aria-live="polite"></article>
          <aside class="side-panel">
            <div class="side-card">
              <h3>${locale === "es" ? "Navegacion" : "Navigation"}</h3>
              <div class="question-palette" id="mockQuestionPalette"></div>
            </div>
            <div class="side-card">
              <h3>${locale === "es" ? "Reglas" : "Rules"}</h3>
              <p>${copy.mockListCopy}</p>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <section class="dashboard" id="mockResultsSurface" hidden>
      <div class="shell">
        <div id="mockResults"></div>
      </div>
    </section>
  </main>

  <script src="/assets/data/certifications.js?v=${assetVersion}"></script>
  <script src="/assets/js/mock-exam.js?v=${assetVersion}"></script>
</body>
</html>`;
}

function sitemap(certifications) {
  const pairs = [
    { en: "/en/", es: "/es/" },
    { en: "/en/mock-exams/", es: "/es/examenes-de-prueba/" },
    ...certifications.map((cert) => ({
      en: `/en/certifications/${cert.id}`,
      es: `/es/certificaciones/${cert.id}`,
    })),
    ...certifications.map((cert) => ({
      en: `/en/mock-exams/${cert.id}`,
      es: `/es/examenes-de-prueba/${cert.id}`,
    })),
  ];
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pairs
  .flatMap((pair) => [
    `<url>
  <loc>${siteUrl}${pair.en}</loc>
  <xhtml:link rel="alternate" hreflang="en" href="${siteUrl}${pair.en}" />
  <xhtml:link rel="alternate" hreflang="es" href="${siteUrl}${pair.es}" />
  <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}/" />
  <changefreq>weekly</changefreq>
  <priority>${pair.en === "/en/" ? "1.0" : "0.8"}</priority>
</url>`,
    `<url>
  <loc>${siteUrl}${pair.es}</loc>
  <xhtml:link rel="alternate" hreflang="en" href="${siteUrl}${pair.en}" />
  <xhtml:link rel="alternate" hreflang="es" href="${siteUrl}${pair.es}" />
  <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}/" />
  <changefreq>weekly</changefreq>
  <priority>${pair.es === "/es/" ? "1.0" : "0.8"}</priority>
</url>`,
  ])
  .join("\n")}
</urlset>`;
}

function robots() {
  return `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml`;
}

const certifications = readCertifications();

writeFile(path.join(rootDir, "index.html"), homePage("en", { root: true, canonicalPath: "/en/" }));
writeFile(path.join(rootDir, "en/index.html"), homePage("en"));
writeFile(path.join(rootDir, "es/index.html"), homePage("es"));
writeFile(path.join(rootDir, "en/mock-exams/index.html"), mockListPage("en"));
writeFile(path.join(rootDir, "es/examenes-de-prueba/index.html"), mockListPage("es"));

for (const cert of certifications) {
  writeFile(path.join(rootDir, `certifications/${cert.id}.html`), examPage(cert, "en", { legacy: true }));
  writeFile(path.join(rootDir, `en/certifications/${cert.id}.html`), examPage(cert, "en"));
  writeFile(path.join(rootDir, `es/certificaciones/${cert.id}.html`), examPage(cert, "es"));
  writeFile(path.join(rootDir, `en/mock-exams/${cert.id}.html`), mockExamPage(cert, "en"));
  writeFile(path.join(rootDir, `es/examenes-de-prueba/${cert.id}.html`), mockExamPage(cert, "es"));
}

writeFile(path.join(rootDir, "sitemap.xml"), sitemap(certifications));
writeFile(path.join(rootDir, "robots.txt"), robots());

console.log(`Generated localized pages for ${certifications.length} certifications.`);
