import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useProductsStore, type Product } from "../store/useProductsStore";

interface Props {
	product?: Product | null;
	onClose: () => void;
}

const ProductForm = ({ product, onClose }: Props) => {
	const { addProduct, editProduct } = useProductsStore();

	return (
		<div>
			<h2 className="text-2xl font-bold mb-4 text-indigo-900">
				{product ? "Editar producto" : "Agregar producto"}
			</h2>

			<Formik
				initialValues={{
					title: product?.title || "",
					price: product?.price || "",
					description: product?.description || "",
					category: product?.category || "",
					image: product?.image || "",
				}}
				validationSchema={Yup.object({
					title: Yup.string().required("El título es obligatorio"),
					price: Yup.number().required("El precio es obligatorio"),
					description: Yup.string().required(
						"La descripción es obligatoria"
					),
					category: Yup.string().required(
						"La categoría es obligatoria"
					),
					image: Yup.string().url("Debe ser una URL válida"),
				})}
				onSubmit={async (values, { resetForm }) => {
					if (product) {
						
						await editProduct({
							...product,
							...values,
							price: Number(values.price),
						});
					} else {
						
						await addProduct({
							title: values.title,
							price: Number(values.price),
							description: values.description,
							category: values.category,
							image:
								values.image ||
								"https://via.placeholder.com/150",
						});
					}
					resetForm();
					onClose();
				}}
			>
				{({ isSubmitting }) => (
					<Form className="flex flex-col gap-4">
						<label className="text-left font-semibold">
							Título
						</label>
						<Field name="title" className="border p-2 rounded" />
						<ErrorMessage
							name="title"
							component="div"
							className="text-red-600 text-sm"
						/>

						<label className="text-left font-semibold">
							Precio
						</label>
						<Field
							name="price"
							type="number"
							className="border p-2 rounded"
						/>
						<ErrorMessage
							name="price"
							component="div"
							className="text-red-600 text-sm"
						/>

						<label className="text-left font-semibold">
							Descripción
						</label>
						<Field
							as="textarea"
							name="description"
							className="border p-2 rounded"
						/>
						<ErrorMessage
							name="description"
							component="div"
							className="text-red-600 text-sm"
						/>

						<label className="text-left font-semibold">
							Categoría
						</label>
						<Field name="category" className="border p-2 rounded" />
						<ErrorMessage
							name="category"
							component="div"
							className="text-red-600 text-sm"
						/>

						<label className="text-left font-semibold">
							Imagen
						</label>
						<Field name="image" className="border p-2 rounded" />
						<ErrorMessage
							name="image"
							component="div"
							className="text-red-600 text-sm"
						/>

						<button
							type="submit"
							disabled={isSubmitting}
							className="bg-indigo-900 text-white px-4 py-2 rounded hover:bg-indigo-700"
						>
							{isSubmitting
								? "Guardando..."
								: product
								? "Actualizar"
								: "Agregar"}
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default ProductForm;
