import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import HomeView from "./views/HomeView";
import ProductsView from "./views/ProductsView";


function App() {
	return (
		<>
			<NavBar />
			<main className="p-4">
				<Routes>
					<Route path="/" element={<HomeView />} />
					<Route path="/products" element={<ProductsView />} />
		
					
				</Routes>
			</main>
			<Footer />
		</>
	);
}

export default App;
