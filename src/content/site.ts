export const nav = [
  {
    href: "/discovery",
    label: "Drug developers",
    children: [
      { href: "/discovery", label: "Overview" },
      { href: "/discovery/case-studies", label: "Case Studies" },
      { href: "/discovery/research", label: "Research Validation" },
      { href: "/discovery/use", label: "Use Immunovus" },
      { href: "/discovery/design", label: "Design with Us" },
    ],
  },
  {
    href: "/clinicians",
    label: "Clinicians",
    children: [
      { href: "/clinicians", label: "Overview" },
      { href: "/clinicians/why", label: "Why the immune system?" },
      { href: "/clinicians/testimonials", label: "Testimonials" },
      { href: "/clinicians/early-access", label: "Early Access" },
    ],
  },
  {
    href: "/individuals",
    label: "Individuals",
  },
  {
    href: "/company",
    label: "Company",
    children: [
      { href: "/company", label: "Team" },
      { href: "/company/careers", label: "Open Positions" },
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
    ],
  },
] as const;

export const footerNav = [
  { href: "/discovery", label: "Drug developers" },
  { href: "/clinicians", label: "Clinicians" },
  { href: "/individuals", label: "Individuals" },
  { href: "/company", label: "Company" },
  { href: "/discovery/research", label: "Research" },
  { href: "/contact", label: "Contact" },
] as const;

export const pages = {
  home: {
    title: "Immunovus: Making immune complexity predictable",
    description:
      "Immunovus builds a mechanistic, multi-scale model of the immune system — an immune digital twin that can be personalised, simulated and interrogated before the expensive work begins.",
  },
  discovery: {
    title: "For drug developers",
    description:
      "The immune system underlies drug design, development, testing and patient results. Immunovus models that system so discovery teams can evaluate immune responsivity before the next cycle of work.",
  },
  discoveryCaseStudies: {
    title: "Case Studies",
    description: "Government, pharmaceutical partners and in-house work using Immunovus models.",
  },
  discoveryResearch: {
    title: "Research Validation",
    description:
      "The modelling behind Immunovus comes out of a published research programme. Peer-reviewed papers by founder Tomáš Helikar and colleagues, grouped by area.",
  },
  discoveryUse: {
    title: "Use Immunovus",
    description: "Bring a target, an indication or a compound and we will run it against the immune twin with you.",
  },
  discoveryDesign: {
    title: "Design with Immunovus",
    description:
      "We are looking for select large-scale, early adoption partners to further co-design the immune digital twin, implement and analyse the technology, and supply strategic feedback.",
  },
  clinicians: {
    title: "For clinicians",
    description:
      "Immunovus integrates patient data into a single, customisable dashboard so care teams can see immune behaviour with the patient in mind.",
  },
  cliniciansWhy: {
    title: "Why the immune system?",
    description:
      "The immune system is a complex network of biological and biochemical processes. It underlies healthy, non-healthy and diseased states, and almost every clinical decision.",
  },
  cliniciansTestimonials: {
    title: "Testimonials",
    description: "How clinicians intend to use an immune digital twin in their field of practice.",
  },
  cliniciansEarlyAccess: {
    title: "Early Access",
    description: "Immunovus is currently open to early adopters. Join the waitlist and we will notify you when you are in.",
  },
  individuals: {
    title: "Individuals",
    description:
      "Immune disease is usually recognised at diagnosis, which is late. Immunovus can describe how an individual’s immune system is changing over time — while there is still room to change the path rather than only label it.",
  },
  company: {
    title: "Company",
    description:
      "A computational biology company built around the immune system. A personal experience sharpened an existing scientific ambition.",
  },
  careers: {
    title: "Open Positions",
    description:
      "Immunovus is looking for experienced people with a passion for improving health and our understanding of immune complexity.",
  },
  privacy: {
    title: "Privacy",
    description: "What Immunovus collects today, what we do with it, and how to ask us to delete it.",
  },
  terms: {
    title: "Terms",
    description: "This site is informational. It is not medical advice, and figures are schematic unless marked otherwise.",
  },
  contact: {
    title: "Talk to us",
    description:
      "Whether you're working in drug discovery, clinical research or the future of immune health, tell us what you're exploring and we'll connect you with the right person at Immunovus.",
  },
} as const;

