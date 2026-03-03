
import { Heart, GraduationCap, Stethoscope, Users, Lightbulb, Award, Globe, Target, Facebook, Twitter, Instagram, Linkedin, ArrowRight, MapPin, Phone, Mail } from 'lucide-react';

function Footer() {
  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact Us', path: '/contact' }
  ];

  const programs = [
    { label: 'Education Support', path: '/programs/education' },
    { label: 'Healthcare Services', path: '/programs/healthcare' },
    { label: 'Women Empowerment', path: '/programs/women' },
    { label: 'Child Development', path: '/programs/child' },
    { label: 'Community Development', path: '/programs/community' }
  ];

  return (
    <footer className="text-white" style={{ background: 'linear-gradient(135deg, #065e3a 0%, #047857 100%)' }}>
      {/* Main Footer Content */}
      <div className="container py-5">
        <div className="row g-4">
          {/* About Section */}
          <div className="col-lg-4 col-md-6">
            <div className="mb-4">
              <div className="d-flex align-items-center mb-3">
                <Heart size={40} className="text-warning me-2" />
                <div>
                  <h5 className="mb-0 fw-bold">EMGSR Trust</h5>
                  <small className="text-warning">Charitable Trust</small>
                </div>
              </div>
              <p className="text-white-50 mb-4" style={{ lineHeight: '1.7' }}>
                Dedicated to improving lives through education, healthcare, women empowerment, and community development initiatives.
              </p>
              <div className="d-flex gap-3">
                {[
                  { icon: <Facebook size={20} />, link: '#' },
                  { icon: <Twitter size={20} />, link: '#' },
                  { icon: <Instagram size={20} />, link: '#' },
                  { icon: <Linkedin size={20} />, link: '#' }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    className="d-flex align-items-center justify-content-center text-white text-decoration-none rounded-circle"
                    style={{
                      width: '40px',
                      height: '40px',
                      background: 'rgba(255,255,255,0.1)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#fbbf24';
                      e.currentTarget.style.transform = 'translateY(-3px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              {quickLinks.map((link, idx) => (
                <li key={idx} className="mb-2">
                  <a
                    href={link.path}
                    className="text-white-50 text-decoration-none d-flex align-items-center"
                    style={{ transition: 'all 0.3s ease' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#fbbf24';
                      e.currentTarget.style.paddingLeft = '5px';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
                      e.currentTarget.style.paddingLeft = '0';
                    }}
                  >
                    <ArrowRight size={14} className="me-2" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

       

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-4">Contact Us</h5>
            <ul className="list-unstyled">
              <li className="mb-3 d-flex align-items-start">
                <MapPin size={20} className="text-warning me-2 flex-shrink-0 mt-1" />
                <span className="text-white-50" style={{ lineHeight: '1.6' }}>
                  No.61, Gokulam Illam,<br />
                  D.R.O Colony Road,<br />
                  K. Pudur, Madurai – 625007
                </span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <Phone size={20} className="text-warning me-2" />
                <a href="tel:8754880091" className="text-white-50 text-decoration-none">
                  87548 80091
                </a>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <Mail size={20} className="text-warning me-2" />
                <a href="mailto:emgsrtrust@gmail.com" className="text-white-50 text-decoration-none">
                  emgsrtrust@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

   
      {/* Bottom Bar */}
      <div className="border-top border-white border-opacity-10">
        <div className="container py-3">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
              <p className="mb-0 text-white-50 small">
                © 2024 EMGSR Charitable Trust. All Rights Reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="d-flex justify-content-center justify-content-md-end gap-3">
                <a href="/privacy" className="text-white-50 text-decoration-none small hover-warning">
                  Privacy Policy
                </a>
                <span className="text-white-50">|</span>
                <a href="/terms" className="text-white-50 text-decoration-none small hover-warning">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hover-warning:hover {
          color: #fbbf24 !important;
        }
      `}</style>
    </footer>
  );
}
export default Footer;