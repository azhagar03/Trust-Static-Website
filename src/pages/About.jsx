import bgImage from "../assets/images2.png";
import aboutImg from "../assets/images1.png";
import partnersImg from "../assets/partners.png";
import legalImg from "../assets/legal.png";

/* ===== PARTNER LOGOS ===== */
import gssLogo from "../assets/GSS.png";
import meenakshiLogo from "../assets/MMHRC.png";
import rajajiLogo from "../assets/Rajaji_logo.png";
import starLogo from "../assets/3star.png";
import fsLogo from "../assets/FS.png";

import { Lightbulb, Award, Target } from "lucide-react";

function About() {
  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        padding: "80px 0",
        backgroundImage: `linear-gradient(
          rgba(0, 80, 0, 0.65),
          rgba(0, 80, 0, 0.65)
        ), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">

        {/* ================= HEADER ================= */}
        <div className="text-center mb-5">
          <h2 className="display-5 mt-5 fw-bold text-white">About Us</h2>
          <div
            className="mx-auto"
            style={{
              width: "80px",
              height: "4px",
              background: "linear-gradient(to right, #059669, #fbbf24)",
            }}
          />
        </div>

        {/* ================= OUR STORY ================= */}
        <div className="row justify-content-center mb-5">
          <div className="col-12">
            <div className="bg-white rounded-4 shadow-lg p-5">
              <div className="row align-items-center">
                <div className="col-lg-4 text-center mb-4 mb-lg-0">
                  <img
                    src={aboutImg}
                    alt="Founder"
                    className="rounded-4 shadow"
                    style={{
                      width: "220px",
                      height: "280px",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <div className="col-lg-8">
                  <h3 className="fw-bold text-success mb-3">Our Story</h3>
                  <p className="text-muted">
                    <strong>EMGSR Charitable Trust</strong> was founded by Mr. Radha Krishnan, a committed social activist with a deep passion for community service. For the past seven years, he has been actively involved in social welfare initiatives, focusing on education, healthcare, women empowerment, and support for underprivileged communities.
                    With a vision to create sustainable and long-lasting social impact, he established the Charitable Trust to address grassroots challenges and uplift marginalized sections of society. Guided by compassion, integrity, and a strong sense of responsibility, the Trust continues to serve society through meaningful programs that promote dignity, equality, and self-reliance.
                  </p>
                  <p className="text-muted">
                    Our mission is to uplift underprivileged communities through
                    sustainable and impactful initiatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= VISION / MISSION / VALUES ================= */}
        <div className="row g-4 mb-5">
          {[
            {
              icon: <Target size={48} />,
              title: "Our Vision",
              content: [
                "To create a compassionate and inclusive society for all.",
                "Where every individual has equal access to opportunities.",
                "Ensuring quality education for children and youth.",
                "Promoting accessible and affordable healthcare.",
              ],
              gradient: "linear-gradient(135deg, #2563eb, #3b82f6)",
            },
            {
              icon: <Lightbulb size={48} />,
              title: "Our Mission",
              content: [
                "To uplift underprivileged communities through meaningful action.",
                "Providing education and skill development opportunities.",
                "Supporting healthcare initiatives for improved well-being.",
                "Empowering women and marginalized groups.",
              ],
              gradient: "linear-gradient(135deg, #047857, #059669)",
            },
            {
              icon: <Award size={48} />,
              title: "Our Values",
              content: [
                "Integrity in all actions and decisions.",
                "Compassion towards every individual.",
                "Equality and respect for all communities.",
                "Transparency in operations and reporting.",
                "Accountability for commitments made.",
                "Dedication to lasting social impact.",
              ],
              gradient: "linear-gradient(135deg, #d97706, #f59e0b)",
            },
          ].map((item, i) => (
            <div key={i} className="col-lg-4">
              <div
                className="rounded-4 shadow-lg h-100"
                style={{ background: item.gradient }}
              >
                <div className="p-4 text-white">
                  {item.icon}
                  <h4 className="fw-bold mt-3">{item.title}</h4>

                  {item.content.map((line, idx) => (
                    <p key={idx} className="mb-1">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= OUR PARTNERS ================= */}
        <div className="row justify-content-center mb-5">
          <div className="col-12">
            <div className="partners-glass-card rounded-4 p-5 text-center">
              <h3 className="fw-bold text-success mb-4">Our Partners</h3>

              <div className="partners-logos">
                <a href="https://www.gatewaysoftwaresolutions.com/" target="_blank" rel="noopener noreferrer" data-name="Gateway Software Solutions">
                  <img src={gssLogo} alt="Gateway Software Solutions" />
                </a>

                <a href="https://mmhrc.in/" target="_blank" rel="noopener noreferrer" data-name="Meenakshi Mission Hospital">
                  <img src={meenakshiLogo} alt="Meenakshi Mission Hospital" />
                </a>

                <a href="https://www.tn.gov.in" target="_blank" rel="noopener noreferrer" data-name="Rajaji Government Hospital">
                  <img src={rajajiLogo} alt="Rajaji Government Hospital" />
                </a>

                <a href="#" data-name="3 Star Entertainment PTE. LTD.">
                  <img src={starLogo} alt="3 Star Entertainment" />
                </a>

                <a href="#" data-name="Fortune Solutions PTE. LTD.">
                  <img src={fsLogo} alt="Fortune Solutions" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ================= LEGAL INFORMATION ================= */}
        <div className="row justify-content-center mb-5">
          <div className="col-12">
            <div className="partners-glass-card rounded-4 p-5">
              <div className="row align-items-center">
                <div className="col-lg-4 text-center mb-4 mb-lg-0">
                  <img src={legalImg} alt="Legal Information" className="img-fluid" style={{ maxWidth: "240px" }} />
                </div>

                <div className="col-lg-8">
                  <h3 className="fw-bold text-success mb-3">
                    EMGSR Charitable Trust
                  </h3>

                  <ul className="text-muted fs-5">
                    <li><strong>Date of Registration:</strong> 05/11/2025</li>
                    <li><strong>Registered As:</strong> Charitable Trust</li>
                    <li><strong>Registered Under:</strong> Indian Public Trust Act</li>
                    <li><strong>Registration Number:</strong> xx/xxxx</li>
                    <li><strong>Place of Registration:</strong> Madurai, Tamil Nadu</li>
                    <li><strong>PAN:</strong> AABTN1152H</li>
                    <li><strong>DARPAN ID:</strong> TN/2023/0400817</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ================= STYLES ================= */}
      <style>{`
        .partners-glass-card {
          background: rgba(255,255,255,0.65);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.35);
          box-shadow: 0 12px 30px rgba(0,0,0,0.15);
        }

        .partners-logos {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 50px;
          justify-items: center;
          align-items: center;
          margin-top: 30px;
        }

        .partners-logos img {
          width: 150px;
          max-height: 80px;
          object-fit: contain;
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

export default About;
