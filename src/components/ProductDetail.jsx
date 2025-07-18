// src/components/ProductDetail.jsx
import { useParams, Link } from "react-router-dom";
import products from "../data/products";

export default function ProductDetail() {
  const { slug } = useParams();
  const producto = products.find((p) => p.slug === slug);

  if (!producto) {
    return (
      <section className="p-8 text-center text-red-600">
        <h1 className="text-2xl font-bold mb-4">Producto no encontrado</h1>
        <Link to="/" className="text-green-700 underline">
          ← Volver al inicio
        </Link>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8 border border-green-700">
        {/* Ícono y nombre del producto */}
        <div className="flex items-center justify-center mb-6"></div>
        <h1 className="text-4xl font-bold text-center text-green-800 mb-6">
          {producto.name}
        </h1>

        {/* Información del producto */}
        <div className="space-y-4 text-gray-800 text-lg leading-relaxed">
          <p>
            <span className="font-semibold text-green-700">Descripción:</span>{" "}
            {producto.description}
          </p>
          <p>
            <span className="font-semibold text-green-700">
              Composición química:
            </span>{" "}
            {producto.composicion}
          </p>
          <p>
            <span className="font-semibold text-green-700">Usos:</span>{" "}
            {producto.usos}
          </p>
        </div>

        {/* Botón de regreso */}
        <div className="mt-10 text-center">
          <Link
            to="/"
            className="inline-block bg-green-700 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-green-800 transition"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </section>
  );
}
