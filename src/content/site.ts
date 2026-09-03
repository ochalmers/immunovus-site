export const nav = [
  { href: "/approach", label: "Approach" },
  { href: "/technology", label: "Technology" },
  { href: "/applications", label: "Applications" },
  { href: "/validation", label: "Validation" },
  { href: "/company", label: "Company" },
] as const;

export const footerNav = [
  ...nav,
  { href: "/contact", label: "Contact" },
] as const;

export const pages = {
  home: {
    title: "Immunovus: Making immune complexity predictable",
    description:
      "Immunovus helps discovery teams, healthcare organisations, and people working on immune health understand how the immune system behaves, early enough to guide the next decision.",
  },
  approach: {
    title: "Approach",
    description:
      "Immunovus builds computational representations of immune biology that connect mechanisms across molecular, cellular and system scales.",
  },
  technology: {
    title: "Technology",
    description:
      "ImmuneID is the modelling engine Immunovus uses to simulate immune behaviour and turn it into explanations teams can act on.",
  },
  applications: {
    title: "Applications",
    description:
      "The same immune modelling approach, applied in drug discovery today, with personalized medicine and consumer immune health as broader applications and future opportunities.",
  },
  validation: {
    title: "Validation",
    description: "Immunovus models are designed to produce hypotheses that can be experimentally tested.",
  },
  company: {
    title: "Company",
    description:
      "A personal experience sharpened an existing scientific ambition. Immunovus is built around understanding the immune system as a connected, dynamic system.",
  },
  contact: {
    title: "Talk to us",
    description:
      "Whether you're working in drug discovery, clinical research or the future of immune health, tell us what you're exploring and we'll connect you with the right person at Immunovus.",
  },
} as const;

export const hero = {
  headline: "Making immune complexity predictable, early enough to guide every decision.",
  copy: "Immunovus models how the immune system behaves so discovery teams, clinicians, and those working on immune health can see the system as a whole, not as an isolated target or an average patient.",
  primaryCta: { href: "/applications", label: "Find out more" },
  secondaryCta: { href: "/contact", label: "Talk to us" },
};

export const challenge = {
  eyebrow: "The challenge",
  headline: "The immune system doesn't operate one variable at a time.",
  copy: "It is dynamic, interconnected, multi-scale and different for every individual. Yet discovery, treatment and health decisions still often reduce that complexity to isolated targets and average-patient assumptions.",
  stats: [
    {
      value: "400+",
      numeric: 400,
      suffix: "+",
      label: "Immune-related conditions spanning major areas of human health.",
    },
    {
      value: "40%",
      numeric: 40,
      suffix: "%",
      label: "of patients fail first-line therapies.",
    },
    {
      value: "Multi-scale",
      numeric: null,
      suffix: "",
      label: "Molecular, cellular and system-level behaviour are coupled, not independent knobs.",
    },
    {
      value: "Individual",
      numeric: null,
      suffix: "",
      label: "The same biology does not produce the same outcome in every person.",
    },
  ],
  problemHeadline: "The missing capability is predictability.",
  problemCopy:
    "Understanding immune complexity early enough to choose a target, select a treatment, or see a health trajectory, before years of trial and error have already been spent.",
};

export const approach = {
  eyebrow: "Our approach",
  headline: "Model the system, not just the target.",
  copy: "Immunovus builds computational representations of immune biology that connect mechanisms across multiple biological scales. Combined with AI, these models let complex behaviour be explored, simulated and explained, so the next decision can be made with the system in view.",
  principles: [
    {
      index: "01",
      title: "Mechanistic",
      copy: "Represent biological cause and effect, not simply statistical correlation.",
    },
    {
      index: "02",
      title: "Multi-scale",
      copy: "Connect molecular, cellular and system-level behaviour within a common computational framework.",
    },
    {
      index: "03",
      title: "AI-enabled",
      copy: "Use AI to interrogate models, run simulations and accelerate biological insight.",
    },
  ],
};

