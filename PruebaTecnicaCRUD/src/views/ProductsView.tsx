import { useState } from "react";
import ProductList from "../components/ProductList";
import ProductForm from "../components/ProductForm";
import type { Product } from "../store/useProductsStore";

export default function ProductsView() {
	const [showForm, setShowForm] = useState(false);
	const [editingProduct, setEditingProduct] = useState<Product | null>(null);

	return (
		<div className="flex flex-col items-center justify-center min-h-screen text-center">
			<h1 className="text-5xl font-bold text-indigo-900 mb-6">
				Productos
			</h1>

			<button
				onClick={() => {
					setEditingProduct(null);
					setShowForm(true);
				}}
				className="mb-6 px-6 py-2 bg-indigo-900 text-white rounded hover:bg-indigo-700"
			>
				Agregar producto
			</button>

			<ProductList
				setEditingProduct={setEditingProduct}
				setShowForm={setShowForm}
			/>

			{showForm && (
				<div
					className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
					onClick={() => setShowForm(false)}
				>
					<div
						className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
						onClick={(e) => e.stopPropagation()}
					>
						<ProductForm
							product={editingProduct}
							onClose={() => setShowForm(false)}
						/>
					</div>
				</div>
			)}
			<button
				onClick={() => {
					setEditingProduct(null);
					setShowForm(true);
				}}
				className="mb-6 px-6 py-2 bg-indigo-900 text-white rounded hover:bg-indigo-700"
			>
				Agregar producto
			</button>
		</div>
	);
}
