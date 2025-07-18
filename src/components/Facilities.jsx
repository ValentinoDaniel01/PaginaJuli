import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const facilities = [
  {
    title: "Planta de Producción Certificada",
    description: "Instalaciones que cumplen con las Buenas Prácticas de Manufactura (BPM)."
  },
  {
    title: "Laboratorio de Control de Calidad",
    description: "Equipos de análisis para garantizar la pureza y eficacia de cada lote."
  },
  {
    title: "Área de I+D",
    description: "Espacio dedicado a la innovación y desarrollo de nuevas fórmulas y productos."
  },
  {
    title: "Almacenamiento Climatizado",
    description: "Bodegas con control de temperatura y humedad para preservar la integridad de los productos."
  }
];

const Facilities = () => {
  return (
    <section id="instalaciones" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestras <span className="text-gradient">Instalaciones</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contamos con instalaciones de vanguardia para garantizar la máxima calidad.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              className="rounded-2xl shadow-green w-full h-96 object-cover" 
              alt="Línea de producción en un laboratorio farmacéutico"
             src="https://images.unsplash.com/photo-1612758456015-3d41b5d04c8b" />
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {facilities.map((facility, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-gray-600">
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;