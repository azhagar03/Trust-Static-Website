import React from "react";
import { useNavigate } from "react-router-dom";
import {
  GraduationCap,
  Stethoscope,
  Users,
  HeartHandshake,
} from "lucide-react";

// ✅ BACKGROUND IMAGE IMPORT
import bgImage from "../assets/images2.png";

function Programs() {
  const navigate = useNavigate();

  const programs = [
    {
      title: "Education",
      desc: "Providing quality education, scholarships, and learning support for children.",
      icon: <GraduationCap size={42} />,
      path: "/programs/education",
    },
    {
      title: "Healthcare",
      desc: "Medical camps, health awareness, and support for vulnerable communities.",
      icon: <Stethoscope size={42} />,
      path: "/programs/healthcare",
    },
    {
      title: "Women Empowerment",
      desc: "Skill development and self-reliance programs for women.",
      icon: <Users size={42} />,
      path: "/programs/women-empowerment",
    },
    {
      title: "Social Welfare",
      desc: "Community development and social support initiatives.",
      icon: <HeartHandshake size={42} />,
      path: "/programs/social-welfare",
    },
  ];

  return (
    <section
      style={{
        marginTop: "90px",
        minHeight: "100vh",

        /* ✅ BACKGROUND IMAGE + GREEN OVERLAY */
        backgroundImage: `
          linear-gradient(
            rgba(0, 80, 0, 0.75),
            rgba(0, 80, 0, 0.75)
          ),
          url(${bgImage})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container py-5">

        {/* ✅ TITLE – SAME SIZE AS ABOUT US */}
        <h2 className="text-center fw-bold text-white display-5 mb-2">
          Our Programs
        </h2>

        {/* GREEN + YELLOW LINE (SPACE REDUCED) */}
        <div
          className="mx-auto mb-4"
          style={{
            width: "90px",
            height: "4px",
            background: "linear-gradient(to right, #16a34a, #facc15)",
            borderRadius: "2px",
          }}
        ></div>

        {/* CARDS */}
        <div className="row g-4">
          {programs.map((item, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div
                className="card h-100 text-center p-4 program-card"
                onClick={() => navigate(item.path)}
                style={{ cursor: "pointer" }}
              >
                <div className="mb-3 text-success">{item.icon}</div>
                <h5 className="fw-bold mb-2">{item.title}</h5>
                <p className="text-muted small">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* LOCAL STYLE */}
        <style>
          {`
            .program-card {
              border: none;
              border-radius: 18px;
              background: #ffffff;
              box-shadow: 0 12px 28px rgba(0,0,0,0.08);
              transition: all 0.3s ease;
            }

            .program-card:hover {
              transform: translateY(-10px);
              box-shadow: 0 20px 45px rgba(22,163,74,0.25);
            }
          `}
        </style>

      </div>
    </section>
  );
}

export default Programs;
