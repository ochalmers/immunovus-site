export type Publication = {
  title: string;
  journal: string;
  href?: string;
};

export type PublicationGroup = {
  title: string;
  items: Publication[];
};

export const publications: PublicationGroup[] = [
  {
    title: "Immune digital twins",
    items: [
      {
        title: "Building digital twins of the human immune system: toward a roadmap",
        journal: "npj Digital Medicine 5, 64",
        href: "https://www.nature.com/articles/s41746-022-00610-z",
      },
      {
        title: "Toward mechanistic medical digital twins: some use cases in immunology",
        journal: "Frontiers in Digital Health 6, 1349595",
        href: "https://www.frontiersin.org/journals/digital-health/articles/10.3389/fdgth.2024.1349595/full",
      },
      {
        title: "Forum on immune digital twins: a meeting report",
        journal: "npj Systems Biology and Applications 10, 19",
        href: "https://www.nature.com/articles/s41540-024-00345-5",
      },
      {
        title: "Modeling and remodeling the cell: how digital twins and HCMV can elucidate the complex interactions of viral latency, epigenetic regulation, and immune responses",
        journal: "Current Clinical Microbiology Reports 10 (3), 141–151",
        href: "https://link.springer.com/article/10.1007/s40588-023-00201-w",
      },
    ],
  },
  {
    title: "Immune cell modelling",
    items: [
      {
        title: "A multi-approach and multi-scale platform to model CD4+ T cells responding to infections",
        journal: "PLoS Computational Biology 17 (8), e1009209",
        href: "https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1009209",
      },
      {
        title: "A multiscale mechanistic model of human dendritic cells for in-silico investigation of immune responses and novel therapeutics discovery",
        journal: "Frontiers in Immunology 14, 1112985",
        href: "https://www.frontiersin.org/articles/10.3389/fimmu.2023.1112985/full",
      },
      {
        title: "A mechanistic computational model reveals that plasticity of CD4+ T cell differentiation is a function of cytokine composition and dosage",
        journal: "Frontiers in Physiology 9, 878",
      },
      {
        title: "Simulation of stimulation: cytokine dosage and cell cycle crosstalk driving timing-dependent T cell differentiation",
        journal: "Frontiers in Physiology 9, 879",
        href: "https://www.frontiersin.org/journals/physiology/articles/10.3389/fphys.2018.00879/full",
      },
      {
        title: "Design, assessment, and in vivo evaluation of a computational model illustrating the role of CAV1 in CD4+ T-lymphocytes",
        journal: "Frontiers in Immunology 5, 599",
        href: "https://www.frontiersin.org/articles/10.3389/fimmu.2014.00599/full",
      },
      {
        title: "Combined TLR4 and TLR9 agonists induce distinct phenotypic changes in innate immunity in vitro and in vivo",
        journal: "Cellular Immunology 355, 104149",
        href: "https://www.sciencedirect.com/science/article/pii/S0008874920303099",
      },
    ],
  },
  {
    title: "Drug discovery, repurposing and target identification",
    items: [
      {
        title: "Integrative computational approach identifies drug targets in CD4+ T-cell-mediated immune disorders",
        journal: "npj Systems Biology and Applications 7, 4",
        href: "https://www.nature.com/articles/s41540-020-00165-3",
      },
      {
        title: "COMO: a pipeline for multi-omics data integration in metabolic modeling and drug discovery",
        journal: "Briefings in Bioinformatics 24 (6), bbad387",
        href: "https://academic.oup.com/bib/article-abstract/24/6/bbad387/7335822",
      },
      {
        title: "Systems perturbation analysis of a large-scale signal transduction model reveals potentially influential candidates for cancer therapeutics",
        journal: "Frontiers in Bioengineering and Biotechnology 4, 10",
        href: "https://www.frontiersin.org/journals/bioengineering-and-biotechnology/articles/10.3389/fbioe.2016.00010/full",
      },
      {
        title: "Drug-target identification in COVID-19 disease mechanisms using computational systems biology approaches",
        journal: "Frontiers in Immunology 14, 1282859",
        href: "https://www.frontiersin.org/journals/immunology/articles/10.3389/fimmu.2023.1282859/full",
      },
      {
        title: "Integrative network analyses of transcriptomics data reveal potential drug targets for acute radiation syndrome",
        journal: "Scientific Reports 11, 5585",
        href: "https://www.nature.com/articles/s41598-021-85044-5",
      },
      {
        title: "Identification of potential prophylactic medical countermeasures against acute radiation syndrome (ARS)",
        journal: "International Journal of Molecular Sciences 26 (9), 4055",
      },
      {
        title: "A review of radiation-induced alterations of multi-omic profiles, radiation injury biomarkers, and countermeasures",
        journal: "Radiation Research 199 (1), 89–111",
        href: "https://radiation-research.kglmeridian.com/view/journals/rare/199/1/article-p89.xml",
      },
    ],
  },
  {
    title: "Host–pathogen interactions",
    items: [
      {
        title: "Dynamics of influenza virus and human host interactions during infection and replication cycle",
        journal: "Bulletin of Mathematical Biology",
        href: "https://link.springer.com/article/10.1007/s11538-012-9777-2",
      },
      {
        title: "Molecular phylogeny and evolutionary dynamics of influenza A nonstructural (NS) gene",
        journal: "Infection, Genetics and Evolution 22, 192–200",
        href: "https://www.sciencedirect.com/science/article/pii/S1567134813003833",
      },
      {
        title: "COVID-19 Disease Map, a computational knowledge repository of virus–host interaction mechanisms",
        journal: "Molecular Systems Biology 17 (10), e10387",
        href: "https://www.embopress.org/doi/abs/10.15252/msb.202110387",
      },
      {
        title: "Arginine catabolism and polyamine biosynthesis pathway disparities within Francisella tularensis subpopulations",
        journal: "Frontiers in Microbiology 13, 890856",
      },
      {
        title: "Differences in blood-derived Francisella tularensis type B strains from clinical cases of tularemia",
        journal: "Microorganisms 8 (10), 1515",
        href: "https://www.mdpi.com/2076-2607/8/10/1515",
      },
    ],
  },
  {
    title: "Mechanistic network modelling",
    items: [
      {
        title: "Emergent decision-making in biological signal transduction networks",
        journal: "PNAS 105 (6), 1913–1918",
        href: "https://www.pnas.org/doi/abs/10.1073/pnas.0705088105",
      },
      {
        title: "A comprehensive, multi-scale dynamical model of ErbB receptor signal transduction in human mammary epithelial cells",
        journal: "PLoS ONE 8 (4), e61757",
        href: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0061757",
      },
      {
        title: "The Cell Collective: toward an open and collaborative approach to systems biology",
        journal: "BMC Systems Biology 6, 96",
        href: "https://link.springer.com/article/10.1186/1752-0509-6-96",
      },
      {
        title: "Bio-Logic Builder: a non-technical tool for building dynamical, qualitative models",
        journal: "PLoS ONE 7 (10), e46417",
        href: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0046417",
      },
      {
        title: "ChemChains: a platform for simulation and analysis of biochemical networks aimed to laboratory scientists",
        journal: "BMC Systems Biology 3, 58",
        href: "https://link.springer.com/article/10.1186/1752-0509-3-58",
      },
      {
        title: "Ergodic sets as cell phenotype of budding yeast cell cycle",
        journal: "PLoS ONE 7 (10), e45780",
        href: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0045780",
      },
      {
        title: "Sensitivity analysis of biological Boolean networks using information fusion based on nonadditive set functions",
        journal: "BMC Systems Biology 8, 92",
        href: "https://link.springer.com/article/10.1186/s12918-014-0092-4",
      },
      {
        title: "Identification of biologically essential nodes via determinative power in logical models of cellular processes",
        journal: "Frontiers in Physiology 9, 1185",
        href: "https://www.frontiersin.org/articles/10.3389/fphys.2018.01185/full",
      },
      {
        title: "Automated inference of Boolean models from molecular interaction maps using CaSQ",
        journal: "Bioinformatics 36 (16), 4473–4482",
        href: "https://academic.oup.com/bioinformatics/article-abstract/36/16/4473/5836892",
      },
      {
        title: "Augusta: from RNA-Seq to gene regulatory networks and Boolean models",
        journal: "Computational and Structural Biotechnology Journal 23, 783–790",
        href: "https://www.sciencedirect.com/science/article/pii/S2001037024000138",
      },
      {
        title: "A practical guide to mechanistic systems modeling in biology using a logic-based approach",
        journal: "Briefings in Bioinformatics 22 (4), bbaa236",
        href: "https://academic.oup.com/bib/article-abstract/22/4/bbaa236/5925256",
      },
      {
        title: "Logical modeling and dynamical analysis of cellular networks",
        journal: "Frontiers in Genetics 7, 94",
        href: "https://www.frontiersin.org/journals/genetics/articles/10.3389/fgene.2016.00094/full",
      },
      {
        title: "ccNetViz: a WebGL-based JavaScript library for visualization of large networks",
        journal: "Bioinformatics 36 (16), 4527–4529",
        href: "https://academic.oup.com/bioinformatics/article-abstract/36/16/4527/5855130",
      },
      {
        title: "Programmatic access to logical models in the Cell Collective modeling environment via a REST API",
        journal: "Biosystems 139, 12–16",
        href: "https://www.sciencedirect.com/science/article/pii/S0303264715001847",
      },
    ],
  },
  {
    title: "Quantitative systems pharmacology and AI",
    items: [
      {
        title: "Recent applications of quantitative systems pharmacology and machine learning models across diseases",
        journal: "Journal of Pharmacokinetics and Pharmacodynamics 49 (1), 19–37",
        href: "https://link.springer.com/article/10.1007/s10928-021-09790-9",
      },
      {
        title: "Two heads are better than one: current landscape of integrating QSP and machine learning",
        journal: "Journal of Pharmacokinetics and Pharmacodynamics 49 (1), 5–18",
        href: "https://link.springer.com/article/10.1007/s10928-022-09805-z",
      },
      {
        title: "AI-driven applications in clinical pharmacology and translational science: insights from the ASCPT 2024 AI preconference",
        journal: "Clinical and Translational Science 18 (4), e70203",
      },
    ],
  },
  {
    title: "Cancer biomarkers",
    items: [
      {
        title: "CancerDiscover: an integrative pipeline for cancer biomarker and cancer class prediction from high-throughput sequencing data",
        journal: "Oncotarget 9 (2), 2565",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5788660/",
      },
      {
        title: "Identification of potential tissue-specific cancer biomarkers and development of cancer versus normal genomic classifiers",
        journal: "Oncotarget 8, 85692–85715",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5689641/",
      },
    ],
  },
  {
    title: "Metabolism and disease",
    items: [
      {
        title: "Essential role of systemic iron mobilization and redistribution for adaptive thermogenesis through the HIF2-α/hepcidin axis",
        journal: "PNAS 118 (40), e2109186118",
        href: "https://www.pnas.org/doi/abs/10.1073/pnas.2109186118",
      },
      {
        title: "Aberrant energy metabolism and redox balance in seizure onset zones of epileptic patients",
        journal: "Journal of Proteomics 223, 103812",
        href: "https://www.sciencedirect.com/science/article/pii/S1874391920301809",
      },
      {
        title: "Changes in lipid profiles of epileptic mouse model",
        journal: "Metabolomics 16 (10), 106",
        href: "https://link.springer.com/article/10.1007/s11306-020-01729-4",
      },
      {
        title: "Computational systems biology approach for the study of rheumatoid arthritis: from a molecular map to a dynamical model",
        journal: "Genomics and Computational Biology 4 (1), e100050",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6016388/",
      },
    ],
  },
  {
    title: "Modelling standards and community infrastructure",
    items: [
      {
        title: "SBML Level 3: an extensible format for the exchange and reuse of biological models",
        journal: "Molecular Systems Biology 16 (8), e9110",
        href: "https://www.embopress.org/doi/abs/10.15252/msb.20199110",
      },
      {
        title: "SBML qualitative models: a model representation format and infrastructure to foster interactions between qualitative modelling formalisms and tools",
        journal: "BMC Systems Biology 7, 135",
        href: "https://link.springer.com/article/10.1186/1752-0509-7-135",
      },
      {
        title: "The simulation experiment description markup language (SED-ML): level 1 version 4",
        journal: "Journal of Integrative Bioinformatics 18 (3), 20210021",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8560344/",
      },
      {
        title: "The simulation experiment description markup language (SED-ML): level 1 version 5",
        journal: "Journal of Integrative Bioinformatics 21 (1), 20240008",
        href: "https://www.degruyterbrill.com/document/doi/10.1515/jib-2024-0008/html",
      },
      {
        title: "The CoLoMoTo interactive notebook: accessible and reproducible computational analyses for qualitative biological networks",
        journal: "Frontiers in Physiology 9, 680",
        href: "https://www.frontiersin.org/journals/physiology/articles/10.3389/fphys.2018.00680/full",
      },
      {
        title: "Cooperative development of logical modelling standards and tools with CoLoMoTo",
        journal: "Bioinformatics 31 (7), 1154",
        href: "https://academic.oup.com/bioinformatics/article-abstract/31/7/1154/181598",
      },
      {
        title: "SysMod: the ISCB community for data-driven computational modelling and multi-scale analysis of biological systems",
        journal: "Bioinformatics 37 (21), 3702–3706",
        href: "https://academic.oup.com/bioinformatics/article-abstract/37/21/3702/6308778",
      },
      {
        title: "Setting the basis of best practices and standards for curation and annotation of logical models in biology",
        journal: "Briefings in Bioinformatics 22 (2), 1848–1859",
        href: "https://academic.oup.com/bib/article-abstract/22/2/1848/5822935",
      },
      {
        title: "Addressing barriers in comprehensiveness, accessibility, reusability, interoperability and reproducibility of computational models in systems biology",
        journal: "Briefings in Bioinformatics 25 (3)",
      },
      {
        title: "Computational modelling in health and disease: highlights of the 6th annual SysMod meeting",
        journal: "Bioinformatics 38 (21), 4990–4993",
        href: "https://academic.oup.com/bioinformatics/article-abstract/38/21/4990/6711455",
      },
    ],
  },
];
