import React from "react";
import { motion } from "framer-motion";
import { Eye, Heart, Compass } from "lucide-react";

const stats = [
  {
    icon: <Compass className="w-12 h-12 mx-auto mb-4" />,
    value: "MISIÓN",
    label:
      "Desde hace algunos años, Laboratorio IQB se planteó un nuevo desafío, basado en valores de gestión científica y comercial enfocados a la satisfacción del cliente, comenzando una nueva etapa en la cual la calidad integral del producto, la rapidez en la respuesta, el servicio y el asesoramiento serán los pilares para su desarrollo y crecimiento.",
  },
  {
    icon: <Heart className="w-12 h-12 mx-auto mb-4" />,
    value: "VALORES",
    label: (
      <ul className="list-disc ml-5">
        <li className="text-left">
          Escuchar y atender todas las necesidades del cliente.
        </li>
        <li className="text-left">
          Propender a la Calidad y la mejora continua.
        </li>
        <li className="text-left">Honestidad integral en la gestión.</li>
        <li className="text-left">Cuidado del medio ambiente.</li>
      </ul>
    ),
  },
  {
    icon: <Eye className="w-12 h-12 mx-auto mb-4" />,
    value: "VISIÓN",
    label: (
      <ul className="list-disc ml-5">
        <li className="text-left">
          Ser parte de los mejores laboratorios del mercado farmacéutico y
          hospitalario. Innovar y optimizar su gestión cada día más.
        </li>
        <li className="text-left">
          Posicionarse en los clientes y proveedores como generadores de
          soluciones y merecedores de un elevado nivel de confianza y seguridad
          comercial.
        </li>
      </ul>
    ),
  },
];

const Stats = () => {
  return (
    <section className="py-16 gradient-green">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 text-center text-white">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {stat.icon}
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-green-100">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
