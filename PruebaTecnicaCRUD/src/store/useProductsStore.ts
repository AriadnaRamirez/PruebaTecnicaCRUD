import { create } from "zustand";

//interface
export interface Product {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
}

//interface de los estados
interface ProductState {
	products: Product[];
	fetchProducts: () => Promise<void>;
	addProduct: (product: Omit<Product, "id">) => Promise<void>;
	deleteProduct: (id: number) => Promise<void>;
	editProduct: (product: Product) => Promise<void>;
}

//creacion de store
export const useProductsStore = create<ProductState>((set) => ({
	products: [],

	// Obtiene 10 productos
	fetchProducts: async () => {
		try {
			const res = await fetch(
				"https://fakestoreapi.com/products?limit=10"
			);
			if (!res.ok) throw new Error("Error al obtener productos");
			const data = await res.json();
			set({ products: data });
		} catch (error) {
			console.error("fetchProducts error:", error);
		}
	},

	// Editar un producto
	editProduct: async (product: Product) => {
		try {
			const res = await fetch(
				`https://fakestoreapi.com/products/${product.id}`,
				{
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(product),
				}
			);
			if (!res.ok) throw new Error("Error al editar producto");
			const editedProduct = await res.json();
			set((state) => ({
				products: state.products.map((p) =>
					p.id === editedProduct.id ? editedProduct : p
				),
			}));
		} catch (error) {
			console.error("editProduct error:", error);
		}
	},

	// Crear nuevo producto
	addProduct: async (product: Omit<Product, "id">) => {
		try {
			const res = await fetch("https://fakestoreapi.com/products", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(product),
			});
			if (!res.ok) throw new Error("Error al crear producto");
			const newProduct = await res.json();

			// Aqui actualizo el array de productos para verlo reflejado en el front
			 set((state) => ({
      products: [...state.products, { ...product, id: newProduct.id }],
    }));;
		} catch (error) {
			console.error("addProduct error:", error);
		}
	},

	// Eliminar un producto
	deleteProduct: async (id: number) => {
		try {
			const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
				method: "DELETE",
			});
			if (!res.ok) throw new Error("Error al eliminar producto");

			// Aqui filtro el array de productos para verlo reflejado en el front
			set((state) => ({
				products: state.products.filter((product) => product.id !== id),
			}));
		} catch (error) {
			console.error("deleteProduct error:", error);
		}
	},
}));
