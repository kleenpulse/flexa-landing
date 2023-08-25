import { useRef } from "react";

import {
	CustomerReviews,
	Footer,
	Hero,
	PopularProducts,
	Services,
	SpecialOffer,
	Subscribe,
	SuperQuality,
} from "./";

import Nav from "../components/Nav";
import { useInView } from "../hooks/UseInView";

const MainContent = () => {
	const heroRef = useRef(null);
	let isHeroRef = true;
	isHeroRef = useInView(heroRef);
	console.log("Hero showing", isHeroRef);

	return (
		<main className="relative">
			<Nav />
			<section
				id="hero"
				ref={heroRef}
				className="xl:padding-l wide:padding-r padding-b"
			>
				<Hero />
			</section>
			<section className="padding">
				<PopularProducts />
			</section>
			<section className="padding">
				<SuperQuality />
			</section>
			<section className="padding-x py-10">
				<Services />
			</section>
			<section className="padding">
				<SpecialOffer />
			</section>
			<section className="padding bg-pale-blue">
				<CustomerReviews />
			</section>
			<section className="padding-x sm:py-32 py-16 w-full">
				<Subscribe />
			</section>
			<section className="bg-black padding-x padding-t pb-8">
				<Footer />
			</section>
			{isHeroRef ? (
				<></>
			) : (
				<div
					className="fixed h-10 w-full flex justify-center z-[99999] top-4 items-center"
					id="scrollToTop"
				>
					<a
						href="#hero"
						className="relative w-fit font-palanquin font-bold p-2 rounded-full bg-coral-red text-white btn-pill"
					>
						Goto Top
					</a>
				</div>
			)}
		</main>
	);
};

export default MainContent;
