import { GraduationCap, Briefcase, Award, BookOpen } from 'lucide-react'

export default function ProfilePage() {
  const education = [
    {
      degree: 'Ph.D. in Animal Science',
      institution: 'Tokyo University of Agriculture and Technology (TUAT)',
      country: 'Japan',
      years: '2008-2011',
      focus: 'Animal science with immunology interfaces'
    },
    {
      degree: 'JSPS Invitational Research Fellowship',
      institution: 'Tohoku University',
      country: 'Japan',
      years: '2022-2023',
      focus: 'Food immunology, host-microbe interactions'
    },
    {
      degree: 'JSPS Postdoctoral Fellowship',
      institution: 'Tohoku University',
      country: 'Japan',
      years: '2015-2017',
      focus: 'Food immunology, mucosal immunity'
    },
    {
      degree: 'Visiting Researcher',
      institution: 'Norwegian University of Life Sciences (NMBU)',
      country: 'Norway',
      years: '2014',
      focus: 'Functional foods, probiotics'
    },
    {
      degree: 'M.S. in Dairy Science',
      institution: 'Bangladesh Agricultural University (BAU)',
      country: 'Bangladesh',
      years: 'Post-B.Sc.',
      focus: 'Dairy science, milk composition and processing'
    },
    {
      degree: 'B.Sc. in Animal Husbandry',
      institution: 'Bangladesh Agricultural University (BAU)',
      country: 'Bangladesh',
      years: 'Pre-1999',
      focus: 'Animal science fundamentals'
    }
  ]

  const career = [
    {
      position: 'Professor & Head',
      department: 'Department of Dairy & Poultry Science',
      institution: 'CVASU',
      year: '2015-Present'
    },
    {
      position: 'Lecturer',
      department: 'Department of Dairy & Poultry Science',
      institution: 'CVASU',
      year: '2001-2015'
    }
  ]

  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary-500 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-title-xl font-bold mb-4">Academic Profile</h1>
          <p className="text-body-xl text-white text-opacity-90 max-w-3xl">
            A comprehensive overview of educational background, career progression, and academic achievements
          </p>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-2xl bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8">
              <h2 className="text-title-lg font-bold text-neutral-900 mb-6">Executive Summary</h2>
              <div className="prose prose-lg max-w-none text-neutral-700 space-y-4">
                <p className="text-body-lg leading-loose">
                  Prof. Dr. A. K. M. Humayun Kober serves as Professor and Head of the Department of Dairy and Poultry Science 
                  at Chattogram Veterinary and Animal Sciences University (CVASU), Bangladesh. His career anchors in dairy and 
                  food science with a distinctive molecular and immunological focus, reflecting a sustained arc from foundational 
                  animal science training to advanced research on probiotics, immunobiotics, and the immunology of adipose tissue.
                </p>
                <p className="text-body-lg leading-loose">
                  He joined CVASU as Lecturer in 2001, was promoted to Professor in 2015, and currently leads the Department of 
                  Dairy and Poultry Science while contributing to university research visibility through institutional platforms 
                  and external scholarly networks. His career progression demonstrates commitment to both teaching excellence and 
                  research innovation in molecular dairy science.
                </p>
                <p className="text-body-lg leading-loose">
                  The narrative arc traces three threads: First, his education from Bachelor of Science in Animal Husbandry and 
                  Master of Science in Dairy Science from Bangladesh Agricultural University (BAU), followed by a Ph.D. in Animal 
                  Science from Tokyo University of Agriculture and Technology (TUAT). Second, his career progression from Lecturer 
                  (2001) to Professor (2015) at CVASU, including departmental leadership and research-focused international engagements. 
                  Third, his scientific expertise in molecular/cell biology of dairy-associated immunology spanning immunobiotics, 
                  probiotics, toll-like receptor (TLR) signaling, transcriptome dynamics in adipocytes, and preventive strategies 
                  in bovine mastitis.
                </p>
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="sticky top-24">
                <img
                  src="/images/professional_male_scientist_professor_lab_portrait.jpg"
                  alt="Prof. Dr. A. K. M. Humayun Kober"
                  className="rounded-lg shadow-card w-full mb-6"
                />
                <div className="bg-neutral-100 rounded-lg p-6">
                  <h3 className="text-title-sm font-semibold text-neutral-900 mb-4">Current Position</h3>
                  <p className="text-body text-neutral-700 mb-2">
                    <strong>Professor & Head</strong>
                  </p>
                  <p className="text-body text-neutral-700 mb-2">
                    Department of Dairy and Poultry Science
                  </p>
                  <p className="text-body text-neutral-700">
                    Chattogram Veterinary and Animal Sciences University (CVASU)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Background */}
      <section className="py-2xl bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <GraduationCap className="w-10 h-10 text-primary-500 mr-4" />
            <h2 className="text-title-lg font-bold text-neutral-900">Educational Background & Training</h2>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white border border-neutral-200 rounded-lg p-lg hover:shadow-card-hover transition-shadow duration-base"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <div>
                    <h3 className="text-title-sm font-semibold text-neutral-900">{edu.degree}</h3>
                    <p className="text-body-lg text-primary-600 font-medium">{edu.institution}</p>
                  </div>
                  <div className="text-body text-neutral-700 mt-2 md:mt-0">
                    {edu.country} | {edu.years}
                  </div>
                </div>
                <p className="text-body text-neutral-700">
                  <strong>Focus:</strong> {edu.focus}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-primary-50 rounded-lg border-l-4 border-primary-500">
            <p className="text-body-lg text-neutral-700">
              This trajectory shows a coherent path from animal husbandry and dairy science to advanced molecular immunology 
              and food immunology, establishing the intellectual backbone for subsequent research programs in immunobiotics 
              and functional foods.
            </p>
          </div>
        </div>
      </section>

      {/* Career Progression */}
      <section className="py-2xl bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <Briefcase className="w-10 h-10 text-primary-500 mr-4" />
            <h2 className="text-title-lg font-bold text-neutral-900">Career Progression at CVASU</h2>
          </div>
          <div className="max-w-3xl">
            <div className="relative pl-8 space-y-8">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary-200"></div>
              {career.map((role, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-8 w-4 h-4 bg-primary-500 rounded-full"></div>
                  <div className="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
                    <div className="text-small text-primary-600 font-semibold mb-2">{role.year}</div>
                    <h3 className="text-title-sm font-semibold text-neutral-900 mb-2">{role.position}</h3>
                    <p className="text-body text-neutral-700">{role.department}</p>
                    <p className="text-body text-neutral-700">{role.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 p-6 bg-neutral-100 rounded-lg">
            <p className="text-body-lg text-neutral-700 leading-relaxed">
              Prof. Kober's career trajectory is anchored at CVASU, with international research engagements enriching his 
              scientific outlook and research portfolio. The 14-year progression from Lecturer to Professor demonstrates 
              sustained academic excellence and research productivity.
            </p>
          </div>
        </div>
      </section>

      {/* Book Publication */}
      <section className="py-2xl bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <BookOpen className="w-10 h-10 text-primary-500 mr-4" />
            <h2 className="text-title-lg font-bold text-neutral-900">Book Publication</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border-2 border-primary-500 rounded-lg p-xl shadow-card">
              <div className="flex items-start space-x-6">
                <Award className="w-16 h-16 text-secondary-500 flex-shrink-0" />
                <div>
                  <h3 className="text-title-md font-bold text-neutral-900 mb-4">
                    Milk and Dairy Foods: Nutrition, Processing and Healthy Aging
                  </h3>
                  <div className="space-y-2 text-body text-neutral-700">
                    <p><strong>Publisher:</strong> CRC Press (Taylor & Francis Group)</p>
                    <p><strong>Year:</strong> 2024</p>
                    <p><strong>Role:</strong> Author/Editor</p>
                  </div>
                  <p className="mt-4 text-body-lg text-neutral-700 leading-relaxed">
                    A comprehensive monograph covering milk composition, processing technologies, nutritional aspects, 
                    and the role of dairy foods in promoting healthy aging. This work synthesizes decades of research 
                    in dairy science and nutrition.
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
