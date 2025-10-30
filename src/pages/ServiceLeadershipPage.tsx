import { Award, Briefcase, BookOpen, Users } from 'lucide-react'

export default function ServiceLeadershipPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary-500 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-title-xl font-bold mb-4">Service, Leadership & Recognition</h1>
          <p className="text-body-xl text-white text-opacity-90 max-w-3xl">
            Academic leadership, government service, awards, and editorial contributions
          </p>
        </div>
      </section>

      {/* Institutional Leadership */}
      <section className="py-2xl bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <Users className="w-10 h-10 text-primary-500 mr-4" />
            <h2 className="text-title-lg font-bold text-neutral-900">Institutional Leadership</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8">
              <div className="bg-primary-50 border-l-4 border-primary-500 rounded-lg p-xl">
                <h3 className="text-title-md font-bold text-neutral-900 mb-4">
                  Professor & Head
                </h3>
                <p className="text-body-lg text-neutral-700 mb-3">
                  <strong>Department of Dairy and Poultry Science</strong>
                </p>
                <p className="text-body-lg text-neutral-700 mb-3">
                  Chattogram Veterinary and Animal Sciences University (CVASU)
                </p>
                <p className="text-body text-neutral-700 mb-6">
                  <strong>Period:</strong> 2015 - Present
                </p>
                <div className="space-y-4">
                  <p className="text-body text-neutral-700 leading-relaxed">
                    As Head of Department, Prof. Kober leads academic programs in dairy and poultry science, overseeing 
                    undergraduate and graduate education, research initiatives, and faculty development. His leadership 
                    emphasizes integration of molecular science with applied animal production systems.
                  </p>
                  <p className="text-body text-neutral-700 leading-relaxed">
                    The department delivers comprehensive training in dairy microbiology, functional dairy foods, 
                    probiotics, food safety, and antimicrobial resistance mitigation under his academic direction.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4">
              <img
                src="/images/professional_male_professor_academic_portrait.jpg"
                alt="Prof. Kober"
                className="rounded-lg shadow-card w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Government Service */}
      <section className="py-2xl bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <Briefcase className="w-10 h-10 text-primary-500 mr-4" />
            <h2 className="text-title-lg font-bold text-neutral-900">Government Service</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-neutral-200 rounded-lg p-xl shadow-card">
              <div className="flex items-start space-x-4">
                <Briefcase className="w-10 h-10 text-secondary-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-title-sm font-semibold text-neutral-900 mb-3">
                    National Consultant
                  </h3>
                  <p className="text-body-lg text-primary-600 font-medium mb-4">
                    Department of Livestock Services (DLS), Ministry of Fisheries & Livestock, Bangladesh
                  </p>
                  <p className="text-body text-neutral-700 mb-4">
                    <strong>Period:</strong> March - April 2019
                  </p>
                  <p className="text-body text-neutral-700 leading-relaxed">
                    Provided expert technical consultation to the Department of Livestock Services on dairy science, 
                    animal health, and production systems. Contributed to national policy development and technical 
                    guidance for livestock sector enhancement initiatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-2xl bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <Award className="w-10 h-10 text-primary-500 mr-4" />
            <h2 className="text-title-lg font-bold text-neutral-900">Awards & Recognition</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-secondary-50 border-2 border-secondary-500 rounded-lg p-xl shadow-card">
              <div className="flex items-start space-x-6">
                <Award className="w-16 h-16 text-secondary-600 flex-shrink-0" />
                <div>
                  <h3 className="text-title-md font-bold text-neutral-900 mb-4">
                    Best Researcher Award 2019-2020
                  </h3>
                  <p className="text-body-lg text-neutral-700 mb-4">
                    <strong>Awarded by:</strong> Chattogram Veterinary and Animal Sciences University (CVASU)
                  </p>
                  <p className="text-body text-neutral-700 leading-relaxed mb-4">
                    Recognized for outstanding research contributions in dairy science, immunobiotics, and molecular 
                    immunology. The award acknowledges sustained research productivity, international collaborations, 
                    and impact on livestock health science.
                  </p>
                  <div className="bg-white rounded p-4 border border-secondary-200">
                    <p className="text-body text-neutral-700">
                      This recognition reflects excellence across multiple dimensions: publication quality and quantity, 
                      research supervision, international research fellowships, and contributions to institutional 
                      research visibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Roles */}
      <section className="py-2xl bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <BookOpen className="w-10 h-10 text-primary-500 mr-4" />
            <h2 className="text-title-lg font-bold text-neutral-900">Editorial Roles</h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white border border-neutral-200 rounded-lg p-lg shadow-card hover:shadow-card-hover transition-shadow duration-base">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-title-sm font-semibold text-neutral-900">Associate Editor</h3>
                <span className="text-small text-primary-600 font-semibold">2021 - Present</span>
              </div>
              <p className="text-body-lg text-primary-600 font-medium mb-3">
                Journal of Modern Agriculture and Biotechnology
              </p>
              <p className="text-body text-neutral-700 leading-relaxed">
                Serves as Associate Editor handling manuscript peer review, editorial decision-making, and 
                special issue coordination in agricultural biotechnology and food science.
              </p>
            </div>

            <div className="bg-white border border-neutral-200 rounded-lg p-lg shadow-card hover:shadow-card-hover transition-shadow duration-base">
              <h3 className="text-title-sm font-semibold text-neutral-900 mb-4">Guest Editor Roles</h3>
              <div className="space-y-3">
                <div className="border-l-2 border-secondary-500 pl-4">
                  <p className="text-body text-neutral-700">
                    Guest Editor for special issues focusing on immunobiotics, functional foods, and molecular 
                    approaches to livestock health in peer-reviewed international journals
                  </p>
                </div>
                <div className="border-l-2 border-secondary-500 pl-4">
                  <p className="text-body text-neutral-700">
                    Editorial contributions to thematic collections on probiotic bacteria, dairy science innovation, 
                    and antimicrobial resistance mitigation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departmental Context */}
      <section className="py-2xl bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-title-lg font-bold text-neutral-900 text-center mb-12">
            Department of Dairy and Poultry Science, CVASU
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-neutral-100 rounded-lg p-xl">
              <p className="text-body-lg text-neutral-700 leading-relaxed mb-6">
                The Department of Dairy and Poultry Science at CVASU is dedicated to advancing knowledge and practice 
                in dairy and poultry production systems through integrated teaching, research, and outreach. Under 
                Prof. Kober's leadership, the department emphasizes molecular approaches to animal health, functional 
                foods development, and sustainable production practices.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 text-center">
                  <h4 className="text-title-sm font-semibold text-neutral-900 mb-2">Teaching</h4>
                  <p className="text-body text-neutral-700">
                    Undergraduate & graduate programs in dairy and poultry science
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center">
                  <h4 className="text-title-sm font-semibold text-neutral-900 mb-2">Research</h4>
                  <p className="text-body text-neutral-700">
                    Molecular immunology, functional foods, livestock health
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center">
                  <h4 className="text-title-sm font-semibold text-neutral-900 mb-2">Service</h4>
                  <p className="text-body text-neutral-700">
                    Industry collaboration, government consultation, community outreach
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
