import React, { useState } from "react";
import bgImage from "../assets/images2.png"; // 👈 SAME image like About

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const images = [
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

  const HEADER_HEIGHT = 90; // navbar height

  return (
    <section
      id="gallery"
      style={{
        minHeight: "100vh",
        padding: "80px 0",
        marginTop: HEADER_HEIGHT,
        backgroundImage: `linear-gradient(
          rgba(0, 80, 0, 0.65),
          rgba(0, 80, 0, 0.65)
        ), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        {/* HEADER */}
        <div className="text-center mb-5">
          {/* 🔥 margin-bottom reduced */}
          <h2 className="display-5 fw-bold text-white mb-2">
            Our Gallery
          </h2>

          {/* 🔥 underline spacing reduced */}
          <div
            className="mx-auto mb-4"
            style={{
              width: "80px",
              height: "4px",
              background: "linear-gradient(to right, #22c55e, #facc15)",
            }}
          ></div>
        </div>

        {/* GALLERY GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "24px",
          }}
        >
          {images.map((img, index) => (
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

      {/* FULL IMAGE VIEW */}
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