export const hero = {
  eyebrow: "Immune digital twins",
  headline: "The immune system decides whether a treatment works.",
  copy: "Immunovus builds a mechanistic, multi-scale model of it — an immune digital twin that can be personalised, simulated and interrogated before the expensive work begins.",
  primaryCta: { href: "/discovery", label: "For drug developers" },
  secondaryCta: { href: "/clinicians", label: "For clinicians" },
};

export const homeStatement = {
  headline: "Immunovus enables clients to evaluate immune responsivity on a scale accessible only through agentic, multi-scale mechanistic modelling.",
  copy: "ImmuneID is the modelling engine behind that work. It connects mechanisms across molecular, cellular and system scales so discovery teams, clinicians and people working on immune health can see the system as a whole — not as an isolated target or an average patient.",
};

export const discovery = {
  eyebrow: "Drug developers",
  headline: "The immune system underlies all drug design, development, testing, and patient results.",
  stats: [
    {
      value: "12 years",
      numeric: 12,
      suffix: " years",
      label: "average length of new drug development",
    },
    {
      value: "$1–2.5bn",
      numeric: null,
      suffix: "",
      label: "to design and test a new drug",
    },
    {
      value: "93%",
      numeric: 93,
      suffix: "%",
      label: "of new drugs fail Phase 1",
    },
    {
      value: "40%",
      numeric: 40,
      suffix: "%",
      label: "of patients fail first-line therapies",
    },
  ],
  principles: [
    {
      title: "Mechanistic, not correlative",
      copy: "Every edge is a biochemical or cellular interaction curated from the literature, carrying its source and a written summary of the mechanism, then translated into executable logic. A prediction traces back to the biology that produced it — and when it is wrong, you can find where.",
    },
    {
      title: "Four layers, seconds to weeks",
      copy: "Boolean signalling sets the flux bounds for genome-scale metabolism through mTOR, HIF-1α, MYC and AMPK; per-cell states aggregate into a heterogeneous cell pool that drives population dynamics; a Monte Carlo scheme moves information between the layers by separating their time scales. The layers are coupled, not stacked side by side.",
    },
    {
      title: "Validated, and open to inspection",
      copy: "Across 38 independent validation experiments the model agrees with published experimental and clinical observations at 75–90%, covering pathogen-specific signatures across nine infections and four coinfection scenarios. The cellular model is openly available on Cell Collective and distributed as SBML.",
    },
    {
      title: "Agentic over the mechanism",
      copy: "Agents interrogate the model, launch simulations and rank what survives. Because an agent can re-simulate, its output is checkable against the mechanism instead of against a language prior — which is what keeps hallucination out of a drug discovery loop.",
    },
  ],
  figure: {
    number: "1",
    title: "An unregulated immune loop",
    caption:
      "An unregulated immune loop, and what it takes to break it. Every value is synthetic — the figure argues a structural point, not a clinical one.",
  },
  grounding: {
    headline: "Why mechanistic grounding matters now",
    items: [
      {
        title: "Explainable by construction",
        copy: "FDA guidance on clinical decision support (2022) requires that a clinician be able to independently review the basis for a software recommendation. A black-box score cannot meet that test; a traceable mechanism can.",
      },
      {
        title: "Accepted as evidence",
        copy: "The FDA Modernization Act 2.0 (2023) and subsequent NIH and NAM policy establish mechanistic computer models as a recognised form of scientific evidence, alongside and in place of some animal data.",
      },
      {
        title: "Auditable in operation",
        copy: "A model whose predictions can be re-derived is one you can monitor, challenge and correct after deployment — not only at the point of approval.",
      },
    ],
  },
  methods:
    "Method details are published: the multi-approach, multi-scale CD4+ T cell platform in Wertheim et al., PLoS Computational Biology 17(8), e1009209, and the multi-omics repurposing pipeline in Bessell et al., Briefings in Bioinformatics 24(6), bbad387.",
  methodLinks: [
    {
      label: "Wertheim et al., PLoS Computational Biology 17(8), e1009209",
      href: "https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1009209",
    },
    {
      label: "Bessell et al., Briefings in Bioinformatics 24(6), bbad387",
      href: "https://academic.oup.com/bib/article-abstract/24/6/bbad387/7335822",
    },
  ],
  secondaryCta: { href: "/discovery/case-studies", label: "Case Studies" },
  primaryCta: { href: "/discovery/use", label: "Use the immune digital twin" },
};

