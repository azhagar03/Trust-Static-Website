import bgImage from "../../assets/images2.png";

function Healthcare() {
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
        <h1 className="fw-bold mb-3">Healthcare Programs</h1>
        <p className="fs-5 mb-5">
          Providing accessible healthcare services and medical support.
        </p>

        <div className="row g-4">
          {/* Free Medical Camps */}
          <div className="col-md-4">
            <div className="program-card bg-white text-dark p-4 h-100">
              <h5 className="fw-bold mb-3">Free Medical Camps</h5>
              <p className="text-muted">
                We organize free medical camps to provide basic health check-ups
                and early diagnosis for people in need. These camps help identify
                health issues at an early stage and guide patients for further
                treatment. Our focus is on reaching underserved communities with
                accessible healthcare services.
              </p>
            </div>
          </div>

          {/* Medicine Support */}
          <div className="col-md-4">
            <div className="program-card bg-white text-dark p-4 h-100">
              <h5 className="fw-bold mb-3">Medicine Support</h5>
              <p className="text-muted">
                We provide essential medicines to patients who are unable to
                afford proper treatment. Support is given to individuals
                suffering from common illnesses and chronic health conditions.
                Medicines are distributed through medical camps and community
                outreach programs. This initiative ensures that patients
                continue their treatment without interruption.
              </p>
            </div>
          </div>

          {/* Awareness Programs */}
          <div className="col-md-4">
            <div className="program-card bg-white text-dark p-4 h-100">
              <h5 className="fw-bold mb-3">Awareness Programs</h5>
              <p className="text-muted">
                We conduct health awareness programs to educate communities
                about hygiene and disease prevention. Sessions include topics
                such as sanitation, nutrition, maternal health, and preventive
                care. These programs help people adopt healthier lifestyles and
                improve overall community well-being.
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

export default Healthcare;
