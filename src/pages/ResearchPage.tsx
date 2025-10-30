import { Microscope, Shield, Beaker, Network, Activity } from 'lucide-react'

export default function ResearchPage() {
  const researchAreas = [
    {
      icon: Microscope,
      title: 'Immunobiotics',
      image: '/images/BioLivestock_MultiStrain_Probiotic_Organic_Livestock_Health.jpg',
      description: 'Mechanistic studies on probiotics and immunobiotics focusing on toll-like receptor (TLR) signaling pathways',
      details: [
        'Mechanistic investigation of probiotic bacteria activating toll-like receptors (TLR2, TLR4) to modulate innate immune responses',
        'Immunoregulatory properties of lactic acid bacteria and their cellular components (cell walls, exopolysaccharides)',
        'Host-microbe interactions in intestinal and adipose tissue immunity',
        'Development of immunomodulatory strategies for livestock health enhancement'
      ]
    },
    {
      icon: Shield,
      title: 'Bovine Mastitis Control',
      image: '/images/dairy_milk_quality_testing_lab_equipment.jpg',
      description: 'Preventive strategies using immunomodulatory bacteria against major mastitis pathogens',
      details: [
        'Immunobiotic interventions against Staphylococcus aureus, E. coli, and Streptococcus species',
        'Study of pathogen-associated molecular patterns (PAMPs) and host immune recognition',
        'Development of protective probiotic formulations for mammary gland health',
        'Integration of molecular diagnostics with preventive immunobiotics'
      ]
    },
    {
      icon: Beaker,
      title: 'Functional Feed & Food Development',
      image: '/images/modern_dairy_science_laboratory_analytical_equipment.jpg',
      description: 'Development of feed additives and dairy products with enhanced immunoregulatory properties',
      details: [
        'Formulation of functional feeds incorporating immunomodulatory bacteria',
        'Quality enhancement of dairy products through probiotic supplementation',
        'Evaluation of fermentation parameters and bioactive compound production',
        'Application of food immunology principles to product development'
      ]
    },
    {
      icon: Network,
      title: 'Transcriptome Analysis',
      image: '/images/lab_research_7.png',
      description: 'Molecular methods examining host-microbe interactions at the transcriptional level',
      details: [
        'RNA-seq analysis of porcine adipocytes and intestinal epithelial cells',
        'Transcriptional profiling of TLR-mediated immune responses',
        'Systems biology approaches to immunometabolic regulation',
        'Integration of transcriptomics with functional immunology outcomes'
      ]
    }
  ]

  const currentProjects = [
    {
      title: 'Immunobiotic Research Program',
      funder: 'Ministry of Science and Technology, Bangladesh',
      focus: 'Development of next-generation immunobiotics for livestock health'
    },
    {
      title: 'Functional Dairy Foods Initiative',
      funder: 'CVASU Research Grant',
      focus: 'Enhanced nutritional and immunological properties in dairy products'
    },
    {
      title: 'AMR Mitigation Strategy',
      funder: 'University Grants Commission (UGC)',
      focus: 'One Health approach to antimicrobial resistance in livestock systems'
    }
  ]

  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary-500 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-title-xl font-bold mb-4">Research Areas & Expertise</h1>
          <p className="text-body-xl text-white text-opacity-90 max-w-3xl">
            Molecular approaches to dairy immunology, immunobiotics, and livestock health
          </p>
        </div>
      </section>

      {/* Research Overview */}
      <section className="py-2xl bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <h2 className="text-title-lg font-bold text-neutral-900 mb-6">Research Program Overview</h2>
                <p className="text-body-lg text-neutral-700 leading-loose mb-4">
                  Prof. Kober's research program sits at the intersection of dairy science and molecular immunology. 
                  The work focuses on developing functional dairy foods and feeds using immunomodulatory probiotics, 
                  while studying molecular and cellular biology pathways underlying innate immunity.
                </p>
                <p className="text-body-lg text-neutral-700 leading-loose mb-4">
                  The research program addresses biological questions with applied relevance in livestock health and 
                  food-derived immunomodulation. Key themes include mechanistic immunobiotics, bovine mastitis prevention, 
                  functional feed/food development, and transcriptome analysis of host-microbe interactions.
                </p>
              </div>
              <div className="lg:col-span-5">
                <img
                  src="/images/conceptual_immunobiotics_probiotics_livestock_immunology_diagram.png"
                  alt="Immunobiotics research concept"
                  className="rounded-lg shadow-card w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Research Areas */}
      {researchAreas.map((area, index) => {
        const Icon = area.icon
        const bgColor = index % 2 === 0 ? 'bg-neutral-50' : 'bg-white'
        return (
          <section key={index} className={`py-2xl ${bgColor}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <div className="flex items-center mb-8">
                  <Icon className="w-12 h-12 text-secondary-500 mr-4" />
                  <h2 className="text-title-lg font-bold text-neutral-900">{area.title}</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <p className="text-body-xl text-neutral-700 leading-loose mb-6">
                      {area.description}
                    </p>
                    <h3 className="text-title-sm font-semibold text-neutral-900 mb-4">Research Focus Areas:</h3>
                    <ul className="space-y-3">
                      {area.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-body text-neutral-700 leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <img
                      src={area.image}
                      alt={area.title}
                      className="rounded-lg shadow-card w-full hover:scale-105 transition-transform duration-slow"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* AMR Mitigation Strategy */}
      <section className="py-2xl bg-primary-50 border-t-4 border-primary-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <Activity className="w-12 h-12 text-primary-600 mr-4" />
              <h2 className="text-title-lg font-bold text-neutral-900">Antimicrobial Resistance (AMR) Mitigation</h2>
            </div>
            <p className="text-body-xl text-neutral-700 leading-loose mb-6">
              A strategic One Health approach integrating immunobiotics as alternatives to antibiotic use in livestock production. 
              This research addresses the critical challenge of antimicrobial resistance through preventive immunomodulation 
              rather than therapeutic antimicrobial intervention.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white rounded-lg p-6 shadow-card">
                <h3 className="text-title-sm font-semibold text-neutral-900 mb-3">Prevention</h3>
                <p className="text-body text-neutral-700">
                  Immunobiotic prophylaxis reducing reliance on antibiotics in livestock
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-card">
                <h3 className="text-title-sm font-semibold text-neutral-900 mb-3">Surveillance</h3>
                <p className="text-body text-neutral-700">
                  Monitoring AMR indicators in dairy and poultry production systems
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-card">
                <h3 className="text-title-sm font-semibold text-neutral-900 mb-3">Alternatives</h3>
                <p className="text-body text-neutral-700">
                  Development of immunomodulatory strategies as antibiotic alternatives
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-2xl bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-title-lg font-bold text-neutral-900 text-center mb-12">Current Research Projects</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentProjects.map((project, index) => (
              <div
                key={index}
                className="bg-neutral-50 border border-neutral-200 rounded-lg p-lg hover:shadow-card-hover hover:-translate-y-1 transition-all duration-base"
              >
                <h3 className="text-title-sm font-semibold text-neutral-900 mb-4">{project.title}</h3>
                <p className="text-small text-primary-600 font-medium mb-3">
                  {project.funder}
                </p>
                <p className="text-body text-neutral-700 leading-relaxed">
                  {project.focus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
