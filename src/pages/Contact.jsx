import React, { useState } from "react";
import bgImage from "../assets/images2.png";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    feedback: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your feedback! We'll get back to you soon.");
    setFormData({ name: "", mobile: "", feedback: "" });
  };

  return (
    <section
      id="contact"
      className="position-relative"
      style={{
        minHeight: "100vh",
        paddingTop: "100px",
        paddingBottom: "80px",
        backgroundImage: `linear-gradient(
          rgba(0, 80, 0, 0.65),
          rgba(0, 80, 0, 0.65)
        ), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Decorative overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 40%, rgba(255,255,255,0.12) 0%, transparent 60%),
            radial-gradient(circle at 80% 80%, rgba(255,255,255,0.12) 0%, transparent 60%)
          `,
          zIndex: 1,
        }}
      ></div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        {/* ================= HEADER ================= */}
        <div className="text-center mb-5">
          {/* 🔥 spacing reduced */}
          <h2
            className="display-5 fw-bold mb-2 mt-5"
            style={{
              color: "#ffffff",
              textShadow: "0 3px 10px rgba(0,0,0,0.6)",
            }}
          >
            Get In Touch
          </h2>

          {/* 🔥 underline spacing adjusted */}
          <div
            className="mx-auto mb-4"
            style={{
              width: "80px",
              height: "4px",
              background: "linear-gradient(to right, #059669, #fbbf24)",
            }}
          ></div>

          <p className="text-white fs-5">
            We'd love to hear from you. Reach out to us for any queries or support.
          </p>
        </div>

        {/* ================= CONTACT CARDS ================= */}
        <div className="row g-4 mb-5 justify-content-center">
          {[
            { icon: "📞", title: "Phone", info: "87548 80091", color: "#3b82f6" },
            {
              icon: "📧",
              title: "Email",
              info: "emgsrtrust@gmail.com",
              color: "#059669",
            },
            {
              icon: "📍",
              title: "Address",
              info:
                "No.61, Gokulam Illam, D.R.O Colony Road, K. Pudur, Madurai – 625007",
              color: "#f59e0b",
            },
          ].map((contact, idx) => (
            <div key={idx} className="col-md-4">
              <div
                className="h-100 bg-white rounded-4 shadow-lg p-4 text-center position-relative overflow-hidden"
                style={{ transition: "all 0.3s ease" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-8px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <div
                  className="position-absolute top-0 start-0 w-100"
                  style={{ height: "5px", background: contact.color }}
                ></div>
                <div className="fs-1 mb-3">{contact.icon}</div>
                <h5 className="fw-bold mb-2" style={{ color: contact.color }}>
                  {contact.title}
                </h5>
                <p className="text-muted mb-0">{contact.info}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ================= FEEDBACK FORM ================= */}
        <div className="row justify-content-center">
          <div className="col-lg-15 col-xl-15">
            <div
              className="bg-white rounded-4 shadow-lg"
              style={{ padding: "30px 40px" }}
            >
              <h3 className="fw-bold text-success text-center mb-3">
                Share Your Feedback
              </h3>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-semibold text-dark">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{ borderRadius: "10px" }}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold text-dark">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    className="form-control"
                    placeholder="Enter your mobile number"
                    value={formData.mobile}
                    onChange={handleChange}
                    maxLength="10"
                    required
                    style={{ borderRadius: "10px" }}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold text-dark">
                    Your Message
                  </label>
                  <textarea
                    name="feedback"
                    className="form-control"
                    rows="3"
                    placeholder="Share your thoughts, suggestions, or queries..."
                    value={formData.feedback}
                    onChange={handleChange}
                    required
                    style={{ borderRadius: "10px" }}
                  ></textarea>
                </div>

                <div className="text-center mt-4">
                  <button
                    className="btn btn-success px-5 py-2 fw-semibold"
                    type="submit"
                    style={{ borderRadius: "10px" }}
                  >
                    Submit Feedback
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
