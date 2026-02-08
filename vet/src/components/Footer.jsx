import React from 'react';
import { Link } from 'react-router';
import { FaFacebook, FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaw } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-50">
      {/* Main Footer */}
      <div className="border-t border-stone-700">
        <div className="container-custom py-16 lg:py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <FaPaw className="text-orange-500 text-2xl" />
                <span className="text-xl font-bold">The Corner Vet</span>
              </div>
              <p className="text-stone-400 text-sm leading-relaxed mb-6">
                Providing compassionate veterinary care with a personal touch.
              </p>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/thecornervet" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-orange-500 transition-colors text-xl">
                  <FaFacebook />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-6 text-white">Quick Links</h3>
              <nav className="space-y-3 text-sm">
                <Link to="/" className="text-stone-400 hover:text-orange-500 transition-colors">Home</Link>
                <Link to="/about" className="text-stone-400 hover:text-orange-500 transition-colors">About</Link>
                <Link to="/services" className="text-stone-400 hover:text-orange-500 transition-colors">Services</Link>
                <Link to="/staff" className="text-stone-400 hover:text-orange-500 transition-colors">Staff</Link>
                <Link to="/specials" className="text-stone-400 hover:text-orange-500 transition-colors">Pricing</Link>
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold text-lg mb-6 text-white">Contact</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <FaPhone className="text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-stone-400">011 706 2184</p>
                    <p className="text-stone-400">063 149 4716</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaEnvelope className="text-orange-500 mt-1 flex-shrink-0" />
                  <a href="mailto:info@thecornervet.co.za" className="text-stone-400 hover:text-orange-500 transition-colors">
                    info@thecornervet.co.za
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div>
              <h3 className="font-bold text-lg mb-6 text-white">Hours</h3>
              <div className="space-y-3 text-sm text-stone-400">
                <div>
                  <p className="font-semibold text-white">Monday - Friday</p>
                  <p>7:30 AM - 6:00 PM</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Saturday</p>
                  <p>8:00 AM - 12:00 PM</p>
                </div>
                <p className="text-xs italic pt-2">Appointments recommended</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-stone-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-stone-400">
              <p>&copy; {currentYear} The Corner Vet. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#privacy" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
                <a href="#terms" className="hover:text-orange-500 transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
