import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
	return (
		<section id="reviews" className="max-container">
			<h2 className="font-palanquin text-4xl text-center capitalize font-bold">
				What our
				<span className="text-coral-red"> Customer </span> Say
			</h2>
			<p className="text-lg m-auto max-w-lg mt-4 text-center  info-text">
				Hear genuine stories from our satisfied customers about their
				exceptional experiences with us.
			</p>
			<div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
				{reviews.map((review) => (
					<ReviewCard
						key={review.customerName}
						imgURL={review.imgURL}
						customerName={review.customerName}
						rating={review.rating}
						feedback={review.feedback}
					/>
				))}
			</div>
		</section>
	);
};

export default CustomerReviews;
