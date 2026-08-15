(function () {
  const letters = ["A", "B", "C", "D", "E", "F"];
  const specialModes = [null, "wrong", "bookmarks", "unanswered"];
  const progressVersion = "v3";
  const assetVersion = "20260815-study";
  const certifications = window.BLUEFORCE_CERTIFICATIONS || [];
  const locale = document.body.dataset.locale || document.documentElement.lang || "en";
  const text = {
    en: {
      all: "All",
      allQuestions: "All Questions",
      missedReview: "Missed Review",
      bookmarked: "Bookmarked",
      unanswered: "Unanswered",
      certificationNotFound: "Certification Not Found",
      certificationNotFoundCopy: "Return to BlueForce to choose an available exam.",
      questionsCouldNotLoad: "Questions Could Not Load",
      questionsCouldNotLoadCopy:
        "Refresh the page or return to BlueForce to choose an available exam.",
      backHome: "Back to Home",
      answeredProgress: (answered, total) => `${answered} of ${total} answered`,
      noQuestionsTitle: "No Questions in This View",
      noMissed: "You do not have any missed questions to review.",
      noBookmarks: "Bookmark questions to build your review list.",
      noUnanswered: "You have answered every question in this view.",
      viewAll: "View All",
      answeredQuestion: (id) => `Answered Question - Bank ${id}`,
      questionPosition: (current, total, id) => `Question ${current} of ${total} - Bank ${id}`,
      correct: "Correct",
      incorrect: "Incorrect",
      correctAnswer: (multiple) => `Correct Answer${multiple ? "s" : ""}`,
      whyCorrect: "Why This Is Correct",
      examTip: "Exam tip:",
      studyDeeper: "Study This Topic",
      coreIdea: "Core idea",
      connectConcepts: "Connect the Concepts",
      reviewChecklist: "Review checklist",
      studyResources: "Resources for this topic",
      openResource: "Open resource",
      selectedCount: (selected, total) => `${selected} of ${total} selected`,
      submitAnswer: "Submit Answer",
      select: (total) => `Select ${total}`,
      bookmarkQuestion: "Bookmark question",
      previous: "Previous",
      next: "Next",
      resetConfirm: "Reset answers, bookmarks, and question order?",
      originalQuestions: (total) => `${total} original questions`,
      homeHref: "/en/",
    },
    es: {
      all: "Todas",
      allQuestions: "Todas las preguntas",
      missedReview: "Repaso de errores",
      bookmarked: "Marcadas",
      unanswered: "Pendientes",
      certificationNotFound: "Certificacion no encontrada",
      certificationNotFoundCopy: "Vuelve a BlueForce para elegir un examen disponible.",
      questionsCouldNotLoad: "No se pudieron cargar las preguntas",
      questionsCouldNotLoadCopy:
        "Actualiza la pagina o vuelve a BlueForce para elegir un examen disponible.",
      backHome: "Volver al inicio",
      answeredProgress: (answered, total) => `${answered} de ${total} respondidas`,
      noQuestionsTitle: "No hay preguntas en esta vista",
      noMissed: "No tienes preguntas falladas para repasar.",
      noBookmarks: "Marca preguntas para construir tu lista de repaso.",
      noUnanswered: "Ya respondiste todas las preguntas en esta vista.",
      viewAll: "Ver todas",
      answeredQuestion: (id) => `Pregunta respondida - Banco ${id}`,
      questionPosition: (current, total, id) => `Pregunta ${current} de ${total} - Banco ${id}`,
      correct: "Correcto",
      incorrect: "Incorrecto",
      correctAnswer: (multiple) => `Respuesta${multiple ? "s" : ""} correcta${multiple ? "s" : ""}`,
      whyCorrect: "Por que es correcta",
      examTip: "Tip de examen:",
      studyDeeper: "Profundiza este tema",
      coreIdea: "Idea clave",
      connectConcepts: "Conecta los conceptos",
      reviewChecklist: "Checklist de repaso",
      studyResources: "Recursos para este tema",
      openResource: "Abrir recurso",
      selectedCount: (selected, total) => `${selected} de ${total} seleccionadas`,
      submitAnswer: "Enviar respuesta",
      select: (total) => `Selecciona ${total}`,
      bookmarkQuestion: "Marcar pregunta",
      previous: "Anterior",
      next: "Siguiente",
      resetConfirm: "Reiniciar respuestas, marcadores y orden de preguntas?",
      originalQuestions: (total) => `${total} preguntas originales`,
      homeHref: "/es/",
    },
  }[locale] || {};
  const certCopy = {
    es: {
      "ux-designer": {
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

  const categoryStudyGuides = {
    en: {
      "Configuration and Setup": {
        summary:
          "This domain is about separating user identity, system permissions, record access, org settings, and administrative delegation. Most mistakes happen when those layers are mixed together.",
        checklist: [
          "Name the layer first: license, profile, permission set, role, sharing, or org setting.",
          "Ask whether the requirement changes what a user can do or which records the user can see.",
          "Prefer least privilege: add narrow access without broadening every user with the same profile.",
        ],
      },
      "Object Manager and Lightning App Builder": {
        summary:
          "This domain connects the data model with the record experience. Strong answers respect relationships, record types, page layouts, Lightning pages, and security boundaries.",
        checklist: [
          "Identify the object, relationship type, lifecycle, owner, and reporting need.",
          "Separate page layout responsibilities from Lightning page/component responsibilities.",
          "Treat visibility rules as presentation logic, not a replacement for security.",
        ],
      },
      "Sales and Marketing Applications": {
        summary:
          "Sales and marketing questions usually test the native lifecycle from lead capture through opportunity execution, products, campaigns, forecasting, and handoff.",
        checklist: [
          "Map the process stage: capture, qualify, sell, forecast, fulfill, or measure.",
          "Use native features before custom automation when the requirement matches a standard sales process.",
          "Distinguish person participation from record ownership and routing.",
        ],
      },
      "Service and Support Applications": {
        summary:
          "Service questions are about intake, routing, collaboration, SLAs, knowledge, and customer visibility. The best answer usually fits where the case is in its lifecycle.",
        checklist: [
          "Separate case creation, assignment, escalation, response, entitlement, and knowledge.",
          "Use queues for shared ownership and teams for named collaboration on one record.",
          "Connect timed commitments to entitlement or escalation behavior based on the scenario.",
        ],
      },
      "Productivity and Collaboration": {
        summary:
          "This domain tests day-to-day user efficiency: activities, Chatter, list views, quick actions, favorites, and ways to keep context while working.",
        checklist: [
          "Ask whether the user needs a personal shortcut, a team collaboration space, or a record action.",
          "Distinguish a task from a scheduled event.",
          "Choose features that reduce navigation and keep work in context.",
        ],
      },
      "Data and Analytics Management": {
        summary:
          "Analytics questions reward knowing the grain of the data, the report format, and whether the calculation happens per row, per group, or across related records.",
        checklist: [
          "Define the record grain before choosing a report feature.",
          "Use cross filters for with/without related-record questions.",
          "Match row-level, bucket, summary, and dashboard features to the calculation need.",
        ],
      },
      Automation: {
        summary:
          "Automation questions test timing, transaction boundaries, reuse, user interaction, and maintainability. The right flow type depends on when and how the work starts.",
        checklist: [
          "Decide whether the process runs before save, after save, on a schedule, or from a screen.",
          "Use subflows for reusable background logic.",
          "Separate immediate record updates from delayed or asynchronous work.",
        ],
      },
      Agentforce: {
        summary:
          "Agentforce questions separate trusted knowledge from controlled action. Good designs give the agent clear scope, grounding, instructions, permissions, and escalation paths.",
        checklist: [
          "Ask whether the agent needs to know something, do something, or escalate.",
          "Use data libraries for grounding and actions for controlled execution.",
          "Treat instructions, guardrails, and permissions as part of the solution design.",
        ],
      },
      Discovery: {
        summary:
          "Discovery is about reducing uncertainty before solution design. Strong answers gather evidence from real users, stakeholders, systems, and business goals.",
        checklist: [
          "Clarify the problem before proposing the interface.",
          "Prefer direct observation and structured interviews when behavior is unclear.",
          "Separate stakeholder opinion from user evidence.",
        ],
      },
      "UX Fundamentals": {
        summary:
          "UX fundamentals focus on cognitive load, accessibility, hierarchy, responsive behavior, errors, and how quickly users can complete real tasks.",
        checklist: [
          "Make meaning visible through text, structure, and affordances, not color alone.",
          "Prioritize task flow and context over decorative polish.",
          "Test with the device, input method, and constraints users actually have.",
        ],
      },
      "Human-Centered Design": {
        summary:
          "Human-centered design balances desirability, feasibility, viability, inclusion, and long-term relationship value.",
        checklist: [
          "Anchor artifacts in research-backed behavior, not demographics alone.",
          "Use journey maps for user experience over time and service blueprints for operational dependencies.",
          "Include diverse users early instead of treating accessibility as a final review.",
        ],
      },
      "Declarative Design": {
        summary:
          "Declarative design means choosing standard, maintainable Salesforce capabilities that support the task without unnecessary code or custom objects.",
        checklist: [
          "Prefer standard objects and native features when they fit the verified requirement.",
          "Match relationships, pages, actions, and guidance to the user's work.",
          "Avoid using presentation configuration as a substitute for data model or security design.",
        ],
      },
      Testing: {
        summary:
          "Testing questions ask what kind of evidence proves the design works: usability, accessibility, UAT, analytics, or production monitoring.",
        checklist: [
          "Match the test method to the risk or assumption being validated.",
          "Use representative users and realistic tasks when usability is the question.",
          "Capture actionable findings that can change the design.",
        ],
      },
      "Salesforce Lightning Design System (SLDS)": {
        summary:
          "SLDS questions test whether the interface feels native, accessible, consistent, and reusable in the Salesforce ecosystem.",
        checklist: [
          "Use standard patterns and components before inventing a custom interaction.",
          "Keep accessibility, responsive behavior, and visual consistency together.",
          "Distinguish brand expression from platform interaction rules.",
        ],
      },
      "Customer Discovery": {
        summary:
          "Customer discovery turns business goals, constraints, and user evidence into a shared understanding of what must change.",
        checklist: [
          "Identify stakeholders, outcomes, constraints, risks, and decision makers.",
          "Use current-state evidence before defining future-state scope.",
          "Document assumptions and validate them with the right audience.",
        ],
      },
      "Collaboration with Stakeholders": {
        summary:
          "Stakeholder collaboration aligns people around priorities, decisions, tradeoffs, and ownership so the project does not drift.",
        checklist: [
          "Choose facilitation techniques based on conflict, ambiguity, and decision urgency.",
          "Make ownership and decision rights explicit.",
          "Use artifacts that create shared understanding, not just status updates.",
        ],
      },
      "Business Process Mapping": {
        summary:
          "Process mapping makes work visible so teams can identify gaps, handoffs, pain points, and improvement opportunities.",
        checklist: [
          "Separate current state from future state.",
          "Capture actors, systems, decisions, exceptions, and handoffs.",
          "Use the map to validate scope and business value.",
        ],
      },
      "Requirements": {
        summary:
          "Requirements questions test clarity, traceability, prioritization, and whether a need has enough evidence to guide build and acceptance.",
        checklist: [
          "Separate business need, functional behavior, and acceptance criteria.",
          "Prioritize by value, risk, dependency, and stakeholder alignment.",
          "Keep requirements testable and traceable to outcomes.",
        ],
      },
      "User Stories": {
        summary:
          "User stories connect a role, need, and outcome, then make the expected behavior testable with acceptance criteria.",
        checklist: [
          "State who needs the capability, what they need, and why it matters.",
          "Use acceptance criteria to remove ambiguity.",
          "Split stories when workflow, data, or validation rules become too broad.",
        ],
      },
      "User Acceptance": {
        summary:
          "UAT confirms that the delivered solution supports the business process with real users, realistic data, and agreed acceptance criteria.",
        checklist: [
          "Test against signed-off requirements and business scenarios.",
          "Prepare users, scripts, data, issue triage, and sign-off criteria.",
          "Separate UAT defects from new scope requests.",
        ],
      },
      "Sales Lifecycle": {
        summary:
          "Sales lifecycle questions test how discovery, qualification, opportunity management, forecasting, and adoption connect into a measurable sales process.",
        checklist: [
          "Locate the problem in the lifecycle before selecting the feature.",
          "Tie configuration choices to sales behavior and measurable outcomes.",
          "Prefer scalable process design over one-off record fixes.",
        ],
      },
      "Implementation Strategies": {
        summary:
          "Implementation strategy is about sequencing, risk, governance, adoption, and how a solution moves safely from design to production.",
        checklist: [
          "Identify dependencies, data readiness, release approach, and training needs.",
          "Use pilots or phased rollout when risk, complexity, or behavior change is high.",
          "Connect adoption metrics to the business outcome.",
        ],
      },
      "Sales Cloud Solution Design": {
        summary:
          "Solution design questions ask for the simplest durable architecture that fits the sales process, data model, security model, and reporting needs.",
        checklist: [
          "Separate process configuration from security, automation, and analytics.",
          "Use native Sales Cloud capabilities when they match the requirement.",
          "Design for scale, maintenance, and clean reporting.",
        ],
      },
      "Sales Cloud Analytics": {
        summary:
          "Sales analytics questions test forecasting, pipeline visibility, metric definitions, dashboard design, and trusted data quality.",
        checklist: [
          "Define metric meaning, owner, grain, and refresh cadence.",
          "Separate forecast categories from opportunity stages.",
          "Design dashboards around decisions, not just available charts.",
        ],
      },
      "Sales Productivity and Best Practices": {
        summary:
          "Productivity questions reward features that reduce friction for sellers while preserving process discipline and data quality.",
        checklist: [
          "Choose tools that keep selling activity in context.",
          "Use guidance, automation, and collaboration where they reduce repeated manual work.",
          "Balance convenience with governance and reporting needs.",
        ],
      },
      "AI for Sales": {
        summary:
          "AI for sales questions test trusted AI use: data quality, grounding, human oversight, permission-aware output, and measurable productivity gains.",
        checklist: [
          "Confirm the use case has enough trusted data and clear user value.",
          "Keep sensitive decisions governed, explainable, and reviewable.",
          "Use AI to support seller decisions, not bypass the sales process.",
        ],
      },
      "Solution Overview": {
        summary:
          "Data 360 solution questions test positioning, architecture fit, data scope, identity, governance, and business value.",
        checklist: [
          "Clarify the business outcome before choosing ingestion, modeling, or activation.",
          "Map source data, identity, consent, and destination needs.",
          "Design for governance and measurable value from the start.",
        ],
      },
      "Setup and Administration": {
        summary:
          "Setup questions focus on tenant readiness, permissions, data spaces, connectors, dependencies, and operating controls.",
        checklist: [
          "Check prerequisites before troubleshooting downstream behavior.",
          "Separate admin access, data access, and activation permissions.",
          "Plan monitoring, ownership, and lifecycle management.",
        ],
      },
      "Data Ingestion and Modeling": {
        summary:
          "Ingestion and modeling questions test how source data becomes usable, related, governed, and queryable in Data 360.",
        checklist: [
          "Know whether the data is batch, streaming, calculated, copied, or accessed in place.",
          "Map source fields to the right DLOs, DMOs, keys, and relationships.",
          "Fix semantics upstream instead of patching every downstream use case.",
        ],
      },
      "Identity Resolution": {
        summary:
          "Identity questions are about matching, reconciliation, survivorship, confidence, consent, and the difference between source profiles and unified profiles.",
        checklist: [
          "Separate identity rules from segmentation and activation rules.",
          "Review match keys, normalization, rulesets, and survivorship.",
          "Treat false matches and missed matches as business risks, not just data quality issues.",
        ],
      },
      "Segmentation and Insights": {
        summary:
          "Segmentation questions test audience logic, entity grain, relationships, calculated insights, freshness, and governed definitions.",
        checklist: [
          "Define the audience entity and count distinct people, not joined rows.",
          "Check relationship paths, data spaces, and refresh dependencies.",
          "Include consent and suppression logic where communication is involved.",
        ],
      },
      "Data Enhancements, Sharing, and Analysis": {
        summary:
          "This domain covers governed data products, sharing patterns, analysis quality, model evaluation, and responsible use of enriched data.",
        checklist: [
          "Share the smallest governed data product that satisfies the use case.",
          "Evaluate metrics by business cost, fairness, and segment performance.",
          "Protect sensitive attributes with legal, ethical, and consent review.",
        ],
      },
      "Data Activations and Utilization": {
        summary:
          "Activation questions test how qualified audiences and governed data move into destinations, flows, real-time actions, and business processes.",
        checklist: [
          "Design backward from the destination identity and mapping contract.",
          "Trace counts through segment, eligibility, activation, destination, and match.",
          "Coordinate freshness, consent, monitoring, and retirement.",
        ],
      },
    },
  };

  categoryStudyGuides.es = Object.fromEntries(
    Object.keys(categoryStudyGuides.en).map((category) => [
      category,
      {
        summary: `Esta pregunta pertenece a ${category}. Usala para estudiar el concepto, la decision de diseno y las diferencias con opciones parecidas, no solo para recordar una respuesta.`,
        checklist: [
          "Identifica que parte del escenario cambia la respuesta correcta.",
          "Compara la opcion correcta contra las opciones descartadas y nombra por que no aplican.",
          "Busca el recurso oficial relacionado y revisa el concepto completo antes de avanzar.",
        ],
      },
    ]),
  );

  const topicStudyRules = [
    {
      terms: ["license", "licence", "licensing"],
      focus: {
        en: "User licenses and access layers",
        es: "Licencias de usuario y capas de acceso",
      },
      summary: {
        en:
          "A user license determines the baseline product capabilities available to a user. Profiles and permission sets refine permissions inside that licensed boundary, while roles and sharing decide record visibility.",
        es:
          "Una licencia define las capacidades base disponibles para un usuario. Los perfiles y permission sets ajustan permisos dentro de ese limite, mientras que roles y sharing determinan visibilidad de registros.",
      },
      checklist: {
        en: [
          "Start with the license when the question asks what product capabilities a user can have.",
          "Use profiles or permission sets when the same license can support the needed permission difference.",
          "Use roles, sharing rules, teams, or queues only when the issue is record visibility or ownership.",
        ],
        es: [
          "Empieza por la licencia cuando la pregunta trata de capacidades de producto disponibles para el usuario.",
          "Usa perfiles o permission sets cuando la misma licencia permite resolver la diferencia de permisos.",
          "Usa roles, sharing rules, teams o queues solo si el problema es visibilidad u ownership de registros.",
        ],
      },
      resources: [
        {
          title: "Salesforce Help: User Licenses",
          url: "https://help.salesforce.com/s/articleView?id=sf.users_understanding_license_types.htm&type=5",
          description: "Official overview of Salesforce user license types and what they control.",
        },
      ],
    },
    {
      terms: ["permission set", "profile", "permissions", "permission set group"],
      focus: {
        en: "Profiles, permission sets, and least privilege",
        es: "Perfiles, permission sets y minimo privilegio",
      },
      summary: {
        en:
          "Profiles provide baseline access. Permission sets and permission set groups add targeted permissions without cloning profiles or broadening access for every similar user.",
        es:
          "Los perfiles dan el acceso base. Los permission sets y permission set groups agregan permisos puntuales sin clonar perfiles ni ampliar acceso para todos los usuarios similares.",
      },
      checklist: {
        en: [
          "Use permission sets for exceptions or additive access.",
          "Do not use roles or sharing tools to grant system permissions.",
          "Check object, field, app, tab, and system permissions separately.",
        ],
        es: [
          "Usa permission sets para excepciones o acceso adicional.",
          "No uses roles o herramientas de sharing para conceder permisos de sistema.",
          "Revisa permisos de objeto, campo, app, tab y sistema por separado.",
        ],
      },
      resources: [
        {
          title: "Salesforce Help: Permission Sets",
          url: "https://help.salesforce.com/s/articleView?id=sf.perm_sets_overview.htm&type=5",
          description: "Official guide to permission sets and permission set groups.",
        },
      ],
    },
    {
      terms: ["organization-wide defaults", "owd", "role hierarchy", "sharing rule", "record visibility"],
      focus: {
        en: "Record access and sharing model",
        es: "Acceso a registros y modelo de sharing",
      },
      summary: {
        en:
          "Record access starts with organization-wide defaults and opens through role hierarchy, sharing rules, teams, territories, queues, or manual sharing depending on the record and process.",
        es:
          "El acceso a registros empieza con organization-wide defaults y se abre mediante role hierarchy, sharing rules, teams, territories, queues o manual sharing segun el registro y el proceso.",
      },
      checklist: {
        en: [
          "Ask whether access is based on ownership, criteria, hierarchy, collaboration, or work pooling.",
          "Keep field-level security separate from record visibility.",
          "Use the narrowest sharing mechanism that can maintain the rule automatically.",
        ],
        es: [
          "Pregunta si el acceso depende de ownership, criterios, jerarquia, colaboracion o pool de trabajo.",
          "Separa field-level security de visibilidad de registros.",
          "Usa el mecanismo de sharing mas especifico que pueda mantener la regla automaticamente.",
        ],
      },
    },
    {
      terms: ["record type", "business process", "sales process", "support process", "page layout"],
      focus: {
        en: "Record types, processes, and page experience",
        es: "Record types, procesos y experiencia de pagina",
      },
      summary: {
        en:
          "Record types package different business processes, picklist values, and page layout assignments. They are useful when the same object supports distinct workflows or audiences.",
        es:
          "Los record types agrupan procesos de negocio, valores de picklist y asignaciones de page layout. Son utiles cuando el mismo objeto soporta flujos o audiencias distintas.",
      },
      checklist: {
        en: [
          "Use sales or support processes for key standard picklists such as Stage or Case Status.",
          "Use page layouts for fields, related lists, and many actions.",
          "Use Lightning App Builder for component arrangement and component visibility.",
        ],
        es: [
          "Usa sales o support processes para picklists estandar clave como Stage o Case Status.",
          "Usa page layouts para campos, related lists y muchas acciones.",
          "Usa Lightning App Builder para componentes, regiones y visibilidad de componentes.",
        ],
      },
    },
    {
      terms: ["flow", "subflow", "scheduled path", "asynchronously", "record-triggered"],
      focus: {
        en: "Flow timing and maintainability",
        es: "Timing de Flow y mantenibilidad",
      },
      summary: {
        en:
          "Flow design depends on trigger timing, transaction needs, user interaction, reuse, and error handling. The right flow type should fit the business event.",
        es:
          "El diseno de Flow depende del momento de ejecucion, la transaccion, interaccion del usuario, reutilizacion y manejo de errores. El tipo de flow debe corresponder al evento de negocio.",
      },
      checklist: {
        en: [
          "Use before-save flows for fast same-record updates.",
          "Use after-save paths for related records, actions, and work after commit.",
          "Use subflows when several automations need the same logic.",
        ],
        es: [
          "Usa before-save flows para actualizaciones rapidas en el mismo registro.",
          "Usa after-save paths para registros relacionados, acciones y trabajo posterior al commit.",
          "Usa subflows cuando varias automatizaciones comparten la misma logica.",
        ],
      },
    },
    {
      terms: ["report", "dashboard", "matrix", "bucket", "cross filter", "summary formula"],
      focus: {
        en: "Reports, dashboards, and calculation grain",
        es: "Reportes, dashboards y nivel de calculo",
      },
      summary: {
        en:
          "Reporting decisions depend on whether the question asks for row logic, grouping logic, relationship existence, dashboard filtering, or scheduled delivery.",
        es:
          "Las decisiones de reporting dependen de si la pregunta pide logica por fila, por agrupacion, existencia de relacion, filtro de dashboard o entrega programada.",
      },
      checklist: {
        en: [
          "Use row-level formulas for per-record calculations.",
          "Use summary formulas for aggregate calculations at grouping levels.",
          "Use dashboard filters for viewer-controlled dashboard slices.",
        ],
        es: [
          "Usa row-level formulas para calculos por registro.",
          "Usa summary formulas para calculos agregados por grupo.",
          "Usa dashboard filters para vistas controladas por quien consume el dashboard.",
        ],
      },
    },
    {
      terms: ["identity", "unified profile", "ruleset", "match", "survivorship"],
      focus: {
        en: "Identity resolution and unified profiles",
        es: "Identity resolution y perfiles unificados",
      },
      summary: {
        en:
          "Identity resolution decides which source profiles belong together and which attributes survive into the unified profile. The rules must balance match confidence, consent, and business risk.",
        es:
          "Identity resolution decide que perfiles fuente pertenecen juntos y que atributos sobreviven en el perfil unificado. Las reglas deben balancear confianza, consentimiento y riesgo de negocio.",
      },
      checklist: {
        en: [
          "Inspect match keys and normalization before blaming activation or segmentation.",
          "Separate unified identity from channel contact-point selection.",
          "Evaluate false positives and false negatives as business risks.",
        ],
        es: [
          "Revisa match keys y normalizacion antes de culpar activacion o segmentacion.",
          "Separa identidad unificada de seleccion de contact point por canal.",
          "Evalua falsos positivos y falsos negativos como riesgos de negocio.",
        ],
      },
    },
    {
      terms: ["segment", "segmentation", "activation", "consent", "suppression", "destination"],
      focus: {
        en: "Segments, consent, and activation",
        es: "Segmentos, consentimiento y activacion",
      },
      summary: {
        en:
          "A segment defines who qualifies; activation defines what is sent, where, when, and with which identifiers. Consent, freshness, mappings, and suppression can reduce the delivered audience.",
        es:
          "Un segmento define quien califica; la activacion define que se envia, a donde, cuando y con que identificadores. Consentimiento, frescura, mappings y supresiones pueden reducir la audiencia entregada.",
      },
      checklist: {
        en: [
          "Design backward from the destination identifier requirements.",
          "Track counts from membership through eligibility and delivery.",
          "Make consent and suppression at least as fresh as the activation cadence.",
        ],
        es: [
          "Disena desde los identificadores requeridos por el destino.",
          "Rastrea conteos desde membership hasta elegibilidad y entrega.",
          "Asegura que consentimiento y supresiones sean tan frescos como la cadencia de activacion.",
        ],
      },
    },
  ];

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function localizedValue(value) {
    if (!value || typeof value !== "object" || Array.isArray(value)) return value;
    return value[locale] || value.en || Object.values(value)[0];
  }

  function localizedList(value) {
    const next = localizedValue(value);
    return Array.isArray(next) ? next.filter(Boolean) : [];
  }

  function questionTextBlob(question) {
    return [
      question.category,
      question.question,
      question.explanation,
      question.tip,
      ...(question.options || []),
    ]
      .join(" ")
      .toLowerCase();
  }

  function topicStudyGuideFor(question) {
    const blob = questionTextBlob(question);
    return topicStudyRules.find((rule) =>
      rule.terms.some((term) => blob.includes(term.toLowerCase())),
    );
  }

  function studyExtrasFor(question) {
    const extras = question.deepDive || question.studyGuide || question.study || {};
    return extras && typeof extras === "object" ? extras : {};
  }

  function scoreResource(resource, question) {
    const blob = questionTextBlob(question);
    const words = `${resource.title || ""} ${resource.description || ""}`
      .toLowerCase()
      .split(/[^a-z0-9]+/)
      .filter((word) => word.length > 4);
    return words.reduce((score, word) => score + (blob.includes(word) ? 1 : 0), 0);
  }

  function mergeResources(...groups) {
    const seen = new Set();
    return groups
      .flat()
      .filter(Boolean)
      .filter((resource) => resource.title && resource.url)
      .filter((resource) => {
        const key = resource.url;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      })
      .slice(0, 4);
  }

  function resourcesForQuestion(question, certification, topicGuide, extras) {
    const explicitResources = Array.isArray(extras.resources) ? extras.resources : [];
    const topicResources = topicGuide?.resources || [];
    const certificationResources = Array.isArray(certification.resources)
      ? certification.resources
      : [];
    const matchedResources = certificationResources
      .map((resource) => ({ resource, score: scoreResource(resource, question) }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((item) => item.resource);
    const broadResources = certificationResources.slice(0, 2);
    return mergeResources(explicitResources, topicResources, matchedResources, broadResources);
  }

  function questionStudyProfile(question, certification) {
    const extras = studyExtrasFor(question);
    const topicGuide = topicStudyGuideFor(question);
    const categoryGuide =
      categoryStudyGuides[locale]?.[question.category] ||
      categoryStudyGuides.en[question.category] ||
      {};
    const correctAnswer = question.answers
      .map((index) => `${letters[index]}. ${question.options[index]}`)
      .join("; ");

    const focus =
      localizedValue(extras.focus) ||
      localizedValue(topicGuide?.focus) ||
      question.category;
    const summary =
      localizedValue(extras.summary) ||
      localizedValue(topicGuide?.summary) ||
      categoryGuide.summary ||
      question.explanation;
    const checklist = [
      ...localizedList(extras.checklist),
      ...localizedList(topicGuide?.checklist),
      ...(categoryGuide.checklist || []),
    ].slice(0, 5);
    const connections = localizedList(extras.connections);
    const defaultConnections =
      locale === "es"
        ? [
            `La respuesta correcta apunta a: ${correctAnswer}. Estudia que problema resuelve y que limites tiene.`,
            `El escenario pertenece a ${question.category}; conecta el requisito del caso con la capacidad Salesforce que lo resuelve.`,
            `Vuelve al tip y conviertelo en una regla de decision para reconocer preguntas similares.`,
          ]
        : [
            `The correct answer points to: ${correctAnswer}. Study the problem it solves and the limits it has.`,
            `The scenario belongs to ${question.category}; connect the case requirement to the Salesforce capability that solves it.`,
            `Turn the tip into a decision rule you can reuse when similar options appear.`,
          ];

    return {
      focus,
      summary,
      checklist,
      connections: connections.length ? connections : defaultConnections,
      resources: resourcesForQuestion(question, certification, topicGuide, extras),
    };
  }

  function renderResourceCard(resource) {
    return `
      <a class="study-resource-link" target="_blank" rel="noopener" href="${escapeHtml(resource.url)}" aria-label="${escapeHtml(`${text.openResource}: ${resource.title}`)}">
        <strong>${escapeHtml(resource.title)}</strong>
        ${resource.description ? `<span>${escapeHtml(resource.description)}</span>` : ""}
      </a>
    `;
  }

  function renderStudyPanel(question, certification) {
    const profile = questionStudyProfile(question, certification);
    const checklistHtml = profile.checklist
      .map((item) => `<li>${escapeHtml(item)}</li>`)
      .join("");
    const connectionsHtml = profile.connections
      .map((item) => `<li>${escapeHtml(item)}</li>`)
      .join("");
    const resourcesHtml = profile.resources.map(renderResourceCard).join("");

    return `
      <section class="study-deep-dive" aria-labelledby="studyDeepDiveTitle">
        <div class="study-deep-dive-header">
          <div>
            <h3 id="studyDeepDiveTitle">${text.studyDeeper}</h3>
            <p>${escapeHtml(profile.focus)}</p>
          </div>
        </div>
        <div class="study-deep-dive-grid">
          <div class="study-note">
            <h4>${text.coreIdea}</h4>
            <p>${escapeHtml(profile.summary)}</p>
          </div>
          <div class="study-note">
            <h4>${text.connectConcepts}</h4>
            <ul>${connectionsHtml}</ul>
          </div>
        </div>
        <div class="study-note study-note-wide">
          <h4>${text.reviewChecklist}</h4>
          <ul>${checklistHtml}</ul>
        </div>
        ${
          resourcesHtml
            ? `
              <div class="study-resources">
                <h4>${text.studyResources}</h4>
                <div class="study-resource-grid">${resourcesHtml}</div>
              </div>
            `
            : ""
        }
      </section>
    `;
  }

  function storageKey(certification) {
    return `blueforce-study-progress-${certification.id}-${progressVersion}`;
  }

  function readProgress(certification) {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey(certification)));
      return saved && typeof saved === "object" ? saved : {};
    } catch (error) {
      console.warn("Could not read saved progress.", error);
      return {};
    }
  }

  function writeProgress(certification, state) {
    try {
      localStorage.setItem(storageKey(certification), JSON.stringify(state));
    } catch (error) {
      console.warn("Could not save progress.", error);
    }
  }

  function sameSet(a, b) {
    if (a.length !== b.length) return false;
    const aa = [...a].sort((x, y) => x - y);
    const bb = [...b].sort((x, y) => x - y);
    return aa.every((value, index) => value === bb[index]);
  }

  function shuffle(items) {
    const next = [...items];
    for (let index = next.length - 1; index > 0; index -= 1) {
      const swap = Math.floor(Math.random() * (index + 1));
      [next[index], next[swap]] = [next[swap], next[index]];
    }
    return next;
  }

  function isValidOptionOrder(order, question) {
    if (!Array.isArray(order) || order.length !== question.options.length) return false;
    return order.every((value) => Number.isInteger(value)) && new Set(order).size === order.length;
  }

  function validQuestionIds(certification) {
    const ids =
      certification.questions && certification.questions.length
        ? certification.questions.map((question) => question.id)
        : certification.questionIds || [];
    return new Set(ids);
  }

  function questionCount(certification) {
    return certification.questionCount || (certification.questions || []).length;
  }

  function localizedCertification(certification) {
    return {
      ...certification,
      ...(certCopy[locale]?.[certification.id] || {}),
    };
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const existing = Array.from(document.scripts).find((script) => script.src === src);
      if (existing) {
        existing.addEventListener("load", resolve, { once: true });
        existing.addEventListener("error", reject, { once: true });
        return;
      }

      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  async function loadQuestionBank(certification) {
    if (certification.questions && certification.questions.length) return certification;

    const banks = window.BLUEFORCE_QUESTION_BANKS || {};
    if (!banks[certification.id]) {
      const source = `/${certification.questionBankPath}?v=${assetVersion}`;
      await loadScript(source);
    }

    const bank = (window.BLUEFORCE_QUESTION_BANKS || {})[certification.id];
    if (!bank || !Array.isArray(bank.questions)) {
      throw new Error(`Missing question bank for ${certification.id}`);
    }

    return {
      ...certification,
      categoryOrder: bank.categoryOrder || certification.categoryOrder,
      questions: bank.questions,
    };
  }

  function getHomeProgress(certification) {
    const saved = readProgress(certification);
    const validIds = validQuestionIds(certification);
    const answers =
      saved.answers && typeof saved.answers === "object" ? saved.answers : {};
    const answeredIds = Object.keys(answers).filter((id) => validIds.has(Number(id)));
    const correct = answeredIds.filter((id) => answers[id] && answers[id].correct).length;
    const answered = answeredIds.length;
    const total = questionCount(certification);
    const percent = total
      ? Math.round((answered / total) * 100)
      : 0;
    return { answered, correct, percent };
  }

  function initHome() {
    const grid = document.getElementById("certificationGrid");
    if (!grid) return;

    const totalQuestions = certifications.reduce(
      (sum, certification) => sum + questionCount(certification),
      0,
    );
    const totals = certifications.reduce(
      (memo, certification) => {
        const progress = getHomeProgress(certification);
        memo.answered += progress.answered;
        memo.correct += progress.correct;
        return memo;
      },
      { answered: 0, correct: 0 },
    );

    const certCount = document.getElementById("certCount");
    const questionCount = document.getElementById("questionCount");
    const globalProgress = document.getElementById("globalProgress");
    const globalAccuracy = document.getElementById("globalAccuracy");
    if (certCount) certCount.textContent = certifications.length;
    if (questionCount) questionCount.textContent = totalQuestions;
    if (globalProgress) globalProgress.textContent = `${totals.answered} / ${totalQuestions}`;
    if (globalAccuracy) {
      globalAccuracy.textContent = totals.answered
        ? `${Math.round((totals.correct / totals.answered) * 100)}%`
        : "0%";
    }

    grid.innerHTML = certifications
      .map((certification) => {
        const progress = getHomeProgress(certification);
        const total = questionCount(certification);
        const unanswered = total - progress.answered;
        return `
          <article class="cert-card">
            <div class="cert-top">
              <div>
                <div class="eyebrow">${total} questions</div>
                <h3>${escapeHtml(certification.title)}</h3>
                <p>${escapeHtml(certification.description)}</p>
              </div>
              <div class="cert-code" aria-hidden="true">${escapeHtml(certification.code)}</div>
            </div>
            <div>
              <div class="cert-meta">
                <span class="pill">${progress.answered} answered</span>
                <span class="pill">${progress.correct} correct</span>
                <span class="pill">${unanswered} unanswered</span>
              </div>
              <div class="progress-block" style="margin-top:16px">
                <div class="progress-meta">
                  <span>Local progress</span>
                  <span>${progress.percent}%</span>
                </div>
                <div class="progress-track">
                  <div class="progress-fill" style="width:${progress.percent}%"></div>
                </div>
              </div>
            </div>
            <div class="home-actions">
              <a class="btn btn-primary" href="${escapeHtml(certification.path)}">${progress.answered ? "Resume" : "Start"}</a>
            </div>
          </article>
        `;
      })
      .join("");
  }

  async function initExam() {
    const app = document.getElementById("examApp");
    if (!app) return;

    const requestedId =
      document.body.dataset.certification ||
      new URLSearchParams(window.location.search).get("cert");
    const certificationMeta = certifications.find((item) => item.id === requestedId);
    if (!certificationMeta) {
      console.warn("BlueForce certification not found.", {
        requestedId,
        loadedCertifications: certifications.map((item) => item.id),
      });
      app.innerHTML = `
        <div class="shell">
          <div class="empty-state">
            <h2>${text.certificationNotFound}</h2>
            <p>${text.certificationNotFoundCopy}</p>
            <a class="btn btn-primary" href="${text.homeHref}">${text.backHome}</a>
          </div>
        </div>
      `;
      return;
    }

    let certification;
    try {
      certification = await loadQuestionBank(certificationMeta);
    } catch (error) {
      console.warn("BlueForce question bank could not be loaded.", error);
      app.innerHTML = `
        <div class="shell">
          <div class="empty-state">
            <h2>${text.questionsCouldNotLoad}</h2>
            <p>${text.questionsCouldNotLoadCopy}</p>
            <a class="btn btn-primary" href="${text.homeHref}">${text.backHome}</a>
          </div>
        </div>
      `;
      return;
    }

    certification = localizedCertification(certification);
    document.title = `${certification.pageTitle} | BlueForce`;
    hydrateExamShell(certification);

    const questionById = new Map(
      certification.questions.map((question) => [question.id, question]),
    );
    const validIds = validQuestionIds(certification);

    let state = {
      answers: {},
      bookmarks: [],
      order: certification.questions.map((question) => question.id),
      filter: "All",
      specialMode: null,
      currentIndex: 0,
      drafts: {},
      pendingFeedbackQuestionId: null,
      optionOrders: {},
    };

    function loadState() {
      const saved = readProgress(certification);
      const nextOrder =
        Array.isArray(saved.order) && saved.order.every((id) => validIds.has(id))
          ? saved.order.filter((id) => validIds.has(id))
          : certification.questions.map((question) => question.id);
      const missingIds = certification.questions
        .map((question) => question.id)
        .filter((id) => !nextOrder.includes(id));

      state = {
        answers:
          saved.answers && typeof saved.answers === "object"
            ? Object.fromEntries(
                Object.entries(saved.answers).filter(([id]) => validIds.has(Number(id))),
              )
            : {},
        bookmarks: Array.isArray(saved.bookmarks)
          ? saved.bookmarks.filter((id) => validIds.has(id))
          : [],
        order: [...nextOrder, ...missingIds],
        filter: certification.categoryOrder.includes(saved.filter) ? saved.filter : "All",
        specialMode: specialModes.includes(saved.specialMode) ? saved.specialMode : null,
        currentIndex: Number.isInteger(saved.currentIndex) ? saved.currentIndex : 0,
        drafts:
          saved.drafts && typeof saved.drafts === "object"
            ? Object.fromEntries(
                Object.entries(saved.drafts).filter(([id]) => validIds.has(Number(id))),
              )
            : {},
        pendingFeedbackQuestionId:
          Number.isInteger(saved.pendingFeedbackQuestionId) &&
          validIds.has(saved.pendingFeedbackQuestionId) &&
          saved.answers &&
          saved.answers[saved.pendingFeedbackQuestionId]
            ? saved.pendingFeedbackQuestionId
            : null,
        optionOrders:
          saved.optionOrders && typeof saved.optionOrders === "object"
            ? Object.fromEntries(
                Object.entries(saved.optionOrders).filter(([id, order]) => {
                  const question = questionById.get(Number(id));
                  return question && isValidOptionOrder(order, question);
                }),
              )
            : {},
      };
    }

    function saveState() {
      writeProgress(certification, state);
    }

    function optionOrderFor(question) {
      const saved = state.optionOrders[question.id];
      if (isValidOptionOrder(saved, question)) return saved;
      const order = shuffle(question.options.map((_, index) => index));
      state.optionOrders[question.id] = order;
      saveState();
      return order;
    }

    function displayQuestion(question) {
      const order = optionOrderFor(question);
      return {
        ...question,
        options: order.map((index) => question.options[index]),
        answers: question.answers.map((answer) => order.indexOf(answer)),
      };
    }

    function getVisibleQuestions() {
      const ordered = state.order.map((id) => questionById.get(id)).filter(Boolean);
      if (state.specialMode === "wrong") {
        return ordered.filter((question) => {
          const record = state.answers[question.id];
          return record && !record.correct;
        });
      }
      if (state.specialMode === "bookmarks") {
        return ordered.filter((question) => state.bookmarks.includes(question.id));
      }
      if (state.specialMode === "unanswered") {
        return ordered.filter((question) => !state.answers[question.id]);
      }
      return state.filter === "All"
        ? ordered
        : ordered.filter((question) => question.category === state.filter);
    }

    function getHeldFeedbackQuestion() {
      if (!state.pendingFeedbackQuestionId) return null;
      const question = questionById.get(state.pendingFeedbackQuestionId);
      if (!question || !state.answers[question.id]) {
        state.pendingFeedbackQuestionId = null;
        return null;
      }
      return question;
    }

    function getCurrentQuestion() {
      const heldQuestion = getHeldFeedbackQuestion();
      if (heldQuestion) return heldQuestion;
      const visible = getVisibleQuestions();
      return visible[state.currentIndex] || null;
    }

    function clampIndex() {
      const visible = getVisibleQuestions();
      if (state.currentIndex >= visible.length) {
        state.currentIndex = Math.max(visible.length - 1, 0);
      }
      if (state.currentIndex < 0) state.currentIndex = 0;
    }

    function modeLabel() {
      if (state.specialMode === "wrong") return text.missedReview;
      if (state.specialMode === "bookmarks") return text.bookmarked;
      if (state.specialMode === "unanswered") return text.unanswered;
      return state.filter === "All" ? text.allQuestions : state.filter;
    }

    function renderFilters() {
      const container = document.getElementById("categoryFilters");
      if (!container) return;
      container.innerHTML = certification.categoryOrder
        .map((category) => {
          const isActive = !state.specialMode && state.filter === category;
          const label = category === "All" ? text.all : category;
          return `<button class="filter-btn" data-category="${escapeHtml(category)}" aria-pressed="${isActive}">${escapeHtml(label)}</button>`;
        })
        .join("");
      container.querySelectorAll("button").forEach((button) => {
        button.addEventListener("click", () => {
          state.filter = button.dataset.category;
          state.specialMode = null;
          state.currentIndex = 0;
          state.pendingFeedbackQuestionId = null;
          saveState();
          render();
        });
      });
    }

    function renderStats() {
      const answered = Object.keys(state.answers).length;
      const correct = Object.values(state.answers).filter((answer) => answer.correct).length;
      const accuracy = answered ? Math.round((correct / answered) * 100) : null;
      const total = certification.questions.length;
      const wrong = answered - correct;
      const pct = total ? (answered / total) * 100 : 0;

      document.getElementById("answeredStat").textContent = `${answered} / ${total}`;
      document.getElementById("correctStat").textContent = correct;
      document.getElementById("accuracyStat").textContent = accuracy === null ? "0%" : `${accuracy}%`;
      document.getElementById("bookmarkStat").textContent = state.bookmarks.length;
      document.getElementById("wrongStat").textContent = wrong;
      document.getElementById("progressLabel").textContent = text.answeredProgress(answered, total);
      document.getElementById("modeLabel").textContent = modeLabel();
      document.getElementById("progressFill").style.width = `${pct}%`;
    }

    function renderQuestion() {
      const card = document.getElementById("questionCard");
      const visible = getVisibleQuestions();
      clampIndex();
      const heldQuestion = getHeldFeedbackQuestion();

      if (!visible.length && !heldQuestion) {
        const message =
          state.specialMode === "wrong"
            ? text.noMissed
            : state.specialMode === "bookmarks"
              ? text.noBookmarks
              : text.noUnanswered;
        card.innerHTML = `
          <div class="empty-state">
            <h2>${text.noQuestionsTitle}</h2>
            <p>${message}</p>
            <button class="btn btn-primary" id="returnAllBtn">${text.viewAll}</button>
          </div>
        `;
        document.getElementById("returnAllBtn").addEventListener("click", () => {
          state.filter = "All";
          state.specialMode = null;
          state.currentIndex = 0;
          saveState();
          render();
        });
        return;
      }

      const sourceQuestion = heldQuestion || visible[state.currentIndex];
      const question = displayQuestion(sourceQuestion);
      const answerRecord = state.answers[question.id];
      const isBookmarked = state.bookmarks.includes(question.id);
      const draft = Array.isArray(state.drafts[question.id]) ? state.drafts[question.id] : [];
      const selectedCount = answerRecord ? answerRecord.selected.length : draft.length;
      const questionPosition = heldQuestion
        ? text.answeredQuestion(question.id)
        : text.questionPosition(state.currentIndex + 1, visible.length, question.id);
      const previousDisabled = heldQuestion ? state.currentIndex === 0 : state.currentIndex === 0;
      const nextDisabled = heldQuestion
        ? visible.length <= state.currentIndex
        : state.currentIndex === visible.length - 1;

      const optionsHtml = question.options
        .map((option, index) => {
          let classes = "option-btn";
          const selected = draft.includes(index);
          if (!answerRecord && selected) classes += " selected";
          if (answerRecord) {
            const isCorrectOption = question.answers.includes(index);
            const wasSelected = answerRecord.selected.includes(index);
            if (isCorrectOption) classes += " correct";
            else if (wasSelected) classes += " incorrect";
            else classes += " dimmed";
          }
          return `
            <button class="${classes}" data-option="${index}" ${answerRecord ? "disabled" : ""} aria-pressed="${!answerRecord && selected}">
              <span class="option-key">${letters[index]}</span>
              <span>${escapeHtml(option)}</span>
              <span class="option-check">${answerRecord || selected ? "OK" : ""}</span>
            </button>
          `;
        })
        .join("");

      const correctAnswerText = question.answers
        .map((index) => `${letters[index]}. ${escapeHtml(question.options[index])}`)
        .join("<br>");

      const feedbackHtml = answerRecord
        ? `
          <div class="feedback visible">
            <div class="feedback-status ${answerRecord.correct ? "correct-text" : "incorrect-text"}">
              ${answerRecord.correct ? text.correct : text.incorrect}
            </div>
            <h3>${text.correctAnswer(question.select > 1)}</h3>
            <p><strong>${correctAnswerText}</strong></p>
            <h3>${text.whyCorrect}</h3>
            <p>${escapeHtml(question.explanation)}</p>
            <div class="tip-box"><strong>${text.examTip}</strong> ${escapeHtml(question.tip)}</div>
            ${renderStudyPanel(question, certification)}
          </div>
        `
        : "";

      const answerActions =
        !answerRecord
          ? `
            <div class="answer-actions">
              <span class="selection-count">${text.selectedCount(selectedCount, question.select)}</span>
              <button class="btn btn-primary" id="submitAnswerBtn" ${selectedCount === question.select ? "" : "disabled"}>${text.submitAnswer}</button>
            </div>
          `
          : "";

      card.innerHTML = `
        <div class="question-top">
          <div class="badge-row">
            <span class="category-badge">${escapeHtml(question.category)}</span>
            ${question.select > 1 ? `<span class="selection-badge">${text.select(question.select)}</span>` : ""}
          </div>
          <button class="bookmark-btn ${isBookmarked ? "active" : ""}" id="bookmarkBtn" aria-label="${text.bookmarkQuestion}" title="${text.bookmarkQuestion}">B</button>
        </div>
        <div class="question-number">${questionPosition}</div>
        <h2>${escapeHtml(question.question)}</h2>
        <div class="option-list">${optionsHtml}</div>
        ${answerActions}
        ${feedbackHtml}
        <div class="nav-row">
          <button class="btn btn-secondary" id="prevBtn" ${previousDisabled ? "disabled" : ""}>${text.previous}</button>
          <button class="btn btn-secondary" id="nextBtn" ${nextDisabled ? "disabled" : ""}>${text.next}</button>
        </div>
      `;

      card.querySelectorAll(".option-btn").forEach((button) => {
        button.addEventListener("click", () => chooseOption(question, Number(button.dataset.option)));
      });
      document.getElementById("bookmarkBtn").addEventListener("click", () => toggleBookmark(question.id));
      document.getElementById("prevBtn").addEventListener("click", previousQuestion);
      document.getElementById("nextBtn").addEventListener("click", nextQuestion);
      const submit = document.getElementById("submitAnswerBtn");
      if (submit) submit.addEventListener("click", () => submitAnswer(question));
    }

    function chooseOption(question, selected) {
      if (state.answers[question.id]) return;
      const draft = Array.isArray(state.drafts[question.id])
        ? [...state.drafts[question.id]]
        : [];
      const existing = draft.indexOf(selected);
      if (existing >= 0) draft.splice(existing, 1);
      else if (question.select === 1) draft.splice(0, draft.length, selected);
      else if (draft.length < question.select) draft.push(selected);
      state.drafts[question.id] = draft;
      saveState();
      render();
    }

    function submitAnswer(question) {
      if (state.answers[question.id]) return;
      const draft = Array.isArray(state.drafts[question.id])
        ? state.drafts[question.id]
        : [];
      if (draft.length !== question.select) return;
      state.answers[question.id] = {
        selected: [...draft],
        correct: sameSet(draft, question.answers),
      };
      delete state.drafts[question.id];
      state.pendingFeedbackQuestionId =
        state.specialMode === "unanswered" ? question.id : null;
      saveState();
      render();
    }

    function toggleBookmark(questionId) {
      const index = state.bookmarks.indexOf(questionId);
      if (index >= 0) state.bookmarks.splice(index, 1);
      else state.bookmarks.push(questionId);
      saveState();
      render();
    }

    function setSpecialMode(mode) {
      state.specialMode = mode;
      state.currentIndex = 0;
      state.pendingFeedbackQuestionId = null;
      saveState();
      render();
    }

    function nextQuestion() {
      if (getHeldFeedbackQuestion()) {
        state.pendingFeedbackQuestionId = null;
        saveState();
        render();
        return;
      }
      const visible = getVisibleQuestions();
      if (state.currentIndex < visible.length - 1) {
        state.currentIndex += 1;
        saveState();
        renderQuestion();
        renderStats();
      }
    }

    function previousQuestion() {
      if (getHeldFeedbackQuestion()) {
        state.pendingFeedbackQuestionId = null;
        if (state.currentIndex > 0) state.currentIndex -= 1;
        saveState();
        render();
        return;
      }
      if (state.currentIndex > 0) {
        state.currentIndex -= 1;
        saveState();
        renderQuestion();
        renderStats();
      }
    }

    function shuffleQuestions() {
      const shuffled = [...state.order];
      for (let index = shuffled.length - 1; index > 0; index -= 1) {
        const swap = Math.floor(Math.random() * (index + 1));
        [shuffled[index], shuffled[swap]] = [shuffled[swap], shuffled[index]];
      }
      state.order = shuffled;
      state.currentIndex = 0;
      state.pendingFeedbackQuestionId = null;
      saveState();
      render();
    }

    function resetProgress() {
      if (!window.confirm(text.resetConfirm)) {
        return;
      }
      try {
        localStorage.removeItem(storageKey(certification));
      } catch (error) {
        console.warn("Could not clear saved progress.", error);
      }
      state = {
        answers: {},
        bookmarks: [],
        order: certification.questions.map((question) => question.id),
        filter: "All",
        specialMode: null,
        currentIndex: 0,
        drafts: {},
        pendingFeedbackQuestionId: null,
        optionOrders: {},
      };
      render();
    }

    function render() {
      clampIndex();
      renderFilters();
      renderStats();
      renderQuestion();
    }

    loadState();
    render();

    document.getElementById("startBtn").addEventListener("click", () => {
      document.getElementById("study").scrollIntoView({ behavior: "smooth" });
    });
    document.getElementById("shuffleBtn").addEventListener("click", shuffleQuestions);
    document.getElementById("reviewWrongBtn").addEventListener("click", () => setSpecialMode("wrong"));
    document.getElementById("reviewBookmarksBtn").addEventListener("click", () => setSpecialMode("bookmarks"));
    document.getElementById("unansweredBtn").addEventListener("click", () => setSpecialMode("unanswered"));
    document.getElementById("resetBtn").addEventListener("click", resetProgress);

    document.addEventListener("keydown", (event) => {
      const question = getCurrentQuestion();
      if (!question) return;
      const activeTag = document.activeElement ? document.activeElement.tagName : "";
      if (["INPUT", "TEXTAREA", "SELECT"].includes(activeTag)) return;

      if (["1", "2", "3", "4", "5", "6"].includes(event.key) && !state.answers[question.id]) {
        const index = Number(event.key) - 1;
        if (index < question.options.length) chooseOption(question, index);
      } else if (event.key === "Enter" && !state.answers[question.id]) {
        submitAnswer(question);
      } else if (event.key.toLowerCase() === "n") {
        nextQuestion();
      } else if (event.key.toLowerCase() === "p") {
        previousQuestion();
      } else if (event.key.toLowerCase() === "b") {
        toggleBookmark(question.id);
      }
    });
  }

  function hydrateExamShell(certification) {
    const total = certification.questions.length;
    const maxWeight = Math.max(...certification.blueprint.map((item) => item.weight));
    document.getElementById("examEyebrow").textContent = text.originalQuestions(total);
    document.getElementById("pageTitle").textContent = certification.pageTitle;
    document.getElementById("heroCopy").textContent = certification.heroCopy;
    document.getElementById("integrityNote").textContent = certification.integrity;
    document.getElementById("blueprintNote").textContent = certification.blueprintNote;
    document.getElementById("reasoningText").textContent = certification.reasoning;
    document.getElementById("habitsText").textContent = certification.habits;
    const sourceFileLink = document.getElementById("sourceFile");
    if (sourceFileLink) {
      sourceFileLink.textContent = certification.sourceFile;
      sourceFileLink.href = `/${certification.sourceFile}`;
    }

    document.getElementById("blueprintList").innerHTML = certification.blueprint
      .map((item) => {
        const width = maxWeight ? Math.round((item.weight / maxWeight) * 100) : 0;
        return `
          <div class="weight-row">
            <span class="weight-label">${escapeHtml(item.label)}</span>
            <span class="weight-value">${item.weight}%</span>
            <div class="weight-track"><div class="weight-fill" style="width:${width}%"></div></div>
          </div>
        `;
      })
      .join("");

    document.getElementById("resourceGrid").innerHTML = certification.resources
      .map(
        (resource) => `
          <a class="resource-link" target="_blank" rel="noopener" href="${escapeHtml(resource.url)}">
            <strong>${escapeHtml(resource.title)}</strong>
            <span>${escapeHtml(resource.description)}</span>
          </a>
        `,
      )
      .join("");
  }

  document.addEventListener("DOMContentLoaded", () => {
    initHome();
    initExam();
  });
})();
