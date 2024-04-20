import { Routes, Route, useLocation } from "react-router-dom";

import Home from "../Home.jsx";
import About from "../About";
import Contact from "../Contact";
import Work from "../Work";
import { AnimatePresence } from "framer-motion";

function Pagetransitions({openchat}) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route index path="/" element={<Home openchat />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Pagetransitions;
   