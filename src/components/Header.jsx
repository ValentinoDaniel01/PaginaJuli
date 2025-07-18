import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "../assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isProductPage = location.pathname.startsWith("/producto/");

  const scrollOrNavigate = (hash) => {
    if (isProductPage) {
      // Redirige al home con hash
      navigate(`/${hash}`);
    } else {
      // Ya está en home: scroll suave
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-white shadow-lg sticky top-0 z-50"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <Link to="/" className="w-12 h-12 flex items-center justify-center">
              <img src={logo} alt="Logo" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-gradient">
                Laboratorio IQB
              </h1>
              <p className="text-sm text-gray-600">
                Soluciones en Productos Sanitarios
              </p>
            </div>
          </motion.div>

          <nav className="hidden md:flex space-x-8 items-center">
            <button
              onClick={() => scrollOrNavigate("#inicio")}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              ¿Quiénes Somos?
            </button>
            <button
              onClick={() => scrollOrNavigate("#productos")}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Productos
            </button>
            <button
              onClick={() => scrollOrNavigate("#instalaciones")}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Instalaciones
            </button>
            <button
              onClick={() => scrollOrNavigate("#certificaciones")}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Certificaciones
            </button>
            <Button
              variant="outline"
              onClick={() => scrollOrNavigate("#contacto")}
              className="border-green-500 rounded-full text-green-600 hover:bg-green-200"
            >
              Contacto
            </Button>
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
