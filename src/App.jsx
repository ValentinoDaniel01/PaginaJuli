import React from "react";
import { Helmet } from "react-helmet";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import AboutUs from "@/components/AboutUs";
import Stats from "@/components/Stats";
import Products from "@/components/ProductCarousel.jsx";
import Facilities from "@/components/Facilities";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";

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
                  <Products />
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