export const askList = {
  headline: "What you can ask",
  items: [
    "Which targets and indications to pursue",
    "How a mechanism of action plays out across scales",
    "Which biomarkers may distinguish responders from non-responders",
    "Which treatments to prioritise, and in what order",
    "Which existing compounds may be worth repurposing",
    "Where a candidate is likely to fail, before the next cycle is funded",
  ],
};

export const caseStudies = {
  eyebrow: "Case Studies",
  headline: "Case Studies",
  lede: "Government, pharmaceutical partners and in-house work.",
  items: [
    {
      who: "Department of Defense",
      title: "Drug Repurposing",
      copy: [
        "The Defense Health Agency awarded $24.5 million to the National Strategic Research Institute and the University of Nebraska to advance a first-of-its-kind prophylactic against acute radiation syndrome. It was the third DHA contract for the work, taking it past $35 million since 2017, and the largest single-project award in NSRI’s history.",
        "Immunovus founder Tomáš Helikar leads biochemistry and systems biology on the project within his Digital Twin Innovation Hub at UNL, working alongside the medicinal chemistry, pharmacokinetics, metabolomics and in vivo efficacy leads across UNL and UNMC.",
      ],
      cite: "NSRI, 11 September 2023",
      href: "https://nsri.nebraska.edu/news/news-releases/2023/09/nsri-nu-awarded-24-5-million-dha-contract-for-acute-radiation-syndrome-prophylactic-development",
    },
    {
      who: "In-House Drug Development",
      title: "Broad-spectrum Antiviral",
      copy: [
        "Influenza vaccines and antivirals lose reliability as the virus mutates from season to season. ImmuneID approached the problem from the host side, simulating host–pathogen interaction and ranking treatment combinations that act on the infected cell rather than on a particular viral strain.",
        "Against H1N1, the model-identified combinations reduced the HA index further than amantadine, oseltamivir or zanamivir. The same combinations held against H3N2, so the effect does not appear to depend on the strain. Small animal testing is under way; no in vivo or clinical results are claimed.",
      ],
      cite: "In vitro data, Immunovus — not yet published.",
    },
    {
      who: "Pharmaceutical Partnership",
      title: "Drug Indication Prioritization",
      copy: [
        "The model was run across CD4+ T-cell-mediated immune disorders — rheumatoid arthritis, multiple sclerosis and primary biliary cholangitis — scoring existing compounds against targets it derived from the disease mechanism, rather than against a target list supplied up front.",
        "It returned ranked target–drug pairs, each with supporting literature, among them lanosterol synthase, NAMPT and HMG-CoA reductase. Four of the compounds were taken into T-cell proliferation assays, where each reduced proliferation dose-dependently.",
      ],
      cite: "Puniya et al., npj Systems Biology and Applications 7, 4",
      href: "https://www.nature.com/articles/s41540-020-00165-3",
    },
    {
      who: "Pharmaceutical partnership",
      title: "Biomarker Identification",
      copy: [
        "Simulation trajectories from the Chlamydia model were used to train seven classifiers — LASSO logistic regression, decision tree, random forest, ExtraTrees, XGBoost, CatBoost and LightGBM — on a 60/40 split, with the best selected on F1.",
        "The selected model reached an F1 of 0.965 on held-out simulated data, and LASSO and SHAP rankings agreed closely on the leading markers of reinfection risk: GM-CSF, IL-1β, IgG, IL-29, IL-8 and TNF-α. These are model-derived candidates awaiting experimental validation.",
      ],
      cite: "Immunovus — Chlamydia trachomatis proof-of-concept study. Not published.",
    },
    {
      who: "Pharmaceutical partnership",
      title: "Disease Modeling",
      copy: [
        "An existing host–pathogen Boolean network was extended with a Chlamydia trachomatis module covering the pathogen life cycle: elementary and reticulate body transitions, persistence under stress, and exit by lysis or extrusion. The model built for this project carried 443 interactions, 113 of them specific to Chlamydia.",
        "Validation used unit tests on interactions held back during development. All but one matched established biology; the failure traced to how the intracellular life cycle is represented. This was a proof of concept, and its limitations — PID mechanisms, serovar differences, hormonal effects — are documented rather than glossed.",
      ],
      cite: "Immunovus — Chlamydia trachomatis proof-of-concept study. Not published.",
    },
    {
      who: "NSF Funded Research",
      title: "Host-Pathogen Interactions",
      copy: [
        "The foundation model captures cell-to-cell immune responses and recapitulates cellular and cytokine responses across nine distinct pathogens, along with differential responses to varying pathogen severity.",
        "Applied to Chlamydia, the model-derived cytokine roles were checked against the literature: IL-12 protective, IL-8 and IL-23 pathogenic, each matching published findings. IgE, IL-10 and IL-29 emerged as predictions with no supporting data — candidate novel markers, and the ones worth testing first.",
      ],
      cite: "Immunovus — Chlamydia trachomatis proof-of-concept study. Not published.",
    },
  ],
  process: {
    headline: "How the work runs",
    steps: [
      {
        title: "Curate the biology",
        copy: "Literature mining into a documented interaction network — every edge carries its source and a summary of the mechanism — then translated into logic rules.",
      },
      {
        title: "Simulate the connected system",
        copy: "ImmuneID carries 35 innate and adaptive immune cell types, 37 secretory factors and 1,450 regulatory interactions across 11 disease contexts. Programme-specific biology is added as a module on top of it.",
      },
      {
        title: "Rank what survives",
        copy: "Simulation output feeds interpretable machine learning — LASSO and SHAP feature ranking — to order targets, compounds and candidate biomarkers rather than returning a black-box score.",
      },
      {
        title: "Test at the bench",
        copy: "The shortlist goes into experimental work. What comes back changes the model, including when it contradicts the prediction.",
      },
    ],
  },
  cta: { href: "/discovery/use", label: "Use Immunovus" },
};

