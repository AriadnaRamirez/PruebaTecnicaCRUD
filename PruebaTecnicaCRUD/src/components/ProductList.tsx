import { useEffect } from "react";
import { useProductsStore } from "../store/useProductsStore";

function ProductList() {
  const { products, fetchProducts, deleteProduct, editProduct } =
    useProductsStore();

  // Cargar productos al montar el componente
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="p-6 bg-gray-50">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <li
            key={product.id}
            className="border rounded-lg shadow hover:shadow-lg transition bg-white flex flex-col"
          >
            {/* Etiqueta de categoría */}
            <span className="bg-yellow-500 text-sm font-semibold px-2 py-1 rounded-full w-fit m-3">
              {product.category}
            </span>

            {/* Imagen */}
            <img
              src={product.image}
              alt={product.title}
              className="h-40 object-contain mx-auto"
            />

            {/* Título */}
            <h2 className="font-semibold text-gray-800 mt-2 px-3 line-clamp-2">
              {product.title}
            </h2>

            {/* Precio */}
            <p className="text-indigo-900 font-bold text-xl px-3 mt-2">
              ${product.price}
            </p>

            {/* Botones */}
            <div className="space-x-4 px-3 py-4 mt-auto">
              <button
                onClick={() => editProduct(product)}
                className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-indigo-900"
              >
                Editar
              </button>
              <button
                onClick={() => deleteProduct(product.id)}
                className="bg-red-800 text-white px-3 py-1 rounded hover:bg-red-700"
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
