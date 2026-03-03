import React, { useState } from "react";
import bgImage from "../assets/images2.png";

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const HEADER_HEIGHT = 90;
  const FEATURED_HEIGHT = "420px"; // ✅ Same height for both video and image

  const featuredDate = "02 / 03 / 2026";

  const featuredText = {
    title: "EMGSR Charitable Trust",
    description:
      "On behalf of EMGSR Charitable Trust, in memory of our beloved mother Deiva Thirumathi EMGS Rajeswari, a noon meal was lovingly provided to the mentally challenged individuals at Jeeva Anbalayam Charitable Institution.",
  };

  const galleryImages = [
    "/gallery/gallery-14.jpeg",
    "/gallery/gallery-13.jpeg",
    "/gallery/gallery-0.jpg",
    "/gallery/gallery-1.jpg",
    "/gallery/gallery-2.jpg",
    "/gallery/gallery-3.jpg",
    "/gallery/gallery-4.jpg",
    "/gallery/gallery-5.jpg",
    "/gallery/gallery-6.jpg",
    "/gallery/gallery-7.jpg",
    "/gallery/gallery-8.jpg",
    "/gallery/gallery-9.jpg",
    "/gallery/gallery-10.jpg",
    "/gallery/gallery-11.jpg",
    "/gallery/gallery-12.jpg",
  ];

  const sectionStyle = {
    marginTop: HEADER_HEIGHT,
    paddingTop: "60px",
    paddingBottom: "80px",
    backgroundImage: `linear-gradient(rgba(0, 80, 0, 0.65), rgba(0, 80, 0, 0.65)), url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
  };

  return (
    <section id="gallery" style={sectionStyle}>
      <div className="container">

        {/* ── PAGE HEADER ── */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-white mb-2">Our Gallery</h2>
          <div
            className="mx-auto mb-2"
            style={{
              width: "80px",
              height: "4px",
              background: "linear-gradient(to right, #22c55e, #facc15)",
            }}
          />
        </div>

        {/* ══════════════════════════════════════════
            FEATURED SECTION
        ══════════════════════════════════════════ */}
        <div
          style={{
            background: "rgba(0,0,0,0.50)",
            borderRadius: "24px",
            padding: "32px",
            marginBottom: "56px",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          {/* Featured badge */}
          <div className="text-center mb-4">
            <span
              style={{
                background: "linear-gradient(to right, #22c55e, #facc15)",
                color: "#000",
                fontWeight: "700",
                fontSize: "0.78rem",
                letterSpacing: "2px",
                textTransform: "uppercase",
                padding: "6px 20px",
                borderRadius: "999px",
              }}
            >
              ★ Featured
            </span>
          </div>

          {/* ── Two-column: Video LEFT, Image RIGHT ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "28px",
              alignItems: "stretch",
            }}
          >
            {/* ── LEFT: VIDEO ── */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                  height: FEATURED_HEIGHT,
                  background: "#000",
                }}
              >
                <video
                  src="/gallery/gallery-15.mp4"
                  controls
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "block",
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* Date badge */}
              <div className="mt-3 text-center">
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "rgba(255,255,255,0.12)",
                    color: "#facc15",
                    padding: "7px 18px",
                    borderRadius: "999px",
                    fontSize: "0.88rem",
                    fontWeight: "700",
                    letterSpacing: "0.5px",
                  }}
                >
                  📅 {featuredDate}
                </span>
              </div>
            </div>

            {/* ── RIGHT: IMAGE 13 + text overlay ── */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                  position: "relative",
                  height: FEATURED_HEIGHT,
                }}
              >
                <img
                  src="/gallery/gallery-13.jpeg"
                  alt="Featured"
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "block",
                    objectFit: "cover",
                    objectPosition: "center top",
                  }}
                />

                {/* Dark gradient overlay with text */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background:
                      "linear-gradient(transparent 0%, rgba(0,0,0,0.55) 30%, rgba(0,0,0,0.92) 100%)",
                    padding: "50px 20px 22px",
                  }}
                >
                  <h3
                    style={{
                      color: "#facc15",
                      fontWeight: "700",
                      fontSize: "1.1rem",
                      margin: "0 0 8px",
                      lineHeight: "1.3",
                    }}
                  >
                    {featuredText.title}
                  </h3>
                  <p
                    style={{
                      color: "#e2e8f0",
                      fontSize: "0.82rem",
                      margin: 0,
                      lineHeight: "1.6",
                    }}
                  >
                    {featuredText.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════
            GALLERY GRID
        ══════════════════════════════ */}
        <div className="text-center mb-4">
          <h4
            style={{
              color: "#fff",
              fontWeight: "600",
              letterSpacing: "1px",
              marginBottom: "8px",
            }}
          >
            More Photos
          </h4>
          <div
            className="mx-auto mb-4"
            style={{
              width: "50px",
              height: "3px",
              background: "linear-gradient(to right, #22c55e, #facc15)",
            }}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "24px",
          }}
        >
          {galleryImages.map((img, index) => (
            <div
              key={index}
              onClick={() => setSelectedImg(img)}
              style={{
                aspectRatio: "1 / 1",
                borderRadius: "16px",
                overflow: "hidden",
                background: "#fff",
                boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-8px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <img
                src={img}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center 30%",
                  display: "block",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ── LIGHTBOX ── */}
      {selectedImg && (
        <div
          onClick={() => setSelectedImg(null)}
          style={{
            position: "fixed",
            top: HEADER_HEIGHT,
            left: 0,
            width: "100%",
            height: `calc(100% - ${HEADER_HEIGHT}px)`,
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 999,
          }}
        >
          <img
            src={selectedImg}
            alt=""
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              objectFit: "contain",
              background: "#fff",
              borderRadius: "12px",
            }}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;