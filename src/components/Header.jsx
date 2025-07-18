import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "../assets/logo.png";

const Header = () => {
  const handleContactClick = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
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
            <div className="w-12 h-12 flex items-center justify-center">
              <img src={logo} alt="Logo" />
            </div>
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
            <a
              href="#inicio"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              ¿Quienes Somos?
            </a>
            <a
              href="#productos"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Productos
            </a>
            <a
              href="#instalaciones"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Instalaciones
            </a>
            <a
              href="#certificaciones"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Certificaciones
            </a>
            <Button
              variant="outline"
              onClick={handleContactClick}
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