export const howItWorks = {
  eyebrow: "How it works",
  headline: "From biological complexity to a decision you can act on.",
  stages: [
    {
      title: "Biological inputs",
      items: [
        "Experimental data",
        "Multi-omics data",
        "Clinical data",
        "Scientific literature",
        "Target biology",
      ],
    },
    {
      title: "Computational modelling",
      items: [
        "Mechanistic immune models",
        "Multi-scale integration",
        "Simulation",
        "AI-assisted analysis",
      ],
    },
    {
      title: "What you can see",
      items: [
        "Which targets and indications to pursue",
        "Which biomarkers may distinguish response",
        "Which treatments to prioritise",
        "Which patients are more likely to respond",
        "Which existing drugs may be relevant",
        "How an immune trajectory may be shifting",
      ],
    },
  ],
};

export const technology = {
  eyebrow: "Our technology",
  headline: "ImmuneID",
  subheadline: "The modelling engine behind the Immunovus approach.",
  copy: "ImmuneID brings mechanistic biological models, multiple scales of immune behaviour and AI-assisted simulation into one framework. It sits between biological data and the decision in front of you, across discovery, care and immune health.",
  inputs: ["Target biology", "Multi-omics", "Clinical data"],
  core: "AI + mechanistic immune modelling",
  coreNote: "One engine, used wherever immune behaviour has to be predicted rather than guessed.",
  outputs: [
    "Therapy prioritization",
    "Indication prioritization",
    "Responder insight",
    "Drug repurposing",
    "Virtual clinical trials",
    "Disease risk assessment",
    "Immune health trajectories",
  ],
};

export const audiences = [
  {
    id: "discovery",
    index: "01",
    audience: "Pharma & biotech",
    title: "Drug discovery & development",
    featured: true,
    badge: null,
    homeCopy:
      "See how a target, compound or indication may behave in a connected immune system, before committing the next expensive cycle of work.",
    copy: "For R&D teams that need to choose targets, indications, biomarkers and treatment strategies with the immune system in view, rather than as a single isolated mechanism.",
    items: [
      "Target identification",
      "Indication prioritization",
      "Mechanism of action",
      "Biomarker identification",
      "Treatment prioritization",
      "Drug repurposing",
      "Responder vs non-responder analysis",
    ],
    interest: "Drug discovery & development",
    cta: "Talk about discovery",
  },
  {
    id: "medicine",
    index: "02",
    audience: "Healthcare organisations",
    title: "Personalized medicine",
    featured: false,
    badge: null,
    homeCopy:
      "Move beyond average-patient assumptions toward immune models that can inform risk, response and more precise treatment.",
    copy: "For clinical and healthcare teams exploring how patient-specific immune modelling could support risk stratification, treatment design and a more complete view of individual immune response.",
    items: [
      "Risk stratification",
      "Clinical decision support",
      "Precision treatment design",
      "Responder vs non-responder insight",
      "Patient-specific immune context",
    ],
    interest: "Personalized medicine",
    cta: "Talk about care",
  },
  {
    id: "health",
    index: "03",
    audience: "Immune health",
    title: "Personalized immune health",
    featured: false,
    badge: "Future application",
    homeCopy:
      "A future consumer-facing approach to understanding immune health over time, helping people track personal patterns and build a clearer picture of how their immune system may be changing.",
    copy: "A future consumer-facing approach to tracking and understanding immune health over time. The aim is to help people see personal patterns, understand how their immune health may be changing and ultimately make more informed everyday health choices.",
    items: [
      "Track immune health over time",
      "Understand personal patterns",
      "See how immune health may be changing",
      "Explore how behaviours relate to immune health",
      "Build a clearer picture of your immune system",
    ],
    interest: "Immune health",
    cta: "Explore immune health",
  },
] as const;

export const applications = {
  eyebrow: "Who it's for",
  headline: "One view of the immune system. Three ways to put it to work.",
  copy: "The same modelling approach can help people understand immune behaviour at different points, from developing treatments today to exploring more personalized ways of understanding health over time.",
};

