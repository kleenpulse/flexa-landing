import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
	return (
		<section
			id="about-us"
			className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
		>
			<div className="flex flex-1 flex-col">
				<h2 className="font-palanquin text-4xl capitalize font-bold">
					We Provide You
					<br />
					<span className="text-coral-red">Super Quality </span> Shoes
				</h2>
				<p className="text-lg mt-4 lg:max-w-lg info-text">
					Ensuring premium comfort and style, our meticulously crafted footwear
					is designed to elevate your experience, providing you with unmatched
					quality, innovation, and a touch of elegance.
				</p>
				<p className="text-lg mt-6 lg:max-w-lg info-text">
					Our dedication to detail and excellence ensures your satisfaction
				</p>
				<div className="mt-11">
					{/* @hover: animation can be 'slide', 'fade', or 'zoom' */}
					<Button
						text="View details"
						animation={"zoom"}
						bgcolor={"coral-red"}
						size={"large"}
					/>
				</div>
			</div>

			<div className="flex flex-1 justify-center items-center ">
				<img src={bigShoe1} width={600} height={600} alt="super quality" />
			</div>
		</section>
	);
};

export default SuperQuality;
