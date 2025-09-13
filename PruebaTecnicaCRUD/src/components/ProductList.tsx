import { useEffect } from "react";
import { useProductsStore, type Product } from "../store/useProductsStore";

interface Props {
  setEditingProduct: (product: Product) => void;
  setShowForm: (value: boolean) => void;
}

function ProductList({ setEditingProduct, setShowForm }: Props) {
  const { products, fetchProducts, deleteProduct } = useProductsStore();

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
            <span className="bg-yellow-500 text-sm font-semibold px-2 py-1 rounded-full w-fit m-3">
              {product.category}
            </span>

            <img
              src={product.image}
              alt={product.title}
              className="h-40 object-contain mx-auto"
            />

            <h2 className="font-semibold text-gray-800 mt-2 px-3 line-clamp-2">
              {product.title}
            </h2>

            <p className="text-indigo-900 font-bold text-xl px-3 mt-2">
              ${product.price}
            </p>

            <div className="space-x-4 px-3 py-4 mt-auto">
             
			 
              <button
                onClick={() => {
                  setEditingProduct(product);
                  setShowForm(true);
                }}
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
