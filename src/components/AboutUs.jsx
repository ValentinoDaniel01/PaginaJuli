import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import foto from "../assets/trabajadores.jpg";

const AboutUs = () => {
  const handleProductsClick = () => {
    document
      .getElementById("productos")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative py-10 overflow-hidden">
      <div className="absolute inset-0 gradient-green-light opacity-90"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#4B2E2E] to-[#7B4F32] bg-clip-text text-transparent">
              Rodriguez y Vidal S.R.L.
            </span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              ¿Quienes Somos?
              <span className="text-gradient block"></span>
            </h3>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              El Laboratorio IQB se inicia alrededor de 1940 bajo la dirección
              del Dr. Marcelo Soula, dedicado inicialmente a la preparación y
              purificación de drogas. En 1978 se reestructura socialmente como
              Rodriguez y Vidal S.R.L., dando forma al sueño de dos jóvenes
              socios emprendedores que pensaban que la industria
              químico-farmacéutica tenía muchas necesidades por resolver. La
              vocación y alta dedicación de ellos, donde la innovación ha sido
              el aire común que se respiró desde sus comienzos, se ha plasmado
              en respuestas y soluciones a las mismas, dando así un sostenido y
              continuo crecimiento desde sus primeros días. El presente, con
              tres décadas de experiencia, encuentra al Laboratorio IQB
              conformado por un grupo de profesionales, y trabajadores idóneos,
              dedicados a proveer soluciones eficientes a todas las necesidades
              que surgen cotidianamente en el mercado farmacéutico y
              hospitalario. El futuro deparará nuevos desafíos, los cuales se
              sortearán con la experiencia y trayectoria que el Laboratorio IQB
              posee para responder eficientemente a aquellas necesidades que
              surgirán en esta actividad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleProductsClick}
                className="gradient-green rounded-full text-white px-8 py-3 text-lg hover-lift"
              >
                Ver Productos
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                className="rounded-2xl shadow-green hover-lift w-full h-96 object-cover"
                alt="Interior de un laboratorio farmacéutico moderno y limpio"
                src={foto}
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full gradient-green rounded-2xl opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
