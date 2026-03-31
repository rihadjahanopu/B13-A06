import herobanner from "../../public/assets/banner.png";
import data from "../data/products.json";

const Hero = () => {
	const scrollToProducts = () => {
		document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" });
	};

	const scrollToPricing = () => {
		document.querySelector("#pricing")?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<>
			<section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 overflow-hidden">
				<div className="absolute inset-0 bg-linear-to-br from-indigo-50 via-white to-purple-50 -z-10"></div>

				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
						<div className="text-center lg:text-left order-2 lg:order-1">
							<div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
								<span className="h-2 w-2 bg-indigo-500 rounded-full"></span>
								New: AI-Powered Tools Available
							</div>

							<h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 leading-tight mb-4 sm:mb-6">
								Supercharge Your{" "}
								<span className="text-indigo-600">Digital Workflow</span>
							</h1>

							<p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
								Access premium AI tools, design assets, templates, and
								productivity software—all in one place. Start creating faster
								today. Explore Products
							</p>

							<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
								<button
									onClick={scrollToProducts}
									className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2 transition-colors">
									Explore Products
								</button>

								<button
									onClick={scrollToPricing}
									className="bg-white border border-gray-300 hover:bg-gray-100 px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2 transition-colors">
									<i className="fas fa-play text-indigo-600"></i>
									Watch Demo
								</button>
							</div>
						</div>

						<div className="flex justify-center lg:justify-end order-1 lg:order-2">
							<img
								src={herobanner}
								alt="Hero"
								className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-2xl shadow-lg"
							/>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-linear-to-r from-indigo-600 to-purple-600 py-6 sm:py-10">
				<div className="max-w-5xl mx-auto px-4 sm:px-6">
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0 text-center text-white">
						{data.stats.map((stat, index) => (
							<div
								key={index}
								className="relative flex flex-col items-center p-2 sm:p-0">
								<div className="text-2xl sm:text-3xl font-bold">
									{stat.value}
								</div>
								<div className="text-xs sm:text-sm opacity-80">
									{stat.label}
								</div>

								{index !== 2 && (
									<div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-10 bg-white/30"></div>
								)}

								{index !== 2 && (
									<div className="sm:hidden absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-px bg-white/30"></div>
								)}
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default Hero;
