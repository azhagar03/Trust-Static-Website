import React from "react";
import bgImage from "../assets/images2.png";
import qrImage from "../assets/QR-code(1).png";

function Donate() {
  return (
    <section
      id="donate"
      className="position-relative"
      style={{
        minHeight: "100vh",
        paddingTop: "120px",
        paddingBottom: "80px",
        backgroundImage: `linear-gradient(
          rgba(0, 80, 0, 0.65),
          rgba(0, 80, 0, 0.65)
        ), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">

          {/* ✅ DONATE TITLE – BIG + GRADIENT LINE */}
          <div className="text-center mb-4">
            <h2
              className="display-5 fw-bold text-white mb-2"
              style={{
                textShadow: "0 3px 10px rgba(0,0,0,0.6)",
              }}
            >
              Donate
            </h2>

            {/* ✅ GRADIENT UNDERLINE */}
            <div
              className="mx-auto"
              style={{
                width: "80px",
                height: "4px",
                background: "linear-gradient(to right, #059669, #fbbf24)",
                borderRadius: "2px",
              }}
            ></div>

            <p className="text-white fs-5">
            "It's not how much we give, but how much love we put into giving."
          </p>
          
          </div>

          {/* ❌ CARD SIZE CHANGE PANNALA */}
          <div className="col-md-8 col-lg-6">
            <div className="bg-white rounded-4 shadow-lg p-5 text-center">

              {/* ✅ ONLY THIS TEXT INSIDE CARD */}
              <h4 className="fw-bold text-success mb-4">
                via QR Code
              </h4>

              {/* ✅ QR IMAGE */}
              <img
                src={qrImage}
                alt="Donate QR"
                style={{
                  width: "100%",
                  maxWidth: "420px",
                  height: "auto",
                  display: "block",
                  margin: "0 auto 30px",
                }}
              />

              {/* ✅ CONTACT DETAILS */}
              <p className="mb-1 fw-semibold">
                📞 87548 80091
              </p>
              <p className="mb-0 fw-semibold">
                ✉️ emgsrtrust@gmail.com
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Donate;
