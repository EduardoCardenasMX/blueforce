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
    examConfig: {
      officialQuestionCount: 60,
      officialDurationMinutes: 105,
      passingScore: 65,
    },
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
    examConfig: {
      officialQuestionCount: 60,
      officialDurationMinutes: 105,
      passingScore: 65,
    },
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
    examConfig: {
      officialQuestionCount: 60,
      officialDurationMinutes: 105,
      passingScore: 72,
    },
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
    examConfig: {
      officialQuestionCount: 60,
      officialDurationMinutes: 105,
      passingScore: 68,
    },
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
    examConfig: {
      officialQuestionCount: 60,
      officialDurationMinutes: 105,
      passingScore: 70,
    },
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

const distractorPatterns = [
  {
    pattern: /dashboard color|dashboard theme|page background|new lightning theme|preferred dashboard color/i,
    replacement:
      "Dashboard presentation changes that make the metric more visible without changing the underlying process design",
  },
  {
    pattern: /dashboard filter/i,
    replacement:
      "Dashboard filters that let viewers narrow results without changing the underlying data model or automation",
  },
  {
    pattern: /campaign hierarchy/i,
    replacement:
      "Campaign hierarchy configuration used to aggregate marketing performance across related campaign records",
  },
  {
    pattern: /role hierarchy depth|role hierarchy branch|a role hierarchy$/i,
    replacement:
      "Role hierarchy changes that broaden record visibility for managers in the affected reporting structure",
  },
  {
    pattern: /lead queue|lead queues|lead assignment/i,
    replacement:
      "Lead queue routing that assigns incoming prospects to the appropriate sales or marketing team",
  },
  {
    pattern: /case queue|case queues|case escalation|email-to-case|web-to-case/i,
    replacement:
      "Case management configuration intended for support routing, escalation, or customer-service intake",
  },
  {
    pattern: /compact layout|page layout|larger page layout/i,
    replacement:
      "Record layout changes that surface fields or actions without changing the business rule being evaluated",
  },
  {
    pattern: /public group|account team|opportunity team|case team/i,
    replacement:
      "Collaboration or sharing group configuration used to coordinate access for a defined set of users",
  },
  {
    pattern: /permission set|profile|more profiles|profile photo|blue profile/i,
    replacement:
      "Permission or profile configuration that changes user capabilities but does not define the process outcome",
  },
  {
    pattern: /fiscal year|currency|forecast|territory/i,
    replacement:
      "Sales planning configuration for fiscal, currency, forecast, or territory behavior in the sales model",
  },
  {
    pattern: /email template|mass email|email relay|confirmation email/i,
    replacement:
      "Email configuration that controls message formatting or delivery without resolving the full scenario",
  },
  {
    pattern: /data loader|data import wizard|csv|spreadsheet|public spreadsheet/i,
    replacement:
      "Manual file-based data handling with mappings and operational controls managed outside the target workflow",
  },
];

