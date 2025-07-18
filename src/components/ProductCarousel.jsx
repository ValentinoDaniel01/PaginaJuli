import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import products from "../data/products";
import { Droplet, FlaskConical, Shield, MessageCircle } from "lucide-react";

function renderIcon(iconName) {
  switch (iconName) {
    case "droplet":
      return <Droplet className="w-8 h-8" />;
    case "flask":
      return <FlaskConical className="w-8 h-8" />;
    case "shield":
      return <Shield className="w-8 h-8" />;
    default:
      return null;
  }
}

export default function ProductCarousel() {
  const [index, setIndex] = useState(0);
  const itemsPerPage = 6;
  const groupedProducts = [];

  for (let i = 0; i < products.length; i += itemsPerPage) {
    groupedProducts.push(products.slice(i, i + itemsPerPage));
  }

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % groupedProducts.length);
  };

  const prevSlide = () => {
    setIndex(
      (prev) => (prev - 1 + groupedProducts.length) % groupedProducts.length
    );
  };

  return (
    <section id="productos" className="py-10 bg-gray-50">
      <motion.h2
        className="text-4xl font-bold text-center text-green-700 mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Nuestros Productos
      </motion.h2>

      <div className="relative max-w-6xl mx-auto overflow-hidden bg-white border-2 border-green-700 rounded-xl p-4">
        {/* Botón anterior (‹) */}
        <button
          className="absolute sm:top-3 sm:left-3 top-1/2 left-2 -translate-y-1/2 sm:-translate-y-0 
             bg-green-100 text-green-700 border border-green-600 shadow-md 
             hover:bg-green-300 transition-all duration-300 
             rounded-full w-10 h-10 flex items-center justify-center z-10"
          onClick={prevSlide}
        >
          ‹
        </button>

        <div className="transition-transform duration-500">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30, filter: "blur(6px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -30, filter: "blur(6px)" }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            >
              {groupedProducts[index].map((product, i) => (
                <Link to={`/producto/${product.slug}`} key={i}>
                  <motion.div
                    initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.1,
                      ease: "easeOut",
                    }}
                    className="bg-white p-6 text-center rounded-xl border hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
                  >
                    <div className="text-green-600 mb-4 flex justify-center">
                      {renderIcon(product.icon)}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      {product.description || ""}
                    </p>
                    <span className="text-green-700 font-medium">
                      Más información
                    </span>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Botón siguiente (›) */}
        <button
          className="absolute sm:top-3 sm:right-3 top-1/2 right-2 -translate-y-1/2 sm:-translate-y-0 
             bg-green-100 text-green-700 border border-green-600 shadow-md 
             hover:bg-green-300 transition-all duration-300 
             rounded-full w-10 h-10 flex items-center justify-center z-10"
          onClick={nextSlide}
        >
          ›
        </button>
        <div className="fixed bottom-4 right-4 z-50 md:hidden">
          <button
            onClick={() => {
              const contacto = document.getElementById("contacto");
              contacto?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-green-700 text-white px-4 py-2 pr-5 rounded-full shadow-lg hover:bg-green-800 transition-all flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Contacto
          </button>
        </div>
      </div>
    </section>
  );
}
