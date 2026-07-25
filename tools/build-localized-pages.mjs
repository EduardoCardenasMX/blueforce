import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const rootDir = path.resolve(import.meta.dirname, "..");
const catalogPath = path.join(rootDir, "assets/data/certifications.js");
const assetVersion = "20260725-seo";
const siteUrl = "https://blueforce.cloud";

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
    navCertifications: "Certifications",
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
    certBase: "certifications",
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
    navCertifications: "Certificaciones",
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
    certBase: "certificaciones",
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

function languageSwitch(enPath, esPath, activeLocale) {
  return `<div class="language-switch" aria-label="Language">
          <a href="${enPath}"${activeLocale === "en" ? ' aria-current="true"' : ""}>EN</a>
          <a href="${esPath}"${activeLocale === "es" ? ' aria-current="true"' : ""}>ES</a>
        </div>`;
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
  const stylesheetHref = options.root ? "assets/css/styles.css" : "/assets/css/styles.css";
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
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="${escapeHtml(copy.metaDescription)}" />
  <meta property="og:title" content="${escapeHtml(copy.title)}" />
  <meta property="og:description" content="${escapeHtml(copy.metaDescription)}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${siteUrl}${canonicalPath}" />
  <title>${escapeHtml(copy.title)}</title>
  ${alternateLinks(enPath, esPath, canonicalPath)}
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
        <span class="brand-mark">BF</span>
        <span>BlueForce</span>
      </a>
      <nav class="topbar-nav" aria-label="${copy.mainNav}">
        <a href="${certsHref}">${copy.navCertifications}</a>
        ${languageSwitch(enPath, esPath, locale)}
      </nav>
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
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="${escapeHtml(description)}" />
  <meta property="og:title" content="${escapeHtml(title)}" />
  <meta property="og:description" content="${escapeHtml(description)}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${siteUrl}${canonicalPath}" />
  <title>${escapeHtml(title)}</title>
  ${alternateLinks(enPath, esPath, canonicalPath)}
  <link rel="stylesheet" href="/assets/css/styles.css" />
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
        <span class="brand-mark">BF</span>
        <span>BlueForce</span>
      </a>
      <nav class="topbar-nav" aria-label="${copy.mainNav}">
        <a href="${homeHref}">${copy.navHome}</a>
        <a href="${certsHref}">${copy.navCertifications}</a>
        ${languageSwitch(enPath, esPath, locale)}
      </nav>
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

  <script src="/assets/data/certifications.js?v=${assetVersion}"></script>
  <script src="/assets/js/app.js?v=${assetVersion}"></script>
</body>
</html>`;
}

function sitemap(certifications) {
  const pairs = [
    { en: "/en/", es: "/es/" },
    ...certifications.map((cert) => ({
      en: `/en/certifications/${cert.id}`,
      es: `/es/certificaciones/${cert.id}`,
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

for (const cert of certifications) {
  writeFile(path.join(rootDir, `certifications/${cert.id}.html`), examPage(cert, "en", { legacy: true }));
  writeFile(path.join(rootDir, `en/certifications/${cert.id}.html`), examPage(cert, "en"));
  writeFile(path.join(rootDir, `es/certificaciones/${cert.id}.html`), examPage(cert, "es"));
}

writeFile(path.join(rootDir, "sitemap.xml"), sitemap(certifications));
writeFile(path.join(rootDir, "robots.txt"), robots());

console.log(`Generated localized pages for ${certifications.length} certifications.`);
