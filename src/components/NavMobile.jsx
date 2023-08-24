import { navLinks } from "../constants";
const NavMobile = ({ setIsMobile }) => {
	return (
		<div
			className="pt-8 pl-10 !fixed top-0 right-0 z-50 !h-[100vh] bg-coral-red"
			id="mobile-menu"
		>
			<a href="/">
				<svg
					width="140"
					height="50"
					xmlns="http://www.w3.org/2000/svg"
					className="fade-in-svg"
				>
					{/* Logo */}

					<circle cx="20" cy="25" r="18" fill="#fff" />

					{/* Text */}
					<text
						x="40"
						y="35"
						fontFamily="Montserrat, sans-serif"
						fontSize="30"
						fontWeight="bold"
						fill="#fff" // Use the gradient as fill color
					>
						Flexa
					</text>
				</svg>
			</a>
			<ul className=" flex flex-col justify-center items-start mt-24 gap-16 ">
				{navLinks.map((link) => (
					<li key={link.label} onClick={() => setIsMobile(false)}>
						<a
							href={link.href}
							className="font-palanquin leading-normal text-2xl text-white font-bold "
						>
							{link.label}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default NavMobile;