export const validation = {
  eyebrow: "Validation",
  headline: "Computational predictions. Experimental evidence.",
  stages: [
    {
      index: "01",
      title: "Model",
      copy: "Build computational representations of disease and immune biology.",
    },
    {
      index: "02",
      title: "Simulate",
      copy: "Explore large numbers of biological and treatment configurations computationally.",
    },
    {
      index: "03",
      title: "Identify",
      copy: "Rank targets, compounds and treatment strategies.",
    },
    {
      index: "04",
      title: "Validate",
      copy: "Experimentally test model predictions.",
    },
  ],
  purpose:
    "Predictions are only useful if they can be tested. Immunovus models are built to produce hypotheses that can be taken into the laboratory.",
  primaryCase: {
    title: "Respiratory infection",
    copy: "Immunovus models have been used to identify potential treatments for respiratory infections.",
    points: [
      "Computational modelling of influenza infection",
      "Large-scale simulation of treatment configurations",
      "Identification and ranking of potential treatments",
      "Experimental validation",
      "Treatment effects demonstrated in vitro",
      "Further testing ongoing",
    ],
    figures: [
      {
        number: "1",
        title: "Modelling",
        caption: "Placeholder for influenza infection model visualisation. Scientific figure to be added.",
      },
      {
        number: "2",
        title: "Experimental",
        caption: "Placeholder for in vitro validation chart. Scientific figure to be added.",
      },
    ],
  },
  secondaryCase: {
    title: "Drug repurposing & autoimmunity",
    copy: "The same modelling approach can surface and rank existing compounds for autoimmune applications: the kind of question discovery and clinical teams both need answered.",
    figure: {
      number: "3",
      title: "Repurposing",
      caption: "Placeholder for ranking and autoimmune application data. Scientific figure to be added.",
    },
  },
};

export const foundation = {
  eyebrow: "The foundation",
  headline: "Years of research, external support and experimental testing.",
  stats: [
    {
      value: "NIH + NSF",
      label: "Independent scientific review and research support.",
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

export const company = {
  origin: {
    eyebrow: "Our origin",
    headline: "A personal experience sharpened a scientific ambition.",
    copy: [
      "Tomáš Helikar had spent years using computational models to understand complex biological systems when his eight-year-old son, Liam, became seriously ill.",
      "Doctors initially feared leukemia. It was ultimately identified as a serious infection, but the uncertainty exposed a fundamental challenge: medicine could measure what was happening, but understanding where his immune response was heading was much harder.",
    ],
    questionEyebrow: "The question",
    question:
      "What if we could understand not only what the immune system is doing now, but what it might do next?",
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

export const finalCta = {
  headline: "Let's explore what we can solve together.",
  copy: "Whether you're working in drug discovery, clinical research or the future of immune health, tell us what you're exploring and we'll connect you with the right person at Immunovus.",
  secondaryCta: { href: "/applications", label: "See who it's for" },
};

export const pageCta = {
  headline: "Explore what's possible with Immunovus.",
  cta: { href: "/contact", label: "Talk to our team" },
};

export const contactFields = {
  nameLabel: "Name",
  organisationLabel: "Organisation",
  emailLabel: "Email",
  interestLabel: "Area of interest",
  messageLabel: "Message",
  submit: "Start a conversation",
  thanks:
    "Thank you. We'll connect you with the right person at Immunovus once this form is linked to the team inbox.",
  interests: [
    "Drug discovery & development",
    "Personalized medicine",
    "Immune health",
    "Research collaboration",
    "Partnership",
    "Investment",
    "Careers",
    "Something else",
  ],
};

export const footer = {
  descriptor: "Making immune complexity predictable, early enough to guide every decision.",
  linkedin: "https://www.linkedin.com/company/immunovus",
  copyright: "© Immunovus, Inc.",
};
