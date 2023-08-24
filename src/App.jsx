import { useRef } from "react";
import Nav from "./components/Nav";
import {
	CustomerReviews,
	Footer,
	Hero,
	PopularProducts,
	Services,
	SpecialOffer,
	Subscribe,
	SuperQuality,
} from "./sections";
import { useInView } from "./hooks/UseInView";

const App = () => {
	const heroRef = useRef(null);
	const isHeroRef = useInView(heroRef);
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
			{!isHeroRef ? (
				<div
					className="fixed h-10 w-full flex justify-center z-[99999] top-2 items-center"
					id="scrollToTop"
				>
					<a
						href="#hero"
						className="w-fit font-palanquin font-bold p-2 rounded-full bg-coral-red text-white"
					>
						Goto Top
					</a>
				</div>
			) : (
				<></>
			)}
		</main>
	);
};

export default App;