export const research = {
  eyebrow: "Research Validation",
  headline: "Research Validation",
  lede: "The modelling behind Immunovus comes out of a published research programme. Below are the peer-reviewed papers by founder Tomáš Helikar and colleagues that underpin it, grouped by area.",
  note: "55 peer-reviewed articles.",
  cta: { href: "/discovery/use", label: "Use Immunovus" },
};

export const discoveryUse = {
  eyebrow: "Use Immunovus",
  headline: "Use Immunovus",
  lede: "Bring a target, an indication or a compound and we will run it against the immune twin with you.",
  submit: "Inquire",
};

export const discoveryDesign = {
  eyebrow: "Design with Immunovus",
  headline: "Design with Immunovus",
  lede: "We are looking for select large-scale, early adoption partners to further co-design the immune digital twin, implement and analyse the technology, and supply strategic feedback.",
  note: "Partnerships are scoped for custom-built features and sustained collaboration.",
  submit: "Inquire",
};

export const clinicians = {
  eyebrow: "Clinicians",
  headline: "Design your immune digital twin dashboard, with the patient in mind.",
  lede: "Immunovus integrates patient data into a single, customisable dashboard, bringing multiple specialties together so gaps in care are easier to see.",
  figure: {
    number: "2",
    title: "Dashboard demo",
    caption:
      "Dashboard demo — a fictional patient with invented values. This shows how the dashboard reads, not anyone’s record.",
  },
  secondaryCta: { href: "/clinicians/testimonials", label: "Testimonials" },
  primaryCta: { href: "/clinicians/early-access", label: "Create patient immune digital twins" },
};

