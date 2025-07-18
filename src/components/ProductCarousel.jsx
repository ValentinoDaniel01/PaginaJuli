// ProductCarousel.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import products from "../data/products";
import { Droplet, FlaskConical, Shield } from "lucide-react";
import { AnimatePresence } from "framer-motion";

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
        <button
          className="hidden md:block absolute top-1/2 left-2 transform -translate-y-1/2 bg-green-700 text-white px-4 py-2 text-xl rounded hover:bg-green-800 z-10"
          onClick={prevSlide}
        >
          ‹
        </button>

        <div className="transition-transform duration-500">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            >
              {groupedProducts[index].map((product, i) => (
                <Link to={`/producto/${product.slug}`} key={i}>
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0, y: 30 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.1,
                      type: "spring",
                      stiffness: 100,
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
                      Más información →
                    </span>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          className="hidden md:block absolute top-1/2 right-2 transform -translate-y-1/2 bg-green-700 text-white px-4 py-2 text-xl rounded hover:bg-green-800 z-10"
          onClick={nextSlide}
        >
          ›
        </button>
      </div>
    </section>
  );
}