const optionRewriteOverrides = new Map(
  Object.entries({
    "To the browser address bar":
      "To the browser address bar so keyboard users can confirm the page context before interacting",
    "To a random page element":
      "To the first focusable element in the underlying page content rather than inside the modal",
    "Behind the modal":
      "To the element that launched the modal while leaving the overlay and focus order unchanged",
    "To replace data privacy controls":
      "To validate scripted scenarios without involving users who can reveal policy or permission gaps",
    "To make the scripts longer":
      "To expand scripted coverage before confirming that the workflow reflects real user behavior",
    "To avoid documenting expected results":
      "To rely on exploratory feedback instead of predefined expected results and acceptance criteria",
    "To replace user stories":
      "To replace user stories with architecture notes as the only project record",
    "To store passwords":
      "To centralize sensitive operational details in the decision log for later implementation",
    "To count page views":
      "To measure navigation activity after launch instead of documenting design rationale",
    "Promise higher revenue without process change":
      "Promise revenue improvement based only on feature availability, without defining behavior changes",
    "Create a field named Sell Better":
      "Create a generic sales-productivity field and let managers interpret improvement informally",
    "Configure random productivity features":
      "Configure multiple productivity features before linking them to measurable sales outcomes",
    "A user acceptance criterion":
      "A user acceptance criterion that defines one story condition but not the accumulated design burden",
    "A customer journey":
      "A customer journey artifact that describes experience stages without quantifying delivery constraints",
    "A stakeholder persona":
      "A stakeholder persona that captures user context without showing maintainability risk",
    "The BA alone":
      "The business analyst alone after translating the story into a detailed solution recommendation",
    "The executive sponsor alone":
      "The executive sponsor alone because they approved funding for the initiative",
    "The UAT testers after release":
      "The UAT testers after release, once the team has already completed implementation",
    "Guarantee a precise percentage immediately":
      "Guarantee a precise return percentage before baseline data, assumptions, and adoption risks are known",
    "Use another customer's ROI without adjustment":
      "Reuse another customer's ROI model without adjusting for process, data, volume, or adoption differences",
    "Avoid discussing business value":
      "Avoid the ROI discussion until after launch, then infer value from implementation completion",
    "Number of objects created":
      "Number of technical objects created during implementation, regardless of downstream retention impact",
    "Total fields ingested regardless of use":
      "Total fields ingested into the platform, even when the fields are not tied to a retention decision",
    "Number of meetings held":
      "Number of project meetings completed before launch, without a baseline outcome comparison",
    "Skip stakeholder review and begin development":
      "Begin development from the current-state process before validating whether the process should change",
    "Automatically copy the current state into Salesforce":
      "Replicate the existing workflow in Salesforce without evaluating root causes or improvement options",
    "Choose the option with the most screens":
      "Choose the design with the most visible screens because it appears more complete to stakeholders",
    "A validation-rule error path":
      "A validation-rule error path that blocks the save transaction instead of handling post-commit work",
    "A duplicate-rule path":
      "A duplicate-rule path that evaluates potential record matches rather than external processing timing",
    "A before-save path":
      "A before-save path optimized for same-record field updates within the original transaction",
    "The page should feel modern":
      "The page should feel modern, with success left to subjective stakeholder interpretation",
    "The team should work efficiently":
      "The team should work efficiently, without defining a measurable system behavior or threshold",
    "The project should improve customer trust":
      "The project should improve customer trust, without stating the condition, action, or expected result",
    "Use a different font on each page":
      "Use different typography on each page so each record area appears visually distinct",
    "Require the agent to memorize record IDs":
      "Require agents to remember identifiers and switch records manually during the service process",
    "Increase decorative imagery":
      "Increase decorative imagery to make the service workflow feel more engaging",
    "The approval should work correctly":
      "Given a discount request exists, when a reviewer opens it, then the approval page should be available",
    "Managers like approvals":
      "Given a manager receives an approval, when they review it, then they should understand the request",
    "Build a discount flow":
      "Given a discount is requested, when automation runs, then a flow should update the opportunity",
    "Replace unit and system testing":
      "Replace technical testing with user sign-off as the only evidence that the release is ready",
    "Prove that no software defect can ever exist":
      "Prove the release has no defects by asking business users to complete one successful path",
    "Train developers on Salesforce syntax":
      "Train developers on Salesforce syntax during UAT so they can adjust defects while users test",
    "The system should be user friendly":
      "The system should be easy to use for sales representatives handling discount approvals",
    "Salesforce should automate everything":
      "The system should automate the discount process without specifying a threshold or routing condition",
    "Reports should be better":
      "Reports should give managers better visibility into discounted opportunities after submission",
    "It includes business value":
      "It mentions a broad business benefit but combines several independent workflow outcomes",
    "It contains a user role":
      "It names a user role but still bundles multiple behaviors into one oversized story",
    "It has too few technical tasks":
      "It lacks a detailed task list, even though the business outcome is already too broad",
    "Alternate priorities randomly":
      "Rotate priorities by department so each stakeholder group receives equal implementation time",
    "Prioritize the department with the largest meeting attendance":
      "Prioritize the requests represented by the largest stakeholder group in the latest workshop",
    "Ask the development team to choose without business input":
      "Ask the delivery team to sequence requirements based only on technical convenience",
    "Accept the executive's view as complete":
      "Use the executive sponsor's perspective as the main input and confirm details later with users",
    "Cancel discovery":
      "Shorten discovery and move directly into solution design to preserve the delivery schedule",
    "Ask only yes-or-no questions":
      "Use a closed-question interview script so stakeholders can validate assumptions quickly",
    "A duplicate identity ruleset":
      "A duplicate identity ruleset that changes profile matching before the metric definition is agreed",
    "A new source system":
      "A new source system to provide additional attributes before the score interpretation is documented",
    "More decimal places only":
      "More decimal precision in the score display without changing the business interpretation",
    "Make all opportunities read-only":
      "Make opportunity stages read-only for most users and handle exceptions through support requests",
    "Rely only on Path":
      "Rely on Path guidance to describe expected stage movement without enforcing transition rules",
    "Create a field for every possible transition":
      "Create separate transition-tracking fields for each stage movement and report on violations later",
    "Only the number of segment names":
      "Track only the number of named segments published, without downstream activation diagnostics",
    "Only whether the activation was created":
      "Track whether the activation exists, without validating member eligibility or destination outcomes",
    "Always choose generative AI because it is newer":
      "Choose generative AI as the default capability for every sales workflow regardless of decision type",
    "Treat both capabilities as identical":
      "Treat predictive scoring and generated summaries as interchangeable because both use AI",
    "Use predictive AI only for writing":
      "Use predictive AI to draft sales content instead of estimating likelihood or prioritizing outcomes",
    "After production deployment only":
      "Validate risky assumptions after deployment once production users can provide real feedback",
    "As a replacement for requirements":
      "Use the prototype as the requirements artifact and defer detailed requirements documentation",
    "For every simple field creation":
      "Create a proof of concept for each field-level change before adding it to the backlog",
    "Use general internet text only":
      "Ground the summary in broad public sales guidance instead of current authorized CRM data",
    "Ask the model to invent missing close dates":
      "Allow the model to infer missing pipeline dates when forecast data is incomplete",
    "Use data from another customer":
      "Use another customer's historical pipeline as the grounding source for the summary",
    "There is no difference":
      "Treat both testing types as the same activity because they occur before release",
    "UAT replaces all regression testing":
      "Use business acceptance as evidence that existing functionality still behaves correctly",
    "Regression testing is performed only by executives":
      "Limit regression testing to executive walkthroughs of the most visible business process",
    "New and old only":
      "Track requirements with only a current and previous state instead of a full lifecycle",
    "Important and unimportant only":
      "Classify requirements only by importance and let teams infer implementation status",
    "Red, blue, and green":
      "Use color-coded requirement labels as the main lifecycle status model",
    "To select brand colors":
      "Use the benchmark primarily to compare visual-brand preferences before and after redesign",
    "To guarantee every user will like the new design":
      "Use the benchmark as proof that the new design will satisfy all user groups",
    "To avoid speaking with users":
      "Use the benchmark to replace follow-up user research during the redesign effort",
    "Always build custom code for perfect fit":
      "Build a custom extension for each exception so the process exactly matches current requests",
    "Create a separate Salesforce org for the exception":
      "Move the exceptional process into a separate org to avoid changing the primary implementation",
    "Reject the entire requirement":
      "Reject the request because it does not align cleanly with the standard feature set",
    "Hover-only interactions":
      "Prioritize hover interactions that reveal details while keeping the mobile screen visually compact",
    "Every desktop field and action on the first screen":
      "Place the full desktop field set on the mobile page so users do not need additional navigation",
    "Dense multi-column tables":
      "Use dense multi-column tables to preserve the same information density as the desktop view",
    "Consumption cannot be observed after implementation":
      "Treat consumption as an operational metric that cannot influence the initial architecture",
    "Credits are unrelated to architecture":
      "Estimate credits after launch because architecture choices do not affect platform consumption",
    "Only the number of Salesforce users affects Data 360 cost":
      "Base the estimate only on licensed user count rather than data volume or activation frequency",
    "Which user has the shortest name":
      "Use the easiest user attribute to map as the first integration identity rule",
    "Whether all fields can be text":
      "Standardize every incoming field as text so mappings are easier to configure initially",
    "Only the number of dashboards":
      "Scope the integration around the number of dashboards that need to display the data",
    "It is only a library of company logos":
      "Treat SLDS mainly as a branding library for logos and campaign-specific visual assets",
    "It automatically writes every business requirement":
      "Use SLDS components as a substitute for documenting experience requirements",
    "It replaces the Salesforce data model":
      "Use SLDS guidance to decide object relationships and record ownership behavior",
    "A production release":
      "Use a production release to learn whether the unknown approach works for users",
    "A completed UAT sign-off":
      "Wait for completed UAT sign-off before researching the technical uncertainty",
    "A persona workshop only":
      "Use a persona workshop to resolve the implementation uncertainty without a technical spike",
    "Change the user’s locale":
      "Change the user's locale and reload the query builder before checking data-space scope",
    "Make all CRM records public":
      "Broaden CRM record access so users can see more objects while building Data 360 queries",
    "Recreate the DMO in every space":
      "Duplicate the DMO across all data spaces so users can find it from any workspace",
  }),
);

