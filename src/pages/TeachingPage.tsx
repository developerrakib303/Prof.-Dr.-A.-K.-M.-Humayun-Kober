import { GraduationCap, BookOpen, Users, Award } from 'lucide-react'

export default function TeachingPage() {
  const programs = [
    {
      degree: 'Doctor of Veterinary Medicine (DVM)',
      description: 'Comprehensive 5-year professional degree program with dairy science components',
      focus: 'Veterinary medicine with specialization in dairy and poultry production systems'
    },
    {
      degree: 'Master of Science (MS)',
      description: 'Research-focused graduate program in Dairy and Poultry Science',
      focus: 'Advanced study in dairy microbiology, functional foods, and immunobiotics'
    },
    {
      degree: 'Doctor of Philosophy (PhD)',
      description: 'Doctoral research program in animal science and dairy science',
      focus: 'Original research in molecular immunology, probiotics, and livestock health'
    }
  ]

  const courseAreas = [
    'Dairy Microbiology',
    'Functional Dairy Foods',
    'Probiotics and Immunobiotics',
    'Food Safety and Quality Control',
    'Antimicrobial Resistance (AMR)',
    'Milk Chemistry and Composition',
    'Dairy Processing Technologies',
    'Animal Nutrition',
    'Livestock Health Management',
    'Research Methodology'
  ]

  const supervisionThemes = [
    {
      icon: BookOpen,
      theme: 'Immunobiotics',
      description: 'Research on probiotic bacteria, TLR signaling, and immune modulation'
    },
    {
      icon: BookOpen,
      theme: 'Functional Foods',
      description: 'Development and evaluation of dairy products with health benefits'
    },
    {
      icon: BookOpen,
      theme: 'Livestock Health',
      description: 'Bovine mastitis prevention, AMR mitigation, and disease control'
    },
    {
      icon: BookOpen,
      theme: 'Molecular Biology',
      description: 'Transcriptomics, gene expression, and host-microbe interactions'
    }
  ]

  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary-500 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-title-xl font-bold mb-4">Teaching & Mentorship</h1>
          <p className="text-body-xl text-white text-opacity-90 max-w-3xl">
            Educating the next generation of dairy scientists and veterinary professionals
          </p>
        </div>
      </section>

      {/* Teaching Overview */}
      <section className="py-2xl bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center mb-6">
                <GraduationCap className="w-10 h-10 text-primary-500 mr-4" />
                <h2 className="text-title-lg font-bold text-neutral-900">Teaching Philosophy & Approach</h2>
              </div>
              <p className="text-body-lg text-neutral-700 leading-loose mb-6">
                Prof. Kober has been teaching at CVASU since 2001, bringing more than two decades of experience in 
                dairy and poultry science education. As Professor since 2015, he integrates molecular science with 
                traditional dairy science curricula, preparing students for modern challenges in animal production 
                and food science.
              </p>
              <p className="text-body-lg text-neutral-700 leading-loose mb-6">
                His teaching emphasizes hands-on laboratory experience, critical thinking, and research methodology. 
                Students engage with contemporary issues including antimicrobial resistance, food safety, functional 
                foods development, and sustainable livestock production.
              </p>
              <p className="text-body-lg text-neutral-700 leading-loose">
                The educational approach combines theoretical foundations with practical applications, drawing from 
                international research experience and industry collaboration to provide students with globally 
                relevant skills and knowledge.
              </p>
            </div>
            <div className="lg:col-span-5">
              <img
                src="/images/modern-dairy-science-lab-milk-quality-testing-woman.jpg"
                alt="Dairy science laboratory"
                className="rounded-lg shadow-card w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-2xl bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-title-lg font-bold text-neutral-900 text-center mb-12">Academic Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white border border-neutral-200 rounded-lg p-xl hover:shadow-card-hover hover:-translate-y-1 transition-all duration-base"
              >
                <GraduationCap className="w-12 h-12 text-primary-500 mb-6" />
                <h3 className="text-title-sm font-semibold text-neutral-900 mb-4">{program.degree}</h3>
                <p className="text-body text-neutral-700 mb-4">{program.description}</p>
                <div className="pt-4 border-t border-neutral-200">
                  <p className="text-small text-neutral-600">
                    <strong>Focus:</strong> {program.focus}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Areas */}
      <section className="py-2xl bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <BookOpen className="w-10 h-10 text-primary-500 mr-4" />
            <h2 className="text-title-lg font-bold text-neutral-900">Teaching Areas</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-body-lg text-neutral-700 mb-8">
              Prof. Kober teaches across multiple subject areas in dairy and poultry science, with particular emphasis 
              on microbiology, functional foods, and molecular approaches to animal health.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {courseAreas.map((area, index) => (
                <div
                  key={index}
                  className="bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-3 hover:bg-primary-50 hover:border-primary-500 transition-all duration-fast"
                >
                  <p className="text-body text-neutral-900">{area}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research Supervision */}
      <section className="py-2xl bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <Users className="w-10 h-10 text-primary-500 mr-4" />
            <h2 className="text-title-lg font-bold text-neutral-900">Research Supervision</h2>
          </div>
          <p className="text-body-lg text-neutral-700 text-center max-w-3xl mx-auto mb-12">
            Prof. Kober supervises graduate students (MS and PhD) conducting research across his core expertise areas, 
            providing mentorship in experimental design, laboratory techniques, data analysis, and scientific writing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {supervisionThemes.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="bg-white border border-neutral-200 rounded-lg p-lg hover:shadow-card-hover hover:-translate-y-1 transition-all duration-base"
                >
                  <Icon className="w-10 h-10 text-secondary-500 mb-4" />
                  <h3 className="text-title-sm font-semibold text-neutral-900 mb-3">{item.theme}</h3>
                  <p className="text-body text-neutral-700 leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CVASU Educational Context */}
      <section className="py-2xl bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-title-lg font-bold text-neutral-900 text-center mb-12">
            CVASU Educational Excellence
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary-50 rounded-lg p-xl border-l-4 border-primary-500">
              <p className="text-body-lg text-neutral-700 leading-relaxed mb-6">
                Chattogram Veterinary and Animal Sciences University (CVASU) is committed to producing highly skilled 
                veterinary and animal science professionals through rigorous academic programs aligned with international 
                standards, including World Organisation for Animal Health (WOAH) recommendations.
              </p>
              <p className="text-body-lg text-neutral-700 leading-relaxed">
                The DVM curriculum has been modernized to integrate One Health principles, emphasizing the interconnection 
                between animal health, human health, and environmental sustainability. Prof. Kober's teaching contributes 
                to this vision through molecular approaches to dairy science and livestock health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Opportunities */}
      <section className="py-2xl bg-primary-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-title-lg font-bold text-white mb-6">
            Prospective Graduate Students
          </h2>
          <p className="text-body-xl text-white text-opacity-90 max-w-2xl mx-auto mb-8">
            Opportunities are available for motivated graduate students interested in immunobiotics, functional foods, 
            molecular immunology, and livestock health research. Contact Prof. Kober to discuss potential research projects 
            and supervision.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-primary-500 px-8 py-4 rounded-md hover:bg-neutral-100 transition-all duration-fast hover:scale-105 font-semibold"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  )
}
