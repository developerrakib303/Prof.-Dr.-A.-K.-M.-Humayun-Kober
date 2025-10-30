import { Link } from 'react-router-dom'
import { Mail, MapPin, Globe } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-900 text-white mt-3xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Prof. Dr. A. K. M. Humayun Kober</h3>
            <p className="text-neutral-200 text-sm leading-relaxed mb-4">
              Professor and Head, Department of Dairy and Poultry Science, 
              Chattogram Veterinary and Animal Sciences University (CVASU), Bangladesh
            </p>
            <div className="flex items-start space-x-2 text-sm text-neutral-200">
              <MapPin size={16} className="mt-1 flex-shrink-0" />
              <span>Khulshi, Chattogram-4225, Bangladesh</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/profile" className="text-neutral-200 hover:text-white transition-colors duration-fast">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-neutral-200 hover:text-white transition-colors duration-fast">
                  Research Areas
                </Link>
              </li>
              <li>
                <Link to="/publications" className="text-neutral-200 hover:text-white transition-colors duration-fast">
                  Publications
                </Link>
              </li>
              <li>
                <Link to="/service-leadership" className="text-neutral-200 hover:text-white transition-colors duration-fast">
                  Service & Leadership
                </Link>
              </li>
              <li>
                <Link to="/teaching" className="text-neutral-200 hover:text-white transition-colors duration-fast">
                  Teaching & Mentorship
                </Link>
              </li>
            </ul>
          </div>

          {/* Research Profiles */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Research Profiles</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://scholar.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-200 hover:text-white transition-colors duration-fast flex items-center space-x-2"
                >
                  <Globe size={16} />
                  <span>Google Scholar</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.researchgate.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-200 hover:text-white transition-colors duration-fast flex items-center space-x-2"
                >
                  <Globe size={16} />
                  <span>ResearchGate</span>
                </a>
              </li>
              <li>
                <a
                  href="https://orcid.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-200 hover:text-white transition-colors duration-fast flex items-center space-x-2"
                >
                  <Globe size={16} />
                  <span>ORCID</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-600 mt-12 pt-8 text-center text-neutral-200 text-sm">
          <p>&copy; {currentYear} Prof. Dr. A. K. M. Humayun Kober. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
