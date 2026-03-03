import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/trustee", label: "Trustee" }, 
    { path: "/programs", label: "Programs" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header
      className="position-fixed w-100 top-0 shadow-lg"
      style={{
        zIndex: 1000,
        background: "linear-gradient(135deg, #065e3a 0%, #047857 100%)",
      }}
    >
      <nav className="navbar navbar-expand-lg navbar-dark py-2">
        <div className="container">

          {/* 🔰 LOGO */}
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <div
              className="rounded-circle bg-white d-flex align-items-center justify-content-center me-3 overflow-hidden"
              style={{ width: "70px", height: "70px" }}
            >
              <img
                src={logo}
                alt="EMGSR Charitable Trust"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>

            <div>
              <div className="fw-bold fs-5 text-white">
                EMGSR Charitable Trust
              </div>
              <div className="small text-warning">
                Transforming Lives
              </div>
            </div>
          </Link>

          {/* 📱 Mobile Toggle */}
          <button
            className="navbar-toggler border-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* 📌 MENU */}
          <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto align-items-lg-center gap-1">

              {/* NAV LINKS */}
              {navItems.map((item) => (
                <li key={item.path} className="nav-item">
                  <Link
                    to={item.path}
                    className={`nav-link px-3 py-2 fw-semibold ${
                      location.pathname === item.path
                        ? "text-warning"
                        : "text-white"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              {/* ❤️ DONATE */}
              <li className="nav-item ms-lg-3">
                <Link
                  to="/donate"
                  className="btn fw-bold px-4 py-2"
                  style={{
                    backgroundColor: "#facc15",
                    color: "#000",
                    borderRadius: "30px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  }}
                >
                  Donate
                </Link>
              </li>

            </ul>
          </div>

        </div>
      </nav>
    </header>
  );
}

export default Header;
