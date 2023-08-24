import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { shoes, statistics } from "../constants";

const Hero = () => {
	const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

	return (
		<section
			id="home"
			className="max-container w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 "
		>
			<div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
				<p className="font-montserrat text-xl text-coral-red ">
					Our Summer collections
				</p>
				<h1 className="font-palanquin mt-10 text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
					<span className="xl:bg-white xl:whitespace-nowrap relative lg:z-10 pr-10 ">
						The New Arrival
					</span>
					<br />
					<span className="text-coral-red inline-block mt-3">Flexa </span> Shoes
				</h1>
				<p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
					Discover stylish Flexa arrivals, quality comfort, and innovation for
					your active life.
				</p>
				{/* @hover: animation can be 'slide', 'fade', or 'zoom' */}
				<Button
					text="Shop Now"
					animation={"slide"}
					iconUrl={arrowRight}
					bgcolor={"coral-red"}
					size={"large"}
				/>
				<div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
					{statistics.map((stat, i) => (
						<div key={i + stat.value}>
							<p className="text-4xl font-palanquin font-bold">{stat.value}</p>
							<p className="leading-7 font-montserrat text-slate-gray">
								{stat.label}
							</p>
						</div>
					))}
				</div>
			</div>

			<div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
				<img
					src={bigShoeImg}
					alt="shoe"
					width={610}
					height={500}
					className="object-contain "
				/>
				<div className=" flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
					{shoes.map((shoe, i) => (
						<div key={i + shoe.thumbnail}>
							<ShoeCard
								imgUrl={shoe}
								changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
								bigShoeImg={bigShoeImg}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Hero;
