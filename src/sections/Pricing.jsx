import { toast } from "react-toastify";
import data from "../data/products.json";

const Pricing = () => {
	const { pricing } = data;

	const handlePlanSelect = (plan) => {
		if (plan.id === "starter") {
			toast.info(
				<div className="flex items-center gap-3">
					<div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
						<i className="fas fa-gift text-green-600"></i>
					</div>
					<div>
						<p className="font-semibold text-gray-900">Welcome aboard!</p>
						<p className="text-sm text-gray-500">Starting your free plan...</p>
					</div>
				</div>,
				{
					position: "bottom-right",
					autoClose: 3000,
				}
			);
		} else if (plan.id === "pro") {
			toast.success(
				<div className="flex items-center gap-3">
					<div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
						<i className="fas fa-crown text-indigo-600"></i>
					</div>
					<div>
						<p className="font-semibold text-gray-900">Pro Trial Started!</p>
						<p className="text-sm text-gray-500">
							Enjoy 14 days of premium features
						</p>
					</div>
				</div>,
				{
					position: "bottom-right",
					autoClose: 3000,
				}
			);
		} else {
			toast.info(
				<div className="flex items-center gap-3">
					<div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
						<i className="fas fa-building text-purple-600"></i>
					</div>
					<div>
						<p className="font-semibold text-gray-900">Enterprise Inquiry</p>
						<p className="text-sm text-gray-500">
							Our team will contact you soon
						</p>
					</div>
				</div>,
				{
					position: "bottom-right",
					autoClose: 3000,
				}
			);
		}
	};

	return (
		<section
			id="pricing"
			className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
						Simple, Transparent Pricing
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Choose the plan that fits your needs. Upgrade or downgrade anytime.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
					{pricing.map((plan) => (
						<div
							key={plan.id}
							className={`relative rounded-2xl p-8 transition-all duration-300 ${
								plan.popular ?
									"bg-linear-to-l from-violet-600 to-indigo-600 text-white shadow-xl shadow-indigo-200 scale-105"
								:	"bg-white border border-gray-200 text-gray-900 hover:shadow-lg"
							}`}>
							{plan.popular && (
								<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
									<span className="bg-amber-200 text-amber-900 px-4 py-1 rounded-full text-sm font-semibold">
										Most Popular
									</span>
								</div>
							)}

							<div className="text-left mb-8">
								<h3
									className={`text-xl font-bold mb-2 ${plan.popular ? "text-white" : "text-gray-900"}`}>
									{plan.name}
								</h3>
								<p
									className={`text-sm ${plan.popular ? "text-indigo-100" : "text-gray-500"}`}>
									{plan.description}
								</p>
							</div>

							<div className="text-left mb-8">
								<div className="flex items-center">
									<span
										className={`text-5xl font-bold ${plan.popular ? "text-white" : "text-gray-900"}`}>
										${plan.price}
									</span>
									<span
										className={`text-sm ${plan.popular ? "text-indigo-200" : "text-gray-500"}`}>
										/{plan.period}
									</span>
								</div>
							</div>

							<ul className="space-y-4 mb-8">
								{plan.features.map((feature, index) => (
									<li
										key={index}
										className="flex items-start gap-3">
										<i
											className={`fas fa-check mt-1 ${plan.popular ? "text-indigo-200" : "text-green-500"}`}></i>
										<span
											className={`text-sm ${plan.popular ? "text-indigo-100" : "text-gray-600"}`}>
											{feature}
										</span>
									</li>
								))}
							</ul>

							<button
								onClick={() => handlePlanSelect(plan)}
								className={`w-full py-3 rounded-xl font-semibold transition-all  ${
									plan.popular ?
										"bg-white text-indigo-600 hover:bg-indigo-50"
									:	"bg-linear-to-r from-indigo-600 to-purple-600 text-white g-linear-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-700 hover:border hover:border-indigo-600 "
								}`}>
								{plan.cta}
							</button>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Pricing;
