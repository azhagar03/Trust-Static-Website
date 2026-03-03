import bgImage from "../../assets/images2.png";

function Education() {
  return (
    <section
      style={{
        minHeight: "100vh",
        paddingTop: "120px",
        paddingBottom: "80px",
        backgroundImage: `linear-gradient(
          rgba(0,80,0,0.65),
          rgba(0,80,0,0.65)
        ), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container text-white text-center">

        {/* ── HEADER ── */}
        <h1 className="fw-bold mb-3">Education Programs</h1>
        <p className="fs-5 mb-5">
          Empowering children through quality education, learning resources,
          and academic support.
        </p>

        {/* ══════════════════════════════════════════
            FEATURED IMAGE SECTION — gallery-14
        ══════════════════════════════════════════ */}
        <div className="featured-edu-card mb-5">
          <div className="featured-edu-inner">

            {/* LEFT — Image */}
            <div className="featured-edu-img-wrap">
              <img
                src="/gallery/gallery-14.jpeg"
                alt="Students being educated"
                className="featured-edu-img"
              />
              {/* Floating badge */}
              <div className="edu-badge">
                <span className="edu-badge-icon">🎓</span>
                <span>Shaping Futures</span>
              </div>
            </div>

            {/* RIGHT — Text */}
            <div className="featured-edu-text">
              <div className="edu-tag">Our Mission</div>
              <h2 className="featured-edu-title">
                Every Child Deserves a Chance to Learn
              </h2>
              <p className="featured-edu-desc">
                Through our education initiatives, we work tirelessly to ensure
                that every child — regardless of background or circumstance —
                has access to the tools, support, and opportunities they need
                to succeed academically and grow into confident, capable
                individuals.
              </p>
              <div className="edu-stats-row">
                <div className="edu-stat">
                  <span className="edu-stat-num">500+</span>
                  <span className="edu-stat-label">Students Supported</span>
                </div>
                <div className="edu-stat-divider" />
                <div className="edu-stat">
                  <span className="edu-stat-num">12+</span>
                  <span className="edu-stat-label">Schools Reached</span>
                </div>
                <div className="edu-stat-divider" />
                <div className="edu-stat">
                  <span className="edu-stat-num">95%</span>
                  <span className="edu-stat-label">Retention Rate</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ══════════════════════════════
            PROGRAM CARDS
        ══════════════════════════════ */}
        <div className="row g-4">
          {/* School Support */}
          <div className="col-md-4">
            <div className="program-card bg-white text-dark p-4 h-100">
              <div className="program-icon">📚</div>
              <h5 className="fw-bold mb-3">School Support</h5>
              <p className="text-muted">
                We help children from underprivileged families continue their
                education by providing essential school support. This includes
                books, uniforms, stationery, and financial assistance for school
                fees. Our goal is to ensure that no child drops out of school due
                to lack of basic resources.
              </p>
            </div>
          </div>

          {/* Digital Learning */}
          <div className="col-md-4">
            <div className="program-card bg-white text-dark p-4 h-100">
              <div className="program-icon">💻</div>
              <h5 className="fw-bold mb-3">Digital Learning</h5>
              <p className="text-muted">
                We promote digital learning by introducing smart classrooms and
                access to digital learning tools. Students are supported with
                online educational resources that enhance understanding and
                skills. This initiative helps children adapt to modern learning
                methods and improve academic performance.
              </p>
            </div>
          </div>

          {/* Skill Development */}
          <div className="col-md-4">
            <div className="program-card bg-white text-dark p-4 h-100">
              <div className="program-icon">🌱</div>
              <h5 className="fw-bold mb-3">Skill Development</h5>
              <p className="text-muted">
                We support students through skill development programs and
                career guidance initiatives. Basic life skills, communication
                skills, and vocational awareness are provided to prepare them
                for the future. These programs help students build confidence
                and become self-reliant individuals.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* ── FEATURED CARD ── */
        .featured-edu-card {
          background: rgba(0, 0, 0, 0.45);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.4);
        }

        .featured-edu-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 380px;
        }

        /* LEFT — Image */
        .featured-edu-img-wrap {
          position: relative;
          overflow: hidden;
        }

        .featured-edu-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
          transition: transform 0.6s ease;
        }

        .featured-edu-card:hover .featured-edu-img {
          transform: scale(1.05);
        }

        /* Floating badge on image */
        .edu-badge {
          position: absolute;
          top: 20px;
          left: 20px;
          background: linear-gradient(to right, #22c55e, #facc15);
          color: #000;
          font-weight: 700;
          font-size: 0.78rem;
          letter-spacing: 1px;
          padding: 8px 16px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        }

        /* RIGHT — Text */
        .featured-edu-text {
          padding: 40px 36px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: left;
        }

        .edu-tag {
          display: inline-block;
          background: rgba(250, 204, 21, 0.15);
          color: #facc15;
          border: 1px solid rgba(250, 204, 21, 0.4);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 5px 14px;
          border-radius: 999px;
          margin-bottom: 14px;
          width: fit-content;
        }

        .featured-edu-title {
          color: #fff;
          font-weight: 800;
          font-size: 1.5rem;
          line-height: 1.35;
          margin-bottom: 14px;
        }

        .featured-edu-desc {
          color: #cbd5e1;
          font-size: 0.9rem;
          line-height: 1.75;
          margin-bottom: 28px;
        }

        /* Stats row */
        .edu-stats-row {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .edu-stat {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .edu-stat-num {
          color: #facc15;
          font-size: 1.4rem;
          font-weight: 800;
          line-height: 1;
        }

        .edu-stat-label {
          color: #94a3b8;
          font-size: 0.72rem;
          letter-spacing: 0.5px;
        }

        .edu-stat-divider {
          width: 1px;
          height: 36px;
          background: rgba(255,255,255,0.2);
        }

        /* ── PROGRAM CARDS ── */
        .program-card {
          border-radius: 16px;
          border-left: 6px solid #198754;
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
        }

        .program-card:hover {
          transform: translateY(-8px);
          border-left-color: #facc15;
          box-shadow: 0 18px 40px rgba(0,0,0,0.18);
        }

        .program-icon {
          font-size: 2rem;
          margin-bottom: 12px;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 768px) {
          .featured-edu-inner {
            grid-template-columns: 1fr;
          }
          .featured-edu-img-wrap {
            height: 260px;
          }
          .featured-edu-text {
            padding: 28px 24px;
          }
          .featured-edu-title {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </section>
  );
}

export default Education;