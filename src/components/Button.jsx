const Button = ({
	iconUrl,
	text,
	bgcolor,
	color,
	size,
	animation,
	fullWidth,
}) => {
	const buttonClasses = `flex justify-center items-center gap-2 px-7 py-4 border font-montserrat leading-none rounded-full border-coral-red bg-${bgcolor} text-${
		color ? color : "white"
	} ${size === "large" ? "text-lg" : "text-base"} ${
		fullWidth && "w-full"
	} transform transition-all duration-300 ${
		animation === "slide"
			? "hover:translate-x-2"
			: animation === "fade"
			? "hover:opacity-60"
			: animation === "zoom"
			? "hover:scale-110"
			: ""
	}`;
	// @hover: animation can be 'slide', 'fade', or 'zoom'
	return (
		<button className={buttonClasses}>
			{text}
			{iconUrl && (
				<img src={iconUrl} className="ml-2 rounded-full w-5 h-5" alt="icon" />
			)}
		</button>
	);
};

export default Button;
