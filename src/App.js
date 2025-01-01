import React, { useState, useEffect } from "react";
import AccessibilityWidget from "./accessibility/AccessibilityWidget.js";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/contact";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/privacypolicy/CoWallet-Coupon-Wallet";
import ListaPolicy from "./components/privacypolicy/Lista-shopping-List";
import WhatsAppButton from "./whatsapp/WhatsAppButton.js";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <AccessibilityWidget /> {/* Add the accessibility widget */}
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacypolicy-CoWallet" element={<PrivacyPolicy />} />
          <Route path="/privacypolicy-Lista" element={<ListaPolicy />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
        <WhatsAppButton /> {/* Add the WhatsApp button */}
      </div>
    </Router>
  );
}

export default App;