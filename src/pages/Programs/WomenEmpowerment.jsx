import bgImage from "../../assets/images2.png";

function WomenEmpowerment() {
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
        <h1 className="fw-bold mb-3">Women Empowerment</h1>
        <p className="fs-5 mb-5">
          Enabling women through skills, leadership, and economic support.
        </p>

        <div className="row g-4">
          {/* Skill Training */}
          <div className="col-md-4">
            <div className="program-card bg-white text-dark p-4 h-100">
              <h5 className="fw-bold mb-3">Skill Training</h5>
              <p className="text-muted">
                We provide skill training programs to help women develop
                practical and income-generating skills. Training includes
                tailoring, handicrafts, small-scale production, and basic
                entrepreneurship. These skills enable women to earn a stable
                income and support their families with confidence.
              </p>
            </div>
          </div>

          {/* Leadership Programs */}
          <div className="col-md-4">
            <div className="program-card bg-white text-dark p-4 h-100">
              <h5 className="fw-bold mb-3">Leadership Programs</h5>
              <p className="text-muted">
                We conduct leadership programs to build self-confidence and
                decision-making abilities among women. Participants are
                encouraged to take active roles in their families and
                communities. These programs help women become strong leaders
                and positive role models.
              </p>
            </div>
          </div>

          {/* Self Help Groups */}
          <div className="col-md-4">
            <div className="program-card bg-white text-dark p-4 h-100">
              <h5 className="fw-bold mb-3">Self Help Groups</h5>
              <p className="text-muted">
                We support the formation of self-help groups that promote
                financial independence and mutual support. Women are guided in
                savings, small loans, and group-based economic activities. This
                initiative helps women achieve long-term financial stability
                and collective growth.
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

export default WomenEmpowerment;
