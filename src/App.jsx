import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Donate from "./pages/Donate";
import Trustee from "./pages/Trustee"; // ✅ ADDED

// ✅ Programs Landing Page (CARDS)
import Programs from "./pages/Programs";

// ✅ Programs Detail Pages

import SocialWelfare from "./pages/Programs/SocialWelfare";
import Education from "./pages/Programs/Education";
import Healthcare from "./pages/Programs/Healthcare";
import WomenEmpowerment from "./pages/Programs/WomenEmpowerment";

function App() {
  return (
    <>
      <Header />

      <Routes>
        {/* MAIN PAGES */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/trustee" element={<Trustee />} /> {/* ✅ ADDED */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />

        {/* ✅ PROGRAMS LANDING PAGE (4 CARDS) */}
        <Route path="/programs" element={<Programs />} />

        {/* ✅ PROGRAMS DETAIL PAGES */}
        <Route path="/programs/education" element={<Education/>} />
        <Route path="/programs/healthcare" element={<Healthcare/>} />
        <Route
          path="/programs/women-empowerment"
          element={<WomenEmpowerment />}
        />
        <Route
          path="/programs/social-welfare"
          element={<SocialWelfare/>}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
