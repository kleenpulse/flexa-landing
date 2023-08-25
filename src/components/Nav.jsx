import { useState } from "react";
import { X, hamburger } from "../assets/icons";

import { navLinks } from "../constants";
import NavMobile from "./NavMobile";
const Nav = () => {
	const [isMobile, setIsMobile] = useState(false);

	return (
		<header className="padding-x py-8 absolute z-10 w-full">
			<nav className="flex justify-between items-center max-container">
				<a href="#hero">
					{/* <img src={headerLogo} width={130} height={29} alt="logo" /> */}
					<svg width="200" height="60" xmlns="http://www.w3.org/2000/svg">
						<defs>
							<linearGradient
								id="logo-gradient"
								x1="0%"
								y1="0%"
								x2="100%"
								y2="0%"
							>
								<stop offset="0%" stopColor="#FF6347" />
								<stop offset="100%" stopColor="#FFD700" />
							</linearGradient>
						</defs>
						<circle cx="20" cy="25" r="18" fill="url(#logo-gradient)" />

						<text
							x="45"
							y="40"
							fontFamily="Montserrat, sans-serif"
							fontWeight={"bold"}
							fontSize="40"
							fill="#ff6f61"
						>
							Flexa
						</text>
					</svg>
				</a>
				<ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden ">
					{navLinks.map((link) => (
						<li key={link.label}>
							<a
								href={link.href}
								className="font-monserrat leading-normal text-lg text-slate-700"
							>
								{link.label}
							</a>
						</li>
					))}
				</ul>
				<div
					className={`lg:hidden absolute right-6 top-10 cursor-pointer z-[60] ${
						isMobile &&
						"!fixed md:right-14 top-10 right-4 bg-white h-10 w-10 rounded-full flex justify-center items-center"
					}`}
					onClick={() => setIsMobile((prev) => !prev)}
				>
					<img
						src={isMobile ? X : hamburger}
						alt="hamburger"
						width={25}
						height={25}
					/>
				</div>
			</nav>

			{isMobile && (
				<>
					<div
						className=" !fixed top-0 right-0 z-50 w-[100%] !h-[100vh] backdrop-blur-[8px]"
						onClick={() => setIsMobile((prev) => !prev)}
					></div>
					<NavMobile setIsMobile={setIsMobile} isMobile={isMobile} />
				</>
			)}
		</header>
	);
};

export default Nav;
