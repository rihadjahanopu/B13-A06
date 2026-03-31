const Footer = () => {
	const productLinks = [
		{ name: "Features", href: "#features" },
		{ name: "Pricing", href: "#pricing" },
		{ name: "Templates", href: "#products" },
		{ name: "Integrations", href: "#" },
	];

	const companyLinks = [
		{ name: "About", href: "#" },
		{ name: "Blog", href: "#" },
		{ name: "Careers", href: "#" },
		{ name: "Press", href: "#" },
	];

	const resourceLinks = [
		{ name: "Documentation", href: "#" },
		{ name: "Help Center", href: "#" },
		{ name: "Community", href: "#" },
		{ name: "Contact", href: "#" },
	];

	const socialLinks = [
		{ name: "Twitter", icon: "fab fa-twitter", href: "#" },
		{ name: "LinkedIn", icon: "fab fa-linkedin", href: "#" },
		{ name: "GitHub", icon: "fab fa-github", href: "#" },
	];

	const scrollToSection = (href) => {
		if (href === "#") return;
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<footer className="bg-[#0b1220] text-gray-400">
			<div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
					<div className="lg:col-span-2 max-w-md">
						<div className="flex items-center gap-3 mb-5">
							<div className="w-10 h-10 bg-indigo-600 rounded-md flex items-center justify-center">
								<i className="fas fa-bolt text-white"></i>
							</div>
							<h2 className="text-white text-2xl font-semibold">DigiTools</h2>
						</div>

						<p className="text-gray-400 text-sm leading-relaxed">
							Premium digital tools for creators, professionals, and businesses.
							Work smarter with our suite of powerful tools.
						</p>
					</div>

					<div>
						<h4 className="text-white text-sm font-semibold mb-5">Product</h4>
						<ul className="space-y-3 text-sm">
							{productLinks.map((link) => (
								<li key={link.name}>
									<button
										onClick={() => scrollToSection(link.href)}
										className="hover:text-white transition">
										{link.name}
									</button>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h4 className="text-white text-sm font-semibold mb-5">Company</h4>
						<ul className="space-y-3 text-sm">
							{companyLinks.map((link) => (
								<li key={link.name}>
									<button
										onClick={() => scrollToSection(link.href)}
										className="hover:text-white transition">
										{link.name}
									</button>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h4 className="text-white text-sm font-semibold mb-5">Resources</h4>
						<ul className="space-y-3 text-sm">
							{resourceLinks.map((link) => (
								<li key={link.name}>
									<button
										onClick={() => scrollToSection(link.href)}
										className="hover:text-white transition">
										{link.name}
									</button>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h4 className="text-white text-sm font-semibold mb-5">
							Social Links
						</h4>

						<div className="flex items-center gap-3">
							{socialLinks.map((social) => (
								<a
									key={social.name}
									href={social.href}
									className="w-9 h-9 bg-white text-gray-900 hover:bg-gray-200 rounded-full flex items-center justify-center transition">
									<i className={`${social.icon} text-sm`}></i>
								</a>
							))}
						</div>
					</div>
				</div>

				<div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm">
					<p className="text-gray-500">
						© 2026 Digitools. All rights reserved.
					</p>

					<div className="flex gap-6 mt-4 md:mt-0 text-gray-500">
						<button className="hover:text-white">Privacy Policy</button>
						<button className="hover:text-white">Terms of Service</button>
						<button className="hover:text-white">Cookies</button>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