function normalizeOptionText(value) {
  return String(value).replace(/\s+/g, " ").trim().replace(/\.$/, "");
}

function polishShortDistractor(option, question, targetLength) {
  const normalized = normalizeOptionText(option);
  const override = optionRewriteOverrides.get(normalized);
  if (override) return override;
  const specific = distractorPatterns.find((item) => item.pattern.test(normalized));
  if (specific) return specific.replacement;
  return normalized;
}

function improveDistractors(question) {
  const answers = new Set(Array.isArray(question.answers) ? question.answers : [question.answer]);
  const correctLengths = [...answers].map((index) => question.options[index].length);
  const maxCorrectLength = Math.max(...correctLengths);
  const wrongOptions = question.options.filter((_, index) => !answers.has(index));
  const avgWrongLength =
    wrongOptions.reduce((sum, option) => sum + option.length, 0) /
    Math.max(wrongOptions.length, 1);
  const hasWeakDistractor = wrongOptions.some((option) =>
    distractorPatterns.some((item) => item.pattern.test(option)),
  );
  const needsPolish =
    maxCorrectLength / Math.max(avgWrongLength, 1) > 1.55 || hasWeakDistractor;
  const targetLength = Math.min(Math.round(maxCorrectLength * 0.68), 92);

  if (!needsPolish) {
    return {
      ...question,
      options: question.options.map((option) => normalizeOptionText(option)),
    };
  }

  return {
    ...question,
    options: question.options.map((option, index) => {
      if (answers.has(index)) return normalizeOptionText(option);
      return polishShortDistractor(option, question, targetLength);
    }),
  };
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
    const improvedQuestion = improveDistractors(question);
    const answers = Array.isArray(improvedQuestion.answers)
      ? improvedQuestion.answers
      : [improvedQuestion.answer];
    const reordered = reorderOptions(
      improvedQuestion,
      answers,
      targetSlotCounts,
      `${certificationId}:${improvedQuestion.id}`,
    );
    return {
      id: improvedQuestion.id,
      category: improvedQuestion.category,
      select: Number(improvedQuestion.select || answers.length || 1),
      question: improvedQuestion.question,
      options: reordered.options,
      answers: reordered.answers,
      explanation: improvedQuestion.explanation,
      tip: improvedQuestion.tip,
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

const output = `// Generated from the original Salesforce study lab HTML files.\n// To add a certification, update tools/extract-certifications.mjs, rerun it,\n// then run tools/build-localized-pages.mjs to create the localized routes.\nwindow.BLUEFORCE_CERTIFICATIONS = ${JSON.stringify(certifications, null, 2)};\n`;

fs.writeFileSync(path.join(root, "assets/data/certifications.js"), output);
