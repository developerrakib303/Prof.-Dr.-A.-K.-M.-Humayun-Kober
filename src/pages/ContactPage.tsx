import { useState, FormEvent } from 'react'
import { Mail, MapPin, Globe, Phone, CheckCircle, AlertCircle } from 'lucide-react'
import { supabase } from '../lib/supabase'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    subject: '',
    message: '',
    collaboration_interest: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([formData])

      if (error) throw error

      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        institution: '',
        subject: '',
        message: '',
        collaboration_interest: false
      })
    } catch (error: any) {
      setSubmitStatus('error')
      setErrorMessage(error.message || 'Failed to submit form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const researchProfiles = [
    {
      name: 'Google Scholar',
      url: 'https://scholar.google.com',
      icon: Globe,
      description: 'Citation metrics and publications'
    },
    {
      name: 'ResearchGate',
      url: 'https://www.researchgate.net',
      icon: Globe,
      description: 'Research network and collaboration'
    },
    {
      name: 'ORCID',
      url: 'https://orcid.org',
      icon: Globe,
      description: 'Researcher identifier'
    },
    {
      name: 'Frontiers Loop',
      url: 'https://loop.frontiersin.org',
      icon: Globe,
      description: 'Publisher profile'
    }
  ]

  const collaborationAreas = [
    'Immunobiotics and Probiotic Research',
    'Bovine Mastitis Prevention',
    'Functional Foods Development',
    'Transcriptomics and Molecular Biology',
    'AMR Mitigation Strategies',
    'Dairy Science and Technology'
  ]

  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary-500 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-title-xl font-bold mb-4">Contact & Collaboration</h1>
          <p className="text-body-xl text-white text-opacity-90 max-w-3xl">
            Connect for research collaboration, academic inquiries, or professional consultation
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-2xl bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <h2 className="text-title-lg font-bold text-neutral-900 mb-6">Send a Message</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-body font-semibold text-green-900">Message sent successfully!</p>
                    <p className="text-small text-green-700">Thank you for reaching out. We'll respond as soon as possible.</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3">
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-body font-semibold text-red-900">Error submitting form</p>
                    <p className="text-small text-red-700">{errorMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-body font-medium text-neutral-900 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full h-[56px] px-4 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-body"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-body font-medium text-neutral-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-[56px] px-4 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-body"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="institution" className="block text-body font-medium text-neutral-900 mb-2">
                    Institution / Organization
                  </label>
                  <input
                    type="text"
                    id="institution"
                    value={formData.institution}
                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                    className="w-full h-[56px] px-4 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-body"
                    placeholder="Your institution or organization"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-body font-medium text-neutral-900 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full h-[56px] px-4 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-body"
                    placeholder="Brief subject of your message"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-body font-medium text-neutral-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-body resize-vertical"
                    placeholder="Your message..."
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="collaboration"
                    checked={formData.collaboration_interest}
                    onChange={(e) => setFormData({ ...formData, collaboration_interest: e.target.checked })}
                    className="mt-1 w-4 h-4 text-primary-500 border-neutral-300 rounded focus:ring-primary-500"
                  />
                  <label htmlFor="collaboration" className="text-body text-neutral-700">
                    I am interested in research collaboration opportunities
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-[56px] bg-primary-500 text-white font-semibold rounded-md hover:bg-primary-600 transition-all duration-fast hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-5">
              <div className="bg-neutral-50 rounded-lg p-xl border border-neutral-200 mb-6">
                <h3 className="text-title-sm font-semibold text-neutral-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-body font-medium text-neutral-900">Department of Dairy and Poultry Science</p>
                      <p className="text-body text-neutral-700">Chattogram Veterinary and Animal Sciences University (CVASU)</p>
                      <p className="text-body text-neutral-700">Khulshi, Chattogram-4225, Bangladesh</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-body text-neutral-700">Official correspondence through CVASU</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary-50 rounded-lg p-xl border border-primary-200">
                <h3 className="text-title-sm font-semibold text-neutral-900 mb-4">Office Hours</h3>
                <p className="text-body text-neutral-700 mb-2">
                  <strong>Academic Term:</strong> Monday - Thursday
                </p>
                <p className="text-small text-neutral-600">
                  Please use the contact form for inquiries. Response time may vary based on academic schedule and research commitments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Profiles */}
      <section className="py-2xl bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-title-lg font-bold text-neutral-900 text-center mb-12">Research Profiles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {researchProfiles.map((profile, index) => {
              const Icon = profile.icon
              return (
                <a
                  key={index}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-neutral-200 rounded-lg p-lg text-center hover:shadow-card-hover hover:-translate-y-1 hover:border-primary-500 transition-all duration-base group"
                >
                  <Icon className="w-12 h-12 text-primary-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-base" />
                  <h3 className="text-title-sm font-semibold text-neutral-900 mb-2">{profile.name}</h3>
                  <p className="text-small text-neutral-700">{profile.description}</p>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Research Collaboration Areas */}
      <section className="py-2xl bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-title-lg font-bold text-neutral-900 text-center mb-6">Research Collaboration Areas</h2>
          <p className="text-body-lg text-neutral-700 text-center max-w-3xl mx-auto mb-12">
            Prof. Kober welcomes collaboration opportunities in the following research domains
          </p>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {collaborationAreas.map((area, index) => (
              <div
                key={index}
                className="bg-neutral-50 border border-neutral-200 rounded-lg px-6 py-4 hover:bg-primary-50 hover:border-primary-500 transition-all duration-fast"
              >
                <p className="text-body text-neutral-900">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* University Information */}
      <section className="py-2xl bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-title-lg font-bold text-neutral-900 mb-6">About CVASU</h2>
            <div className="bg-white rounded-lg p-xl border border-neutral-200">
              <p className="text-body-lg text-neutral-700 leading-relaxed mb-4">
                Chattogram Veterinary and Animal Sciences University (CVASU) is dedicated to advancing veterinary and 
                animal sciences through excellence in education, research, and service. Located in Chattogram, Bangladesh, 
                CVASU emphasizes a One Health approach integrating animal health, human health, and environmental sustainability.
              </p>
              <p className="text-body-lg text-neutral-700 leading-relaxed">
                The university offers comprehensive programs including DVM, MS, and PhD degrees, with strong emphasis on 
                research innovation and international collaboration. The One Health Institute at CVASU serves as a regional 
                hub for interdisciplinary research addressing complex health challenges at the human-animal-environment interface.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
