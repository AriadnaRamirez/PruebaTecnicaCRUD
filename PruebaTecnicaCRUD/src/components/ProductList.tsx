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
		<div className="p-6">
			<ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
				{products.map((product) => (
					<li
						key={product.id}
						className="border p-4 rounded shadow hover:shadow-lg transition"
					>
						<img
							src={product.image}
							alt={product.title}
							className="w-35 h-35 object-contain mx-auto"
						/>
						<h2 className="font-semibold mt-2">{product.title}</h2>
						<p className="text-indigo-900 font-bold text-xl">${product.price}</p>
						<div className="space-x-1">
							<button
								onClick={() => editProduct(product)}
								className="mt-3 bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
							>
								Editar
							</button>
							<button
								onClick={() => deleteProduct(product.id)}
								className="mt-3 bg-indigo-900 text-white px-3 py-1 rounded hover:bg-indigo-800 "
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
