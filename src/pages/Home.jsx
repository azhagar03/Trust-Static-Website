import { Link } from "react-router-dom";
import bgImage from "../assets/images2.png";
import { Heart, GraduationCap, Stethoscope, Users, Lightbulb, Award, Globe } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


export default function Home() {

  useEffect(() => {
  AOS.init({
    duration: 1000,  // Animation duration
    once: true,      // Run animation once
  });
}, []);

  return (
    <section
      id="home"
      className="position-relative"
      style={{
        minHeight: "100vh",
        paddingTop: "100px",
        paddingBottom: "80px",
        backgroundImage: `linear-gradient(rgba(0, 80, 0, 0.65), rgba(0, 80, 0, 0.65)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Soft glowing radial effects */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 40%, rgba(255,255,255,0.12) 0%, transparent 60%),
                           radial-gradient(circle at 80% 80%, rgba(255,255,255,0.12) 0%, transparent 60%)`,
          zIndex: 1,
        }}
      ></div>

      <div className="container position-relative mt-4" style={{ zIndex: 2 }}>
        {/* HERO SECTION */}
        <div className="text-center text-white mb-5">
          <Heart size={65} className="text-warning mb-4"  data-aos="zoom-in"
  data-aos-duration="3000"/>

          <h1 className="display-3 fw-bold mb-3">EMGSR Charitable Trust</h1>
          <p className="fs-4 fw-semibold text-warning mb-1">Transforming Lives Through Compassion</p>
          <p className="fs-5 text-white-50">Education • Health • Women & Child Development • Social Work</p>

          {/* Buttons */}
          <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
            <button className="btn btn-warning btn-lg px-4 fw-semibold shadow"><Link className="text-decoration-none text-black" to="/contact">Join Our Mission</Link></button>
            <button className="btn btn-outline-light btn-lg px-4" ><Link className="text-decoration-none text-black" to="/about">Learn More</Link></button>
          </div>
        </div>

        {/* STATS SECTION */}
        <div className="row text-white text-center g-4 my-5">
          {[{
            num: "10,000+",
            label: "Lives Impacted",
            icon: <Users size={32} />,
          }, {
            num: "50+",
            label: "Programs",
            icon: <Award size={32} />,
          }, {
            num: "25+",
            label: "Communities",
            icon: <Globe size={32} />,
          }, {
            num: "100%",
            label: "Dedication",
            icon: <Heart size={32} />,
          }].map((stat, i) => (
            <div key={i} className="col-6 col-md-3">
              <div className="p-3 rounded-4 bg-white bg-opacity-10 backdrop-blur shadow-sm">
                <div className="mb-2">{stat.icon}</div>
                <h3 className="fw-bold mb-1">{stat.num}</h3>
                <p className="text-white-50 mb-0">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* FEATURES SECTION */}
        <div className="row g-4 mt-2">
          {[{
            icon: <GraduationCap size={42} />, title: "Education", color: "#3b82f6",
            desc: "Scholarships, digital learning, school development and career guidance for rural students.",
          }, {
            icon: <Stethoscope size={42} />, title: "Health", color: "#ef4444",
            desc: "Free medical camps, maternal care, vaccination drives and health awareness initiatives.",
          }, {
            icon: <Users size={42} />, title: "Women & Child Development", color: "#ec4899",
            desc: "Vocational training, entrepreneurship support, nutrition and safe learning spaces.",
          }, {
            icon: <Lightbulb size={42} />, title: "Social Work", color: "#f59e0b",
            desc: "Environment conservation, disaster relief, elderly care and rural development programs.",
          }].map((f, i) => (
            <div className="col-md-6 col-lg-3" key={i}>
              <div
                className="p-4 h-100 bg-white rounded-4 shadow-lg position-relative overflow-hidden"
                style={{ transition: "0.3s", cursor: "pointer" }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-10px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                <div
                  className="position-absolute top-0 start-0 w-100 h-100 opacity-10"
                  style={{ background: `linear-gradient(135deg, ${f.color}, transparent)` }}
                ></div>

                <div className="position-relative">
                  <div className="mb-3" style={{ color: f.color }}>{f.icon}</div>
                  <h5 className="fw-bold mb-2" style={{ color: f.color }}>{f.title}</h5>
                  <p className="text-muted mb-0">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA BOX */}
        <div className="text-center mt-5 pt-4">
          <div className="bg-white bg-opacity-10 backdrop-blur rounded-4 p-5 border border-white border-opacity-25">
            <h3 className="text-white fw-bold mb-3">Ready to Make a Difference?</h3>
            <p className="text-white-50 mb-4">Join us in creating a better tomorrow for thousands of families.</p>
            <button className="btn btn-warning btn-lg px-5 fw-semibold shadow"><Link to="/contact" className="text-decoration-none text-black">Get Involved Today</Link></button>
          </div>
        </div>
      </div>
    </section>
  );
}