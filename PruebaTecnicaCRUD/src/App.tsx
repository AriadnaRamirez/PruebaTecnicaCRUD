import { useEffect } from "react";
import { useProductsStore } from "./store/useProductsStore";

function ProductList() {
  const { products, fetchProducts, deleteProduct } = useProductsStore();

  // Cargar productos al montar el componente
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Lista de Productos </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <li
            key={product.id}
            className="border p-4 rounded shadow hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-32 h-32 object-contain mx-auto"
            />
            <h2 className="font-semibold mt-2">{product.title}</h2>
            <p className="text-gray-600">${product.price}</p>
            <button
              onClick={() => deleteProduct(product.id)}
              className="mt-3 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