export const whyImmune = {
  eyebrow: "Why the immune system?",
  headline: "Why the immune system?",
  lede: "The human immune system is a complex network of biological and biochemical processes — metabolism, gene regulation, signal transduction — together with cells (platelets, red blood cells, >30 white blood cells), tissues (bone marrow, skin, lymphoid) and organs, all working together to protect the body.",
  groups: [
    {
      headline: "It underlies all healthy, non-healthy and diseased states.",
      stats: [
        { value: "480+", numeric: 480, suffix: "+", label: "primary immune and autoimmune disorders" },
        { value: "~40%", numeric: 40, suffix: "%", label: "of Americans live with chronic disease" },
        { value: "Millions", numeric: null, suffix: "", label: "of infections every year" },
        { value: "1 in 5", numeric: null, suffix: "", label: "deaths are sepsis-related, driven by immune dysregulation" },
      ],
    },
    {
      headline: "It underlies all clinical health monitoring and management.",
      stats: [
        { value: "14bn", numeric: 14, suffix: "bn", label: "blood tests conducted annually in the US" },
        { value: "70%", numeric: 70, suffix: "%", label: "of medical decisions rely on test results that are not integrated" },
        { value: "Zero", numeric: null, suffix: "", label: "routine tests predict immune trajectory" },
        { value: "$100B+", numeric: null, suffix: "", label: "annual US disease burden" },
      ],
    },
  ],
};

export const testimonials = {
  eyebrow: "Testimonials",
  headline: "Testimonials",
  lede: "Hear directly from clinicians as they begin to use the immune digital twin in their field of practice.",
  empty:
    "Clinician accounts will be published here as early access proceeds. The specialties below are where the first conversations are concentrated.",
  specialties: [
    { name: "Pulmonology", count: "Early conversations" },
    { name: "Endocrinology", count: "Early conversations" },
    { name: "Nephrology", count: "Early conversations" },
    { name: "Cardiology", count: "Early conversations" },
    { name: "General Medicine", count: "Early conversations" },
  ],
  cta: { href: "/clinicians/early-access", label: "Early Access" },
};

export const earlyAccess = {
  eyebrow: "Early Access",
  headline: "Early Access",
  lede: "Immunovus is currently open to early adopters only. Sign up to be waitlisted, and we will notify you when you are in.",
  submit: "Request early access",
  consent:
    "I understand this is not a medical service, and that this technology is not to be used in place of clinical expertise.",
};

export const individuals = {
  eyebrow: "Individuals",
  headline: "Catch the immune trajectory before it has a name.",
  lede: "Immune disease is usually recognised at diagnosis, which is late. Immunovus can describe how an individual’s immune system is changing over time — while there is still room to change the path rather than only label it.",
  accessHeadline: "Early Access",
  accessLede: "Immunovus is currently open to early adopters only. Sign up to be waitlisted, and we will notify you when you are in.",
  submit: "Request early access",
  consent:
    "I understand this is not a medical service, and that this technology is not to be used in place of clinical expertise.",
};

export const company = {
  intro: {
    eyebrow: "Company",
    headline: "A computational biology company built around the immune system.",
    lede: "Immunovus expertise spans computational biology, immune modelling, AI, software engineering and translational science — so the people who discover, deliver and live with immune treatments can work from a model of the system rather than a guess.",
  },
  origin: {
    eyebrow: "Our origin",
    headline: "A personal experience sharpened a scientific ambition.",
    copy: [
      "Tomáš Helikar had spent years using computational models to understand complex biological systems when his eight-year-old son, Liam, became seriously ill.",
      "Doctors initially feared leukemia. It was ultimately identified as a serious infection, but the uncertainty exposed a fundamental challenge: medicine could measure what was happening, but understanding where his immune response was heading was much harder.",
    ],
    questionEyebrow: "The question",
    question: "What if we could understand not only what the immune system is doing now, but what it might do next?",
  },
  science: {
    eyebrow: "The science",
    headline: "From computer science to computational immunology.",
    copy: [
      "Tom's route into immunology began in computer science. His work moved into computational biology and the mathematical modelling of biological networks, exploring how combinations of signals can change cellular behaviour.",
      "Over time, that work increasingly focused on the immune system and on a larger challenge: how to connect molecular, cellular and system-level behaviour into computational models capable of representing immune function more completely.",
    ],
    path: [
      "Computer science",
      "Computational biology",
      "Biological network modelling",
      "Immunology",
      "Digital immune modelling",
      "Immunovus",
    ],
  },
  digital: {
    eyebrow: "Building the system",
    headline: "From modelling cells to modelling the immune system.",
    copy: "The research expanded from individual biological pathways toward increasingly connected models of immune behaviour. The ambition grew from understanding isolated mechanisms to representing how different parts of the immune system interact as a whole.",
    references: [
      {
        source: "National Institute of General Medical Sciences",
        title: "Building a Digital Immune System",
        copy: "A feature exploring Tomáš Helikar's path from computer science into computational biology and his work building mathematical models of the immune system.",
        href: "https://biobeat.nigms.nih.gov/2023/06/building-a-digital-immune-system/",
        cta: "Read the article",
      },
      {
        source: "Nokia",
        title: "Ready to meet your digital immune system?",
        copy: "A feature exploring the vision for digital immune twins and the personal experience that helped sharpen the ambition behind the work.",
        href: "https://www.nokia.com/thought-leadership/articles/digital-twin-of-the-human-immune-system/",
        cta: "Read the article",
      },
    ],
  },
  today: {
    eyebrow: "Immunovus",
    headline: "Turning a scientific foundation into something people can use.",
    copy: [
      "Immunovus brings this work into a company focused on making immune complexity more predictable.",
      "Today, that approach is being applied to drug discovery and development, helping teams make decisions with a more complete view of immune biology. Over time, the same foundation could support increasingly personalized approaches to medicine and immune health.",
    ],
  },
};

