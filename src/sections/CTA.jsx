const CTA = () => {
	const scrollToProducts = () => {
		const element = document.querySelector("#products");
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	const scrollToPricing = () => {
		const element = document.querySelector("#pricing");
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section className="py-20 bg-linear-to-br from-indigo-600 to-purple-700 relative overflow-hidden">
			<div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
			<div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
			<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>

			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
				<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
					Ready to Transform Your Workflow?
				</h2>
				<p className="text-lg sm:text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
					Join thousands of professionals who are already using Digitools to
					work smarter. Start your free trial today.
				</p>

				<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
					<button
						onClick={scrollToProducts}
						className="w-full rounded-full sm:w-auto bg-white hover:bg-indigo-500/70 text-indigo-700 hover:text-white border border-indigo-400/50 hover:border-indigo-50 px-8 py-4  font-semibold text-lg transition-all flex items-center justify-center gap-2">
						Explore Products
					</button>
					<button
						onClick={scrollToPricing}
						className="w-full rounded-full sm:w-auto bg-transparent hover:bg-indigo-500/30 text-white border-2 border-white px-8 py-4  font-semibold text-lg transition-all flex items-center justify-center gap-2">
						View Pricing
					</button>
				</div>

				<p className="text-indigo-200 text-sm">
					<i className="fas fa-shield-alt mr-2"></i>
					14-day free trial • No credit card required • Cancel anytime
				</p>
			</div>
		</section>
	);
};

export default CTA;
