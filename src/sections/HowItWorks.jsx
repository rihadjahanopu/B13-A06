import data from "../data/products.json";

const HowItWorks = () => {
	const { steps } = data;

	return (
		<section
			id="features"
			className="py-20 bg-gray-100">
			<div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
						Get Started In 3 Steps
					</h2>
					<p className="text-gray-600 max-w-2xl mx-auto">
						Start using premium digital tools in minutes, not hours.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
					{steps.map((step) => (
						<div
							key={step.id}
							className="relative bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-all">
							<div className="absolute top-4 right-4 w-8 h-8 bg-indigo-600 text-white text-sm font-semibold flex items-center justify-center rounded-full">
								{step.number}
							</div>

							<div className="w-20 h-20 mx-auto mb-6 rounded-full bg-indigo-100 flex items-center justify-center">
								<img
									src={step.icon}
									alt={step.title}
									className="w-12 h-12"
								/>
							</div>

							<h3 className="text-lg font-semibold text-gray-900 mb-2">
								{step.title}
							</h3>

							<p className="text-sm text-gray-600 leading-relaxed">
								{step.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;