export const foundation = {
  eyebrow: "The foundation",
  headline: "Years of research, external support and experimental testing.",
  stats: [
    {
      value: "NIH · NSF",
      label: "Sequential awards, each following fresh independent scientific review.",
    },
    {
      value: "DoD programme",
      label: "Translation of computational immune modelling into a Department of Defense research programme.",
    },
    {
      value: "Lab-tested",
      label: "Model-derived hypotheses taken into experimental testing.",
    },
  ],
};

export const team = {
  eyebrow: "Team",
  members: [
    {
      name: "Tomáš Helikar, Ph.D.",
      role: "CEO & Founder",
      bio: "15+ years in multi-scale computational modelling, biomedical research and enterprise software development.",
      image: "/brand/team/tomas-helikar.png",
    },
    {
      name: "Leandro Castro",
      role: "CTO",
      bio: "Co-founder of MultiMechanics, simulation software acquired by Siemens in 2019. Experience building and scaling enterprise modelling platforms.",
      image: "/brand/team/leandro-castro.png",
    },
    {
      name: "Prakash Packrisamy",
      role: "Translational Lead",
      bio: "CRO and pharmaceutical experience translating computational models into applications discovery and clinical teams can use.",
      image: "/brand/team/prakash-packrisamy.png",
    },
  ],
};

export const careers = {
  eyebrow: "Open Positions",
  headline: "Open Positions",
  lede: "Immunovus is always looking for experienced individuals with a passion for improving health and our understanding of the underlying immune complexities.",
  roles: [
    {
      title: "Computational Immunologist",
      copy: "Mechanistic modelling of immune signalling across scales, working alongside the translational team.",
      closes: "Closes 30 September 2026",
    },
    {
      title: "Senior Software Engineer, Simulation Platform",
      copy: "Building and scaling the engine that runs ImmuneID, from model execution to the interfaces clinicians and scientists use.",
      closes: "Closes 15 October 2026",
    },
    {
      title: "Translational Science Lead",
      copy: "Taking model-derived hypotheses into experimental testing and carrying what comes back into the next round of modelling.",
      closes: "Closes 31 October 2026",
    },
  ],
  cta: { href: "/contact?interest=Careers", label: "Get in touch" },
};

export const privacy = {
  eyebrow: "Privacy",
  headline: "Privacy",
  lede: "This policy is a draft and has not been reviewed by counsel. It is published so that anyone contacting us can see what we intend, and it will be replaced with a finalised version before Immunovus handles data on anyone’s behalf.",
  items: [
    {
      title: "What we collect today",
      copy: "Only what you type into the contact form: your name, work email, organisation, the area you selected, and your message. There is no analytics, no advertising and no third-party tracking on this site.",
    },
    {
      title: "What we do with it",
      copy: "We use it to reply to you and to route your message to the right person. We do not sell it and we do not add you to a mailing list you did not ask for.",
    },
    {
      title: "Health information",
      copy: "Do not send us personal health information. Nothing on this site is a clinical service, and we are not set up to receive or safeguard patient data.",
    },
    {
      title: "Asking us to delete it",
      copy: "Write to us and we will remove your details. Contact routes are on the contact page.",
    },
  ],
  pendingTitle: "Still to be completed.",
  pending:
    "Retention periods, legal basis, sub-processors, international transfers and a named contact for data protection all need to be settled before this can be relied on.",
};

