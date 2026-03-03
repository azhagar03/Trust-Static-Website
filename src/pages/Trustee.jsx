import bgImage from "../assets/images2.png";

function Trustee() {
  const trustee = [
    {
      name: "Founder",
      role: "Founder & Managing Trustee",
    },
    {
      name: "Trustee",
      role: "Trustee",
    },
    {
      name: "Secretary",
      role: "Office Bearer",
    },
  ];

  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "120px 0 80px",
        backgroundImage: `linear-gradient(
          rgba(0, 80, 0, 0.65),
          rgba(0, 80, 0, 0.65)
        ), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">

        {/* HEADER */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-white mb-2">
            Trustee
          </h2>

          {/* ✅ GRADIENT LINE ADDED */}
          <div
            className="mx-auto mb-3"
            style={{
              width: "80px",
              height: "4px",
              background: "linear-gradient(to right, #059669, #fbbf24)",
              borderRadius: "2px",
            }}
          ></div>

          {/* <p className="text-white-50">
            Founder & Office Bearers of EMGSR Charitable Trust
          </p> */}
        </div>

        {/* TRUSTEE GRID */}
        <div className="row g-4 justify-content-center">
          {trustee.map((t, i) => (
            <div key={i} className="col-md-4">
              <div className="trustee-card text-center h-100">

                {/* IMAGE PLACEHOLDER */}
                <div className="trustee-placeholder">
                  {t.name.charAt(0)}
                </div>

                <h5 className="fw-bold mt-3 text-dark">
                  {t.name}
                </h5>
                <p className="text-muted mb-0">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* STYLES */}
      <style>
        {`
          .trustee-card {
            background: #ffffff;
            border-radius: 20px;
            padding: 25px;
            box-shadow: 0 12px 30px rgba(0,0,0,0.15);
            transition: transform 0.3s ease;
          }

          .trustee-card:hover {
            transform: translateY(-6px);
          }

          .trustee-placeholder {
            width: 100%;
            height: 260px;
            border-radius: 16px;
            background: linear-gradient(135deg, #e5e7eb, #d1d5db);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 64px;
            font-weight: 700;
            color: #6b7280;
          }
        `}
      </style>
    </section>
  );
}

export default Trustee;
