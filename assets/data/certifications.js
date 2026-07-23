// Generated from the original Salesforce study lab HTML files.
// To add a certification, add metadata and a source file to tools/extract-certifications.mjs, then rerun it.
window.BLUEFORCE_CERTIFICATIONS = [
  {
    "id": "ux-designer",
    "title": "Salesforce UX Designer",
    "pageTitle": "Salesforce UX Designer Certification Study Lab",
    "shortTitle": "UX Designer",
    "code": "UX",
    "path": "certifications/ux-designer",
    "sourceFile": "salesforce_ux_designer_study_lab(1).html",
    "description": "Practica los dominios oficiales con preguntas de escenario, retroalimentacion inmediata y tips enfocados en razonamiento de examen.",
    "heroCopy": "Estudia los dominios oficiales con tarjetas basadas en escenarios. Elige una respuesta para ver la opcion correcta, una explicacion practica y un tip de razonamiento.",
    "reasoning": "Identifica primero el objetivo del usuario, despues elige la solucion Salesforce mas nativa, accesible y mantenible que lo cumpla.",
    "habits": "Compara cada opcion contra evidencia de usuario, accesibilidad, SLDS y configuracion declarativa antes de decidir.",
    "integrity": "Estas son preguntas originales creadas a partir de objetivos publicos y documentacion. No son preguntas filtradas ni memorizadas del examen real.",
    "blueprintNote": "La distribucion se alinea con el peso publicado para los dominios del examen.",
    "blueprint": [
      {
        "label": "Declarative Design",
        "weight": 27
      },
      {
        "label": "SLDS",
        "weight": 21
      },
      {
        "label": "UX Fundamentals",
        "weight": 16
      },
      {
        "label": "Discovery",
        "weight": 13
      },
      {
        "label": "Human-Centered Design",
        "weight": 12
      },
      {
        "label": "Testing",
        "weight": 11
      }
    ],
    "resources": [
      {
        "title": "Salesforce UX Designer Credential",
        "url": "https://trailhead.salesforce.com/credentials/userexperiencedesigner",
        "description": "Pagina oficial de la credencial y preparacion recomendada."
      },
      {
        "title": "Official UX Designer Cert Prep",
        "url": "https://trailhead.salesforce.com/content/learn/modules/ux-designer-certification-prep",
        "description": "Dominios, escenarios, flashcards y modulos relacionados."
      },
      {
        "title": "W3C WCAG Overview",
        "url": "https://www.w3.org/WAI/standards-guidelines/wcag/",
        "description": "Principios y estandares de accesibilidad web."
      }
    ],
    "categoryOrder": [
      "All",
      "Discovery",
      "UX Fundamentals",
      "Human-Centered Design",
      "Declarative Design",
      "Testing",
      "SLDS"
    ],
    "questions": [
      {
        "id": 1,
        "category": "Discovery",
        "select": 1,
        "question": "A sales team reports that creating an opportunity takes too long, but stakeholders cannot agree on where the problem occurs. What should the UX designer do first?",
        "options": [
          "Redesign the opportunity page immediately",
          "Observe representative users completing the task and conduct contextual interviews",
          "Create a dashboard showing opportunity volume",
          "Replace the standard Opportunity object with a custom object"
        ],
        "answers": [
          1
        ],
        "explanation": "Direct observation and contextual interviews reveal the actual workflow, workarounds, interruptions, and environmental constraints. The complaint describes a symptom, not a verified cause. Redesigning before research risks optimizing the wrong step.",
        "tip": "When the problem is vague, choose evidence-gathering before solution-building. Look for answers that let you see real behavior, not only stated preferences."
      },
      {
        "id": 2,
        "category": "Discovery",
        "select": 1,
        "question": "What is the primary purpose of a heuristic evaluation?",
        "options": [
          "Measure production performance under heavy load",
          "Have experts inspect an interface against established usability principles",
          "Calculate the financial return of a design",
          "Replace all end-user research"
        ],
        "answers": [
          1
        ],
        "explanation": "A heuristic evaluation is an expert review that identifies likely usability problems by comparing an interface with recognized principles. It is fast and useful, but it does not replace validation with real users.",
        "tip": "Heuristic evaluation means expert inspection. Usability testing means representative users attempting realistic tasks."
      },
      {
        "id": 3,
        "category": "Discovery",
        "select": 1,
        "question": "Users are abandoning a new case intake flow. Which activity best supports root-cause analysis before redesign?",
        "options": [
          "Ask stakeholders to vote on a new color palette",
          "Use the Five Whys with evidence from analytics, interviews, and observed failures",
          "Add more required fields so the data is complete",
          "Copy the flow used by another company"
        ],
        "answers": [
          1
        ],
        "explanation": "Root-cause analysis repeatedly tests why the failure occurs and uses evidence to move beyond surface symptoms. Combining behavioral data with qualitative research reduces the chance of accepting a stakeholder assumption as the cause.",
        "tip": "A strong root-cause answer connects a structured method with evidence. Avoid options that jump straight to a feature."
      },
      {
        "id": 4,
        "category": "Discovery",
        "select": 1,
        "question": "A complex service process uses internal terminology that customers do not understand. What is the best content strategy?",
        "options": [
          "Keep the terminology because it matches the database field names",
          "Use plain language, consistent labels, and progressive disclosure for technical detail",
          "Display every possible definition on the first screen",
          "Use icons without text to reduce reading"
        ],
        "answers": [
          1
        ],
        "explanation": "Content should support the user's mental model. Plain language and consistent labels reduce cognitive load, while progressive disclosure keeps advanced detail available without overwhelming the primary task.",
        "tip": "Good content strategy prioritizes user comprehension over internal system vocabulary."
      },
      {
        "id": 5,
        "category": "Discovery",
        "select": 1,
        "question": "Which information makes a persona most useful for Salesforce solution design?",
        "options": [
          "A fictional name and stock photo only",
          "Job goals, behaviors, pain points, context, and evidence from research",
          "The designer's assumptions about an average user",
          "Only age, location, and department"
        ],
        "answers": [
          1
        ],
        "explanation": "A useful persona represents research-backed patterns that affect design decisions: goals, behaviors, environment, constraints, and pain points. Demographics alone rarely explain how someone works in Salesforce.",
        "tip": "Personas are decision tools, not decorative profiles. Look for behavioral and task-based evidence."
      },
      {
        "id": 6,
        "category": "Discovery",
        "select": 1,
        "question": "Before reorganizing a Lightning app's information architecture, what should the designer understand about the Salesforce data model?",
        "options": [
          "Only the app's logo and brand colors",
          "Objects, fields, relationships, record ownership, and how users move between related data",
          "The JavaScript framework used by every component",
          "Only the number of licenses purchased"
        ],
        "answers": [
          1
        ],
        "explanation": "Information architecture must reflect how business information is structured and connected. Understanding objects and relationships helps the designer create navigation and page structures that match the user's work.",
        "tip": "In Salesforce, UX and data architecture are closely linked. A navigation decision can expose or hide important record relationships."
      },
      {
        "id": 7,
        "category": "UX Fundamentals",
        "select": 1,
        "question": "A service agent repeatedly switches between three pages to resolve one case. Which design principle should guide the redesign?",
        "options": [
          "Increase decorative imagery",
          "Reduce context switching by placing task-critical information and actions in the flow of work",
          "Use a different font on each page",
          "Require the agent to memorize record IDs"
        ],
        "answers": [
          1
        ],
        "explanation": "Bringing related information and actions together reduces navigation cost, memory load, and error risk. The experience should support the user's end-to-end task rather than mirror organizational silos.",
        "tip": "Follow the task, not the org chart. The best answer usually reduces steps, memory, and unnecessary movement."
      },
      {
        "id": 8,
        "category": "UX Fundamentals",
        "select": 1,
        "question": "What does responsive design primarily accomplish?",
        "options": [
          "It creates a separate database for every device",
          "It adapts layout and content presentation to different viewport sizes and capabilities",
          "It guarantees identical pixel placement on every screen",
          "It removes the need for mobile testing"
        ],
        "answers": [
          1
        ],
        "explanation": "Responsive design allows layouts to reorganize and scale for different screen sizes. It does not require identical presentation, and it still needs testing across devices and input methods.",
        "tip": "Responsive does not mean identical. It means usable and appropriately adapted across contexts."
      },
      {
        "id": 9,
        "category": "UX Fundamentals",
        "select": 1,
        "question": "When optimizing a Salesforce task for mobile, what should the designer prioritize?",
        "options": [
          "Every desktop field and action on the first screen",
          "The user's most important on-the-go tasks, touch-friendly controls, and progressive disclosure",
          "Hover-only interactions",
          "Dense multi-column tables"
        ],
        "answers": [
          1
        ],
        "explanation": "Mobile design should focus on high-value tasks in the mobile context, reduce visual density, and support touch. Less frequent details can remain available through progressive disclosure.",
        "tip": "Ask what the user must accomplish while mobile, not how to shrink the desktop page."
      },
      {
        "id": 10,
        "category": "UX Fundamentals",
        "select": 1,
        "question": "A status is shown only by red or green text. What is the most accessible improvement?",
        "options": [
          "Use brighter red and green",
          "Add a text label or icon with an accessible name in addition to color",
          "Make the text smaller",
          "Remove the status entirely"
        ],
        "answers": [
          1
        ],
        "explanation": "Color should not be the only way to communicate meaning. A text label or appropriately labeled icon allows users with color-vision differences and assistive technology to understand the status.",
        "tip": "Whenever an option says 'color alone,' treat it as an accessibility warning."
      },
      {
        "id": 11,
        "category": "UX Fundamentals",
        "select": 1,
        "question": "Which combination most directly creates clear visual hierarchy on a record page?",
        "options": [
          "Random font styles and equal spacing",
          "Meaningful grouping, spacing, alignment, size, and contrast",
          "More borders around every field",
          "All content displayed at the same visual weight"
        ],
        "answers": [
          1
        ],
        "explanation": "Visual hierarchy uses grouping and differences in emphasis to communicate order and importance. When everything has equal weight, users must work harder to decide where to look and what to do.",
        "tip": "Hierarchy is about relationships and priority, not decoration."
      },
      {
        "id": 12,
        "category": "UX Fundamentals",
        "select": 1,
        "question": "A company's brand color does not provide sufficient contrast for body text. What should the designer do?",
        "options": [
          "Use it anyway because branding overrides accessibility",
          "Choose an accessible brand-approved variation or reserve the color for non-text accents",
          "Place the text over a patterned image",
          "Reduce the font weight"
        ],
        "answers": [
          1
        ],
        "explanation": "Brand expression must operate within accessibility requirements. Designers can use an accessible tonal variation, adjust the background, or apply the color to decorative elements rather than essential text.",
        "tip": "Accessibility is a design constraint, not an optional layer added after branding."
      },
      {
        "id": 13,
        "category": "UX Fundamentals",
        "select": 1,
        "question": "During early concept exploration, why is a low-fidelity prototype often preferable?",
        "options": [
          "It proves the solution is technically complete",
          "It enables fast, inexpensive feedback before the team becomes attached to visual details",
          "It eliminates the need for later testing",
          "It accurately measures production load time"
        ],
        "answers": [
          1
        ],
        "explanation": "Low-fidelity prototypes make structure and flow easy to change. Participants and stakeholders are also more likely to critique the concept instead of focusing on polished colors and typography.",
        "tip": "Match prototype fidelity to the question you need to answer. Early uncertainty usually calls for lower fidelity."
      },
      {
        "id": 14,
        "category": "UX Fundamentals",
        "select": 1,
        "question": "What is the best way to present a validation error in a multi-field form?",
        "options": [
          "Show a red border with no text",
          "Provide a clear summary and place specific, actionable messages next to the affected fields",
          "Clear all entered data",
          "Wait until the user leaves the application"
        ],
        "answers": [
          1
        ],
        "explanation": "Accessible error handling identifies what went wrong, where it happened, and how to correct it. Inline messages reduce search effort, while a summary helps users understand the overall state.",
        "tip": "A good error message is perceivable, specific, and actionable."
      },
      {
        "id": 15,
        "category": "Human-Centered Design",
        "select": 1,
        "question": "Which artifact best visualizes a user's stages, actions, thoughts, emotions, pain points, and opportunities across an end-to-end experience?",
        "options": [
          "Entity-relationship diagram",
          "Journey map",
          "Release calendar",
          "Permission set matrix"
        ],
        "answers": [
          1
        ],
        "explanation": "A journey map shows the experience over time from the user's perspective. It helps teams identify emotional highs and lows, gaps between touchpoints, and moments where design can improve the relationship.",
        "tip": "Journey map equals the user's experience over time. Service blueprint adds operational layers behind that experience."
      },
      {
        "id": 16,
        "category": "Human-Centered Design",
        "select": 1,
        "question": "What does a service blueprint add beyond a basic customer journey map?",
        "options": [
          "Only brand colors",
          "Frontstage interactions, backstage activities, supporting processes, and dependencies",
          "A list of Salesforce certification vouchers",
          "Only database storage limits"
        ],
        "answers": [
          1
        ],
        "explanation": "A service blueprint connects the visible customer experience to the people, processes, systems, and policies that make it possible. It is especially useful when failures span multiple teams or channels.",
        "tip": "Think 'journey plus operations.'"
      },
      {
        "id": 17,
        "category": "Human-Centered Design",
        "select": 1,
        "question": "Which approach best demonstrates inclusive design?",
        "options": [
          "Design for an imagined average user and test at launch",
          "Include people with diverse abilities and contexts throughout research, design, and testing",
          "Create one solution only for permanent visual disabilities",
          "Treat accessibility as a compliance review after development"
        ],
        "answers": [
          1
        ],
        "explanation": "Inclusive design involves diverse participants early and repeatedly. It considers permanent, temporary, and situational barriers instead of assuming one 'average' user represents everyone.",
        "tip": "Inclusive design is a continuous practice, not a final checklist."
      },
      {
        "id": 18,
        "category": "Human-Centered Design",
        "select": 1,
        "question": "Which set contains the four Salesforce Relationship Design mindsets?",
        "options": [
          "Speed, scale, profit, control",
          "Compassion, courage, intention, reciprocity",
          "Research, code, launch, maintain",
          "Discover, define, develop, deliver"
        ],
        "answers": [
          1
        ],
        "explanation": "Salesforce describes the Relationship Design mindsets as compassion, courage, intention, and reciprocity. Together they encourage meaningful, ethical, and lasting value exchange among people, organizations, and communities.",
        "tip": "Remember the mindsets as human qualities that strengthen long-term relationships, not project phases."
      },
      {
        "id": 19,
        "category": "Human-Centered Design",
        "select": 1,
        "question": "A proposed feature is desirable to users and technically feasible, but it has no sustainable business model. Which human-centered design criterion is missing?",
        "options": [
          "Viability",
          "Legibility",
          "Fidelity",
          "Findability"
        ],
        "answers": [
          0
        ],
        "explanation": "Human-centered design seeks the intersection of desirability, feasibility, and viability. Viability asks whether the solution can work sustainably for the organization or business model.",
        "tip": "Desirable = people need it. Feasible = it can be built. Viable = the organization can sustain it."
      },
      {
        "id": 20,
        "category": "Human-Centered Design",
        "select": 1,
        "question": "What is the strongest way to apply reciprocity during solution design?",
        "options": [
          "Collect user feedback once and never follow up",
          "Co-create with users, return value, and keep the feedback relationship active over time",
          "Hide design constraints from stakeholders",
          "Prioritize company value while ignoring user outcomes"
        ],
        "answers": [
          1
        ],
        "explanation": "Reciprocity recognizes that relationships require two-way value exchange. Co-creation and ongoing feedback help the organization remain relevant while giving participants meaningful influence and benefit.",
        "tip": "Reciprocity is not one-way data collection; it is continuing exchange and shared value."
      },
      {
        "id": 21,
        "category": "Declarative Design",
        "select": 1,
        "question": "A company needs to track organizations it sells to. The standard Account object already supports the required process. What is the best design choice?",
        "options": [
          "Create a custom Company object to make the org unique",
          "Use and configure the standard Account object",
          "Store each organization in a text field on User",
          "Create a separate Salesforce org for every customer"
        ],
        "answers": [
          1
        ],
        "explanation": "Use standard objects when they fit the business concept. Standard objects integrate naturally with platform features, reporting, relationships, and future Salesforce capabilities, reducing maintenance and user confusion.",
        "tip": "Prefer native capabilities unless a verified requirement cannot be met. Custom does not automatically mean better UX."
      },
      {
        "id": 22,
        "category": "Declarative Design",
        "select": 1,
        "question": "A child record must always belong to a parent, inherit ownership and sharing, and support roll-up summary fields on the parent. Which relationship is most appropriate?",
        "options": [
          "External lookup",
          "Master-detail relationship",
          "Unrelated text field",
          "Many-to-many relationship without a junction object"
        ],
        "answers": [
          1
        ],
        "explanation": "A master-detail relationship tightly couples the child to the parent, supports inherited ownership and sharing, and enables roll-up summary fields. A lookup relationship is looser and does not provide all of these behaviors.",
        "tip": "Master-detail means strong dependency. Lookup means a more independent relationship."
      },
      {
        "id": 23,
        "category": "Declarative Design",
        "select": 1,
        "question": "A designer needs to change which fields and actions appear for different users, while another requirement changes the component arrangement on the Lightning page. Which tools are most relevant?",
        "options": [
          "Page layouts for fields/actions and Lightning App Builder for page components",
          "Only Data Loader",
          "Only Schema Builder",
          "Email templates and dashboards"
        ],
        "answers": [
          0
        ],
        "explanation": "Page layouts influence record details and available actions, often by profile or record type. Lightning App Builder controls the structure and components of Lightning pages. The two tools solve related but different presentation needs.",
        "tip": "Page layout = record fields and actions. Lightning App Builder = the page canvas and components."
      },
      {
        "id": 24,
        "category": "Declarative Design",
        "select": 1,
        "question": "What is a primary UX advantage of Dynamic Forms?",
        "options": [
          "They automatically migrate every custom component to mobile",
          "They let admins place fields and field sections as components and apply visibility rules",
          "They replace object permissions",
          "They remove the need for a data model"
        ],
        "answers": [
          1
        ],
        "explanation": "Dynamic Forms provide more granular control over field placement and visibility on supported Lightning record pages. This supports progressive disclosure and role- or record-specific experiences without creating many page layouts.",
        "tip": "Dynamic Forms improve presentation logic; they do not replace security."
      },
      {
        "id": 25,
        "category": "Declarative Design",
        "select": 1,
        "question": "A sales manager wants representatives to see deal stages, important fields, and stage-specific coaching. Which Salesforce feature best fits?",
        "options": [
          "Path with key fields and Guidance for Success",
          "Recycle Bin",
          "Chatter feed tracking only",
          "A static image uploaded to Files"
        ],
        "answers": [
          0
        ],
        "explanation": "Path visually represents stages and can show key fields plus Guidance for Success at each stage. It supports process clarity and just-in-time coaching in the context of the record.",
        "tip": "When the scenario mentions stages plus coaching, think Path."
      },
      {
        "id": 26,
        "category": "Declarative Design",
        "select": 1,
        "question": "Users need quick access to Notes and History while working anywhere inside a Lightning app. What should the designer configure?",
        "options": [
          "A utility bar",
          "A new custom object for every note",
          "A different home page for each record",
          "A validation rule"
        ],
        "answers": [
          0
        ],
        "explanation": "The utility bar provides persistent access to common productivity tools in a fixed footer. Utilities open in docked panels so users can maintain context while working in the app.",
        "tip": "Persistent, app-level productivity tools point to the utility bar."
      },
      {
        "id": 27,
        "category": "Declarative Design",
        "select": 1,
        "question": "Which statement correctly distinguishes App Manager from Lightning App Builder?",
        "options": [
          "App Manager configures apps, navigation, and branding; Lightning App Builder creates and arranges Lightning pages",
          "They are identical tools with different names",
          "App Manager creates only reports; Lightning App Builder creates users",
          "Lightning App Builder manages licenses; App Manager writes Apex"
        ],
        "answers": [
          0
        ],
        "explanation": "App Manager is used to create and configure Lightning apps, including branding and navigation. Lightning App Builder is the visual tool for composing app pages, home pages, and record pages from components.",
        "tip": "App Manager defines the container and navigation. App Builder defines the pages inside the experience."
      },
      {
        "id": 28,
        "category": "Declarative Design",
        "select": 1,
        "question": "An executive needs a visual summary of pipeline metrics sourced from several reports. What is the most appropriate declarative feature?",
        "options": [
          "Dashboard",
          "Page layout",
          "Permission set",
          "Path"
        ],
        "answers": [
          0
        ],
        "explanation": "Dashboards present visual components based on source reports. They are appropriate when users need at-a-glance monitoring and comparisons rather than row-level data entry.",
        "tip": "Reports organize and analyze data; dashboards visualize report results."
      },
      {
        "id": 29,
        "category": "Declarative Design",
        "select": 1,
        "question": "A new feature requires a hands-on, multi-step tour that points users through a sequence of actions. Which in-app guidance component is best?",
        "options": [
          "Walkthrough",
          "Field-level help",
          "Dashboard filter",
          "Compact layout"
        ],
        "answers": [
          0
        ],
        "explanation": "A walkthrough is an interactive sequence designed to guide users through onboarding or feature adoption steps. A prompt is better for a focused message, while field-level help explains an individual field.",
        "tip": "Sequence of guided steps = walkthrough. One contextual message = prompt."
      },
      {
        "id": 30,
        "category": "Declarative Design",
        "select": 1,
        "question": "A product team wants to announce a new feature on the exact page where users can try it. Which declarative engagement component is the best starting point?",
        "options": [
          "A targeted prompt",
          "A master-detail relationship",
          "A sharing rule",
          "An outbound message"
        ],
        "answers": [
          0
        ],
        "explanation": "A targeted prompt can call attention to a relevant feature or action in context. It is well suited to feature discovery, announcements, and just-in-time guidance on a specific page.",
        "tip": "When the message should appear in context and drive one action, choose a prompt."
      },
      {
        "id": 31,
        "category": "Declarative Design",
        "select": 1,
        "question": "Users repeatedly misunderstand what a custom field means. The explanation is short and specific to that field. What is the simplest appropriate solution?",
        "options": [
          "Field-level help",
          "A five-step walkthrough",
          "A new dashboard",
          "A custom mobile app"
        ],
        "answers": [
          0
        ],
        "explanation": "Field-level help explains the purpose and function of a standard or custom field at the point of use. It avoids forcing users to leave their workflow to search for documentation.",
        "tip": "Use the smallest guidance mechanism that solves the problem."
      },
      {
        "id": 32,
        "category": "Declarative Design",
        "select": 1,
        "question": "A user should be able to create a new task from many places in Salesforce without navigating to a specific record first. Which feature is most appropriate?",
        "options": [
          "Global action",
          "Related list filter",
          "Record type",
          "Report chart"
        ],
        "answers": [
          0
        ],
        "explanation": "Global actions are available in broadly accessible interface locations and support actions that are not dependent on a particular record context. They reduce navigation for common cross-app tasks.",
        "tip": "Record-specific action needs a record context. Global action is designed for broad access."
      },
      {
        "id": 33,
        "category": "Declarative Design",
        "select": 1,
        "question": "A company wants its Lightning experience to use approved logos, colors, and page background styling without custom code. What should the designer evaluate first?",
        "options": [
          "Themes and Branding",
          "Apex triggers",
          "Data export",
          "Duplicate rules"
        ],
        "answers": [
          0
        ],
        "explanation": "Themes and Branding provides declarative control over core visual identity elements in Lightning Experience. It is the native starting point before considering more expensive custom development.",
        "tip": "For global, declarative brand expression, start with Themes and Branding."
      },
      {
        "id": 34,
        "category": "Testing",
        "select": 1,
        "question": "Which usability-test task is written most effectively?",
        "options": [
          "Click the blue New Contact button and complete the form",
          "You have just met a new customer. Add their contact information so your team can follow up",
          "Tell us why our design is easy to use",
          "Explore the application and do anything you like"
        ],
        "answers": [
          1
        ],
        "explanation": "A good task describes a realistic goal without revealing the interface steps or preferred answer. This lets the designer observe whether users can discover and complete the task naturally.",
        "tip": "Task scenarios describe intent, not clicks. Avoid leading users through the interface."
      },
      {
        "id": 35,
        "category": "Testing",
        "select": 1,
        "question": "When is A/B testing most appropriate?",
        "options": [
          "When comparing two defined design variants against a measurable outcome",
          "When the team has no hypothesis or metric",
          "When testing a completely nonfunctional sketch for technical performance",
          "When interviewing one stakeholder about strategy"
        ],
        "answers": [
          0
        ],
        "explanation": "A/B testing compares variants under controlled conditions and measures a target behavior or outcome. It works best when the team has a clear hypothesis, enough traffic or participants, and a meaningful metric.",
        "tip": "A/B testing answers 'which variant performs better on this metric?' It does not explain every reason why."
      },
      {
        "id": 36,
        "category": "Testing",
        "select": 1,
        "question": "A designer wants to validate whether users can find topics in a proposed navigation hierarchy before visual design is complete. Which method is best?",
        "options": [
          "Tree testing",
          "Color-contrast audit",
          "Load testing",
          "Code review"
        ],
        "answers": [
          0
        ],
        "explanation": "Tree testing evaluates findability within a text-based hierarchy, separating information architecture from visual presentation. It helps identify confusing labels and misplaced content early.",
        "tip": "Card sorting helps create categories; tree testing evaluates whether users can find items in the resulting hierarchy."
      },
      {
        "id": 37,
        "category": "Testing",
        "select": 1,
        "question": "Why establish a usability benchmark before redesigning a high-volume task?",
        "options": [
          "To guarantee every user will like the new design",
          "To compare measures such as completion rate, time, errors, and satisfaction before and after changes",
          "To avoid speaking with users",
          "To select brand colors"
        ],
        "answers": [
          1
        ],
        "explanation": "A benchmark provides a baseline for evaluating whether the redesign improved measurable outcomes. It turns 'the new experience feels better' into evidence that can support decisions.",
        "tip": "A benchmark is a before-state measurement used for comparison."
      },
      {
        "id": 38,
        "category": "Testing",
        "select": 1,
        "question": "A researcher believes a new flow is better and asks only questions that support that belief. Which risk is most evident?",
        "options": [
          "Confirmation bias",
          "Responsive design",
          "Progressive disclosure",
          "Data normalization"
        ],
        "answers": [
          0
        ],
        "explanation": "Confirmation bias leads people to seek or interpret evidence that supports an existing belief. Neutral questions, predefined success criteria, diverse participants, and review by others can reduce this risk.",
        "tip": "Watch for wording that reveals the researcher's preferred answer."
      },
      {
        "id": 39,
        "category": "SLDS",
        "select": 1,
        "question": "What is the primary value of Salesforce Lightning Design System?",
        "options": [
          "It replaces the Salesforce data model",
          "It provides reusable patterns, components, guidance, and design foundations for consistent Salesforce experiences",
          "It is only a library of company logos",
          "It automatically writes every business requirement"
        ],
        "answers": [
          1
        ],
        "explanation": "SLDS helps teams create experiences that are consistent with Salesforce through shared patterns, components, visual foundations, and guidance. Reuse improves quality, accessibility, and delivery efficiency.",
        "tip": "A design system is more than a component library; it also includes standards, principles, and documentation."
      },
      {
        "id": 40,
        "category": "SLDS",
        "select": 1,
        "question": "A standard Lightning base component already meets the functional requirement. What should the team generally do?",
        "options": [
          "Rebuild it from scratch for uniqueness",
          "Use the base component and its supported configuration",
          "Copy its internal rendered HTML and override every class",
          "Replace it with an image"
        ],
        "answers": [
          1
        ],
        "explanation": "Base components provide supported behavior, accessibility, interaction patterns, and alignment with Salesforce. Rebuilding a standard component creates unnecessary maintenance and can introduce accessibility defects.",
        "tip": "Prefer supported platform components before custom code."
      },
      {
        "id": 41,
        "category": "SLDS",
        "select": 1,
        "question": "Which statement best describes a design token?",
        "options": [
          "A named entity that stores a visual design value such as color, spacing, or typography",
          "A user authentication credential",
          "A database record ID",
          "A test script for a flow"
        ],
        "answers": [
          0
        ],
        "explanation": "Design tokens store named visual attributes so design decisions can be reused consistently. Current Salesforce guidance favors global styling hooks where possible for cross-version theming, especially when preparing for SLDS 2.",
        "tip": "Token = named design value. Styling hook = CSS custom property used to customize supported styling."
      },
      {
        "id": 42,
        "category": "SLDS",
        "select": 1,
        "question": "A team wants component styling to remain compatible across SLDS 1 and SLDS 2. Which current approach is generally preferred?",
        "options": [
          "Hardcode colors in every component",
          "Use supported global styling hooks where possible",
          "Override internal classes of base components",
          "Depend only on legacy design tokens"
        ],
        "answers": [
          1
        ],
        "explanation": "Salesforce recommends global styling hooks as the more future-compatible approach. Legacy design tokens are associated with SLDS 1 themes and are not supported in SLDS 2 themes.",
        "tip": "For current platform compatibility, think supported hooks, not internal overrides or hardcoded values."
      },
      {
        "id": 43,
        "category": "SLDS",
        "select": 1,
        "question": "What is the main purpose of the SLDS grid system?",
        "options": [
          "Create responsive page layouts using a consistent column and sizing structure",
          "Encrypt Salesforce records",
          "Define user permissions",
          "Schedule reports"
        ],
        "answers": [
          0
        ],
        "explanation": "The grid system supports responsive, structured layouts using predictable sizing and alignment. It helps content reflow across screen sizes while maintaining consistent spacing and proportions.",
        "tip": "Grid questions are usually about responsive layout, alignment, and structure."
      },
      {
        "id": 44,
        "category": "SLDS",
        "select": 1,
        "question": "A utility icon communicates an important action. What additional accessibility support is required?",
        "options": [
          "Rely on the icon shape alone",
          "Provide a clear accessible name or assistive text and an adequate target size",
          "Make it visible only on hover",
          "Use the same icon for unrelated actions"
        ],
        "answers": [
          1
        ],
        "explanation": "Icons must have a programmatically available name when they communicate meaning or trigger an action. Adequate target size and consistent use also improve operability and comprehension.",
        "tip": "An icon's visual meaning is not automatically available to a screen reader."
      },
      {
        "id": 45,
        "category": "SLDS",
        "select": 1,
        "question": "Which treatment best supports keyboard users?",
        "options": [
          "Remove focus outlines for a cleaner appearance",
          "Provide a visible focus indicator and a logical focus order",
          "Require a mouse for all controls",
          "Move focus unpredictably after every click"
        ],
        "answers": [
          1
        ],
        "explanation": "Keyboard users need to know which element is active and move through controls in a meaningful sequence. Focus should remain visible and should only move programmatically when the interaction clearly requires it.",
        "tip": "Never trade away visible focus for aesthetics."
      },
      {
        "id": 46,
        "category": "SLDS",
        "select": 1,
        "question": "What does an SLDS component blueprint primarily provide?",
        "options": [
          "A finished business process with organization-specific logic",
          "Recommended markup structure, classes, variants, states, and usage guidance",
          "A Salesforce license",
          "A replacement for user research"
        ],
        "answers": [
          1
        ],
        "explanation": "A blueprint documents the structure and styling conventions for a component pattern. Teams still need to implement behavior, data, accessibility details, and business logic appropriate to their context.",
        "tip": "Blueprints guide implementation; they are not complete applications."
      },
      {
        "id": 47,
        "category": "SLDS",
        "select": 1,
        "question": "A developer wants to restyle a Lightning base component by targeting its internal rendered classes. What is the best guidance?",
        "options": [
          "Do it because internal markup never changes",
          "Avoid internal class overrides; use documented variants, utility classes, or supported styling hooks",
          "Use an exact class-string selector",
          "Modify Salesforce's source code"
        ],
        "answers": [
          1
        ],
        "explanation": "Internal markup and classes of base components are implementation details and can change. Salesforce identifies direct SLDS class overrides and dependence on rendered markup as styling anti-patterns.",
        "tip": "Supported extension points are stable; internal implementation details are not."
      },
      {
        "id": 48,
        "category": "SLDS",
        "select": 1,
        "question": "A custom interface uses a different icon style, spacing scale, and button behavior on every page. Which design-system action provides the greatest long-term value?",
        "options": [
          "Continue adding one-off exceptions",
          "Standardize reusable patterns and components, document decisions, and govern contributions",
          "Hide the inconsistencies with animation",
          "Create more unrelated color palettes"
        ],
        "answers": [
          1
        ],
        "explanation": "A design system creates value through reuse and governance. Standard patterns reduce cognitive load for users and duplicated effort for teams, while documentation and contribution rules help the system remain coherent over time.",
        "tip": "The long-term answer is usually systematic reuse and governance, not another isolated fix."
      },
      {
        "id": 49,
        "category": "Discovery",
        "select": 1,
        "question": "Interviews reveal several possible usability problems, but the team needs to understand how common each problem is across 2,000 users. What should the designer do next?",
        "options": [
          "Choose the problem mentioned by the most senior stakeholder",
          "Build every requested feature",
          "Run a structured survey with a representative sample",
          "Replace interviews with a brand workshop"
        ],
        "answers": [
          2
        ],
        "explanation": "Interviews are strong for discovering themes and understanding why problems occur. A structured survey can then quantify how widespread those themes are across a larger representative population.",
        "tip": "Use qualitative research to discover and explain; use quantitative research to measure prevalence or magnitude."
      },
      {
        "id": 50,
        "category": "Discovery",
        "select": 1,
        "question": "Sales, service, and compliance stakeholders disagree about the goals of a new onboarding experience. Which artifact should the designer create first to clarify influence, needs, and decision ownership?",
        "options": [
          "A production dashboard",
          "A stakeholder map",
          "A color-contrast matrix",
          "A component blueprint"
        ],
        "answers": [
          1
        ],
        "explanation": "A stakeholder map identifies who is affected, who has influence, what each group needs, and where decision authority sits. This makes conflicts visible before the team commits to a solution.",
        "tip": "When the challenge is alignment among people, choose a stakeholder or decision-mapping activity before interface design."
      },
      {
        "id": 51,
        "category": "Discovery",
        "select": 1,
        "question": "Analytics show that users abandon a flow on step three. What additional research would best explain why they leave?",
        "options": [
          "Increase the sample size of the same analytics report only",
          "Change the company logo",
          "Remove step three without investigation",
          "Observe users attempting the flow and ask neutral follow-up questions"
        ],
        "answers": [
          3
        ],
        "explanation": "Analytics reveal where behavior occurs, but direct observation and neutral interviews help explain the motivations, confusion, missing information, or environmental constraints behind that behavior.",
        "tip": "Behavioral data often tells you what and where; qualitative research helps reveal why."
      },
      {
        "id": 52,
        "category": "Discovery",
        "select": 1,
        "question": "A help center contains duplicate, outdated, and inconsistently labeled articles. Which discovery activity should precede a new content structure?",
        "options": [
          "Perform a content inventory and audit",
          "Add more navigation levels immediately",
          "Convert every article into a video",
          "Rename database objects"
        ],
        "answers": [
          0
        ],
        "explanation": "A content inventory documents what exists, while an audit evaluates accuracy, duplication, ownership, usefulness, and gaps. The findings provide evidence for consolidation and a clearer information architecture.",
        "tip": "Before reorganizing content, understand the current content set and its quality."
      },
      {
        "id": 53,
        "category": "Discovery",
        "select": 1,
        "question": "A designer is planning an experience that shows accounts, contacts, cases, and assets together. What should be clarified during discovery?",
        "options": [
          "Only the preferred button color",
          "The designer's personal navigation habits",
          "The relationships among the objects and which records users need in each task",
          "The maximum number of animations per page"
        ],
        "answers": [
          2
        ],
        "explanation": "Salesforce experiences depend on the underlying data model. Understanding object relationships and task-specific information needs helps the designer present connected data without creating misleading or redundant structures.",
        "tip": "When a scenario names several Salesforce records, examine data relationships before choosing the page structure."
      },
      {
        "id": 54,
        "category": "Discovery",
        "select": 1,
        "question": "Which interview question is least likely to lead a participant?",
        "options": [
          "Wouldn't a guided wizard make this easier?",
          "Tell me about the last time you created a case",
          "Do you agree that the current page is confusing?",
          "Which of our two proposed solutions do you prefer?"
        ],
        "answers": [
          1
        ],
        "explanation": "Asking about a recent real experience encourages concrete evidence without implying a preferred answer. The other questions introduce assumptions or constrain the participant to solutions chosen by the team.",
        "tip": "Ask about past behavior and specific examples rather than asking users to confirm your idea."
      },
      {
        "id": 55,
        "category": "Discovery",
        "select": 1,
        "question": "Research participants describe a slow approval process, but observation shows that most delay occurs while they search for missing information. What should the problem statement emphasize?",
        "options": [
          "The participants' first explanation without qualification",
          "A predetermined need for custom code",
          "The number of stakeholders in the meeting",
          "The evidence-based information-finding barrier"
        ],
        "answers": [
          3
        ],
        "explanation": "A useful problem statement reflects the validated user need and context. Observation has identified a more specific barrier than the initial description, so the team should frame the problem around finding required information.",
        "tip": "Separate the user's reported symptom from the root cause supported by evidence."
      },
      {
        "id": 56,
        "category": "UX Fundamentals",
        "select": 1,
        "question": "A record page contains many elements with equal visual emphasis. Users struggle to identify what to do first. What should the designer improve?",
        "options": [
          "Visual hierarchy using size, position, spacing, and emphasis",
          "The number of decorative icons",
          "The database storage limit",
          "The user's profile permissions"
        ],
        "answers": [
          0
        ],
        "explanation": "Visual hierarchy guides attention by making primary information and actions more prominent than supporting content. Size, placement, grouping, spacing, and contrast should communicate importance consistently.",
        "tip": "When users cannot tell what matters first, think hierarchy rather than adding more content."
      },
      {
        "id": 57,
        "category": "UX Fundamentals",
        "select": 1,
        "question": "A status is communicated only by changing a field from green to red. What is the main accessibility problem?",
        "options": [
          "The status uses too few database fields",
          "The page contains no animation",
          "Color is being used as the only cue",
          "The colors are part of the corporate brand"
        ],
        "answers": [
          2
        ],
        "explanation": "Users with color-vision differences or nonvisual access may not perceive the change. Add text, an icon with an accessible name, or another redundant cue while maintaining sufficient contrast.",
        "tip": "Never rely on color alone to communicate meaning, state, or required action."
      },
      {
        "id": 58,
        "category": "UX Fundamentals",
        "select": 1,
        "question": "A form shows validation errors only after submission and lists them at the top without identifying the fields. What improvement best supports recovery?",
        "options": [
          "Clear the entire form after each error",
          "Place clear error messages near the affected fields and preserve entered data",
          "Use a generic message that says Invalid",
          "Hide required-field indicators"
        ],
        "answers": [
          1
        ],
        "explanation": "Specific, field-level feedback helps users locate and correct problems efficiently. Preserving their input prevents unnecessary rework and frustration.",
        "tip": "Good error handling explains what happened, where it happened, and how to fix it."
      },
      {
        "id": 59,
        "category": "UX Fundamentals",
        "select": 1,
        "question": "Which design best follows recognition rather than recall?",
        "options": [
          "Require users to remember record IDs",
          "Hide actions until users enter an undocumented command",
          "Use unlabeled icons for every task",
          "Show recently used records and clearly labeled choices"
        ],
        "answers": [
          3
        ],
        "explanation": "Recognition reduces memory demand by making relevant choices and context visible. Requiring users to remember identifiers or hidden commands increases cognitive load and error risk.",
        "tip": "Prefer visible choices, examples, defaults, and context over memorization."
      },
      {
        "id": 60,
        "category": "UX Fundamentals",
        "select": 1,
        "question": "A desktop experience reveals important instructions only when the pointer hovers over an icon. Why is this unsuitable for a mobile-first design?",
        "options": [
          "Touch devices do not provide a reliable hover interaction",
          "Mobile devices cannot display icons",
          "Responsive pages cannot include instructions",
          "Salesforce Mobile supports only text fields"
        ],
        "answers": [
          0
        ],
        "explanation": "Hover is not consistently available on touch devices and may also be inaccessible to keyboard users. Important information should be discoverable through visible text or an operable control.",
        "tip": "Do not make critical content depend on hover. Design for touch, keyboard, and assistive technology."
      },
      {
        "id": 61,
        "category": "UX Fundamentals",
        "select": 1,
        "question": "A user clicks Save, but the interface appears unchanged for several seconds. Which UX principle is missing?",
        "options": [
          "Data normalization",
          "Stakeholder mapping",
          "Timely system feedback",
          "Brand differentiation"
        ],
        "answers": [
          2
        ],
        "explanation": "The interface should acknowledge the action with a loading state, disabled control, progress indicator, or confirmation. Feedback reassures users that the system received the request and helps prevent duplicate actions.",
        "tip": "Every meaningful user action should produce a clear and timely response from the system."
      },
      {
        "id": 62,
        "category": "UX Fundamentals",
        "select": 1,
        "question": "Marketing requests a highly branded Salesforce experience. Which approach best balances brand identity and usability?",
        "options": [
          "Replace every standard control with an unfamiliar custom interaction",
          "Apply brand elements consistently while preserving familiar interaction patterns, readability, and accessibility",
          "Use brand colors regardless of contrast",
          "Remove labels so the interface looks minimal"
        ],
        "answers": [
          1
        ],
        "explanation": "Brand expression should reinforce trust and identity without making common tasks harder. Familiar patterns, sufficient contrast, clear labels, and consistency remain more important than visual novelty.",
        "tip": "Branding should support the experience, not override established usability and accessibility needs."
      },
      {
        "id": 63,
        "category": "UX Fundamentals",
        "select": 1,
        "question": "A page displays 30 fields in one uninterrupted column. Which change most directly improves scanning?",
        "options": [
          "Add a different background color to every field",
          "Remove all whitespace",
          "Repeat the same field in multiple sections",
          "Group related fields under clear headings and reveal secondary information progressively"
        ],
        "answers": [
          3
        ],
        "explanation": "Chunking related information and using progressive disclosure creates meaningful structure, reduces perceived complexity, and helps users locate the fields relevant to their current task.",
        "tip": "To reduce cognitive load, group, prioritize, and progressively disclose rather than merely shrinking content."
      },
      {
        "id": 64,
        "category": "Human-Centered Design",
        "select": 1,
        "question": "What should a journey map normally show in addition to process steps?",
        "options": [
          "User goals, touchpoints, emotions, pain points, and opportunities over time",
          "Only the Salesforce object API names",
          "Only the final screen layout",
          "A list of developers assigned to the project"
        ],
        "answers": [
          0
        ],
        "explanation": "A journey map visualizes the experience across time, including what users try to accomplish, where interactions occur, how they feel, and where the organization can improve the experience.",
        "tip": "Journey maps connect stages with the human experience, not just an internal workflow."
      },
      {
        "id": 65,
        "category": "Human-Centered Design",
        "select": 1,
        "question": "A team needs to understand how customer-facing support interactions depend on agents, policies, and backend systems. Which artifact is most appropriate?",
        "options": [
          "A mood board",
          "A database backup",
          "A service blueprint",
          "A typography scale"
        ],
        "answers": [
          2
        ],
        "explanation": "A service blueprint connects customer actions and frontstage interactions with backstage people, processes, systems, and support activities. It exposes operational dependencies behind the experience.",
        "tip": "Journey map focuses on the user's experience; service blueprint adds the organizational machinery that delivers it."
      },
      {
        "id": 66,
        "category": "Human-Centered Design",
        "select": 1,
        "question": "Which action best reflects relationship design?",
        "options": [
          "Maximize clicks regardless of user outcomes",
          "Design interactions that build trust, reciprocity, transparency, and long-term value for all participants",
          "Treat every interaction as an isolated screen",
          "Hide how customer data will be used"
        ],
        "answers": [
          1
        ],
        "explanation": "Relationship design considers the quality and sustainability of relationships among people, organizations, communities, and systems. Trust and mutual value are central outcomes.",
        "tip": "Look beyond task completion to the long-term relationship created by the experience."
      },
      {
        "id": 67,
        "category": "Human-Centered Design",
        "select": 1,
        "question": "A research plan includes only experienced desktop users even though the product serves new mobile users and people using assistive technology. What should the designer do?",
        "options": [
          "Continue because expert users are faster to recruit",
          "Ask stakeholders to imagine the excluded users",
          "Remove accessibility requirements",
          "Recruit participants that represent the full range of relevant contexts and abilities"
        ],
        "answers": [
          3
        ],
        "explanation": "Inclusive design requires involving people whose abilities, environments, devices, and experience levels reflect the real audience. Excluding them creates blind spots that can become systemic barriers.",
        "tip": "Design with excluded or underserved users, not only for an imagined average user."
      },
      {
        "id": 68,
        "category": "Human-Centered Design",
        "select": 1,
        "question": "During prototyping, users repeatedly misunderstand the same interaction. What is the most human-centered response?",
        "options": [
          "Revisit the assumptions, revise the prototype, and test again",
          "Train users to accept the original design",
          "Ignore the finding because development has not started",
          "Ask only the project sponsor to approve it"
        ],
        "answers": [
          0
        ],
        "explanation": "Human-centered design is iterative. Repeated misunderstanding is evidence that the concept or interaction needs revision, followed by another round of validation.",
        "tip": "Testing is not a final gate; it feeds the next design iteration."
      },
      {
        "id": 69,
        "category": "Human-Centered Design",
        "select": 1,
        "question": "A consent dialog makes Accept prominent and hides Decline behind several steps. Which ethical concern is most relevant?",
        "options": [
          "The interface uses progressive disclosure correctly",
          "The experience has too much whitespace",
          "The design manipulates choice through a dark pattern",
          "The data model needs a master-detail relationship"
        ],
        "answers": [
          2
        ],
        "explanation": "A dark pattern steers users toward an outcome that may not align with their interests or informed choice. Ethical design presents meaningful options transparently and with comparable clarity.",
        "tip": "A choice is not truly informed when the interface intentionally makes one option difficult to find or select."
      },
      {
        "id": 70,
        "category": "Declarative Design",
        "select": 1,
        "question": "A company needs to track a new business entity that does not fit Accounts, Contacts, Opportunities, Cases, or another standard object. What is the most appropriate declarative approach?",
        "options": [
          "Rename an unrelated standard object",
          "Create a custom object with the required fields and relationships",
          "Store every value in a single text field",
          "Create a dashboard without storing records"
        ],
        "answers": [
          1
        ],
        "explanation": "A custom object is appropriate when a distinct business entity needs its own records, fields, relationships, security, and user experience. Standard objects should be used when their purpose matches the requirement.",
        "tip": "Use standard objects for their intended business concepts; use a custom object for a genuinely new entity."
      },
      {
        "id": 71,
        "category": "Declarative Design",
        "select": 1,
        "question": "Two sales processes need different opportunity stages, page layouts, and picklist values. Which configuration best supports this?",
        "options": [
          "A single page layout for every user",
          "A dashboard filter",
          "A utility bar item",
          "Record types combined with sales processes and assigned page layouts"
        ],
        "answers": [
          3
        ],
        "explanation": "Record types can present different business processes, picklist values, and page layouts to different groups. This supports meaningful variation without creating separate objects.",
        "tip": "When the same object needs different processes and presentations, think record types plus layouts."
      },
      {
        "id": 72,
        "category": "Declarative Design",
        "select": 1,
        "question": "A field should appear on an opportunity record only when the deal type is Partner. Which feature should the designer recommend?",
        "options": [
          "Dynamic Forms field visibility rules",
          "A separate dashboard",
          "A custom login page",
          "A new standard object"
        ],
        "answers": [
          0
        ],
        "explanation": "Dynamic Forms can place fields and sections as individual components and control their visibility based on record data, user attributes, or other supported criteria.",
        "tip": "Use Dynamic Forms when the requirement is conditional field or section visibility on supported record pages."
      },
      {
        "id": 73,
        "category": "Declarative Design",
        "select": 1,
        "question": "Users need an object-specific workspace that changes according to the record they are viewing. What should be configured in Lightning App Builder?",
        "options": [
          "A login flow",
          "A report folder",
          "A Lightning record page",
          "A global value set"
        ],
        "answers": [
          2
        ],
        "explanation": "A Lightning record page defines the component-based experience for a specific object record. It can be assigned by app, record type, and profile as supported.",
        "tip": "Record page = one record's workspace; app page = standalone custom page; home page = Lightning home experience."
      },
      {
        "id": 74,
        "category": "Declarative Design",
        "select": 1,
        "question": "Sales representatives need stage-specific guidance and key fields while moving opportunities through a defined process. Which feature is best?",
        "options": [
          "Themes and Branding",
          "Path",
          "A joined report",
          "A custom tab containing a static image"
        ],
        "answers": [
          1
        ],
        "explanation": "Path highlights the current stage, key fields, and guidance for success. It supports users through a sequence tied to a picklist such as Opportunity Stage.",
        "tip": "When the requirement mentions stages, key fields, and guidance, Path is a strong candidate."
      },
      {
        "id": 75,
        "category": "Declarative Design",
        "select": 1,
        "question": "Service agents need constant access to notes and history while moving between records in a Lightning app. Which global app feature can reduce navigation?",
        "options": [
          "Record type",
          "Validation rule",
          "Compact layout",
          "Utility bar"
        ],
        "answers": [
          3
        ],
        "explanation": "The utility bar gives users persistent access to productivity tools within a Lightning app, reducing the need to leave their current context.",
        "tip": "Utility bar items are persistent app-level tools, not record-specific page sections."
      },
      {
        "id": 76,
        "category": "Declarative Design",
        "select": 1,
        "question": "A new feature is available to a small group of users, and the team wants a contextual message pointing to the feature the first time they encounter it. What should the designer consider?",
        "options": [
          "A targeted in-app guidance prompt",
          "A new custom object",
          "A public dashboard",
          "A duplicate rule"
        ],
        "answers": [
          0
        ],
        "explanation": "In-app guidance can deliver contextual prompts or walkthroughs to targeted users at relevant locations. It is suited to onboarding, feature discovery, and adoption support.",
        "tip": "Choose in-app guidance when users need contextual learning inside the product."
      },
      {
        "id": 77,
        "category": "Declarative Design",
        "select": 1,
        "question": "Executives need a visual summary of pipeline value, win rate, and performance trends. Which declarative solution is most appropriate?",
        "options": [
          "A page layout with every opportunity field",
          "A utility icon",
          "Reports feeding dashboard components",
          "A custom object with no records"
        ],
        "answers": [
          2
        ],
        "explanation": "Reports organize and aggregate record data, while dashboards present selected metrics visually. Together they support monitoring and decision-making without requiring users to inspect individual records.",
        "tip": "Reports answer detailed data questions; dashboards surface key metrics and trends at a glance."
      },
      {
        "id": 78,
        "category": "Declarative Design",
        "select": 1,
        "question": "Which configuration controls the fields shown in a record's highlights panel in Lightning Experience?",
        "options": [
          "The report type",
          "The compact layout assigned to the record type",
          "The utility bar",
          "The app's navigation style"
        ],
        "answers": [
          1
        ],
        "explanation": "The highlights panel uses the primary compact layout to display key record fields. Selecting concise, decision-relevant fields improves scanning.",
        "tip": "Page layout controls broader record detail; compact layout supplies key fields for the highlights panel and mobile record header."
      },
      {
        "id": 79,
        "category": "Declarative Design",
        "select": 1,
        "question": "Users need to create the same type of related record from several places in Salesforce. Which feature provides a broadly accessible creation action?",
        "options": [
          "A field history report",
          "A record type description",
          "A theme",
          "A global action"
        ],
        "answers": [
          3
        ],
        "explanation": "Global actions can be available from multiple locations and can create records or perform other supported actions without requiring users to begin on a specific parent record.",
        "tip": "Global actions are broadly accessible; object-specific actions depend on the current record context."
      },
      {
        "id": 80,
        "category": "Declarative Design",
        "select": 1,
        "question": "A sales manager wants representatives to view opportunities grouped by stage and move records between stages visually. Which standard feature best fits?",
        "options": [
          "Kanban view for an appropriate list view",
          "A static HTML page",
          "Themes and Branding",
          "A compact layout"
        ],
        "answers": [
          0
        ],
        "explanation": "Kanban provides a visual representation of records grouped by a selected field and can support moving records between columns when the configuration and permissions allow it.",
        "tip": "Kanban is useful for visually managing records across stages or statuses."
      },
      {
        "id": 81,
        "category": "Declarative Design",
        "select": 1,
        "question": "Agents need a preconfigured action on the Case record that opens a short form with only the fields required to escalate the case. What should be used?",
        "options": [
          "A new home page",
          "A dashboard subscription",
          "An object-specific quick action",
          "A navigation menu label"
        ],
        "answers": [
          2
        ],
        "explanation": "An object-specific quick action can provide a focused form and maintain the context of the current record. Limiting the action layout to necessary fields makes the task faster and clearer.",
        "tip": "Quick actions support focused, contextual tasks without exposing the entire record edit experience."
      },
      {
        "id": 82,
        "category": "Declarative Design",
        "select": 1,
        "question": "A record page is cluttered because several long related lists push critical information far below the fold. What is the best declarative redesign?",
        "options": [
          "Add every available related list",
          "Prioritize key related data and organize secondary content with tabs, accordions, or appropriate related-list components",
          "Remove all section labels",
          "Use a different font for each relationship"
        ],
        "answers": [
          1
        ],
        "explanation": "Component-based organization and prioritization reduce scrolling while preserving access to supporting information. The page should reflect task importance rather than display every relationship equally.",
        "tip": "Use tabs and progressive disclosure to manage secondary record information, but keep critical content visible."
      },
      {
        "id": 83,
        "category": "Declarative Design",
        "select": 1,
        "question": "A process requires users to complete several guided screens, make decisions, and create records without custom code. Which tool is most appropriate?",
        "options": [
          "A static dashboard",
          "A compact layout",
          "A theme",
          "A Screen Flow"
        ],
        "answers": [
          3
        ],
        "explanation": "Screen Flows can guide users through multi-step interactions, collect input, apply logic, and perform data actions declaratively. They are suitable when a focused wizard improves task completion.",
        "tip": "When users need a guided multi-step process with logic and data updates, consider Screen Flow."
      },
      {
        "id": 84,
        "category": "Testing",
        "select": 1,
        "question": "During a moderated usability test, what is the main value of asking participants to think aloud?",
        "options": [
          "It reveals expectations, interpretations, and decision points while they attempt tasks",
          "It guarantees statistically significant results",
          "It replaces observation",
          "It teaches participants the correct workflow"
        ],
        "answers": [
          0
        ],
        "explanation": "Think-aloud comments provide insight into the participant's mental model and moments of uncertainty. The moderator should avoid leading or turning the session into training.",
        "tip": "Listen for reasoning while still prioritizing observed behavior over explanations alone."
      },
      {
        "id": 85,
        "category": "Testing",
        "select": 1,
        "question": "When is a focus group more useful than an individual usability test?",
        "options": [
          "When measuring whether one person can complete a task without help",
          "When checking keyboard focus order",
          "When exploring attitudes, language, and reactions generated through group discussion",
          "When validating server response time"
        ],
        "answers": [
          2
        ],
        "explanation": "Focus groups are suited to discussing perceptions, beliefs, and concepts. They are not ideal for measuring individual task performance because group dynamics can influence responses.",
        "tip": "Focus group = discussion and attitudes; usability test = individual behavior while completing tasks."
      },
      {
        "id": 86,
        "category": "Testing",
        "select": 1,
        "question": "A team wants early feedback on the sequence and labels of a new flow before investing in visual polish. Which prototype is most efficient?",
        "options": [
          "A fully integrated production build",
          "A low-fidelity clickable prototype",
          "A final brand campaign",
          "A performance test script"
        ],
        "answers": [
          1
        ],
        "explanation": "Low-fidelity prototypes are fast to create and change, making them appropriate for validating structure, task flow, and terminology before expensive implementation or visual refinement.",
        "tip": "Match prototype fidelity to the question you need to answer. Do not build more than necessary."
      },
      {
        "id": 87,
        "category": "Testing",
        "select": 1,
        "question": "Which participant group gives the strongest evidence for testing a new mobile case workflow?",
        "options": [
          "Only members of the design team",
          "Any available employees regardless of role",
          "Only the executive sponsor",
          "Representative case users who perform the workflow in relevant mobile contexts"
        ],
        "answers": [
          3
        ],
        "explanation": "Participants should reflect the target users' responsibilities, experience levels, devices, environments, and access needs. Convenience samples can miss important barriers.",
        "tip": "Recruit for behavior and context, not merely availability."
      },
      {
        "id": 88,
        "category": "Testing",
        "select": 1,
        "question": "An automated accessibility scan reports no errors. What should the team conclude?",
        "options": [
          "Automated checks should be supplemented with manual keyboard, screen-reader, visual, and user testing",
          "The experience is fully accessible",
          "Accessibility testing is complete for every disability",
          "Usability testing is unnecessary"
        ],
        "answers": [
          0
        ],
        "explanation": "Automated tools detect only certain rule-based issues. Manual inspection and testing with assistive technologies and people with disabilities are necessary to evaluate interaction, meaning, focus behavior, and real usability.",
        "tip": "Automated accessibility testing is valuable but never complete on its own."
      },
      {
        "id": 89,
        "category": "Testing",
        "select": 1,
        "question": "A test produces 25 findings. How should the team prioritize design changes?",
        "options": [
          "Fix findings in alphabetical order",
          "Implement only comments from the most senior participant",
          "Consider severity, frequency, task impact, accessibility risk, and effort",
          "Ignore issues that occur before launch"
        ],
        "answers": [
          2
        ],
        "explanation": "Prioritization should reflect how seriously an issue blocks users, how often it occurs, who is affected, and the consequences for critical tasks and accessibility, balanced with implementation effort.",
        "tip": "Do not treat every observation as equally important; prioritize by user and business impact."
      },
      {
        "id": 90,
        "category": "SLDS",
        "select": 1,
        "question": "A designer needs implementation guidance for a standard component pattern, including anatomy, states, variants, and accessibility notes. Where should the designer look first?",
        "options": [
          "An unrelated custom stylesheet",
          "The relevant SLDS component documentation and blueprint",
          "A database schema diagram",
          "A report subscription"
        ],
        "answers": [
          1
        ],
        "explanation": "SLDS documentation describes supported component patterns, structure, usage, variants, states, and accessibility expectations. Starting there promotes consistency and maintainability.",
        "tip": "Use design-system documentation before inventing a new pattern."
      },
      {
        "id": 91,
        "category": "SLDS",
        "select": 1,
        "question": "A dialog contains Save, Save and New, Cancel, Delete, and Help buttons with identical emphasis. What should the designer do?",
        "options": [
          "Make every button a brand button",
          "Remove all button labels",
          "Use icons with no accessible names",
          "Establish a clear action hierarchy with one primary action and appropriate neutral or destructive treatments"
        ],
        "answers": [
          3
        ],
        "explanation": "Button emphasis should communicate priority and risk. A clear primary action, neutral secondary actions, and an appropriate destructive treatment reduce ambiguity and accidental actions.",
        "tip": "Too many primary buttons eliminate hierarchy. Emphasis should match importance and consequence."
      },
      {
        "id": 92,
        "category": "SLDS",
        "select": 1,
        "question": "A custom component needs standard margin, alignment, and text-treatment adjustments. What should the developer prefer before writing custom CSS?",
        "options": [
          "Supported SLDS utility classes",
          "Selectors targeting internal base-component markup",
          "Inline styles on every element",
          "A duplicate component for each spacing variation"
        ],
        "answers": [
          0
        ],
        "explanation": "SLDS utility classes provide supported, consistent adjustments for common layout, spacing, alignment, and text needs. They reduce custom CSS and help the component stay aligned with the design system.",
        "tip": "Use documented utilities for common adjustments; reserve custom CSS for needs the system does not support."
      },
      {
        "id": 93,
        "category": "SLDS",
        "select": 1,
        "question": "Which SLDS icon category is generally intended for common interface actions such as search, settings, close, or refresh?",
        "options": [
          "Standard object icons",
          "Doctype icons",
          "Utility icons",
          "Custom object icons"
        ],
        "answers": [
          2
        ],
        "explanation": "Utility icons represent common actions and interface concepts. Standard, custom, and doctype icons primarily identify records, object types, or file types.",
        "tip": "Choose icons by semantic purpose, not visual preference. Utility icons usually represent generic UI actions."
      },
      {
        "id": 94,
        "category": "SLDS",
        "select": 1,
        "question": "A status badge uses low-contrast text and color alone to distinguish success from failure. Which revision is best?",
        "options": [
          "Increase saturation only",
          "Use sufficient contrast and pair color with clear text or another semantic cue",
          "Remove the status label",
          "Animate the badge continuously"
        ],
        "answers": [
          1
        ],
        "explanation": "Accessible status communication requires readable contrast and redundant meaning that does not depend solely on color. Clear text also improves comprehension for all users.",
        "tip": "Contrast and non-color cues solve different accessibility problems; use both."
      },
      {
        "id": 95,
        "category": "SLDS",
        "select": 1,
        "question": "When a modal opens, where should keyboard focus generally move?",
        "options": [
          "To the browser address bar",
          "Behind the modal",
          "To a random page element",
          "Into the modal at an appropriate element, while focus remains contained until the modal closes"
        ],
        "answers": [
          3
        ],
        "explanation": "A modal should move focus into its active context, maintain a logical focus sequence within it, support closing by keyboard, and return focus appropriately when dismissed.",
        "tip": "Focus management must follow the user's interaction context, especially for dialogs and overlays."
      },
      {
        "id": 96,
        "category": "SLDS",
        "select": 1,
        "question": "A two-column component should become one column on small screens. Which SLDS capability is designed for this?",
        "options": [
          "Responsive grid sizing and breakpoint classes",
          "Record ownership rules",
          "Duplicate management",
          "Report bucketing"
        ],
        "answers": [
          0
        ],
        "explanation": "The SLDS grid and responsive sizing utilities allow columns to change width or stack at defined viewport ranges while retaining consistent layout behavior.",
        "tip": "Use the grid for responsive structure rather than hardcoded pixel positioning."
      },
      {
        "id": 97,
        "category": "SLDS",
        "select": 1,
        "question": "A component has no data because the user has not created any records yet. What should an effective empty state provide?",
        "options": [
          "A blank white region",
          "A technical stack trace",
          "A concise explanation and a relevant next action when one is available",
          "A disabled page with no guidance"
        ],
        "answers": [
          2
        ],
        "explanation": "An empty state should explain why content is absent and help users move forward, such as creating the first record or adjusting a filter. It should remain concise and relevant.",
        "tip": "Empty states are part of the product experience, not missing design."
      },
      {
        "id": 98,
        "category": "SLDS",
        "select": 1,
        "question": "A form control has visible text nearby, but the text is not programmatically associated with the input. What is the best fix?",
        "options": [
          "Rely on placeholder text only",
          "Use a correctly associated label and connect error or help text with supported accessible markup",
          "Use color to imply the field name",
          "Remove the visible text"
        ],
        "answers": [
          1
        ],
        "explanation": "Programmatic label association enables assistive technology to announce the field's purpose. Supported relationships for help and error text provide necessary context when the field receives focus.",
        "tip": "Visual proximity does not create an accessible name; labels and relationships must exist in the markup."
      },
      {
        "id": 99,
        "category": "SLDS",
        "select": 1,
        "question": "A team needs to customize a supported component's appearance without depending on its internal DOM. Which approach is most appropriate when available?",
        "options": [
          "Target undocumented internal classes",
          "Copy the rendered HTML into the application",
          "Use global !important rules",
          "Use documented styling hooks or supported component variants"
        ],
        "answers": [
          3
        ],
        "explanation": "Supported styling hooks and variants are intended extension points. Internal markup can change between releases, so selectors that depend on it are fragile and can break accessibility or visual consistency.",
        "tip": "Customize through public contracts, not implementation details."
      },
      {
        "id": 100,
        "category": "SLDS",
        "select": 1,
        "question": "Several product teams propose new versions of the same pattern. What design-system governance practice best prevents fragmentation?",
        "options": [
          "Define contribution criteria, review proposals, document decisions, and maintain a shared canonical pattern",
          "Allow every team to publish an unrelated version",
          "Remove all documentation",
          "Freeze the system so no improvement is possible"
        ],
        "answers": [
          0
        ],
        "explanation": "Governance provides a transparent process for evaluating needs, consolidating duplicates, documenting rationale, and evolving shared patterns without losing consistency.",
        "tip": "A healthy design system balances consistency with a governed path for change."
      }
    ]
  },
  {
    "id": "platform-administrator",
    "title": "Salesforce Platform Administrator",
    "pageTitle": "Salesforce Platform Administrator Certification Study Lab",
    "shortTitle": "Platform Administrator",
    "code": "ADM",
    "path": "certifications/platform-administrator",
    "sourceFile": "salesforce_platform_administrator_study_lab.html",
    "description": "Practica escenarios reales de administracion, seguridad, datos, automatizacion y Agentforce con feedback inmediato.",
    "heroCopy": "Practica los dominios actuales con escenarios realistas de administrador. Selecciona tus respuestas para revelar la opcion correcta, una explicacion y un tip de examen.",
    "reasoning": "Separa permisos de sharing, identifica el objeto y proceso de negocio, y despues elige la capacidad Salesforce mas nativa y mantenible.",
    "habits": "Lee cada calificador: best, most efficient, without code, select two y based on record ownership suelen cambiar la respuesta.",
    "integrity": "Este lab contiene preguntas originales creadas desde objetivos publicos y documentacion Salesforce. No reproduce contenido restringido del examen.",
    "blueprintNote": "El banco contiene preguntas distribuidas cerca del peso publicado para cada dominio.",
    "blueprint": [
      {
        "label": "Configuration and Setup",
        "weight": 15
      },
      {
        "label": "Object Manager and Lightning App Builder",
        "weight": 15
      },
      {
        "label": "Sales and Marketing Applications",
        "weight": 10
      },
      {
        "label": "Service and Support Applications",
        "weight": 10
      },
      {
        "label": "Productivity and Collaboration",
        "weight": 10
      },
      {
        "label": "Data and Analytics Management",
        "weight": 17
      },
      {
        "label": "Automation",
        "weight": 15
      },
      {
        "label": "Agentforce",
        "weight": 8
      }
    ],
    "resources": [
      {
        "title": "Platform Administrator Credential",
        "url": "https://trailhead.salesforce.com/credentials/administrator",
        "description": "Pagina oficial de la credencial y preparacion recomendada."
      },
      {
        "title": "Administrator Certification Prep Trail",
        "url": "https://trailhead.salesforce.com/content/learn/trails/administrator-certification-prep",
        "description": "Trail oficial de preparacion para dominios del examen."
      },
      {
        "title": "Trailblazer Community: Salesforce Admin",
        "url": "https://trailhead.salesforce.com/trailblazer-community/topics/admin",
        "description": "Consejos de estudio, preguntas y discusion de especialistas."
      }
    ],
    "categoryOrder": [
      "All",
      "Configuration and Setup",
      "Object Manager and Lightning App Builder",
      "Sales and Marketing Applications",
      "Service and Support Applications",
      "Productivity and Collaboration",
      "Data and Analytics Management",
      "Automation",
      "Agentforce"
    ],
    "questions": [
      {
        "id": 1,
        "category": "Configuration and Setup",
        "select": 1,
        "question": "Two sales users have the same profile, but only one of them should be allowed to export reports. What should the administrator use?",
        "options": [
          "Create a second role",
          "Assign a permission set to the individual user",
          "Change the organization-wide defaults",
          "Create a sharing rule"
        ],
        "answers": [
          1
        ],
        "explanation": "A permission set grants additional permissions to selected users without changing the baseline access provided by their profile. Roles and sharing settings control record visibility, not system permissions such as exporting reports.",
        "tip": "Profiles provide the baseline. Permission sets add exceptions. Sharing tools answer a different question: which records can the user see?"
      },
      {
        "id": 2,
        "category": "Configuration and Setup",
        "select": 1,
        "question": "Opportunity organization-wide defaults are Private. Sales managers must automatically see opportunities owned by users below them. Which feature provides this access?",
        "options": [
          "Role hierarchy",
          "Permission set group",
          "Login IP ranges",
          "Field-level security"
        ],
        "answers": [
          0
        ],
        "explanation": "The role hierarchy can open record access upward so managers can see records owned by users below them when organization-wide defaults are restrictive. Permission sets and field-level security control permissions, not hierarchical record visibility.",
        "tip": "Think of record access as layers: organization-wide defaults establish the floor, then role hierarchy, sharing rules, teams, and manual sharing can open access."
      },
      {
        "id": 3,
        "category": "Configuration and Setup",
        "select": 1,
        "question": "All high-value accounts in the Healthcare industry must be shared read-only with a cross-functional public group. What is the most maintainable solution?",
        "options": [
          "A criteria-based sharing rule",
          "A new profile",
          "A compact layout",
          "A validation rule"
        ],
        "answers": [
          0
        ],
        "explanation": "A criteria-based sharing rule automatically shares records that meet field-based conditions with roles, roles and subordinates, or public groups. It is designed for repeatable record access beyond the organization-wide defaults.",
        "tip": "When access depends on record values rather than ownership, look for a criteria-based sharing rule."
      },
      {
        "id": 4,
        "category": "Configuration and Setup",
        "select": 1,
        "question": "Users with a specific profile must be completely blocked from logging in outside the corporate network. Which setting should the administrator configure?",
        "options": [
          "Network Access trusted IP ranges",
          "Profile login IP ranges",
          "Session timeout",
          "A sharing rule"
        ],
        "answers": [
          1
        ],
        "explanation": "Login IP ranges on a profile restrict where users assigned to that profile can log in. Network Access trusted IP ranges reduce identity verification challenges but do not by themselves block login from other locations.",
        "tip": "Trusted IP ranges reduce verification. Profile login IP ranges enforce a hard login restriction."
      },
      {
        "id": 5,
        "category": "Configuration and Setup",
        "select": 2,
        "question": "An employee leaves unexpectedly. Which two actions best protect the org while preserving ownership and history?",
        "options": [
          "Freeze the user immediately",
          "Delete the user record",
          "Transfer important records and then deactivate the user",
          "Change every record to Public Read/Write"
        ],
        "answers": [
          0,
          2
        ],
        "explanation": "Freezing blocks login immediately while the administrator resolves dependencies. Salesforce users are normally deactivated rather than deleted, and their records can be transferred before deactivation so history remains intact.",
        "tip": "Freeze is immediate containment. Deactivate is the durable state. Users are preserved for audit history rather than deleted."
      },
      {
        "id": 6,
        "category": "Configuration and Setup",
        "select": 1,
        "question": "A user in France needs French date formats and number separators, while the rest of the org uses United States formatting. What should be changed?",
        "options": [
          "The user's locale",
          "The organization's fiscal year",
          "The user's role",
          "The account currency"
        ],
        "answers": [
          0
        ],
        "explanation": "A user's locale controls the display format for dates, times, names, addresses, numbers, and currencies. It does not alter record access or the organization's fiscal structure.",
        "tip": "Locale is presentation. Language controls translated labels. Time zone controls displayed time. Currency settings control monetary values."
      },
      {
        "id": 7,
        "category": "Configuration and Setup",
        "select": 1,
        "question": "A company's fiscal year begins on February 1 and follows normal calendar months. Which configuration is appropriate?",
        "options": [
          "A standard fiscal year with February as the start month",
          "A custom fiscal year using 4-4-5 periods",
          "A custom object for fiscal periods",
          "A user-level locale change"
        ],
        "answers": [
          0
        ],
        "explanation": "A standard fiscal year can begin in any month while retaining normal calendar months. Custom fiscal years are intended for nonstandard structures such as 4-4-5 accounting periods.",
        "tip": "A different starting month does not automatically require a custom fiscal year."
      },
      {
        "id": 8,
        "category": "Configuration and Setup",
        "select": 1,
        "question": "A regional operations lead should reset passwords and manage users only in one department without receiving full System Administrator access. What should be configured?",
        "options": [
          "Delegated administration",
          "A territory model",
          "A dashboard running user",
          "A queue"
        ],
        "answers": [
          0
        ],
        "explanation": "Delegated administration allows selected non-admin users to perform limited administrative tasks for specified users, roles, and custom objects. It follows least-privilege principles without granting unrestricted Setup access.",
        "tip": "When someone needs a narrow slice of administrative responsibility, consider delegated administration before a powerful profile."
      },
      {
        "id": 9,
        "category": "Object Manager and Lightning App Builder",
        "select": 1,
        "question": "An account must display the sum of Amount from all related custom Invoice records. Which relationship supports a native roll-up summary field?",
        "options": [
          "Lookup relationship",
          "Master-detail relationship",
          "External lookup relationship",
          "Indirect lookup relationship"
        ],
        "answers": [
          1
        ],
        "explanation": "Native roll-up summary fields operate across a master-detail relationship and are created on the master record. They can count, sum, and calculate minimum or maximum values from related detail records.",
        "tip": "Native roll-up summary usually signals master-detail. A plain lookup does not provide native roll-ups."
      },
      {
        "id": 10,
        "category": "Object Manager and Lightning App Builder",
        "select": 1,
        "question": "Students can enroll in many Courses, and each Course can have many Students. How should this many-to-many relationship be modeled?",
        "options": [
          "A junction object with two master-detail relationships",
          "A single formula field",
          "Two unrelated custom objects",
          "A hierarchy custom setting"
        ],
        "answers": [
          0
        ],
        "explanation": "A junction object represents the association between two objects and normally uses two master-detail relationships. Each junction record connects one Student to one Course, allowing many records on both sides.",
        "tip": "Many-to-many in Salesforce usually means a junction object between the two primary objects."
      },
      {
        "id": 11,
        "category": "Object Manager and Lightning App Builder",
        "select": 2,
        "question": "Two opportunity teams use different stage values and need different page layouts. Which two configurations work together to provide this experience?",
        "options": [
          "Sales processes",
          "Record types",
          "Public groups",
          "Sharing rules"
        ],
        "answers": [
          0,
          1
        ],
        "explanation": "A sales process controls the Opportunity Stage values available to a business process. Record types connect users to the appropriate business process, picklist values, and page layout assignment.",
        "tip": "Business processes control selected standard picklists. Record types package the process, picklist choices, and page layout experience."
      },
      {
        "id": 12,
        "category": "Object Manager and Lightning App Builder",
        "select": 1,
        "question": "A field should appear on a Lightning record page only when the High Priority checkbox is selected. What should the administrator use?",
        "options": [
          "Dynamic Forms field visibility",
          "A role hierarchy",
          "A report filter",
          "A lead assignment rule"
        ],
        "answers": [
          0
        ],
        "explanation": "Dynamic Forms lets administrators place fields and field sections as components and apply visibility rules based on record data, user attributes, or device form factor.",
        "tip": "Conditional field visibility on a Lightning page points to Dynamic Forms, not a traditional page layout alone."
      },
      {
        "id": 13,
        "category": "Object Manager and Lightning App Builder",
        "select": 2,
        "question": "Which two statements correctly distinguish page layouts from Lightning record pages?",
        "options": [
          "Page layouts control fields, related lists, and many actions available for a record",
          "Lightning App Builder controls page regions and component placement",
          "Page layouts determine organization-wide defaults",
          "Lightning pages replace field-level security"
        ],
        "answers": [
          0,
          1
        ],
        "explanation": "Page layouts control much of the record detail configuration, including fields, buttons, actions, and related lists. Lightning App Builder controls the composition of the Lightning page, such as tabs, regions, components, and conditional visibility. Neither overrides security.",
        "tip": "Page layout answers 'what record elements are available?' Lightning App Builder answers 'how are components arranged and shown?'"
      },
      {
        "id": 14,
        "category": "Object Manager and Lightning App Builder",
        "select": 1,
        "question": "A formula on Opportunity must display the parent Account's Industry value. Which formula capability should be used?",
        "options": [
          "A cross-object formula referencing the parent Account",
          "A roll-up summary on Opportunity",
          "A summary formula in a report only",
          "A workflow outbound message"
        ],
        "answers": [
          0
        ],
        "explanation": "A cross-object formula on a child record can reference fields from a related parent record. A roll-up summary works in the opposite direction by aggregating detail records onto a master.",
        "tip": "Cross-object formula pulls a parent value down. Roll-up summary aggregates child values up."
      },
      {
        "id": 15,
        "category": "Object Manager and Lightning App Builder",
        "select": 1,
        "question": "A child record must be allowed to exist without a parent and must retain its own owner and sharing behavior. Which relationship is most appropriate?",
        "options": [
          "Lookup relationship",
          "Master-detail relationship",
          "Many-to-many relationship only",
          "Self relationship is required"
        ],
        "answers": [
          0
        ],
        "explanation": "A lookup relationship is loosely coupled: the child can generally exist independently and retains its own ownership and sharing. In master-detail, the detail record depends on the master and inherits key behavior.",
        "tip": "Independent lifecycle and ownership usually indicate lookup. Tight dependency and inherited behavior indicate master-detail."
      },
      {
        "id": 16,
        "category": "Object Manager and Lightning App Builder",
        "select": 1,
        "question": "An administrator removes a custom field and later learns that users still need its historical data. What should the administrator check first?",
        "options": [
          "The Deleted Fields area in Object Manager",
          "The role hierarchy",
          "The campaign influence settings",
          "The AppExchange listing"
        ],
        "answers": [
          0
        ],
        "explanation": "Deleted custom fields are placed in the object's Deleted Fields area for a limited recovery period. Restoring the field can also restore its stored data, although dependencies and formulas should be reviewed.",
        "tip": "Deleting a custom field is not always immediately permanent, but recovery is time-limited and dependencies matter."
      },
      {
        "id": 17,
        "category": "Sales and Marketing Applications",
        "select": 1,
        "question": "What records can Salesforce create during a standard lead conversion?",
        "options": [
          "An account, a contact, and optionally an opportunity",
          "Only a campaign and a case",
          "A quote and an order only",
          "A user and a public group"
        ],
        "answers": [
          0
        ],
        "explanation": "Lead conversion creates or associates an Account and Contact and can optionally create an Opportunity. The original lead becomes converted and is no longer worked as an open lead.",
        "tip": "Lead conversion transforms a prospect into core sales records: Account, Contact, and optionally Opportunity."
      },
      {
        "id": 18,
        "category": "Sales and Marketing Applications",
        "select": 1,
        "question": "Marketing wants to distinguish campaign members who were Sent, Responded, Attended, or No Show for each campaign. What should be configured?",
        "options": [
          "Campaign member statuses",
          "Opportunity forecast categories",
          "Case statuses",
          "Account teams"
        ],
        "answers": [
          0
        ],
        "explanation": "Campaign member statuses track how leads and contacts progress within a specific campaign. Administrators can define the relevant status values and indicate which statuses count as responses.",
        "tip": "Campaign member status describes a person's participation in one campaign, not their general lead or contact status."
      },
      {
        "id": 19,
        "category": "Sales and Marketing Applications",
        "select": 1,
        "question": "A company sells products at different prices to retail and wholesale customers. Which Salesforce features should support this requirement?",
        "options": [
          "Multiple price books with products and price book entries",
          "Multiple role hierarchies",
          "Two recycle bins",
          "Case escalation rules"
        ],
        "answers": [
          0
        ],
        "explanation": "Products define what is sold, while price books and price book entries define the available prices. Opportunities can use the appropriate price book and include products as opportunity line items.",
        "tip": "Product is the item. Price book entry connects a product to a price in a specific price book."
      },
      {
        "id": 20,
        "category": "Sales and Marketing Applications",
        "select": 1,
        "question": "Different business units need different Opportunity Stage values and sales paths. Which configuration should the administrator use?",
        "options": [
          "Sales processes assigned through opportunity record types",
          "Case queues",
          "Account sharing rules only",
          "Dashboard filters"
        ],
        "answers": [
          0
        ],
        "explanation": "Sales processes define which Opportunity Stage values are available. Opportunity record types connect the appropriate sales process and page layout to each business unit or user group.",
        "tip": "For standard sales stages, remember the pair: sales process plus record type."
      },
      {
        "id": 21,
        "category": "Sales and Marketing Applications",
        "select": 3,
        "question": "A public website must capture leads, route them by country, and immediately send an appropriate confirmation email. Which three features should be used?",
        "options": [
          "Web-to-Lead",
          "An active lead assignment rule",
          "A lead auto-response rule",
          "A case escalation rule"
        ],
        "answers": [
          0,
          1,
          2
        ],
        "explanation": "Web-to-Lead captures submitted form data as leads. Lead assignment rules route the records, and auto-response rules send an immediate email based on record criteria. Case escalation rules apply to cases, not leads.",
        "tip": "Separate the flow into capture, routing, and response. Salesforce often provides a dedicated feature for each step."
      },
      {
        "id": 22,
        "category": "Service and Support Applications",
        "select": 1,
        "question": "Customers should submit support requests through a form on the company's website. Which standard capability should the administrator use?",
        "options": [
          "Web-to-Case",
          "Web-to-Lead",
          "Email-to-Case",
          "Opportunity teams"
        ],
        "answers": [
          0
        ],
        "explanation": "Web-to-Case generates HTML that captures website submissions as Case records. It is designed for support requests rather than sales prospects.",
        "tip": "Website support request equals Web-to-Case. Website prospect capture equals Web-to-Lead."
      },
      {
        "id": 23,
        "category": "Service and Support Applications",
        "select": 1,
        "question": "Support emails sent to help@company.com must automatically create cases in Salesforce. Which feature is designed for this?",
        "options": [
          "Email-to-Case",
          "Chatter email notifications",
          "Mass Email",
          "Campaign email"
        ],
        "answers": [
          0
        ],
        "explanation": "Email-to-Case converts inbound support emails into Case records and preserves the conversation information needed by service agents.",
        "tip": "Inbound support mailbox to Case is Email-to-Case."
      },
      {
        "id": 24,
        "category": "Service and Support Applications",
        "select": 1,
        "question": "New cases should be routed to different queues according to product family and customer tier. What should the administrator configure?",
        "options": [
          "A case assignment rule",
          "A validation rule",
          "A dashboard subscription",
          "A compact layout"
        ],
        "answers": [
          0
        ],
        "explanation": "Case assignment rules evaluate criteria and assign new or edited cases to users or queues. Queues help groups of agents own and claim work.",
        "tip": "Assignment rules answer 'who should own this new record?'"
      },
      {
        "id": 25,
        "category": "Service and Support Applications",
        "select": 1,
        "question": "A high-priority case must be reassigned and the support manager notified if it remains open for four hours. Which feature should be used?",
        "options": [
          "A case escalation rule",
          "A lead assignment rule",
          "A duplicate rule",
          "A campaign hierarchy"
        ],
        "answers": [
          0
        ],
        "explanation": "Case escalation rules monitor case age against defined criteria and can reassign cases and send notifications when escalation times are reached.",
        "tip": "Escalation is time-based service management. Assignment is initial routing."
      },
      {
        "id": 26,
        "category": "Service and Support Applications",
        "select": 2,
        "question": "A company wants one approved knowledge base for internal agents and selected articles for customers in an Experience Cloud site. Which two capabilities are central to the solution?",
        "options": [
          "Salesforce Knowledge",
          "Appropriate audience and visibility configuration for articles",
          "Opportunity splits",
          "Lead queues"
        ],
        "answers": [
          0,
          1
        ],
        "explanation": "Salesforce Knowledge manages reusable support content. Article visibility, publication status, channels, and site access determine which audiences can find each article.",
        "tip": "Knowledge is the content system; visibility and publication settings determine who can consume the content."
      },
      {
        "id": 27,
        "category": "Productivity and Collaboration",
        "select": 1,
        "question": "A salesperson must remember to call a customer next Tuesday, but no meeting time has been agreed. Which activity should be created?",
        "options": [
          "A task",
          "An event",
          "A campaign",
          "A case"
        ],
        "answers": [
          0
        ],
        "explanation": "A task represents work to complete and can have a due date without reserving a specific time. An event represents a scheduled calendar occurrence with a start and end time.",
        "tip": "Task means to-do. Event means scheduled time on a calendar."
      },
      {
        "id": 28,
        "category": "Productivity and Collaboration",
        "select": 1,
        "question": "A confidential project team needs a Chatter group that nonmembers cannot find in list views or search results. Which group type is appropriate?",
        "options": [
          "Unlisted group",
          "Public group",
          "Private group",
          "Case queue"
        ],
        "answers": [
          0
        ],
        "explanation": "An unlisted Chatter group provides greater privacy than a private group because nonmembers cannot find it in list views, feeds, or search results. Private groups protect posts and files but can still expose limited group details to nonmembers.",
        "tip": "Private protects the content; unlisted also hides the group from discovery by nonmembers."
      },
      {
        "id": 29,
        "category": "Productivity and Collaboration",
        "select": 1,
        "question": "Which layout determines the key fields shown in the highlights area of a record in the Salesforce mobile app?",
        "options": [
          "Compact layout",
          "Home page layout",
          "Search layout only",
          "Report layout"
        ],
        "answers": [
          0
        ],
        "explanation": "Compact layouts identify the most important fields for a record and influence the highlights panel in Lightning Experience and mobile record headers.",
        "tip": "Compact layout means concise, high-priority record information—especially important on mobile."
      },
      {
        "id": 30,
        "category": "Productivity and Collaboration",
        "select": 2,
        "question": "Which two items are normally represented in Salesforce activity management?",
        "options": [
          "Tasks",
          "Events",
          "Profiles",
          "Permission set groups"
        ],
        "answers": [
          0,
          1
        ],
        "explanation": "Tasks and events are the core activity records used to track work and scheduled interactions. Profiles and permission set groups are security configuration records.",
        "tip": "Activity management centers on work performed and interactions scheduled."
      },
      {
        "id": 31,
        "category": "Productivity and Collaboration",
        "select": 1,
        "question": "An administrator wants to extend Salesforce with a prebuilt agent, app, or service offered by a partner. Where should the administrator look first?",
        "options": [
          "AgentExchange",
          "Recycle Bin",
          "Schema Builder",
          "Role hierarchy"
        ],
        "answers": [
          0
        ],
        "explanation": "AgentExchange is Salesforce's marketplace for discovering partner-built agents, actions, apps, and related services. Administrators should still evaluate security, permissions, licensing, and fit before installation.",
        "tip": "Marketplace questions now distinguish AgentExchange for agentic solutions from traditional configuration tools."
      },
      {
        "id": 32,
        "category": "Data and Analytics Management",
        "select": 1,
        "question": "A business user must import 20,000 new Contacts from a CSV file through a guided interface and does not need an automated process. Which tool is the best fit?",
        "options": [
          "Data Import Wizard",
          "Data Loader command line",
          "A dashboard",
          "Mass Transfer Records"
        ],
        "answers": [
          0
        ],
        "explanation": "Data Import Wizard provides a browser-based guided process for supported standard and custom objects and is well suited to smaller, one-time imports. Data Loader is better for larger volumes, broader object support, or repeatable operations.",
        "tip": "Wizard means guided and smaller-scale. Data Loader means larger, more flexible, and better for repeatable operations."
      },
      {
        "id": 33,
        "category": "Data and Analytics Management",
        "select": 1,
        "question": "An integration must update 1.5 million records every night. Which data tool is most appropriate?",
        "options": [
          "Data Loader or an API-based integration",
          "Data Import Wizard",
          "A list view inline edit",
          "A manual merge"
        ],
        "answers": [
          0
        ],
        "explanation": "High-volume, repeatable data operations should use Data Loader or an API-based integration. The Data Import Wizard is intended for smaller, guided imports and is not an enterprise-scale scheduled integration tool.",
        "tip": "Volume plus repeatability usually moves the answer away from the browser wizard and toward Data Loader or APIs."
      },
      {
        "id": 34,
        "category": "Data and Analytics Management",
        "select": 2,
        "question": "An external billing system sends records with its own unique customer identifier. Which two choices best support inserting new records and updating existing ones without using Salesforce record IDs?",
        "options": [
          "Mark a field as an External ID",
          "Use an upsert operation",
          "Create a dashboard filter",
          "Use a compact layout"
        ],
        "answers": [
          0,
          1
        ],
        "explanation": "An External ID stores the identifier from another system. Upsert uses an ID or external ID to update a matching record or insert a new record when no match exists.",
        "tip": "External ID identifies the record across systems; upsert combines update and insert behavior."
      },
      {
        "id": 35,
        "category": "Data and Analytics Management",
        "select": 2,
        "question": "A company wants Salesforce to identify possible duplicate Contacts and block users from saving exact duplicates. Which two features should be configured?",
        "options": [
          "A matching rule",
          "A duplicate rule",
          "A role hierarchy",
          "A dashboard running user"
        ],
        "answers": [
          0,
          1
        ],
        "explanation": "A matching rule defines how records are compared. A duplicate rule decides what happens when a potential duplicate is found, such as allowing with an alert or blocking the save.",
        "tip": "Matching rule finds the match. Duplicate rule controls the response."
      },
      {
        "id": 36,
        "category": "Data and Analytics Management",
        "select": 1,
        "question": "Users must not save a Closed Won opportunity when the Amount is blank. What is the most direct declarative solution?",
        "options": [
          "A validation rule",
          "A sharing rule",
          "A compact layout",
          "A report subscription"
        ],
        "answers": [
          0
        ],
        "explanation": "A validation rule evaluates record data during save and prevents the save when the formula returns true. It also displays an error message explaining how the user should correct the record.",
        "tip": "When the requirement is 'do not allow this record to save,' validation rule is usually the first answer to evaluate."
      },
      {
        "id": 37,
        "category": "Data and Analytics Management",
        "select": 1,
        "question": "What does a report type primarily determine?",
        "options": [
          "Which records and object relationships are available to the report",
          "Which users can log in",
          "Which automation runs first",
          "Which currency the organization uses"
        ],
        "answers": [
          0
        ],
        "explanation": "A report type defines the primary object and the related object relationships and fields that a report can use. Record-level visibility still depends on the viewer's access.",
        "tip": "Report type defines the report's data model, not the user's security."
      },
      {
        "id": 38,
        "category": "Data and Analytics Management",
        "select": 1,
        "question": "Regional managers should open the same dashboard but see data according to their own record access. Which dashboard capability should be used?",
        "options": [
          "A dynamic dashboard",
          "A dashboard with a fixed running user",
          "A public list view",
          "A compact layout"
        ],
        "answers": [
          0
        ],
        "explanation": "A dynamic dashboard runs as the logged-in viewer, allowing one dashboard to present data based on each person's access. A dashboard with a fixed running user shows data according to that selected user.",
        "tip": "Dynamic dashboard means 'run as the viewer.'"
      },
      {
        "id": 39,
        "category": "Data and Analytics Management",
        "select": 1,
        "question": "Executives should all see the same company-wide metrics regardless of their individual record access. What is the usual dashboard configuration?",
        "options": [
          "Use an appropriate fixed running user",
          "Use a dynamic dashboard",
          "Give every executive Modify All Data",
          "Change all organization-wide defaults to Public Read/Write"
        ],
        "answers": [
          0
        ],
        "explanation": "A dashboard with a fixed running user displays data according to that user's access. The running user should have the appropriate visibility, without broadly weakening security for everyone else.",
        "tip": "Same data for every viewer points to a fixed running user. Personalized data points to a dynamic dashboard."
      },
      {
        "id": 40,
        "category": "Data and Analytics Management",
        "select": 2,
        "question": "A user can open a report folder but sees fewer records than a colleague in the same report. Which two principles explain this behavior?",
        "options": [
          "Folder access controls access to the report definition",
          "Report results respect the viewer's underlying record access",
          "Folder sharing automatically grants access to every record",
          "Report filters override organization-wide defaults"
        ],
        "answers": [
          0,
          1
        ],
        "explanation": "Report folder sharing determines who can view or manage the report asset. The records returned by the report still respect object permissions and record-level sharing for the person running it.",
        "tip": "Access to a report is not the same as access to every record the report could query."
      },
      {
        "id": 41,
        "category": "Automation",
        "select": 1,
        "question": "A field on the record being saved must be updated before the record is committed, and no related records need to be created. Which automation is generally most efficient?",
        "options": [
          "A before-save record-triggered flow",
          "An approval process",
          "A scheduled flow",
          "A dashboard refresh"
        ],
        "answers": [
          0
        ],
        "explanation": "Before-save record-triggered flows are optimized for updating fields on the same record before it is saved. They avoid an additional database update and are often called fast field updates.",
        "tip": "Same record, before save, field update only: think before-save flow."
      },
      {
        "id": 42,
        "category": "Automation",
        "select": 1,
        "question": "After an opportunity becomes Closed Won, Salesforce must create a related onboarding task. Which automation is appropriate?",
        "options": [
          "An after-save record-triggered flow",
          "A before-save flow",
          "A validation rule",
          "A matching rule"
        ],
        "answers": [
          0
        ],
        "explanation": "Creating a related record requires an after-save flow because the original record must already exist in the database. Before-save flows are limited to fast updates on the triggering record.",
        "tip": "Create or update related records after the original save: use an after-save path."
      },
      {
        "id": 43,
        "category": "Automation",
        "select": 1,
        "question": "Users need a guided, multi-screen wizard that collects information and then creates several records. Which tool should the administrator use?",
        "options": [
          "A screen flow",
          "A validation rule",
          "A sharing rule",
          "A compact layout"
        ],
        "answers": [
          0
        ],
        "explanation": "A screen flow provides interactive screens, conditional logic, and record operations. It can be launched from Lightning pages, actions, utility bars, Experience sites, and other supported surfaces.",
        "tip": "User interaction plus guided steps almost always points to a screen flow."
      },
      {
        "id": 44,
        "category": "Automation",
        "select": 1,
        "question": "Every night, Salesforce must find open opportunities that have not been updated in 30 days and create follow-up tasks. Which automation fits best?",
        "options": [
          "A schedule-triggered flow",
          "A before-save flow",
          "A validation rule",
          "A login flow"
        ],
        "answers": [
          0
        ],
        "explanation": "A schedule-triggered flow runs at a defined time and can query records that meet criteria, making it appropriate for recurring batch-style business checks.",
        "tip": "No user save event, recurring time-based scan: schedule-triggered flow."
      },
      {
        "id": 45,
        "category": "Automation",
        "select": 1,
        "question": "Discount requests above 25% must be submitted to a manager, lock the record during review, and support approve or reject outcomes. Which feature is designed for this?",
        "options": [
          "An approval process",
          "A duplicate rule",
          "A sharing rule",
          "A dashboard filter"
        ],
        "answers": [
          0
        ],
        "explanation": "Approval processes route records to approvers and support submission actions, record locking, approval actions, rejection actions, and recall behavior.",
        "tip": "Formal human approval, record locking, and approve/reject outcomes point to an approval process."
      },
      {
        "id": 46,
        "category": "Automation",
        "select": 1,
        "question": "A flow calls an external action that can fail. What should the administrator add to handle the error gracefully?",
        "options": [
          "A fault path",
          "A new role",
          "A report type",
          "A campaign member status"
        ],
        "answers": [
          0
        ],
        "explanation": "A fault path captures errors from flow elements so the flow can log the problem, notify an administrator, or present a useful message instead of failing without context.",
        "tip": "Production-ready flows need error handling, especially around record operations, subflows, and external actions."
      },
      {
        "id": 47,
        "category": "Automation",
        "select": 2,
        "question": "A record-triggered flow should run only when Status changes from any other value to Closed. Which two design choices are most important?",
        "options": [
          "Use entry conditions for Status = Closed",
          "Check that the field changed or run only when the record is updated to meet the condition",
          "Run the flow on every record access",
          "Remove all start conditions"
        ],
        "answers": [
          0,
          1
        ],
        "explanation": "Strong start conditions reduce unnecessary flow interviews. The flow should require the target value and ensure the record has transitioned into that state rather than executing on every unrelated update.",
        "tip": "Use the Start element to prevent work, not merely a Decision element after the flow has already launched."
      },
      {
        "id": 48,
        "category": "Automation",
        "select": 1,
        "question": "Several record-triggered flows run on Opportunity, and their sequence matters. Which capability helps the administrator review and control their order?",
        "options": [
          "Flow Trigger Explorer and trigger order",
          "Schema Builder and field history",
          "Dashboard subscriptions",
          "Campaign hierarchy"
        ],
        "answers": [
          0
        ],
        "explanation": "Flow Trigger Explorer provides a consolidated view of record-triggered flows for an object and lets administrators understand and manage trigger order where supported.",
        "tip": "When multiple flows compete on one object, think orchestration and trigger order rather than relying on creation dates."
      },
      {
        "id": 49,
        "category": "Agentforce",
        "select": 3,
        "question": "Which three elements define the work an Agentforce agent can handle and how it handles it?",
        "options": [
          "Subagents or topics that group jobs",
          "Instructions that guide behavior",
          "Actions that perform specific tasks",
          "Dashboard color palettes"
        ],
        "answers": [
          0,
          1,
          2
        ],
        "explanation": "Agentforce organizes work into subagents—called topics in earlier learning materials—with instructions and available actions. Actions can invoke tools such as flows, prompt templates, or Apex depending on the implementation.",
        "tip": "Remember the structure: scope the job, guide the behavior, perform the task. Be familiar with both 'topics' and the newer 'subagents' terminology."
      },
      {
        "id": 50,
        "category": "Agentforce",
        "select": 1,
        "question": "An agent gives generic answers because it is not using the company's approved policy documents. What should the administrator configure to ground responses in trusted content?",
        "options": [
          "An Agentforce Data Library",
          "A role hierarchy",
          "A compact layout",
          "A campaign hierarchy"
        ],
        "answers": [
          0
        ],
        "explanation": "Agentforce Data Library indexes supported knowledge, files, fields, or web sources so generative AI responses can be grounded in approved business information rather than relying only on general model knowledge.",
        "tip": "Grounding improves relevance and trust by giving the agent an approved source of business context."
      },
      {
        "id": 51,
        "category": "Agentforce",
        "select": 1,
        "question": "An agent should access only the records and actions required for its job. Which security approach is best?",
        "options": [
          "Use a dedicated agent user and least-privilege permissions",
          "Grant Modify All Data to every user",
          "Set all organization-wide defaults to Public Read/Write",
          "Disable field-level security"
        ],
        "answers": [
          0
        ],
        "explanation": "Agentforce security should follow least privilege. A dedicated agent user or execution context should receive only the permissions needed for its approved use cases, while sharing and field security remain part of the control model.",
        "tip": "AI does not replace Salesforce security. Design agent access with the same least-privilege discipline used for human users and integrations."
      },
      {
        "id": 52,
        "category": "Agentforce",
        "select": 2,
        "question": "Before activating an agent for employees, which two steps best help an administrator validate and improve its behavior?",
        "options": [
          "Test realistic requests in Preview and inspect the execution details",
          "Review agent analytics, sessions, or observability data",
          "Skip testing because standard actions are always correct",
          "Give the agent unrestricted access to simplify troubleshooting"
        ],
        "answers": [
          0,
          1
        ],
        "explanation": "Preview testing reveals how the agent interprets requests and which instructions, subagents, and actions it uses. Observability and analytics help administrators identify adoption, quality, and performance issues after controlled rollout.",
        "tip": "Treat an agent as an operational system: test before release, observe after release, and refine continuously."
      }
    ]
  },
  {
    "id": "business-analyst",
    "title": "Salesforce Business Analyst",
    "pageTitle": "Salesforce Certified Business Analyst Study Lab",
    "shortTitle": "Business Analyst",
    "code": "BA",
    "path": "certifications/business-analyst",
    "sourceFile": "salesforce_business_analyst_study_lab.html",
    "description": "Practica escenarios de discovery, stakeholders, procesos, requisitos, user stories y UAT con feedback inmediato.",
    "heroCopy": "Practica los dominios actuales con escenarios realistas de analisis de negocio en Salesforce. Selecciona tus respuestas para revelar la opcion correcta, una explicacion y un tip de examen.",
    "reasoning": "Identifica el resultado de negocio, separa evidencia de supuestos y elige la tecnica o artefacto que crea el entendimiento compartido mas claro.",
    "habits": "Lee cada calificador: first, best, current state, future state, select two y most effective technique suelen determinar la respuesta.",
    "integrity": "Este lab contiene preguntas originales creadas desde objetivos publicos, documentacion Salesforce y practicas establecidas de analisis de negocio. No reproduce contenido restringido del examen.",
    "blueprintNote": "El banco contiene 100 preguntas, por lo que el conteo refleja el peso publicado para cada dominio.",
    "blueprint": [
      {
        "label": "Customer Discovery",
        "weight": 17
      },
      {
        "label": "Collaboration with Stakeholders",
        "weight": 23
      },
      {
        "label": "Business Process Mapping",
        "weight": 12
      },
      {
        "label": "Requirements",
        "weight": 18
      },
      {
        "label": "User Stories",
        "weight": 18
      },
      {
        "label": "User Acceptance",
        "weight": 12
      }
    ],
    "resources": [
      {
        "title": "Salesforce Business Analyst Credential",
        "url": "https://trailhead.salesforce.com/credentials/businessanalyst",
        "description": "Pagina oficial de la credencial y preparacion recomendada."
      },
      {
        "title": "Official Business Analyst Cert Prep",
        "url": "https://trailhead.salesforce.com/content/learn/modules/salesforce-business-analyst-certification-prep",
        "description": "Practica, flashcards y enlaces de estudio para los seis dominios."
      },
      {
        "title": "Customer Discovery Review",
        "url": "https://trailhead.salesforce.com/content/learn/modules/salesforce-business-analyst-certification-prep/learn-about-customer-discovery",
        "description": "Estrategia, estado actual, work streams, cambio y contexto Salesforce."
      },
      {
        "title": "Stakeholder Collaboration Review",
        "url": "https://trailhead.salesforce.com/content/learn/modules/salesforce-business-analyst-certification-prep/reivew-collaboration-with-stakeholders",
        "description": "Elicitacion, facilitacion, confianza, roadmaps y priorizacion."
      },
      {
        "title": "Business Process Mapping Review",
        "url": "https://trailhead.salesforce.com/content/learn/modules/salesforce-business-analyst-certification-prep/study-up-on-business-process-mapping",
        "description": "Scope, ownership, governance, capability maps y process maps."
      },
      {
        "title": "User Acceptance Review",
        "url": "https://trailhead.salesforce.com/content/learn/modules/salesforce-business-analyst-certification-prep/explore-user-acceptance",
        "description": "Planes UAT, testers, scripts, feedback, go/no-go y sign-off."
      }
    ],
    "categoryOrder": [
      "All",
      "Customer Discovery",
      "Collaboration with Stakeholders",
      "Business Process Mapping",
      "Requirements",
      "User Stories",
      "User Acceptance"
    ],
    "questions": [
      {
        "id": 1,
        "category": "Customer Discovery",
        "select": 1,
        "question": "A sponsor says, “We need a new Salesforce app,” but has not described the business problem. What should the business analyst do first?",
        "options": [
          "Ask a developer to estimate the app immediately",
          "Create user stories based only on the sponsor’s preferred features",
          "Install an AppExchange package before discovery",
          "Clarify the business goals, current pain points, affected users, and desired outcomes"
        ],
        "answers": [
          3
        ],
        "explanation": "Discovery begins by defining the business problem and the outcomes the organization wants to achieve. A requested app is a proposed solution, not a validated need. Understanding goals, pain points, users, and success measures prevents the team from solving the wrong problem.",
        "tip": "Separate the problem from the proposed solution. In discovery questions, the best first step usually increases shared understanding before design or estimation."
      },
      {
        "id": 2,
        "category": "Customer Discovery",
        "select": 1,
        "question": "A company wants to improve lead conversion across marketing, inside sales, and field sales. Which discovery artifact best identifies the groups that influence or are affected by the initiative?",
        "options": [
          "A stakeholder map",
          "A deployment runbook",
          "A test execution report",
          "A field-level security matrix"
        ],
        "answers": [
          0
        ],
        "explanation": "A stakeholder map identifies people and groups by their interest, influence, impact, and relationship to the initiative. It helps the BA plan interviews, workshops, communication, and decision-making across work streams.",
        "tip": "Use a stakeholder map to answer who matters, how much influence they have, and how they should be engaged."
      },
      {
        "id": 3,
        "category": "Customer Discovery",
        "select": 1,
        "question": "Sales managers describe the opportunity approval process differently from sales representatives. What is the best way to establish the current state?",
        "options": [
          "Skip the current state and design the future state immediately",
          "Combine interviews with direct observation and review of actual records or system evidence",
          "Choose the manager’s description because managers own the process",
          "Document the process from memory and validate it after go-live"
        ],
        "answers": [
          1
        ],
        "explanation": "Interviews reveal perspectives, while observation and system evidence reveal what actually happens. Triangulating sources helps the BA distinguish policy from real behavior, including workarounds and exceptions.",
        "tip": "When accounts conflict, gather more than opinions. Look for observation, data, records, and other evidence of actual behavior."
      },
      {
        "id": 4,
        "category": "Customer Discovery",
        "select": 1,
        "question": "During discovery, a BA needs a high-level view of how customers experience onboarding across email, a portal, support calls, and internal handoffs. Which artifact is most useful?",
        "options": [
          "A data dictionary",
          "A deployment checklist",
          "A customer journey map",
          "A permission set matrix"
        ],
        "answers": [
          2
        ],
        "explanation": "A journey map visualizes the customer’s end-to-end experience across stages and channels, including actions, emotions, pain points, and backstage interactions. It exposes gaps that a single system screen cannot show.",
        "tip": "Journey maps follow the experience across time and touchpoints. Process maps focus more directly on operational steps and ownership."
      },
      {
        "id": 5,
        "category": "Customer Discovery",
        "select": 1,
        "question": "A BA is planning discovery for a global implementation with separate sales, service, data migration, and change-management teams. What should the BA identify early?",
        "options": [
          "Only the final production release date",
          "The color palette for every Lightning page",
          "A single user story covering the entire program",
          "Work streams, owners, dependencies, and decision points"
        ],
        "answers": [
          3
        ],
        "explanation": "Large initiatives are divided into work streams that have different owners, deliverables, and dependencies. Identifying them early supports coordinated discovery, sequencing, risk management, and governance.",
        "tip": "For complex programs, think in parallel work streams and explicit dependencies rather than one undifferentiated project plan."
      },
      {
        "id": 6,
        "category": "Customer Discovery",
        "select": 1,
        "question": "A customer has used Salesforce for eight years and reports slow adoption and inconsistent configuration. Which discovery activity best helps identify platform opportunities and constraints?",
        "options": [
          "Review the org’s configuration, usage, data quality, security model, and available health insights",
          "Assume the newest Salesforce feature will solve the problem",
          "Interview only the executive sponsor",
          "Replace all customizations without analysis"
        ],
        "answers": [
          0
        ],
        "explanation": "A current-state assessment should include how Salesforce is configured and used, not only stakeholder opinions. Configuration, adoption, data, automation, security, and org-health information reveal constraints, technical debt, and opportunities.",
        "tip": "A Salesforce BA needs enough platform awareness to ask what the org already does, where it is constrained, and what can be reused."
      },
      {
        "id": 7,
        "category": "Customer Discovery",
        "select": 1,
        "question": "A requested feature is scheduled for a future Salesforce release. What should the BA do before adding custom development to the roadmap?",
        "options": [
          "Tell users to wait without documenting the impact",
          "Review official release information and assess timing, fit, and risk with the team",
          "Ignore release notes because they are only for administrators",
          "Commit to custom development without comparing options"
        ],
        "answers": [
          1
        ],
        "explanation": "Release notes and roadmaps can reveal standard capabilities that affect solution choices. The BA should assess whether the upcoming feature meets the need, when it will be available, and whether waiting or building is the better business decision.",
        "tip": "Standard platform evolution can change the best solution. Check official release information before creating avoidable customization."
      },
      {
        "id": 8,
        "category": "Customer Discovery",
        "select": 1,
        "question": "A transformation program has low confidence because employees believe the new process will eliminate their roles. Which discovery concern should be addressed explicitly?",
        "options": [
          "Only the sprint velocity target",
          "Only the deployment method",
          "Change readiness, stakeholder impacts, communication needs, and adoption risks",
          "Only the number of custom fields required"
        ],
        "answers": [
          2
        ],
        "explanation": "Discovery includes understanding organizational readiness and the human impact of change. Concerns, incentives, communication needs, training, and sponsor support can determine whether a technically correct solution is adopted.",
        "tip": "A BA discovers both system needs and change impacts. Adoption risk is a business risk, not an afterthought."
      },
      {
        "id": 9,
        "category": "Customer Discovery",
        "select": 1,
        "question": "An executive asks for a three-year list of major Salesforce capabilities and business outcomes, while the delivery team needs detailed sprint work. Which artifact should the executive receive?",
        "options": [
          "The sprint task board",
          "A defect log",
          "A test script",
          "A product or solution roadmap"
        ],
        "answers": [
          3
        ],
        "explanation": "A roadmap communicates strategic direction, major outcomes, sequencing, and time horizons. The backlog and sprint board contain delivery detail, while the roadmap helps leaders understand direction and investment choices.",
        "tip": "Roadmap equals strategic sequencing. Backlog equals ordered delivery work. Do not confuse the level of detail."
      },
      {
        "id": 10,
        "category": "Customer Discovery",
        "select": 1,
        "question": "A BA learns that customer service agents copy regulated personal data into free-text fields. What should be documented as part of current-state discovery?",
        "options": [
          "The data flow, compliance risk, affected users, and security constraints",
          "Only the agents’ preferred page layout",
          "Only the number of cases created each day",
          "A final solution without involving security stakeholders"
        ],
        "answers": [
          0
        ],
        "explanation": "Discovery must capture how data is collected, stored, shared, and protected. Regulated data creates constraints and requires involvement from security, legal, compliance, and technical stakeholders before a future state is approved.",
        "tip": "When sensitive data appears, widen discovery to include data lineage, access, compliance, retention, and risk owners."
      },
      {
        "id": 11,
        "category": "Customer Discovery",
        "select": 1,
        "question": "At which point should a BA define measurable success criteria for a new self-service initiative?",
        "options": [
          "After every user story is already closed",
          "During discovery, before the solution is finalized",
          "Only after production deployment",
          "Only when UAT fails"
        ],
        "answers": [
          1
        ],
        "explanation": "Success criteria connect the initiative to business outcomes and guide prioritization, design, testing, and post-launch measurement. Defining them early helps the team evaluate whether a proposed solution is valuable.",
        "tip": "Good discovery defines how success will be measured before implementation choices make the goal harder to change."
      },
      {
        "id": 12,
        "category": "Customer Discovery",
        "select": 1,
        "question": "A sponsor requests “better reporting.” Which question best advances discovery?",
        "options": [
          "How many reports can Salesforce technically create?",
          "Can the team copy every existing spreadsheet into Salesforce?",
          "Which decisions are difficult today, who makes them, and what information is missing?",
          "Which dashboard color should be used?"
        ],
        "answers": [
          2
        ],
        "explanation": "“Better reporting” is too vague. The BA should connect reporting needs to decisions, audiences, timing, data sources, and actions. This converts a feature request into an analyzable business need.",
        "tip": "Ask what decision the information must support. Reports are a means, not the outcome."
      },
      {
        "id": 13,
        "category": "Customer Discovery",
        "select": 1,
        "question": "A project has a fixed deadline, but discovery reveals that two critical integrations are owned by another department. What should the BA do?",
        "options": [
          "Hide the dependency until sprint planning",
          "Add the integrations to the backlog without an owner",
          "Assume the other department will deliver on time",
          "Document the dependency, owner, risk, assumptions, and impact on scope or schedule"
        ],
        "answers": [
          3
        ],
        "explanation": "Dependencies discovered early should be made visible and managed. Documenting ownership, timing, assumptions, and impact enables realistic planning and escalation before the dependency becomes a delivery failure.",
        "tip": "Unknown or unowned dependencies are project risks. Make them explicit rather than silently absorbing them."
      },
      {
        "id": 14,
        "category": "Customer Discovery",
        "select": 1,
        "question": "The team wants to redesign a case process but cannot agree on which customer segment to prioritize. Which discovery input is most useful?",
        "options": [
          "Business strategy, segment value, service goals, and evidence about current pain points",
          "The loudest stakeholder’s preference",
          "The most visually appealing prototype",
          "The feature with the smallest development estimate"
        ],
        "answers": [
          0
        ],
        "explanation": "Prioritization should connect to strategy and evidence. Segment importance, business goals, customer impact, volume, cost, and risk provide a defensible basis for defining scope.",
        "tip": "In discovery, scope should trace to business strategy and evidence—not stakeholder volume or design preference."
      },
      {
        "id": 15,
        "category": "Customer Discovery",
        "select": 1,
        "question": "A BA is supporting an initiative from idea through release. Which statement best describes the BA’s role across the implementation lifecycle?",
        "options": [
          "Stop working once user stories are written",
          "Continuously connect business outcomes, requirements, stakeholders, solution decisions, testing, and adoption",
          "Participate only in the first discovery workshop",
          "Own all technical configuration without collaboration"
        ],
        "answers": [
          1
        ],
        "explanation": "The BA’s responsibilities evolve throughout the lifecycle. The BA supports discovery, analysis, prioritization, clarification, validation, UAT, change readiness, and measurement while acting as a liaison between business and technical teams.",
        "tip": "The BA role is continuous. Requirements and understanding evolve as the solution moves from discovery to acceptance and adoption."
      },
      {
        "id": 16,
        "category": "Customer Discovery",
        "select": 2,
        "question": "Which two outputs best show that discovery is ready to move into more detailed solution analysis?",
        "options": [
          "A complete production deployment package",
          "Every possible future user story estimated",
          "An agreed problem statement and measurable business outcomes",
          "A documented current state with key stakeholders, scope, constraints, and risks"
        ],
        "answers": [
          2,
          3
        ],
        "explanation": "Discovery should establish shared understanding of the problem, desired outcomes, current state, stakeholders, scope, constraints, assumptions, and risks. Detailed solution design can then proceed on a stable foundation.",
        "tip": "Discovery readiness is about clarity and alignment, not completing every downstream delivery artifact."
      },
      {
        "id": 17,
        "category": "Customer Discovery",
        "select": 1,
        "question": "A BA is told that “Salesforce cannot support” a requested process. What is the best response?",
        "options": [
          "Accept the statement without investigation",
          "Promise custom code immediately",
          "Remove the requirement from scope without stakeholder discussion",
          "Clarify the underlying need and collaborate with platform experts to evaluate standard, configurable, integrated, and custom options"
        ],
        "answers": [
          3
        ],
        "explanation": "The BA should understand the business need and facilitate an evidence-based evaluation of solution options. The answer may involve standard features, configuration, process change, integration, or customization, each with tradeoffs.",
        "tip": "Avoid binary assumptions about platform capability. Reframe the need, then evaluate options and tradeoffs with the right experts."
      },
      {
        "id": 18,
        "category": "Collaboration with Stakeholders",
        "select": 1,
        "question": "A project has 40 stakeholders, but only a few can approve funding or block decisions. What should the BA use to tailor engagement?",
        "options": [
          "A single communication email for everyone",
          "A defect severity matrix",
          "A database schema",
          "A power-interest or influence-impact stakeholder analysis"
        ],
        "answers": [
          3
        ],
        "explanation": "Stakeholder analysis helps determine who needs close management, regular consultation, targeted information, or monitoring. It prevents over-communicating with some groups while missing key decision makers.",
        "tip": "Engagement should be proportional to influence, interest, impact, and decision authority."
      },
      {
        "id": 19,
        "category": "Collaboration with Stakeholders",
        "select": 1,
        "question": "A senior stakeholder insists on a feature that conflicts with user research. How should the BA respond as a trusted advisor?",
        "options": [
          "Acknowledge the concern, present evidence and tradeoffs, and facilitate a decision tied to business outcomes",
          "Reject the request publicly",
          "Build the feature without discussion",
          "Remove the research from the project record"
        ],
        "answers": [
          0
        ],
        "explanation": "Trusted advisors do not merely agree or disagree. They listen, make evidence visible, explain consequences, and guide stakeholders toward a transparent decision connected to goals and constraints.",
        "tip": "Influence through evidence, empathy, and tradeoffs—not authority or avoidance."
      },
      {
        "id": 20,
        "category": "Collaboration with Stakeholders",
        "select": 1,
        "question": "A BA needs detailed insight into how five specialists perform a complex exception process. Which elicitation technique is most appropriate?",
        "options": [
          "A release readiness checklist",
          "One-on-one interviews combined with observation",
          "A broad anonymous survey only",
          "A mass town hall with no follow-up"
        ],
        "answers": [
          1
        ],
        "explanation": "Interviews and observation are effective for complex, specialized work because they allow probing questions and reveal tacit knowledge, context, and workarounds that a survey may miss.",
        "tip": "Choose the elicitation method based on depth, audience size, complexity, and the type of evidence needed."
      },
      {
        "id": 21,
        "category": "Collaboration with Stakeholders",
        "select": 1,
        "question": "Marketing and sales disagree about the definition of a qualified lead. Which technique best supports rapid alignment?",
        "options": [
          "Let developers choose the definition",
          "Create two conflicting fields",
          "A facilitated workshop using shared definitions, examples, and decision rules",
          "Separate emails with no joint discussion"
        ],
        "answers": [
          2
        ],
        "explanation": "A facilitated workshop lets both groups compare assumptions, examine examples, define terms, and agree on decision rules in real time. The BA manages participation and captures decisions.",
        "tip": "Use workshops when multiple stakeholders must build shared understanding or resolve interdependent issues."
      },
      {
        "id": 22,
        "category": "Collaboration with Stakeholders",
        "select": 1,
        "question": "The BA needs feedback from 500 occasional portal users about the frequency of several pain points. Which technique is most efficient?",
        "options": [
          "Five days of observation for every user",
          "A technical design review",
          "A sprint retrospective",
          "A structured survey followed by targeted interviews"
        ],
        "answers": [
          3
        ],
        "explanation": "Surveys efficiently gather standardized input from a large audience. Targeted interviews can then explain important patterns or unexpected results.",
        "tip": "Surveys provide breadth; interviews and observation provide depth. Strong discovery often combines them."
      },
      {
        "id": 23,
        "category": "Collaboration with Stakeholders",
        "select": 1,
        "question": "Users describe a process as simple, but data shows repeated corrections and rework. What should the BA do?",
        "options": [
          "Observe the process and review examples to uncover hidden steps and exceptions",
          "Accept the verbal description as final",
          "Delete the rework data",
          "Ask only the executive sponsor"
        ],
        "answers": [
          0
        ],
        "explanation": "People may omit habitual or embarrassing workarounds. Observation and artifact review reveal actual steps, exceptions, and causes of rework so the future state addresses the real process.",
        "tip": "Stated process and actual process can differ. Verify important claims with behavior and evidence."
      },
      {
        "id": 24,
        "category": "Collaboration with Stakeholders",
        "select": 2,
        "question": "During a virtual discovery workshop, participants talk over one another and decisions are unclear. Which two actions should the facilitator take?",
        "options": [
          "End the session without documenting outcomes",
          "Use a visible agenda, working agreements, and structured turn-taking",
          "Capture decisions, open questions, owners, and next steps in a shared workspace",
          "Allow the loudest participant to decide everything"
        ],
        "answers": [
          1,
          2
        ],
        "explanation": "Good facilitation creates psychological safety and structure. A visible agenda and participation rules improve discussion, while shared documentation makes decisions and follow-up explicit.",
        "tip": "Facilitation is both conversation design and decision capture."
      },
      {
        "id": 25,
        "category": "Collaboration with Stakeholders",
        "select": 1,
        "question": "A team has documented the current state. What is the best next step toward an agreed future state?",
        "options": [
          "Skip stakeholder review and begin development",
          "Choose the option with the most screens",
          "Identify root causes and design options, evaluate tradeoffs, and validate the preferred process with stakeholders",
          "Automatically copy the current state into Salesforce"
        ],
        "answers": [
          2
        ],
        "explanation": "Moving to a future state requires understanding what should change and why, generating options, evaluating impact and feasibility, and obtaining agreement. It is not a simple transcription of the current process.",
        "tip": "Current state tells you what happens. Root cause and design analysis determine what should happen next."
      },
      {
        "id": 26,
        "category": "Collaboration with Stakeholders",
        "select": 1,
        "question": "Two departments rank their requests as highest priority. Which approach is most defensible?",
        "options": [
          "Prioritize the department with the largest meeting attendance",
          "Alternate priorities randomly",
          "Ask the development team to choose without business input",
          "Use agreed criteria such as business value, risk, urgency, dependencies, effort, and strategic alignment"
        ],
        "answers": [
          3
        ],
        "explanation": "Transparent prioritization criteria turn competing opinions into a structured decision. The BA facilitates comparison and documents the rationale and consequences.",
        "tip": "Prioritization should be repeatable and tied to value and constraints, not influence alone."
      },
      {
        "id": 27,
        "category": "Collaboration with Stakeholders",
        "select": 1,
        "question": "A stakeholder says they are “responsible” for a decision, while another says they are the approver. Which artifact helps clarify roles?",
        "options": [
          "A RACI matrix",
          "A journey map",
          "A data migration workbook",
          "A test defect log"
        ],
        "answers": [
          0
        ],
        "explanation": "A RACI matrix clarifies who is Responsible, Accountable, Consulted, and Informed for activities or decisions. It reduces ambiguity and duplicated ownership.",
        "tip": "In RACI, one person should normally be accountable for the outcome, while multiple people may be responsible for work."
      },
      {
        "id": 28,
        "category": "Collaboration with Stakeholders",
        "select": 1,
        "question": "Executives need monthly outcome updates, while subject-matter experts need weekly requirement workshops. What should the BA create?",
        "options": [
          "A production rollback script",
          "A stakeholder communication and engagement plan",
          "One identical meeting for all audiences",
          "A field mapping document"
        ],
        "answers": [
          1
        ],
        "explanation": "A communication plan defines audiences, information needs, format, frequency, owner, and feedback channels. It keeps each stakeholder group informed at the appropriate level.",
        "tip": "Tailor content and cadence to the stakeholder. Executives and working teams rarely need the same detail."
      },
      {
        "id": 29,
        "category": "Collaboration with Stakeholders",
        "select": 1,
        "question": "In an agile team, who should make the final decision about Product Backlog ordering based on value?",
        "options": [
          "Any developer who finishes first",
          "The UAT tester",
          "The Product Owner",
          "The Scrum Master alone"
        ],
        "answers": [
          2
        ],
        "explanation": "The Product Owner is accountable for maximizing product value and ordering the Product Backlog. The BA supports analysis, clarification, and stakeholder alignment but does not replace Product Owner accountability.",
        "tip": "The BA influences backlog quality; the Product Owner owns backlog ordering and value decisions."
      },
      {
        "id": 30,
        "category": "Collaboration with Stakeholders",
        "select": 1,
        "question": "Which event is intended to inspect the product increment with stakeholders and adapt the Product Backlog?",
        "options": [
          "Daily Scrum",
          "Sprint Retrospective",
          "Backlog archive",
          "Sprint Review"
        ],
        "answers": [
          3
        ],
        "explanation": "The Sprint Review examines the completed increment with stakeholders and discusses progress, changes, and next priorities. The retrospective focuses on how the team works.",
        "tip": "Review the product in the Sprint Review. Improve the team’s process in the Retrospective."
      },
      {
        "id": 31,
        "category": "Collaboration with Stakeholders",
        "select": 1,
        "question": "The team repeatedly postpones replacing a fragile integration because new features receive higher priority. How should the BA describe the accumulated consequence?",
        "options": [
          "Technical debt that creates future cost, risk, and delivery constraints",
          "A customer journey",
          "A user acceptance criterion",
          "A stakeholder persona"
        ],
        "answers": [
          0
        ],
        "explanation": "Technical debt represents shortcuts or aging design choices that make future changes harder, riskier, or more expensive. The BA helps make its business impact visible for prioritization.",
        "tip": "Translate technical debt into business language: reliability, cost, risk, speed, and lost opportunity."
      },
      {
        "id": 32,
        "category": "Collaboration with Stakeholders",
        "select": 1,
        "question": "Users resist a new Salesforce process because it removes a spreadsheet they trust. What is the best response?",
        "options": [
          "Add more required fields to force compliance",
          "Understand the underlying concerns, involve users in validation, and plan communication, training, and support",
          "Disable the spreadsheet without notice",
          "Tell users adoption is not part of the project"
        ],
        "answers": [
          1
        ],
        "explanation": "Resistance often signals unmet needs, loss of control, or insufficient trust. Listening, participation, transparent rationale, training, and support improve readiness and adoption.",
        "tip": "Do not label resistance as irrational. Treat it as information about change impact and unmet needs."
      },
      {
        "id": 33,
        "category": "Collaboration with Stakeholders",
        "select": 1,
        "question": "A steering committee approves the future-state process verbally. What should the BA do next?",
        "options": [
          "Ask development to interpret the approval",
          "Delete earlier versions of the process",
          "Document the decision, scope, assumptions, and approver in the agreed repository",
          "Rely on memory"
        ],
        "answers": [
          2
        ],
        "explanation": "Formal decision capture provides traceability and prevents later disagreement. The record should identify what was approved, by whom, when, and under which assumptions or conditions.",
        "tip": "Sign-off is an auditable decision, not merely a positive meeting reaction."
      },
      {
        "id": 34,
        "category": "Collaboration with Stakeholders",
        "select": 1,
        "question": "A stakeholder changes a previously approved requirement during development. What should the BA do first?",
        "options": [
          "Tell the developer to implement it immediately",
          "Ignore the request because the requirement was approved",
          "Replace the original requirement without history",
          "Assess the reason, impact, dependencies, priority, and change-control path before committing"
        ],
        "answers": [
          3
        ],
        "explanation": "Change is expected, but it must be evaluated. The BA clarifies the need, assesses impact, follows governance, and ensures the decision is visible to affected stakeholders.",
        "tip": "Agile welcomes change; it does not mean unmanaged change."
      },
      {
        "id": 35,
        "category": "Collaboration with Stakeholders",
        "select": 1,
        "question": "A distributed team keeps reopening decisions because meeting notes are inconsistent. Which practice will help most?",
        "options": [
          "Maintain a shared decision log with rationale, owner, date, and affected artifacts",
          "Schedule more meetings without notes",
          "Allow each team to keep private decisions",
          "Use chat messages as the only permanent record"
        ],
        "answers": [
          0
        ],
        "explanation": "A decision log provides a durable source of truth and links decisions to requirements, risks, and scope. It reduces repeated debate and supports onboarding and auditability.",
        "tip": "Capture not only what was decided, but why and what it affects."
      },
      {
        "id": 36,
        "category": "Collaboration with Stakeholders",
        "select": 1,
        "question": "A technical architect uses platform terminology that business stakeholders do not understand. What should the BA do?",
        "options": [
          "Remove technical constraints from the documentation",
          "Translate the concepts into business impacts and confirm shared understanding in both directions",
          "Exclude the architect from future meetings",
          "Ask business stakeholders to learn all technical terms"
        ],
        "answers": [
          1
        ],
        "explanation": "The BA acts as a liaison, ensuring that business needs are understandable to technical teams and technical constraints are understandable to business stakeholders. Translation includes checking comprehension, not merely repeating words.",
        "tip": "Bridging means translating intent, impact, constraints, and decisions—not acting as a message courier."
      },
      {
        "id": 37,
        "category": "Collaboration with Stakeholders",
        "select": 1,
        "question": "A workshop includes executives, managers, and frontline users. Which facilitation approach best reduces hierarchy bias?",
        "options": [
          "Exclude frontline users from decisions",
          "Accept only ideas submitted before the meeting",
          "Use silent idea generation, round-robin sharing, and anonymous voting where appropriate",
          "Ask executives to speak first and longest"
        ],
        "answers": [
          2
        ],
        "explanation": "Structured participation techniques prevent senior voices from anchoring the discussion and give quieter participants space to contribute. This improves the quality and representativeness of the evidence.",
        "tip": "Good facilitation deliberately balances participation rather than assuming the room is naturally equal."
      },
      {
        "id": 38,
        "category": "Collaboration with Stakeholders",
        "select": 1,
        "question": "A proposed solution requires a Salesforce capability the BA does not fully understand. What should the BA do?",
        "options": [
          "Guess based on a previous project",
          "Promise the feature to stakeholders before validation",
          "Remove the business need",
          "Collaborate with administrators, architects, developers, and product documentation to evaluate feasibility and tradeoffs"
        ],
        "answers": [
          3
        ],
        "explanation": "The BA is not expected to make every technical decision alone. The BA brings the right experts together, keeps the business need clear, and ensures solution options are assessed against value, risk, maintainability, and constraints.",
        "tip": "Know when to involve platform experts. The BA owns clarity and alignment, not every technical answer."
      },
      {
        "id": 39,
        "category": "Collaboration with Stakeholders",
        "select": 2,
        "question": "Which two practices best support stakeholder trust throughout a difficult project?",
        "options": [
          "Communicate risks and uncertainty early with evidence and options",
          "Follow through on commitments and make decisions traceable",
          "Hide bad news until a solution is complete",
          "Change priorities without explaining why"
        ],
        "answers": [
          0,
          1
        ],
        "explanation": "Trust grows through transparency, reliability, respectful challenge, and visible decision-making. Stakeholders can handle uncertainty better when they understand the evidence, options, owners, and next steps.",
        "tip": "Trust is built by consistent behavior over time, especially when the news is uncomfortable."
      },
      {
        "id": 40,
        "category": "Collaboration with Stakeholders",
        "select": 1,
        "question": "A sponsor wants the first release to include every requested capability. What should the BA facilitate?",
        "options": [
          "A decision based only on the longest stakeholder title",
          "A minimum viable scope discussion based on outcomes, risks, dependencies, and learning goals",
          "Automatic approval of the full list",
          "Removal of all nonfunctional requirements"
        ],
        "answers": [
          1
        ],
        "explanation": "The BA helps stakeholders distinguish essential outcomes from later enhancements. A smaller, coherent release can reduce risk, deliver value sooner, and generate learning for future roadmap decisions.",
        "tip": "Minimum viable does not mean random cuts. Preserve an end-to-end outcome that can be validated and used."
      },
      {
        "id": 41,
        "category": "Business Process Mapping",
        "select": 1,
        "question": "Before mapping a complex order-to-cash process, what should the BA define first?",
        "options": [
          "Only the process owner’s job title",
          "The process purpose, start and end points, scope, audience, and level of detail",
          "Every future Salesforce field",
          "The final UAT defect threshold"
        ],
        "answers": [
          1
        ],
        "explanation": "Clear boundaries prevent a process map from expanding indefinitely. The BA should establish why the map is needed, what triggers the process, where it ends, what is included, and who will use it.",
        "tip": "Scope the process before diagramming it. Otherwise the map becomes too broad or too detailed to support a decision."
      },
      {
        "id": 42,
        "category": "Business Process Mapping",
        "select": 1,
        "question": "An executive needs a one-page view of major business capabilities, while operations needs detailed task steps. What should the BA do?",
        "options": [
          "Use only a database schema",
          "Create a single user story for the entire process",
          "Create hierarchical views with a high-level capability map and lower-level process maps",
          "Give both audiences the most detailed diagram"
        ],
        "answers": [
          2
        ],
        "explanation": "Hierarchical mapping lets different audiences navigate from enterprise capabilities to processes, subprocesses, and detailed activities. Each level answers a different question while remaining connected.",
        "tip": "Match the map level to the audience and decision. High-level maps show what; detailed maps show how."
      },
      {
        "id": 43,
        "category": "Business Process Mapping",
        "select": 1,
        "question": "In Universal Process Notation, which structure most clearly describes an activity?",
        "options": [
          "A paragraph containing every exception",
          "Only a system object name",
          "A color with no label",
          "Verb + noun, with the responsible role and supporting information"
        ],
        "answers": [
          3
        ],
        "explanation": "UPN emphasizes simple, understandable activities commonly written as a verb and noun, connected to who performs them and relevant resources or details. The goal is clarity for business stakeholders.",
        "tip": "Process activity labels should describe action, not departments, systems, or vague nouns alone."
      },
      {
        "id": 44,
        "category": "Business Process Mapping",
        "select": 1,
        "question": "A process includes sales, finance, and legal approvals. Which diagram feature best shows ownership and handoffs?",
        "options": [
          "Swimlanes by role or function",
          "A dashboard gauge",
          "A data dictionary",
          "A release calendar"
        ],
        "answers": [
          0
        ],
        "explanation": "Swimlanes group activities by responsible role, team, or system. They make ownership, handoffs, delays, and duplicated work visible across organizational boundaries.",
        "tip": "Use swimlanes when the question is who performs each step and where work changes hands."
      },
      {
        "id": 45,
        "category": "Business Process Mapping",
        "select": 1,
        "question": "The team wants to improve a process. Which order is most appropriate?",
        "options": [
          "Map only the happy path after development",
          "Validate the current state, identify pain points and root causes, then design and validate the future state",
          "Design the future state first and ignore current behavior",
          "Build automation before mapping the process"
        ],
        "answers": [
          1
        ],
        "explanation": "A validated current state provides the baseline for improvement. Root-cause analysis then identifies what should change, and the future state can be designed and tested against agreed outcomes and constraints.",
        "tip": "As-is before to-be is a core BA pattern when the current process is not yet understood."
      },
      {
        "id": 46,
        "category": "Business Process Mapping",
        "select": 1,
        "question": "A process map shows that requests wait three days for one manager even though the review takes five minutes. What has the BA identified?",
        "options": [
          "A user story acceptance criterion",
          "A deployment dependency only",
          "A bottleneck or queue delay",
          "A new business capability"
        ],
        "answers": [
          2
        ],
        "explanation": "The manager step constrains flow because work accumulates before a short activity. Process analysis should distinguish processing time from waiting time and explore causes and alternatives.",
        "tip": "Look for wait states, rework loops, handoffs, and overloaded decision points when analyzing process performance."
      },
      {
        "id": 47,
        "category": "Business Process Mapping",
        "select": 1,
        "question": "A future-state map contains only the normal path, but 30% of cases require exceptions. What should the BA do?",
        "options": [
          "Leave exceptions undocumented because they are not the majority",
          "Create a separate Salesforce org for each exception",
          "Move every exception to UAT without requirements",
          "Add decision points, exception paths, triggers, and ownership for those scenarios"
        ],
        "answers": [
          3
        ],
        "explanation": "A process map must represent material variations and exceptions that affect requirements, automation, controls, and user experience. Ignoring common exceptions creates incomplete stories and failed testing.",
        "tip": "The happy path is not the whole process. Material exceptions belong in analysis and acceptance criteria."
      },
      {
        "id": 48,
        "category": "Business Process Mapping",
        "select": 1,
        "question": "Which statement best distinguishes a capability map from a process map?",
        "options": [
          "A capability map shows what the organization must be able to do; a process map shows how work flows to achieve an outcome",
          "A capability map contains test scripts; a process map contains users",
          "A capability map is only for developers",
          "There is no meaningful difference"
        ],
        "answers": [
          0
        ],
        "explanation": "Capabilities are stable business abilities such as Manage Cases or Forecast Revenue. Processes describe sequences of activities, decisions, roles, and inputs that deliver outcomes.",
        "tip": "Capability equals what the business can do. Process equals how the work is performed."
      },
      {
        "id": 49,
        "category": "Business Process Mapping",
        "select": 1,
        "question": "Several teams edit copies of the same future-state diagram and no one knows which is approved. What is the best control?",
        "options": [
          "Let every team define its own future state",
          "Store the map in a shared version-controlled repository with status, owner, and approval history",
          "Email new copies with different filenames",
          "Delete all prior versions"
        ],
        "answers": [
          1
        ],
        "explanation": "Version control and governance establish a source of truth, preserve history, and show which version is current or approved. This is essential when process maps drive requirements and scope.",
        "tip": "A shared artifact needs ownership, version history, and status—not informal file naming."
      },
      {
        "id": 50,
        "category": "Business Process Mapping",
        "select": 1,
        "question": "After stakeholders approve a future-state process, a team adds several steps without review. What should the BA do?",
        "options": [
          "Update the map secretly",
          "Remove stakeholder approval from the record",
          "Apply the agreed governance and change-control process to assess the scope change",
          "Accept the changes because process maps are informal"
        ],
        "answers": [
          2
        ],
        "explanation": "An approved future state becomes a governed baseline. Changes should be assessed for value, impact, dependencies, requirements, and approval so the process and solution remain aligned.",
        "tip": "Governance protects an agreed baseline while still allowing controlled change."
      },
      {
        "id": 51,
        "category": "Business Process Mapping",
        "select": 1,
        "question": "A handoff between service and billing causes missing information and repeated emails. Which process improvement question is most useful?",
        "options": [
          "Can both teams receive more decorative dashboards?",
          "Can the missing information be ignored?",
          "Can the process map remove the billing team?",
          "Can ownership, required inputs, validation, and the handoff trigger be made explicit or simplified?"
        ],
        "answers": [
          3
        ],
        "explanation": "Handoffs fail when ownership, entry criteria, required information, and completion conditions are unclear. The BA should examine whether the handoff can be eliminated, automated, standardized, or better controlled.",
        "tip": "Every handoff adds delay and risk. Analyze what must be true before work moves to the next owner."
      },
      {
        "id": 52,
        "category": "Business Process Mapping",
        "select": 2,
        "question": "Which two activities best validate that a process map is accurate and usable?",
        "options": [
          "Walk through realistic scenarios with people who perform and receive the work",
          "Compare the map with records, policies, metrics, and observed behavior",
          "Ask only the map author to approve it",
          "Add more diagram symbols without stakeholder review"
        ],
        "answers": [
          0,
          1
        ],
        "explanation": "Scenario walkthroughs and evidence help validate sequence, ownership, decisions, exceptions, and outcomes. Process participants can identify missing steps while data and artifacts challenge assumptions.",
        "tip": "Validate maps with both people and evidence. A polished diagram can still be wrong."
      },
      {
        "id": 53,
        "category": "Requirements",
        "select": 1,
        "question": "A stakeholder states, “We need Salesforce to reduce case resolution time by 20%.” What type of requirement is this primarily?",
        "options": [
          "A deployment step",
          "A business requirement or outcome",
          "A detailed field specification",
          "A test defect"
        ],
        "answers": [
          1
        ],
        "explanation": "The statement describes the business outcome the initiative should achieve. Solution and functional requirements will later define what the system and process must do to support that outcome.",
        "tip": "Business requirements explain why and what outcome. Solution requirements explain what the process or system must do."
      },
      {
        "id": 54,
        "category": "Requirements",
        "select": 1,
        "question": "Which statement is a functional requirement?",
        "options": [
          "The project should improve customer trust",
          "The team should work efficiently",
          "The system must route cases with Severity = Critical to the escalation queue within one minute",
          "The page should feel modern"
        ],
        "answers": [
          2
        ],
        "explanation": "A functional requirement describes observable system behavior under defined conditions. It is specific enough to design and test, unlike subjective or strategic statements.",
        "tip": "Look for trigger, behavior, conditions, and observable result."
      },
      {
        "id": 55,
        "category": "Requirements",
        "select": 1,
        "question": "Which statement is a nonfunctional requirement?",
        "options": [
          "Users must be able to create an account",
          "A manager must approve discounts over 20%",
          "The system must create a task after a case closes",
          "Authorized users must see the dashboard within three seconds for 95% of requests"
        ],
        "answers": [
          3
        ],
        "explanation": "Nonfunctional requirements define quality attributes or constraints such as performance, security, availability, accessibility, scalability, and compliance.",
        "tip": "Functional describes what happens. Nonfunctional describes how well, how securely, or under what quality constraint it happens."
      },
      {
        "id": 56,
        "category": "Requirements",
        "select": 1,
        "question": "A requirement has changed three times and affects four user stories and six test cases. Which practice gives the best visibility?",
        "options": [
          "Requirements traceability linking the requirement to source, stories, solution components, and tests",
          "A private notebook",
          "A screenshot of the latest meeting",
          "A dashboard color legend"
        ],
        "answers": [
          0
        ],
        "explanation": "Traceability shows where a requirement came from, how it is implemented, and how it is validated. It supports impact analysis when requirements change and provides evidence of coverage.",
        "tip": "Traceability answers: why does this exist, where is it delivered, and how do we know it works?"
      },
      {
        "id": 57,
        "category": "Requirements",
        "select": 2,
        "question": "The release cannot include every requirement. Which two factors should strongly influence prioritization?",
        "options": [
          "The number of words in each requirement",
          "Business value, risk, compliance, urgency, and strategic alignment",
          "Dependencies, effort, and the ability to deliver a coherent outcome",
          "The order in which stakeholders emailed requests"
        ],
        "answers": [
          1,
          2
        ],
        "explanation": "Prioritization balances value and risk with feasibility and sequencing. Dependencies and effort matter because a high-value requirement may not be independently deliverable in the planned release.",
        "tip": "Prioritize using agreed criteria and preserve an end-to-end outcome. Avoid arbitrary ordering."
      },
      {
        "id": 58,
        "category": "Requirements",
        "select": 1,
        "question": "A requirement depends on identity integration that will not be available until the next quarter. What should the BA do?",
        "options": [
          "Remove the dependency from documentation",
          "Assume the integration will arrive early",
          "Record the dependency and evaluate sequencing, alternatives, risk, and impact on acceptance",
          "Mark the requirement complete"
        ],
        "answers": [
          2
        ],
        "explanation": "Dependencies affect feasibility, schedule, design, and testing. The BA should make them explicit, identify ownership, and help stakeholders decide whether to defer, redesign, or mitigate.",
        "tip": "A requirement is not independently ready when a critical dependency is unresolved."
      },
      {
        "id": 59,
        "category": "Requirements",
        "select": 1,
        "question": "Which status model best supports a requirement lifecycle?",
        "options": [
          "New and old only",
          "Important and unimportant only",
          "Red, blue, and green",
          "Proposed, analyzed, approved, implemented, verified, and retired or superseded"
        ],
        "answers": [
          3
        ],
        "explanation": "Lifecycle status communicates maturity and governance. It helps teams know whether a requirement is still being explored, has approval, is delivered, has been validated, or is no longer active.",
        "tip": "Requirement status should reflect analysis and delivery state, not personal opinion."
      },
      {
        "id": 60,
        "category": "Requirements",
        "select": 1,
        "question": "Where should approved requirements be maintained?",
        "options": [
          "In a shared version-controlled repository that preserves history and access",
          "Only in the BA’s local files",
          "Only in meeting chat",
          "Only in the developer’s memory"
        ],
        "answers": [
          0
        ],
        "explanation": "A controlled repository creates a source of truth, supports collaboration and traceability, and preserves changes over time. The exact tool matters less than governance, accessibility, and history.",
        "tip": "Requirements need a durable source of truth with version history and clear ownership."
      },
      {
        "id": 61,
        "category": "Requirements",
        "select": 1,
        "question": "A new regulation changes an approved requirement. What is the best next step?",
        "options": [
          "Delete the original requirement and its history",
          "Perform impact analysis and follow the agreed change-control and prioritization process",
          "Reject the change because approval already occurred",
          "Implement it secretly"
        ],
        "answers": [
          1
        ],
        "explanation": "Regulatory changes may be mandatory, but the team still needs to assess scope, dependencies, solution impact, tests, schedule, and communication. Controlled change maintains traceability and alignment.",
        "tip": "Mandatory does not mean unmanaged. Analyze and document the impact even when the decision is not optional."
      },
      {
        "id": 62,
        "category": "Requirements",
        "select": 1,
        "question": "Users say the current account creation process is “frustrating.” What should the BA do to turn the pain point into requirements?",
        "options": [
          "Ask developers to guess the cause",
          "Write a requirement to make the page nicer",
          "Identify specific causes, affected users, frequency, impact, and desired outcomes before defining solution behavior",
          "Translate “frustrating” directly into a custom object"
        ],
        "answers": [
          2
        ],
        "explanation": "A pain point is evidence of a problem but is not yet a well-defined requirement. The BA investigates where and why the frustration occurs and converts findings into measurable needs and behaviors.",
        "tip": "Do not design from adjectives. Convert vague pain into observable problems and outcomes."
      },
      {
        "id": 63,
        "category": "Requirements",
        "select": 1,
        "question": "Which requirement is best defined?",
        "options": [
          "The system should be user friendly",
          "Reports should be better",
          "Salesforce should automate everything",
          "When a high-risk opportunity is submitted, the system must require legal approval before the stage can change to Contracted"
        ],
        "answers": [
          3
        ],
        "explanation": "The requirement identifies a condition, system behavior, control, and observable outcome. It is specific, necessary, feasible to analyze, and testable.",
        "tip": "Strong requirements are clear, unambiguous, feasible, necessary, prioritized, and verifiable."
      },
      {
        "id": 64,
        "category": "Requirements",
        "select": 1,
        "question": "A data migration requirement says, “Move customer data.” What information is missing?",
        "options": [
          "Source, scope, field mapping, quality rules, ownership, volume, timing, security, and reconciliation criteria",
          "The preferred dashboard theme",
          "The sprint retrospective date only",
          "The name of the executive sponsor only"
        ],
        "answers": [
          0
        ],
        "explanation": "Data requirements must define what data is in scope, where it comes from, how it maps and transforms, how quality is handled, who owns decisions, and how completeness and accuracy will be validated.",
        "tip": "Data migration requirements need both transformation rules and acceptance or reconciliation criteria."
      },
      {
        "id": 65,
        "category": "Requirements",
        "select": 1,
        "question": "A requirement allows all support agents to view medical information, but policy allows access only for a specialized team. What should the BA do?",
        "options": [
          "Remove security from acceptance testing",
          "Update the requirement to reflect least-privilege access and involve security or compliance stakeholders",
          "Ignore policy because the users requested access",
          "Make the object public read/write"
        ],
        "answers": [
          1
        ],
        "explanation": "Requirements must incorporate policy, legal, privacy, and security constraints. The BA should resolve the conflict with accountable stakeholders and document the authorized access model.",
        "tip": "User preference cannot override compliance. Security and privacy are requirements, not post-build settings."
      },
      {
        "id": 66,
        "category": "Requirements",
        "select": 1,
        "question": "Which statement is an assumption rather than a confirmed requirement?",
        "options": [
          "The system must retain audit history for seven years",
          "Only service managers can close escalated cases",
          "All regional teams will adopt the same approval process without local exceptions",
          "Discounts above 25% require CFO approval"
        ],
        "answers": [
          2
        ],
        "explanation": "An assumption is believed to be true for planning but has not been validated. It should be recorded, owned, and tested because a false assumption can change scope and design.",
        "tip": "Flag assumptions explicitly. Unvalidated assumptions often become hidden risks."
      },
      {
        "id": 67,
        "category": "Requirements",
        "select": 1,
        "question": "The current process cannot support a desired future outcome. Which analysis compares what exists with what is needed?",
        "options": [
          "Regression testing",
          "Role hierarchy analysis",
          "Sprint burndown",
          "Gap analysis"
        ],
        "answers": [
          3
        ],
        "explanation": "Gap analysis identifies differences between the current and desired future states across process, people, data, technology, policy, and capability. Those gaps drive requirements and roadmap decisions.",
        "tip": "Current state minus future state equals the gaps the solution and change plan must address."
      },
      {
        "id": 68,
        "category": "Requirements",
        "select": 1,
        "question": "What is the difference between verifying and validating requirements?",
        "options": [
          "Verification checks requirement quality and completeness; validation confirms the requirements represent the real business need",
          "Verification occurs only after production; validation occurs only before discovery",
          "They are identical terms",
          "Validation is performed only by developers"
        ],
        "answers": [
          0
        ],
        "explanation": "Verification asks whether requirements are written correctly—clear, consistent, complete, feasible, and testable. Validation asks whether they are the right requirements for stakeholders and outcomes.",
        "tip": "Verify the artifact. Validate the need."
      },
      {
        "id": 69,
        "category": "Requirements",
        "select": 1,
        "question": "A requirement is approved, but the development team cannot determine expected behavior for an exception. What should the BA do?",
        "options": [
          "Close the requirement because it was approved",
          "Clarify the requirement with stakeholders and update the controlled artifact and affected stories",
          "Tell the team to choose any behavior",
          "Wait until UAT to discuss it"
        ],
        "answers": [
          1
        ],
        "explanation": "Approval does not make ambiguity harmless. The BA should resolve the exception, preserve the decision, and assess the impact on stories, design, tests, and scope.",
        "tip": "Clarification is ongoing. Never let an approval status prevent correction of ambiguity."
      },
      {
        "id": 70,
        "category": "Requirements",
        "select": 2,
        "question": "Which two conditions indicate a requirement is ready for delivery planning?",
        "options": [
          "It contains a preferred solution but no business need",
          "Stakeholders have not reviewed it",
          "It has a clear business rationale, owner, priority, scope, and acceptance approach",
          "Dependencies, assumptions, constraints, and affected processes or data are understood"
        ],
        "answers": [
          2,
          3
        ],
        "explanation": "A ready requirement is understood well enough to estimate, decompose, design, and test. It does not need every implementation detail, but critical ambiguity and dependency risk should be visible.",
        "tip": "Readiness means sufficient shared understanding—not perfect certainty."
      },
      {
        "id": 71,
        "category": "User Stories",
        "select": 1,
        "question": "Which user story follows the standard role-goal-benefit format?",
        "options": [
          "Create an overdue escalation report",
          "The system shall use a dashboard",
          "Overdue escalations are important",
          "As a service manager, I want to view overdue escalations so that I can prioritize intervention"
        ],
        "answers": [
          3
        ],
        "explanation": "The story identifies the user, desired capability, and value. It frames the need without prescribing every implementation detail.",
        "tip": "A good story states who, what, and why. Implementation details belong in supporting notes when needed."
      },
      {
        "id": 72,
        "category": "User Stories",
        "select": 1,
        "question": "Which quality is represented by the “V” in INVEST?",
        "options": [
          "Valuable",
          "Visible",
          "Verified",
          "Versioned"
        ],
        "answers": [
          0
        ],
        "explanation": "INVEST describes good user stories as Independent, Negotiable, Valuable, Estimable, Small, and Testable. Value connects the story to a meaningful outcome for a user or stakeholder.",
        "tip": "Memorize INVEST, but also understand how each quality improves backlog decisions and delivery."
      },
      {
        "id": 73,
        "category": "User Stories",
        "select": 1,
        "question": "Which acceptance criterion is written in a clear Given-When-Then style?",
        "options": [
          "Managers like approvals",
          "Given an opportunity discount above 20%, when the rep submits for approval, then the request is routed to the regional manager",
          "The approval should work correctly",
          "Build a discount flow"
        ],
        "answers": [
          1
        ],
        "explanation": "Given-When-Then describes context, action, and observable result. It creates a shared example that supports development and testing.",
        "tip": "Acceptance criteria should be observable and specific enough that two people reach the same conclusion."
      },
      {
        "id": 74,
        "category": "User Stories",
        "select": 1,
        "question": "What is the primary difference between acceptance criteria and the Definition of Done?",
        "options": [
          "Definition of Done replaces all testing",
          "There is no difference",
          "Acceptance criteria are story-specific conditions; the Definition of Done is a shared quality standard for completed increments",
          "Acceptance criteria are only for developers; Definition of Done is only for executives"
        ],
        "answers": [
          2
        ],
        "explanation": "Acceptance criteria define what must be true for one story. The Definition of Done applies consistently to work completed by the team, such as review, testing, documentation, and deployment readiness.",
        "tip": "Story-specific versus team-wide is the key distinction."
      },
      {
        "id": 75,
        "category": "User Stories",
        "select": 1,
        "question": "A story says, “As a user, I want a complete customer 360 platform.” Why is it not ready for a sprint?",
        "options": [
          "It contains a user role",
          "It includes business value",
          "It has too few technical tasks",
          "It is too broad and should be decomposed into smaller valuable slices"
        ],
        "answers": [
          3
        ],
        "explanation": "The story represents an epic or outcome that spans many capabilities, users, and dependencies. It should be split into smaller end-to-end stories that can be delivered and validated.",
        "tip": "Small does not mean a technical layer. Split by workflow, rule, scenario, data set, or user outcome."
      },
      {
        "id": 76,
        "category": "User Stories",
        "select": 1,
        "question": "Which split creates the strongest vertical slice?",
        "options": [
          "Allow a sales rep to create and submit one standard discount request end to end",
          "Build all database fields first",
          "Build all UI components without logic",
          "Create all automation for every discount scenario"
        ],
        "answers": [
          0
        ],
        "explanation": "A vertical slice delivers a thin but usable path across the necessary layers. It can be demonstrated and accepted based on user value, unlike horizontal technical work alone.",
        "tip": "Prefer end-to-end user value over separate UI, data, and automation layers."
      },
      {
        "id": 77,
        "category": "User Stories",
        "select": 1,
        "question": "A team wants to visualize the sequence of user activities and identify a minimum viable release. Which technique is most useful?",
        "options": [
          "A database index review",
          "User story mapping",
          "A permission set audit",
          "A release rollback log"
        ],
        "answers": [
          1
        ],
        "explanation": "Story mapping organizes activities and stories along the user journey, helping teams see workflow completeness, dependencies, and possible release slices.",
        "tip": "Story maps connect backlog items to the user’s end-to-end experience and release goals."
      },
      {
        "id": 78,
        "category": "User Stories",
        "select": 1,
        "question": "What is the purpose of backlog refinement?",
        "options": [
          "Replace the Sprint Review",
          "Assign every task months in advance",
          "Clarify, split, prioritize, estimate, and prepare upcoming work collaboratively",
          "Approve production deployment"
        ],
        "answers": [
          2
        ],
        "explanation": "Backlog refinement improves shared understanding and readiness of future work. It is ongoing and may include clarifying stories, adding criteria, identifying dependencies, and estimating.",
        "tip": "Refinement is preparation, not a one-time approval gate."
      },
      {
        "id": 79,
        "category": "User Stories",
        "select": 1,
        "question": "Who should accept that a user story meets its agreed business conditions?",
        "options": [
          "Any developer working on the story",
          "Only the Scrum Master",
          "The database administrator regardless of scope",
          "The Product Owner or authorized business decision maker"
        ],
        "answers": [
          3
        ],
        "explanation": "The Product Owner is accountable for product value and commonly accepts completed stories against agreed criteria, often informed by stakeholder and tester feedback.",
        "tip": "The delivery team demonstrates completion; the accountable business role accepts value and criteria."
      },
      {
        "id": 80,
        "category": "User Stories",
        "select": 1,
        "question": "Why should user stories be maintained in a version-controlled repository?",
        "options": [
          "To preserve changes, decisions, links, status, and a shared source of truth",
          "To prevent stakeholders from reading them",
          "To eliminate the need for conversation",
          "To hide superseded acceptance criteria"
        ],
        "answers": [
          0
        ],
        "explanation": "Version history and traceability show how scope and understanding evolved. A repository supports collaboration, auditability, and impact analysis.",
        "tip": "A story is a conversation supported by a durable record—not a replacement for conversation."
      },
      {
        "id": 81,
        "category": "User Stories",
        "select": 1,
        "question": "A story contains detailed instructions for exactly which Flow elements a developer must use. What should the BA do?",
        "options": [
          "Ask testers to decide the architecture",
          "Keep the business intent and acceptance conditions clear, and move solution details to appropriate design notes unless they are true constraints",
          "Add more implementation detail to every story",
          "Remove the user value"
        ],
        "answers": [
          1
        ],
        "explanation": "User stories should normally express need and value while allowing collaboration on implementation. Necessary technical constraints can be documented, but premature design can reduce better options.",
        "tip": "Do not confuse a user story with a technical specification. Preserve legitimate constraints without over-prescribing."
      },
      {
        "id": 82,
        "category": "User Stories",
        "select": 1,
        "question": "Story B cannot begin until Story A establishes a required integration. What should the team do?",
        "options": [
          "Start both stories and hope the integration appears",
          "Mark Story B done",
          "Make the dependency visible and consider sequencing, splitting, or reducing coupling",
          "Hide the dependency from the backlog"
        ],
        "answers": [
          2
        ],
        "explanation": "Dependencies affect ordering, estimation, and sprint risk. The team should expose them and seek ways to reduce or manage them rather than discovering the issue during delivery.",
        "tip": "Independent is an INVEST goal. When independence is impossible, make the dependency explicit and manage it."
      },
      {
        "id": 83,
        "category": "User Stories",
        "select": 1,
        "question": "Which story is most testable?",
        "options": [
          "As a user, I want a better experience",
          "Improve Salesforce",
          "Make reports fast enough",
          "As a sales manager, I want opportunities over $500,000 flagged within one minute so that I can review risk promptly"
        ],
        "answers": [
          3
        ],
        "explanation": "The story identifies a user, outcome, threshold, and timing that can be validated. Vague adjectives do not produce consistent tests.",
        "tip": "Testability improves when the outcome and boundaries are observable and measurable."
      },
      {
        "id": 84,
        "category": "User Stories",
        "select": 1,
        "question": "A stakeholder requests encryption and auditability but no visible user interaction. How should the need be represented?",
        "options": [
          "As a nonfunctional requirement linked to relevant stories and acceptance or compliance criteria",
          "It should be ignored because it is not a user-facing feature",
          "Only as a developer task with no traceability",
          "As a persona"
        ],
        "answers": [
          0
        ],
        "explanation": "Not every important need fits naturally into a role-goal-benefit story. Security and compliance can be represented as nonfunctional requirements, constraints, enablers, or criteria linked to affected delivery work.",
        "tip": "Do not force every quality constraint into an awkward user story. Maintain traceability to the work it governs."
      },
      {
        "id": 85,
        "category": "User Stories",
        "select": 1,
        "question": "A story reads, “As Salesforce, I want to update a record.” What is the main issue?",
        "options": [
          "The story is already a test case",
          "The actor is not a meaningful user or stakeholder and the value is unclear",
          "The story is too small",
          "The story contains too much acceptance criteria"
        ],
        "answers": [
          1
        ],
        "explanation": "Salesforce is the system, not the beneficiary. A strong story identifies who needs the outcome and why; automation behavior can then be described in criteria or supporting requirements.",
        "tip": "The role should represent a person or stakeholder perspective with a meaningful goal and value."
      },
      {
        "id": 86,
        "category": "User Stories",
        "select": 1,
        "question": "The team does not understand whether a complex vendor API can support a proposed story. What backlog item can reduce uncertainty?",
        "options": [
          "A completed UAT sign-off",
          "A persona workshop only",
          "A time-boxed spike with a clear research question and expected output",
          "A production release"
        ],
        "answers": [
          2
        ],
        "explanation": "A spike is a time-boxed investigation used to learn enough about technology, design, or requirements to make a better decision or estimate. It should produce defined learning, not indefinite exploration.",
        "tip": "Use a spike to answer a specific uncertainty. Time-box it and define what decision the result will support."
      },
      {
        "id": 87,
        "category": "User Stories",
        "select": 1,
        "question": "Who should estimate user stories in an agile delivery team?",
        "options": [
          "The BA alone",
          "The executive sponsor alone",
          "The UAT testers after release",
          "The people who will do the work, using shared understanding of the story"
        ],
        "answers": [
          3
        ],
        "explanation": "The delivery team estimates because its members understand the implementation work, risks, and dependencies. The BA and Product Owner clarify scope and value but should not impose estimates.",
        "tip": "Those who perform the work estimate it; those who define value prioritize it."
      },
      {
        "id": 88,
        "category": "User Stories",
        "select": 2,
        "question": "Which two characteristics indicate that acceptance criteria are effective?",
        "options": [
          "They cover important business rules, boundaries, and exception behavior",
          "They are clear and observable enough to support development and testing",
          "They repeat the story title without additional detail",
          "They prescribe every internal code method"
        ],
        "answers": [
          0,
          1
        ],
        "explanation": "Effective criteria clarify what success means, including rules and material exceptions, while remaining understandable and testable. They guide implementation without unnecessarily dictating architecture.",
        "tip": "Criteria define outcomes and boundaries. They should reduce ambiguity, not replace technical design."
      },
      {
        "id": 89,
        "category": "User Acceptance",
        "select": 1,
        "question": "What is the primary purpose of User Acceptance Testing?",
        "options": [
          "Replace unit and system testing",
          "Train developers on Salesforce syntax",
          "Confirm that the solution supports agreed business needs and can be accepted by representative users",
          "Prove that no software defect can ever exist"
        ],
        "answers": [
          2
        ],
        "explanation": "UAT validates the solution from the business perspective using realistic scenarios and acceptance criteria. It complements technical testing rather than replacing it.",
        "tip": "Technical testing asks whether the solution works as designed. UAT asks whether it works for the business need."
      },
      {
        "id": 90,
        "category": "User Acceptance",
        "select": 1,
        "question": "Which group makes the strongest UAT testers for a new case process?",
        "options": [
          "Only the developers who built the solution",
          "Only executives who never use the process",
          "Random users with no process knowledge",
          "Representative business users who understand the process, including common roles and important variations"
        ],
        "answers": [
          3
        ],
        "explanation": "Representative users can judge whether the process supports real work and business outcomes. The tester group should cover relevant roles, regions, scenarios, and authorization levels.",
        "tip": "Choose testers for process knowledge and representativeness, not convenience alone."
      },
      {
        "id": 91,
        "category": "User Acceptance",
        "select": 1,
        "question": "What should a UAT test script be traced back to?",
        "options": [
          "Approved requirements, user stories, acceptance criteria, and business processes",
          "The developer’s preferred implementation",
          "Only the project schedule",
          "The organization chart"
        ],
        "answers": [
          0
        ],
        "explanation": "Traceability ensures that UAT covers the agreed business scope and that failures can be linked to specific needs and decisions.",
        "tip": "Every important requirement should have a clear validation path."
      },
      {
        "id": 92,
        "category": "User Acceptance",
        "select": 1,
        "question": "Why should UAT use realistic data and scenarios?",
        "options": [
          "To replace data privacy controls",
          "To expose business rules, permissions, integrations, exceptions, and usability issues that artificial happy paths may miss",
          "To make the scripts longer",
          "To avoid documenting expected results"
        ],
        "answers": [
          1
        ],
        "explanation": "Realistic scenarios reveal whether the solution works under the conditions users actually face. Test data must still comply with privacy and security requirements.",
        "tip": "Realistic does not mean copying sensitive production data without controls."
      },
      {
        "id": 93,
        "category": "User Acceptance",
        "select": 1,
        "question": "A UAT tester reports that a required field label is confusing but the transaction can be completed. How should the issue be handled?",
        "options": [
          "Immediately cancel the release without analysis",
          "Ask the tester to change the label in production",
          "Log it with evidence, business impact, severity, priority, and an agreed disposition",
          "Ignore it because it is not a system crash"
        ],
        "answers": [
          2
        ],
        "explanation": "UAT feedback should be captured consistently and triaged. Severity describes impact; priority reflects when the team should act. The decision may be to fix, defer, accept, or clarify.",
        "tip": "Not every issue blocks release, but every meaningful issue needs a visible decision and rationale."
      },
      {
        "id": 94,
        "category": "User Acceptance",
        "select": 2,
        "question": "Which two items belong in a UAT plan?",
        "options": [
          "Test scenarios, data needs, traceability, communication, and sign-off responsibilities",
          "Only the production deployment time",
          "Only the names of developers",
          "Scope, roles, environment, schedule, entry and exit criteria, and defect process"
        ],
        "answers": [
          0,
          3
        ],
        "explanation": "A UAT plan defines how business acceptance will be organized and governed. It covers what will be tested, by whom, where, when, with which data, how issues are handled, and how acceptance is decided.",
        "tip": "UAT needs planned people, scope, data, environment, evidence, issue handling, and decision criteria."
      },
      {
        "id": 95,
        "category": "User Acceptance",
        "select": 1,
        "question": "A regulated process requires evidence that only authorized roles completed approval tests. What should the BA ensure?",
        "options": [
          "The UAT plan captures tester identity, role, results, evidence, and required compliance sign-off",
          "Anyone can test under an administrator account",
          "Test results are recorded only verbally",
          "Compliance is reviewed after production"
        ],
        "answers": [
          0
        ],
        "explanation": "Regulated acceptance may require controlled access, traceable execution, evidence retention, segregation of duties, and formal approval. These needs belong in the plan before testing begins.",
        "tip": "Compliance affects who tests, how evidence is stored, and who can sign off."
      },
      {
        "id": 96,
        "category": "User Acceptance",
        "select": 1,
        "question": "UAT finds a defect that prevents all users from completing a legally required process. What is the best recommendation?",
        "options": [
          "Ask users to bypass the legal step",
          "No-go until the blocking issue is resolved or an approved compliant mitigation exists",
          "Go live because the schedule is fixed",
          "Hide the defect from the sponsor"
        ],
        "answers": [
          1
        ],
        "explanation": "A defect that blocks a mandatory process creates unacceptable business and compliance risk. The go/no-go decision should be based on severity, scope, mitigation, residual risk, and accountable approval.",
        "tip": "A fixed date does not outweigh an unmitigated critical risk."
      },
      {
        "id": 97,
        "category": "User Acceptance",
        "select": 1,
        "question": "UAT is complete and all exit criteria are met. What should happen before release?",
        "options": [
          "Let the development team approve on behalf of users",
          "Start new requirements without closing UAT",
          "Obtain and record formal stakeholder acceptance or sign-off according to governance",
          "Delete all test evidence"
        ],
        "answers": [
          2
        ],
        "explanation": "Formal acceptance records that authorized stakeholders reviewed results, accepted residual risks, and approved the solution for release. The method should follow organizational governance.",
        "tip": "Completion of tests and authorization to release are related but distinct decisions."
      },
      {
        "id": 98,
        "category": "User Acceptance",
        "select": 1,
        "question": "How does regression testing differ from UAT?",
        "options": [
          "Regression testing is performed only by executives",
          "UAT replaces all regression testing",
          "There is no difference",
          "Regression testing checks that existing functionality still works; UAT validates the solution against business needs"
        ],
        "answers": [
          3
        ],
        "explanation": "Regression testing protects existing behavior after change. UAT evaluates whether the delivered solution is acceptable for intended business use. A release may require both.",
        "tip": "Regression protects what already worked. UAT confirms the new or changed outcome is acceptable."
      },
      {
        "id": 99,
        "category": "User Acceptance",
        "select": 1,
        "question": "The UAT environment contains copied production data with sensitive customer details. What should the BA do?",
        "options": [
          "Escalate the risk and ensure masking, access controls, retention, and policy requirements are followed",
          "Share the data broadly to speed testing",
          "Export the data to personal devices",
          "Ignore the issue because the environment is not production"
        ],
        "answers": [
          0
        ],
        "explanation": "Nonproduction environments still require appropriate privacy and security controls. UAT planning should specify safe test data, authorized access, and handling requirements.",
        "tip": "Environment labels do not remove data obligations. Sensitive data remains sensitive outside production."
      },
      {
        "id": 100,
        "category": "User Acceptance",
        "select": 2,
        "question": "Which two conditions are appropriate UAT exit criteria?",
        "options": [
          "No future enhancement remains in the backlog",
          "All planned critical scenarios have been executed with traceable results",
          "No unresolved defect exceeds the agreed risk threshold and required stakeholders have accepted residual issues",
          "Every tester reports that the interface is perfect"
        ],
        "answers": [
          1,
          2
        ],
        "explanation": "Exit criteria should be objective and agreed before testing. They commonly address coverage, defect thresholds, evidence, business readiness, and sign-off—not perfection or completion of every future idea.",
        "tip": "Define exit criteria before UAT so the release decision is not invented under schedule pressure."
      }
    ]
  }
];
