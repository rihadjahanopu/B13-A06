import { useState } from "react";
import { toast } from "react-toastify";
import { useCart } from "../context/CartContext";
import data from "../data/products.json";

const Products = () => {
	const [activeTab, setActiveTab] = useState("products");
	const [activeFilter] = useState("All");
	const { cartItems, addToCart, removeFromCart, getCartTotal } = useCart();

	const filteredProducts =
		activeFilter === "All" ?
			data.products
		:	data.products.filter((product) => product.badge === activeFilter);

	const handleAddToCart = (product) => {
		addToCart(product);
		toast.success(
			<div className="flex items-center gap-3">
				<div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
					<i className="fas fa-check text-indigo-600"></i>
				</div>
				<div>
					<p className="font-semibold text-gray-900">Added to cart!</p>
					<p className="text-sm text-gray-500">{product.name}</p>
				</div>
			</div>,
			{
				position: "bottom-right",
				autoClose: 3000,
			}
		);
	};

	const handleRemoveFromCart = (product) => {
		removeFromCart(product.id);
		toast.info(
			<div className="flex items-center gap-3">
				<div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
					<i className="fas fa-trash text-red-600"></i>
				</div>
				<div>
					<p className="font-semibold text-gray-900">Removed from cart</p>
					<p className="text-sm text-gray-500">{product.name}</p>
				</div>
			</div>,
			{
				position: "bottom-right",
				autoClose: 2000,
			}
		);
	};

	const handleCheckout = () => {
		toast.success(
			<div className="flex items-center gap-3">
				<div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
					<i className="fas fa-credit-card text-green-600"></i>
				</div>
				<div>
					<p className="font-semibold text-gray-900">Proceeding to Checkout!</p>
					<p className="text-sm text-gray-500">Total: ${getCartTotal()}</p>
				</div>
			</div>,
			{
				position: "bottom-right",
				autoClose: 4000,
			}
		);
	};

	const getBadgeColor = (badge) => {
		switch (badge) {
			case "Best Seller":
				return "bg-amber-100 text-amber-700";
			case "Popular":
				return "bg-purple-100 text-purple-700";
			case "New":
				return "bg-green-100 text-green-700";
			default:
				return "bg-gray-100 text-gray-700";
		}
	};

	return (
		<section
			id="products"
			className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className="text-center mb-8">
					<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
						Premium Digital Tools
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Choose from our curated collection of premium digital products
						designed to boost your productivity and creativity.
					</p>
				</div>

				<div className="flex justify-center mb-10">
					<div className="inline-flex  bg-gray-100 rounded-full p-1">
						<button
							onClick={() => setActiveTab("products")}
							className={`px-8 py-3 rounded-full font-semibold transition-all ${
								activeTab === "products" ?
									" bg-linear-to-r from-indigo-600 to-purple-600 text-white border border-transparent g-linear-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-700 hover:border hover:border-indigo-600"
								:	"text-gray-500 hover:text-gray-700"
							}`}>
							<i className="fas fa-th-large mr-2"></i>
							Products
						</button>
						<button
							onClick={() => setActiveTab("cart")}
							className={`px-8 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
								activeTab === "cart" ?
									"bg-linear-to-r from-indigo-600 to-purple-600 text-white border border-transparent g-linear-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-700 hover:border hover:border-indigo-600"
								:	"text-gray-500 hover:text-gray-700"
							}`}>
							<i className="fas fa-shopping-cart"></i>
							Cart
							{cartItems.length > 0 && (
								<span className="bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
									{cartItems.length}
								</span>
							)}
						</button>
					</div>
				</div>

				{/* Products View */}
				{activeTab === "products" && (
					<>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{filteredProducts.map((product) => (
								<div
									key={product.id}
									className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
									<div className="p-6 pb-4">
										<div className="flex items-start justify-between mb-4">
											<div className="w-12 h-12 bg-white rounded-full border border-gray-100 flex items-center justify-center">
												<img
													src={product.icon}
													alt="icon"
												/>
											</div>
											<span
												className={`px-3 py-1 rounded-full text-xs font-semibold ${getBadgeColor(product.badge)}`}>
												{product.badge}
											</span>
										</div>
										<h3 className="text-xl font-bold text-gray-900 mb-2">
											{product.name}
										</h3>
										<p className="text-gray-600 text-sm leading-relaxed">
											{product.description}
										</p>
									</div>

									<div className="px-6 py-4 bg-gray-50/50 border-y border-gray-100">
										<div className="flex items-baseline gap-1">
											<span className="text-3xl font-bold text-gray-900">
												${product.price}
											</span>
											<span className="text-gray-500 text-sm">
												/{product.billing === "monthly" ? "mo" : "one-time"}
											</span>
										</div>
									</div>

									<div className="p-6">
										<ul className="space-y-3 mb-6">
											{product.features.map((feature, index) => (
												<li
													key={index}
													className="flex items-center gap-3 text-sm text-gray-600">
													<i className="fas fa-check text-green-500"></i>
													{feature}
												</li>
											))}
										</ul>
										<button
											onClick={() => handleAddToCart(product)}
											className="w-full bg-linear-to-r from-indigo-600 to-purple-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-indigo-200 flex items-center justify-center gap-2">
											<i className="fas fa-shopping-cart"></i>
											Buy Now
										</button>
									</div>
								</div>
							))}
						</div>
					</>
				)}

				{activeTab === "cart" && (
					<div className="max-w-3xl mx-auto">
						<div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 shadow-sm">
							{/* Title */}
							<h3 className="text-xl font-semibold text-gray-800 mb-6">
								Your Cart
							</h3>

							{cartItems.length === 0 ?
								<div className="text-center py-12">
									<p className="text-gray-500 text-lg">Your cart is empty</p>
									<button
										onClick={() => setActiveTab("products")}
										className="mt-4 text-indigo-600 font-medium hover:underline">
										Browse Products
									</button>
								</div>
							:	<>
									<div className="space-y-4">
										{cartItems.map((item) => (
											<div
												key={item.id}
												className="flex items-center justify-between bg-gray-100 rounded-xl px-5 py-4">
												<div className="flex items-center gap-4">
													<div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
														<img
															src={item.icon}
															alt={item.name}
															className="w-8 h-8"
														/>
													</div>

													<div>
														<h4 className="font-semibold text-gray-900">
															{item.name}
														</h4>
														<p className="text-sm text-gray-500">
															${item.price}
														</p>
													</div>
												</div>

												<button
													onClick={() => handleRemoveFromCart(item)}
													className="text-pink-500 text-sm font-medium hover:underline">
													Remove
												</button>
											</div>
										))}
									</div>

									<div className="mt-6 flex items-center justify-between">
										<span className="text-gray-600">Total:</span>
										<span className="text-2xl font-bold text-gray-900">
											${getCartTotal()}
										</span>
									</div>

									<button
										onClick={handleCheckout}
										className="mt-6 w-full py-4 rounded-full text-white font-semibold text-lg
                    bg-linear-to-r from-indigo-500 to-purple-600
                    hover:opacity-90 transition-all shadow-md">
										Proceed To Checkout
									</button>
								</>
							}
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

export default Products;
