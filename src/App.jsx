import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import AboutUs from "@/components/AboutUs";
import Stats from "@/components/Stats";
import ProductCarousel from "@/components/ProductCarousel";
import Facilities from "@/components/Facilities";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";

// Nuevo componente para manejar el scroll hacia anchors (#productos, etc.)
function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  return null;
}

function App() {
  return (
    <>
      <Helmet>
        <title>Laboratorio IQB - Soluciones en Productos Sanitarios</title>
        <meta
          name="description"
          content="Laboratorio IQB, líder en la fabricación y desarrollo de productos sanitarios de alta calidad como vaselina, agua oxigenada y glutaral."
        />
      </Helmet>

      {/* Scroll automático si hay hash en la URL */}
      <ScrollToHash />

      <Routes>
        {/* Página principal */}
        <Route
          path="/"
          element={
            <>
              <div className="min-h-screen bg-white">
                <Header />
                <main>
                  <AboutUs />
                  <Stats />
                  <ProductCarousel />
                  <Facilities />
                  <Certifications />
                  <Contact />
                </main>
                <Footer />
                <Toaster />
              </div>
            </>
          }
        />

        {/* Página de detalle de producto */}
        <Route
          path="/producto/:slug"
          element={
            <>
              <div className="min-h-screen bg-white">
                <Header />
                <main>
                  <ProductDetail />
                </main>
                <Footer />
                <Toaster />
              </div>
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
