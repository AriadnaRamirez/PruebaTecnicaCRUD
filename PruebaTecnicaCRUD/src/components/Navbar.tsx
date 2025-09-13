export default function NavBar() {
	return (
		<nav className="bg-indigo-900 text-white px-6 py-4 flex justify-between items-center">
			<h1 className="text-xl font-bold">FAKE STORE API</h1>
			<ul className="flex space-x-4">
				<li>
					<a href="/" className="hover:underline">
						Inicio
					</a>
				</li>
				<li>
					<a href="/products" className="hover:underline">
						Productos
					</a>
				</li>
				
			</ul>
		</nav>
	);
}
