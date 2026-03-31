import "@fortawesome/fontawesome-free/css/all.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "./context/CartContext";
import CTA from "./sections/CTA";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import HowItWorks from "./sections/HowItWorks";
import Navbar from "./sections/Navbar";
import Pricing from "./sections/Pricing";
import Products from "./sections/Products";

function App() {
	return (
		<CartProvider>
			<div className="min-h-screen bg-white">
				<Navbar />
				<main>
					<Hero />
					<Products />
					<HowItWorks />
					<Pricing />
					<CTA />
				</main>
				<Footer />
				<ToastContainer
					position="bottom-right"
					autoClose={3000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="light"
					toastClassName="rounded-xl shadow-lg"
				/>
			</div>
		</CartProvider>
	);
}

export default App;
