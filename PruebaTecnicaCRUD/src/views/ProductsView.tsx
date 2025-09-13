import ProductList from "../components/ProductList";

export default function ProductsView() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-5xl font-bold text-indigo-900 mb-4">Productos</h1>
      
      <p className="text-lg text-gray-700 mb-6 max-w-xl">
        Aquí puedes explorar, agregar o gestionar los productos disponibles.
      </p>

      <a
        href="/create"
        className="mb-8 inline-block bg-indigo-900 text-white rounded-3xl px-4 py-2 shadow-md hover:bg-indigo-700 transition"
      >
        Agregar producto
      </a>

      <ProductList />
    </div>
  );
}
