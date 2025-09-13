export default function HomeView() {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center bg-gray-50">
      <h1 className="text-5xl font-extrabold text-indigo-900 mb-6">
        Bienvenido al CRUD con Fake Store API
      </h1>

      <p className="text-lg text-gray-700 mb-4 max-w-xl">
        Esta aplicación demuestra mis habilidades técnicas en el desarrollo de un
        sistema <strong>CRUD</strong> (Crear, Leer, Actualizar y Eliminar),
        implementado con buenas prácticas de programación.
      </p>

      <p className="text-lg text-gray-700 mb-8 max-w-xl">
        <span className="font-semibold text-indigo-900">Tecnologías utilizadas:</span>{" "}
        React, TypeScript, Zustand y TailwindCSS.
      </p>

      <div className="flex space-x-4">
        <a
          href="/products"
          className="px-6 py-3 bg-indigo-900 text-white rounded-lg shadow-md hover:bg-indigo-700 transition"
        >
          Ver productos
        </a>

        <a
          href="/create"
          className="px-6 py-3 border-2 border-indigo-900 text-indigo-900 rounded-lg shadow-md hover:bg-indigo-900 hover:text-white transition"
        >
          Agregar producto
        </a>
      </div>
    </section>
  );
}
