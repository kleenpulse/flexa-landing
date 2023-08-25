import { useRef } from "react";
import { footerLinks, socialMedia } from "../constants";
import { useInView } from "../hooks/UseInView";
import { useNavigate } from "react-router-dom";

const Footer = () => {
	const navigate = useNavigate();
	const handleClick = () => navigate("/terms");

	const inViewRef = useRef(null);

	const isViewing = useInView(inViewRef);
	console.log(isViewing, "inViewRef");

	return (
		<footer className="max-container">
			<div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
				<div className="flex flex-col items-start ">
					<a href="#hero" ref={inViewRef}>
						<svg
							width="165"
							height="50"
							xmlns="http://www.w3.org/2000/svg"
							className={isViewing ? "fade-in-svg" : ""}
						>
							<defs>
								<linearGradient
									id="foologo-gradient"
									x1="0%"
									y1="0%"
									x2="100%"
									y2="0%"
								>
									<stop offset="0%" stopColor="#FF6347" />
									<stop offset="100%" stopColor="#FFD700" />
								</linearGradient>
							</defs>
							<circle cx="20" cy="25" r="18" fill="url(#foologo-gradient)" />

							<defs>
								<linearGradient id="footext" x1="0%" y1="0%" x2="100%" y2="0%">
									<stop offset="0%" stopColor="#FF6347" />
									<stop offset="100%" stopColor="#FFD700" />
								</linearGradient>
							</defs>

							<text
								x="45"
								y="40"
								fontFamily="Montserrat, sans-serif"
								fontWeight={"bold"}
								fontSize="40"
								fill="url(#footext)"
							>
								Flexa
							</text>
						</svg>
					</a>
					<p className="text-base leading-7 mt-6 font-montserrat text-white-400 sm:max-w-sm">
						Get shoes ready for the new term at your nearest Nike store. Find
						Your perfect Size In Store. Get Rewards
					</p>

					<div className="flex items-center gap-5 mt-8">
						{socialMedia.map((icon) => (
							<div
								key={icon.alt}
								className="flex justify-center items-center w-12 h-12 bg-white rounded-full hover:scale-110"
							>
								<a href={icon.link} target="_blank" rel="noreferrer">
									<img src={icon.src} alt={icon.alt} height={24} width={24} />
								</a>
							</div>
						))}
					</div>
				</div>

				<div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
					{footerLinks.map((section) => (
						<div key={section.title} className="flex flex-col">
							<h4 className="text-2xl text-white font-montserrat font-medium mb-6 leading-normal">
								{section.title}
							</h4>

							<ul>
								{section.links.map((link) => (
									<li
										key={link.name}
										className="text-white-400 mt-3 font-montserrat text-base leading-normal hover:text-coral-red cursor-pointer"
									>
										<a href={link.link}>{link.name}</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>

			<div className="flex text-white-400 justify-between mt-24 max-sm:flex-col max-sm:items-center">
				<div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
					<p>
						&copy; 2023
						{new Date().getFullYear() > 2023 &&
							"- " + new Date().getFullYear()}{" "}
						Flexa, Inc. All Rights Reserved
					</p>
				</div>
				<p
					className="font-montserrat cursor-pointer hover:text-coral-red"
					onClick={handleClick}
				>
					Terms & Conditions
				</p>
			</div>
		</footer>
	);
};

export default Footer;