export const terms = {
  eyebrow: "Terms",
  headline: "Terms",
  lede: "A draft, published for transparency rather than as a finished legal document.",
  items: [
    {
      title: "This site is informational",
      copy: "It describes research and a modelling capability. It is not a product, not a service you can purchase, and not an offer of either.",
    },
    {
      title: "Not medical advice",
      copy: "Nothing here is a diagnosis, a treatment recommendation or a substitute for professional care. If you are worried about your health, speak to a doctor.",
    },
    {
      title: "Figures and results",
      copy: "Every figure on this site is schematic unless it is explicitly marked otherwise, and every claim carries a marker showing whether it came from a model or from an experiment. Where something has not been tested, we say so.",
    },
    {
      title: "Changes",
      copy: "The work described here is active research. Content will change as it develops, and earlier versions are not maintained.",
    },
  ],
  pendingTitle: "Still to be completed.",
  pending: "Governing law, limitation of liability, intellectual property and acceptable use need drafting before launch.",
};

export const formOptions = {
  roles: [
    "Discovery / target biology",
    "Translational science",
    "Clinical development",
    "Computational / data science",
    "Business development or licensing",
    "Executive or strategy",
    "Something else",
  ],
  useCases: [
    "Drug repurposing",
    "Drug development",
    "Drug indication prioritization",
    "Biomarker identification",
    "Disease modeling",
    "Host-pathogen interaction modeling",
    "Other",
  ],
  specialties: [
    "Autoimmune disease",
    "Infectious disease",
    "Oncology",
    "Transplant",
    "Allergy and immunology",
    "Critical care",
    "Primary immunodeficiency",
    "Something else",
  ],
  clinicianTrack: [
    "Risk stratification",
    "Treatment selection",
    "Responder prediction",
    "Monitoring a patient over time",
    "Something else",
  ],
  individualTrack: [
    "General immune health",
    "An autoimmune condition",
    "Chronic inflammation",
    "Recurrent infections",
    "Recovery after illness",
    "Something else",
  ],
};

export const finalCta = {
  headline: "Let's explore what we can solve together.",
  copy: "Whether you're working in drug discovery, clinical research or the future of immune health, tell us what you're exploring and we'll connect you with the right person at Immunovus.",
  secondaryCta: { href: "/discovery", label: "See work with drug developers" },
};

export const pageCta = {
  headline: "Explore what's possible with Immunovus.",
  cta: { href: "/contact", label: "Talk to Immunovus" },
};

export const contactFields = {
  nameLabel: "Name",
  organisationLabel: "Organisation",
  emailLabel: "Email",
  workEmailLabel: "Work email",
  interestLabel: "What are you exploring?",
  messageLabel: "What would you like to solve?",
  messageHint: "A target, an indication, a patient population, or a question you keep hitting.",
  roleLabel: "Role",
  useCaseLabel: "Use case",
  descriptionLabel: "Optional: 150-word max description",
  affiliationLabel: "Hospital affiliation",
  specialtyLabel: "Specialty",
  trackLabel: "What would you want to track?",
  trackHint: "Optional. It helps us build the right thing first.",
  submit: "Send message",
  thanks: "Thank you. We'll connect you with the right person at Immunovus once this form is linked to the team inbox.",
  interests: [
    "Drug development",
    "Clinical care",
    "Personal immune health",
    "Research collaboration",
    "Partnership",
    "Careers",
    "Something else",
  ],
};

export const footer = {
  descriptor: "Making immune complexity predictable, early enough to guide every decision.",
  linkedin: "https://www.linkedin.com/company/immunovus",
  copyright: "© Immunovus, Inc.",
};
