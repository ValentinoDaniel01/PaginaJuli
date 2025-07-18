import { useParams, Link } from "react-router-dom";
import products from "../data/productos";

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
    <section className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-green-700 mb-4">
        {producto.name}
      </h1>
      <div className="flex items-center justify-center mb-6">
        <div className="text-green-600">{producto.icon}</div>
      </div>
      <p className="mb-4">
        <strong>Descripción:</strong> {producto.description}
      </p>
      <p className="mb-4">
        <strong>Composición química:</strong> {producto.composicion}
      </p>
      <p className="mb-8">
        <strong>Usos:</strong> {producto.usos}
      </p>
      <Link
        to="/"
        className="inline-block bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition"
      >
        ← Volver al inicio
      </Link>
    </section>
  );
}
