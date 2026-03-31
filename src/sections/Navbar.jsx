import { Menu, ShoppingCart, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../../public/assets/products/logo.svg";
import { useCart } from "../context/CartContext";

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isCartOpen, setIsCartOpen] = useState(false);

	const { cartItems, getCartCount, getCartTotal, removeFromCart } = useCart();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navLinks = [
		{ name: "Products", href: "#products" },
		{ name: "Features", href: "#features" },
		{ name: "Pricing", href: "#pricing" },
		{ name: "Testimonials", href: "#testimonials" },
		{ name: "FAQ", href: "#faq" },
	];

	const scrollToSection = (href) => {
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
		setIsMobileMenuOpen(false);
	};

	const cartCount = getCartCount();
	const cartTotal = getCartTotal();

	return (
		<>
			<nav
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
					isScrolled ?
						"bg-white/95 backdrop-blur-md shadow-sm"
					:	"bg-white/70 backdrop-blur"
				}`}>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16">
						<a
							href="/"
							onClick={(e) => {
								e.preventDefault();
								window.scrollTo({ top: 0, behavior: "smooth" });
							}}>
							<img
								src={logo}
								alt="Digitools"
								className="w-28"
							/>
						</a>

						<div className="hidden md:flex items-center space-x-6">
							{navLinks.map((link) => (
								<button
									key={link.name}
									onClick={() => scrollToSection(link.href)}
									className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">
									{link.name}
								</button>
							))}
						</div>

						<div className="hidden md:flex items-center space-x-4">
							<button className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
								Login
							</button>

							<button
								onClick={() => setIsCartOpen(true)}
								className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors">
								<ShoppingCart className="w-5 h-5" />
								{cartCount > 0 && (
									<span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
										{cartCount}
									</span>
								)}
							</button>

							<button className="bg-linear-to-r from-indigo-600 to-purple-600 text-white border border-transparent g-linear-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-700 hover:border hover:border-indigo-600 px-5 py-2 rounded-full font-medium transition-colors">
								Get Started
							</button>
						</div>

						<div className="md:hidden flex items-center gap-4">
							<button
								onClick={() => setIsCartOpen(true)}
								className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors">
								<ShoppingCart className="w-5 h-5" />
								{cartCount > 0 && (
									<span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
										{cartCount}
									</span>
								)}
							</button>

							<button
								onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
								className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
								{isMobileMenuOpen ?
									<X className="w-6 h-6" />
								:	<Menu className="w-6 h-6" />}
							</button>
						</div>
					</div>

					{isMobileMenuOpen && (
						<div className="md:hidden bg-white border-t border-gray-100 py-4">
							<div className="flex flex-col space-y-4">
								{navLinks.map((link) => (
									<button
										key={link.name}
										onClick={() => scrollToSection(link.href)}
										className="text-gray-600 hover:text-indigo-600 font-medium transition-colors text-left px-2">
										{link.name}
									</button>
								))}
								<div className="pt-4 border-t border-gray-100 flex flex-col space-y-3 px-2">
									<button className="text-gray-600 hover:text-gray-900 font-medium text-left">
										Login
									</button>
									<button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full font-medium w-full">
										Get Started
									</button>
								</div>
							</div>
						</div>
					)}
				</div>
			</nav>

			{isCartOpen && (
				<div className="fixed inset-0 z-60">
					<div
						className="absolute inset-0 bg-black/50"
						onClick={() => setIsCartOpen(false)}
					/>

					<div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col">
						<div className="flex items-center justify-between p-4 border-b">
							<h2 className="text-lg font-bold text-gray-800">
								Shopping Cart ({cartCount})
							</h2>
							<button
								onClick={() => setIsCartOpen(false)}
								className="p-2 text-gray-600 hover:text-gray-900">
								<X className="w-5 h-5" />
							</button>
						</div>

						<div className="flex-1 overflow-y-auto p-4">
							{cartItems.length === 0 ?
								<div className="text-center text-gray-500 mt-10">
									<ShoppingCart className="w-16 h-16 mx-auto mb-4 opacity-30" />
									<p>Your cart is empty</p>
								</div>
							:	<div className="space-y-4">
									{cartItems.map((item) => (
										<div
											key={item.id}
											className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
											<img
												src={item.icon}
												alt={item.name}
												className="w-16 h-16 object-cover rounded-md"
											/>
											<div className="flex-1">
												<h3 className="font-medium text-gray-800">
													{item.name}
												</h3>
												<p className="text-indigo-600 font-semibold">
													${item.price}
												</p>
											</div>
											<button
												onClick={() => removeFromCart(item.id)}
												className="p-2 text-red-500 hover:bg-red-50 rounded">
												<span>Remove</span>
											</button>
										</div>
									))}
								</div>
							}
						</div>

						{cartItems.length > 0 && (
							<div className="border-t p-4 space-y-4">
								<div className="flex items-center justify-between text-lg font-bold">
									<span>Total:</span>
									<span className="text-indigo-600">
										${cartTotal.toFixed(2)}
									</span>
								</div>
								<button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-full font-medium transition-colors">
									Checkout
								</button>
							</div>
						)}
					</div>
				</div>
			)}
		</>
	);
};

export default Navbar;
