import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
	return (
		<section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
			<div className="flex-1">
				<img
					src={offer}
					width={773}
					height={687}
					alt="special offer"
					className="w-full object-contain"
				/>
			</div>
			<div className="flex flex-1 flex-col w-full">
				<h2 className="font-palanquin text-4xl capitalize font-bold">
					<span className="text-coral-red">Special </span> Offer
				</h2>
				<p className="text-lg mt-4 lg:w-full info-text">
					Ensuring premium comfort and style, our meticulously crafted footwear
					iEmbark on a shopping journey that redefines your experience with
					unbeatable deals. From premier selections to incredible savings, we
					offer unparalleled value that sets us apart.
				</p>
				<p className="text-lg mt-6 lg:w-full info-text">
					Navigate a realm of possibilities designed to fulfill your unique
					desires, surpassing the loftiest expectations. Your journey with us is
					nothing short of exceptional.
				</p>
				<div className="mt-11 gap-4 flex flex-wrap">
					{/* @hover: animation can be 'slide', 'fade', or 'zoom' */}
					<Button
						text="Shop now"
						animation={"slide"}
						bgcolor={"coral-red"}
						iconUrl={arrowRight}
						size={"large"}
					/>
					<Button
						text="Learn more"
						animation={"fade"}
						bgcolor={"white"}
						size={"large"}
						color={"coral-red"}
					/>
				</div>
			</div>
		</section>
	);
};

export default SpecialOffer;
