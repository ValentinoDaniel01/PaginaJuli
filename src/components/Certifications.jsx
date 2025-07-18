import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
  {
    icon: <Award className="w-10 h-10 text-white" />,
    title: (
      <p>
        Ministerio de Salud
        <br />
        de la Nación.
      </p>
    ),
    url: "https://www.argentina.gob.ar/salud",
  },
  {
    icon: <Award className="w-10 h-10 text-white" />,
    title: (
      <p>
        Centro de Documentación e Información Legal del Ministerio de Economía
        de la Nación.
      </p>
    ),
    url: "https://www.argentina.gob.ar/economia",
  },
  {
    icon: <Award className="w-10 h-10 text-white" />,
    title: (
      <p>
        Administración Nacional de Medicamentos, Alimentos y Tecnología Médica
        (ANMAT).
      </p>
    ),
    url: "https://www.argentina.gob.ar/anmat",
  },
  {
    icon: <Award className="w-10 h-10 text-white" />,
    title: <p>Registro Nacional de Precursores Químicos - SE.DRO.NAR.</p>,
    url: "https://www.argentina.gob.ar/sedronar",
  },
  {
    icon: <Award className="w-10 h-10 text-white" />,
    title: <p>Colegio de Farmacéuticos de la Pcia. de Bs. As.</p>,
    url: "https://colfarma.org.ar", // ejemplo
  },
  {
    icon: <Award className="w-10 h-10 text-white" />,
    title: (
      <p>Facultad de Farmacia y Bioquímica - Universidad de Buenos Aires.</p>
    ),
    url: "https://www.ffyb.uba.ar",
  },
  {
    icon: <Award className="w-10 h-10 text-white" />,
    title: <p>European Medicines Agency (Agencia Europea de Medicamentos).</p>,
    url: "https://www.ema.europa.eu/en",
  },
  {
    icon: <Award className="w-10 h-10 text-white" />,
    title: (
      <p>
        United States Food and Drug Administration (Administración Federal de
        Alimentos y Medicamentos - EUA).
      </p>
    ),
    url: "https://www.fda.gov",
  },
  {
    icon: <Award className="w-10 h-10 text-white" />,
    title: (
      <p>
        Laboratorios Olivieri S.R.L. (Reactivos en Solución y Drogas - Marca
        IQB).
      </p>
    ),
    url: "https://www.iqb.com.ar", // ejemplo
  },
];

const Certifications = () => {
  return (
    <section id="certificaciones" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestras <span className="text-gradient">Certificaciones</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestro compromiso con la calidad está respaldado por
            certificaciones reconocidas a nivel mundial.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl"
              >
                <div className="mb-6 inline-block p-4 bg-green-600 rounded-full">
                  {cert.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {cert.title}
                </h3>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
