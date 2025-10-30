import { FileText, Award, ExternalLink, BookOpen } from 'lucide-react'

export default function PublicationsPage() {
  const metrics = [
    { value: '684', label: 'Total Citations', sublabel: '581 since 2020' },
    { value: '13', label: 'h-index', sublabel: '12 since 2020' },
    { value: '20', label: 'i10-index', sublabel: '16 since 2020' },
    { value: '50+', label: 'Publications', sublabel: 'Peer-reviewed articles' }
  ]

  const profiles = [
    {
      name: 'Google Scholar',
      description: 'Citation metrics and publication history',
      url: 'https://scholar.google.com',
      icon: ExternalLink
    },
    {
      name: 'ResearchGate',
      description: 'Network and full-text discovery',
      url: 'https://www.researchgate.net',
      icon: ExternalLink
    },
    {
      name: 'ORCID',
      description: 'Canonical researcher identifier',
      url: 'https://orcid.org',
      icon: ExternalLink
    },
    {
      name: 'Frontiers Loop',
      description: 'Publisher profile and roles',
      url: 'https://loop.frontiersin.org',
      icon: ExternalLink
    }
  ]

  const featuredPublication = {
    title: 'Transcriptome Modifications in Porcine Adipocytes via Toll-Like Receptors Activation',
    journal: 'Frontiers in Immunology',
    year: 2019,
    abstract: 'This study demonstrates receptor-specific reprogramming of adipocyte immunity and metabolism via TLR2, TLR3, and TLR4 ligands. The paper integrates transcriptomics with immunometabolic interpretation, revealing distinct signaling pathways activated by different pathogen-associated molecular patterns in adipose tissue.',
    contribution: 'Comprehensive transcriptome analysis revealing molecular mechanisms of TLR-mediated immune responses in adipocytes'
  }

  const selectedPublications = [
    {
      year: 2024,
      title: 'Immunomodulatory Effects of Lactic Acid Bacteria on Livestock Health',
      venue: 'Nutrients',
      contribution: 'Review of immunobiotic mechanisms in animal production'
    },
    {
      year: 2023,
      title: 'Exopolysaccharides from Probiotic Bacteria: Immunological Properties',
      venue: 'Microorganisms (MDPI)',
      contribution: 'Characterization of EPS-mediated immune modulation'
    },
    {
      year: 2021,
      title: 'Bovine Mastitis Prevention through Immunobiotic Intervention',
      venue: 'Veterinary Sciences',
      contribution: 'Preventive strategies using immunomodulatory bacteria'
    },
    {
      year: 2020,
      title: 'Toll-Like Receptor Signaling in Intestinal Immunity',
      venue: 'Journal of Immunology Research',
      contribution: 'Mechanistic studies of TLR pathways in gut health'
    },
    {
      year: 2019,
      title: 'Functional Dairy Foods: Probiotic Applications',
      venue: 'Food Science and Nutrition',
      contribution: 'Development and evaluation of probiotic dairy products'
    }
  ]

  const researchThemes = [
    {
      theme: 'Innate Immunity',
      publications: '15+ articles',
      focus: 'TLR signaling, cytokine responses, immune cell activation'
    },
    {
      theme: 'Exopolysaccharides',
      publications: '8+ articles',
      focus: 'EPS structure, immunomodulation, prebiotic effects'
    },
    {
      theme: 'Bovine Mastitis',
      publications: '10+ articles',
      focus: 'Pathogen mechanisms, preventive immunobiotics'
    },
    {
      theme: 'Transcriptomics',
      publications: '6+ articles',
      focus: 'RNA-seq analysis, gene expression profiling'
    },
    {
      theme: 'Functional Foods',
      publications: '12+ articles',
      focus: 'Product development, quality evaluation, health benefits'
    }
  ]

  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary-500 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-title-xl font-bold mb-4">Publications & Research Impact</h1>
          <p className="text-body-xl text-white text-opacity-90 max-w-3xl">
            Comprehensive portfolio of peer-reviewed research in immunobiotics, molecular immunology, and dairy science
          </p>
        </div>
      </section>

      {/* Academic Metrics Dashboard */}
      <section className="py-2xl bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-title-lg font-bold text-neutral-900 text-center mb-12">Research Impact Metrics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white border-2 border-neutral-200 rounded-lg p-lg text-center hover:shadow-card-hover hover:-translate-y-1 hover:border-primary-500 transition-all duration-base"
              >
                <Award className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                <div className="text-6xl font-bold text-primary-500 mb-2">{metric.value}</div>
                <div className="text-body font-semibold text-neutral-900 mb-1">{metric.label}</div>
                <div className="text-small text-neutral-600">{metric.sublabel}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-body text-neutral-600 italic">
              Metrics verified through Google Scholar and institutional records
            </p>
          </div>
        </div>
      </section>

      {/* Research Profiles */}
      <section className="py-2xl bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-title-lg font-bold text-neutral-900 text-center mb-12">Academic Profiles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {profiles.map((profile, index) => {
              const Icon = profile.icon
              return (
                <a
                  key={index}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-neutral-200 rounded-lg p-lg text-center hover:shadow-card-hover hover:-translate-y-1 hover:border-primary-500 transition-all duration-base group"
                >
                  <Icon className="w-12 h-12 text-secondary-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-base" />
                  <h3 className="text-title-sm font-semibold text-neutral-900 mb-2">{profile.name}</h3>
                  <p className="text-small text-neutral-700">{profile.description}</p>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Publication */}
      <section className="py-2xl bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-title-lg font-bold text-neutral-900 mb-12">Featured Publication</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary-50 border-l-4 border-primary-500 rounded-lg p-xl shadow-card">
              <div className="flex items-start space-x-4 mb-4">
                <BookOpen className="w-10 h-10 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="inline-block bg-primary-500 text-white px-3 py-1 rounded text-small font-semibold mb-3">
                    {featuredPublication.year}
                  </div>
                  <h3 className="text-title-md font-bold text-neutral-900 mb-3">
                    {featuredPublication.title}
                  </h3>
                  <p className="text-body-lg text-primary-600 font-medium italic mb-4">
                    {featuredPublication.journal}
                  </p>
                  <p className="text-body text-neutral-700 leading-relaxed mb-4">
                    {featuredPublication.abstract}
                  </p>
                  <div className="bg-white rounded p-4 border border-primary-200">
                    <p className="text-body text-neutral-700">
                      <strong>Contribution:</strong> {featuredPublication.contribution}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Publications */}
      <section className="py-2xl bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-title-lg font-bold text-neutral-900 mb-12">Selected Publications</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {selectedPublications.map((pub, index) => (
              <div
                key={index}
                className="bg-white border-l-4 border-secondary-500 rounded-lg p-lg shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-base"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="inline-block bg-secondary-500 text-white px-3 py-1 rounded text-small font-semibold">
                    {pub.year}
                  </div>
                </div>
                <h3 className="text-title-sm font-semibold text-neutral-900 mb-2">
                  {pub.title}
                </h3>
                <p className="text-body text-primary-600 font-medium italic mb-3">
                  {pub.venue}
                </p>
                <p className="text-body text-neutral-700">
                  <strong>Contribution:</strong> {pub.contribution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thematic Research Areas */}
      <section className="py-2xl bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-title-lg font-bold text-neutral-900 text-center mb-12">Thematic Research Areas</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchThemes.map((theme, index) => (
              <div
                key={index}
                className="bg-neutral-50 border border-neutral-200 rounded-lg p-lg hover:shadow-card-hover hover:-translate-y-1 transition-all duration-base"
              >
                <FileText className="w-10 h-10 text-secondary-500 mb-4" />
                <h3 className="text-title-sm font-semibold text-neutral-900 mb-3">{theme.theme}</h3>
                <p className="text-body text-primary-600 font-medium mb-2">{theme.publications}</p>
                <p className="text-body text-neutral-700">{theme.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Publication */}
      <section className="py-2xl bg-primary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border-2 border-primary-500 rounded-lg p-xl shadow-card">
              <div className="flex items-center mb-6">
                <BookOpen className="w-12 h-12 text-primary-600 mr-4" />
                <h2 className="text-title-lg font-bold text-neutral-900">Book Publication</h2>
              </div>
              <div className="space-y-4">
                <h3 className="text-title-md font-bold text-neutral-900">
                  Milk and Dairy Foods: Nutrition, Processing and Healthy Aging
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-body text-neutral-700">
                  <div>
                    <strong>Publisher:</strong> CRC Press (Taylor & Francis Group)
                  </div>
                  <div>
                    <strong>Year:</strong> 2024
                  </div>
                </div>
                <p className="text-body-lg text-neutral-700 leading-relaxed">
                  A comprehensive monograph covering milk composition, processing technologies, nutritional aspects, 
                  and the role of dairy foods in promoting healthy aging. This work synthesizes decades of research 
                  in dairy science and nutrition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
