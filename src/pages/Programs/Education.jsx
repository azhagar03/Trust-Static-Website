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
        <h1 className="fw-bold mb-3">Education Programs</h1>
        <p className="fs-5 mb-5">
          Empowering children through quality education, learning resources,
          and academic support.
        </p>

        <div className="row g-4">
          {/* School Support */}
          <div className="col-md-4">
            <div className="program-card bg-white text-dark p-4 h-100">
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

      {/* STYLE 2 – LEFT BORDER ACCENT */}
      <style>
        {`
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
        `}
      </style>
    </section>
  );
}

export default Education;
