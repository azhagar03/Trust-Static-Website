import bgImage from "../../assets/images2.png";

function SocialWelfare() {
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
        <h1 className="fw-bold mb-3">Social Welfare</h1>
        <p className="fs-5 mb-5">
          Supporting communities through relief and welfare initiatives.
        </p>

        <div className="row g-4">
          {/* Food Distribution */}
          <div className="col-md-4">
            <div className="program-card bg-white text-dark p-4 h-100">
              <h5 className="fw-bold mb-3">Food Distribution</h5>
              <p className="text-muted">
                We provide nutritious food and daily meals to underprivileged
                families and individuals. This initiative helps reduce hunger
                and ensures that basic nutritional needs are met. Our focus is
                on supporting families facing poverty, unemployment, or crisis
                situations.
              </p>
            </div>
          </div>

          {/* Disaster Relief */}
          <div className="col-md-4">
            <div className="program-card bg-white text-dark p-4 h-100">
              <h5 className="fw-bold mb-3">Disaster Relief</h5>
              <p className="text-muted">
                We offer emergency support during natural disasters such as
                floods, cyclones, and other crises. Relief efforts include food
                supplies, essential items, and immediate assistance to affected
                families. Our aim is to provide timely help and restore stability
                during difficult times.
              </p>
            </div>
          </div>

          {/* Community Support */}
          <div className="col-md-4">
            <div className="program-card bg-white text-dark p-4 h-100">
              <h5 className="fw-bold mb-3">Community Support</h5>
              <p className="text-muted">
                We work closely with marginalized communities to address their
                basic needs and challenges. Support includes assistance for the
                elderly, children, and vulnerable individuals. Through
                community-based initiatives, we promote dignity, care, and
                long-term well-being.
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

export default SocialWelfare;
