import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Grid de columnas del footer */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Columna 1: Logo y descripción */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src={logo} alt="Logo" className="h-full w-auto" />
              </div>
              <span className="text-xl font-bold">Laboratorio IQB</span>
            </div>
            <p className="text-gray-400">
              Comprometidos con la excelencia en la fabricación de productos
              sanitarios.
            </p>
          </div>

          {/* Columna 2: Vacía o futura información extra */}
          <div></div>

          {/* Columna 3: Enlaces rápidos */}
          <div>
            <span className="text-lg font-semibold mb-4 block">
              Enlaces Rápidos
            </span>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#quienes-somos"
                  className="hover:text-green-400 transition-colors"
                >
                  Quiénes Somos
                </a>
              </li>
              <li>
                <a
                  href="#productos"
                  className="hover:text-green-400 transition-colors"
                >
                  Productos
                </a>
              </li>
              <li>
                <a
                  href="#instalaciones"
                  className="hover:text-green-400 transition-colors"
                >
                  Instalaciones
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="hover:text-green-400 transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea inferior con derechos reservados */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Laboratorio IQB. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
