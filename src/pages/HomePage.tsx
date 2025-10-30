import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Microscope, Shield, Beaker, Network, FileText, Award, Users } from 'lucide-react'

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroSlides = [
    {
      image: '/images/professional_male_professor_academic_portrait.jpg',
      title: 'Leading Research in Immunobiotics',
      subtitle: 'Advancing molecular science for livestock health and functional foods'
    },
    {
      image: '/images/scientist_lab_TOC_analyzer_academic_setting.jpg',
      title: 'Innovative Dairy Science',
      subtitle: 'Professor & Head, Department of Dairy and Poultry Science, CVASU'
    },
    {
      image: '/images/lab_research_0.jpg',
      title: 'International Collaboration',
      subtitle: 'JSPS Fellow at Tohoku University, Visiting Researcher at NMBU'
    },
    {
      image: '/images/lab_research_3.jpg',
      title: 'Molecular Biology Excellence',
      subtitle: 'Exploring immunomodulatory pathways in livestock and food systems'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)

  const metrics = [
    { value: '684', label: 'Total Citations', icon: FileText },
    { value: '13', label: 'h-index', icon: Award },
    { value: '20', label: 'i10-index', icon: Award },
    { value: '50+', label: 'Publications', icon: FileText }
  ]

  const researchPillars = [
    {
      icon: Microscope,
      title: 'Immunobiotics',
      description: 'Mechanistic studies of probiotic bacteria activating toll-like receptors and modulating innate immunity'
    },
    {
      icon: Shield,
      title: 'Bovine Mastitis Control',
      description: 'Preventive strategies using immunomodulatory bacteria against major mastitis pathogens'
    },
    {
      icon: Beaker,
      title: 'Functional Foods',
      description: 'Development of feed additives and dairy products with enhanced immunoregulatory properties'
    },
    {
      icon: Network,
      title: 'Molecular Biology',
      description: 'Transcriptome analysis of host-microbe interactions and adipocyte immunity'
    }
  ]

  return (
    <div>
      {/* Hero Section with Slider */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-slow ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <div className="relative h-full flex items-center justify-center text-center px-4">
              <div className="max-w-4xl">
                <h1 className="text-hero-mobile md:text-hero text-white font-bold mb-6 animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-body-xl md:text-2xl text-white text-opacity-90 mb-8 animate-slide-up">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/research"
                    className="bg-primary-500 text-white px-8 py-4 rounded-md hover:bg-primary-600 transition-all duration-fast hover:scale-105"
                  >
                    Explore Research
                  </Link>
                  <Link
                    to="/contact"
                    className="border-2 border-white text-white px-8 py-4 rounded-md hover:bg-white hover:bg-opacity-10 transition-all duration-fast"
                  >
                    Collaborate
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-fast"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-fast"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>

        {/* Slider Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-fast ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white bg-opacity-50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Academic Metrics Dashboard */}
      <section className="py-2xl bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-title-lg font-bold text-neutral-900 mb-4">Academic Impact</h2>
            <p className="text-body-lg text-neutral-700">Research excellence measured through citations and publications</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => {
              const Icon = metric.icon
              return (
                <div
                  key={index}
                  className="bg-white border border-neutral-200 rounded-lg p-lg text-center hover:shadow-card-hover hover:-translate-y-1 transition-all duration-base"
                >
                  <Icon className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                  <div className="text-6xl font-bold text-primary-500 mb-2">{metric.value}</div>
                  <div className="text-body text-neutral-700">{metric.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Research Pillars */}
      <section className="py-2xl bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-title-lg font-bold text-neutral-900 mb-4">Core Research Areas</h2>
            <p className="text-body-lg text-neutral-700 max-w-3xl mx-auto">
              Advancing immunobiotic science through molecular approaches to livestock health and functional foods
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchPillars.map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <div
                  key={index}
                  className="bg-white border border-neutral-200 rounded-lg p-xl text-center hover:shadow-card-hover hover:-translate-y-1 hover:border-primary-500 transition-all duration-base group"
                >
                  <Icon className="w-12 h-12 text-secondary-500 mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-base" />
                  <h3 className="text-title-sm font-semibold text-neutral-900 mb-4">{pillar.title}</h3>
                  <p className="text-body text-neutral-700 leading-relaxed">{pillar.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quick Introduction */}
      <section className="py-2xl bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-title-lg font-bold text-neutral-900 mb-6">
                Professor of Dairy and Poultry Science
              </h2>
              <p className="text-body-lg text-neutral-700 leading-loose mb-6">
                Prof. Dr. A. K. M. Humayun Kober serves as Professor and Head of the Department of Dairy and Poultry Science 
                at Chattogram Veterinary and Animal Sciences University (CVASU), Bangladesh. His research expertise centers 
                on molecular and cellular immunology applied to dairy science, with a distinguished focus on immunobiotics, 
                probiotic bacteria, and functional foods.
              </p>
              <p className="text-body-lg text-neutral-700 leading-loose mb-6">
                His international training includes a Ph.D. in Animal Science from Tokyo University of Agriculture and 
                Technology (TUAT), JSPS Postdoctoral and Invitational Research Fellowships at Tohoku University, and 
                visiting researcher positions at the Norwegian University of Life Sciences (NMBU).
              </p>
              <Link
                to="/profile"
                className="inline-block bg-primary-500 text-white px-8 py-3 rounded-md hover:bg-primary-600 transition-all duration-fast hover:scale-105"
              >
                View Full Profile
              </Link>
            </div>
            <div className="lg:col-span-5">
              <img
                src="/images/conceptual_immunobiotics_probiotics_livestock_immunology_diagram.png"
                alt="Immunobiotics conceptual diagram"
                className="rounded-lg shadow-card w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-2xl bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-title-lg font-bold text-neutral-900 mb-4">Key Achievements</h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white border-l-4 border-secondary-500 rounded-lg p-lg shadow-card hover:shadow-card-hover transition-shadow duration-base">
              <div className="flex items-start space-x-4">
                <Award className="w-8 h-8 text-secondary-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-title-sm font-semibold text-neutral-900 mb-2">
                    Best Researcher Award 2019-2020
                  </h3>
                  <p className="text-body text-neutral-700">
                    Recognized by CVASU for outstanding research contributions in dairy science and immunobiotics
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border-l-4 border-secondary-500 rounded-lg p-lg shadow-card hover:shadow-card-hover transition-shadow duration-base">
              <div className="flex items-start space-x-4">
                <FileText className="w-8 h-8 text-secondary-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-title-sm font-semibold text-neutral-900 mb-2">
                    Book Publication 2024
                  </h3>
                  <p className="text-body text-neutral-700">
                    "Milk and Dairy Foods: Nutrition, Processing and Healthy Aging" published by CRC Press
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border-l-4 border-secondary-500 rounded-lg p-lg shadow-card hover:shadow-card-hover transition-shadow duration-base">
              <div className="flex items-start space-x-4">
                <Users className="w-8 h-8 text-secondary-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-title-sm font-semibold text-neutral-900 mb-2">
                    50+ Peer-Reviewed Publications
                  </h3>
                  <p className="text-body text-neutral-700">
                    Extensive publication portfolio across immunology, microbiology, and food science journals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-2xl bg-primary-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-title-lg font-bold text-white mb-6">
            Interested in Research Collaboration?
          </h2>
          <p className="text-body-xl text-white text-opacity-90 max-w-2xl mx-auto mb-8">
            Explore opportunities for collaborative research in immunobiotics, functional foods, 
            and molecular approaches to livestock health
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary-500 px-8 py-4 rounded-md hover:bg-neutral-100 transition-all duration-fast hover:scale-105 font-semibold"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
