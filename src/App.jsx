import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import AboutUs from '@/components/AboutUs';
import Stats from '@/components/Stats';
import Products from '@/components/Products';
import Facilities from '@/components/Facilities';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>Laboratorio IQB - Soluciones en Productos Sanitarios</title>
        <meta name="description" content="Laboratorio IQB, líder en la fabricación y desarrollo de productos sanitarios de alta calidad como vaselina, agua oxigenada y glutaral." />
      </Helmet>

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
  );
}

export default App;