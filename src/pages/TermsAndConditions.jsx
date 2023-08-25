import { useLocation, useNavigate } from "react-router-dom";
import { arrowRight } from "../assets/icons";
import Button from "../components/Button";
import { useEffect } from "react";

/* eslint-disable react/no-unescaped-entities */
const TermsAndConditions = () => {
	const navigate = useNavigate();
	const handleClick = () => navigate("/");
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "instant",
		});
	}, [pathname]);

	return (
		<section className=" text-gray-800 max-w-[1440px] pb-6">
			<div
				className="scale-90 mb-4 px-7 py-2 h-12 !font-bold fixed -top-1 backdrop-blur w-full"
				onClick={handleClick}
			>
				<Button
					text="Home"
					animation={"slide"}
					iconUrl={arrowRight}
					bgcolor={"coral-red"}
					size={"small"}
				/>
			</div>
			<div className=" p-8 mt-8">
				<div className="title">
					<h1 className="lg:text-4xl text-2xl font-palanquin font-bold mb-4">
						Flexa Online Shoe Store - Terms of Service
					</h1>
				</div>
				<p className="mb-4">Effective Date: {new Date().toUTCString()}</p>
				<p>
					Welcome to Flexa Online Shoe Store ("Flexa," "we," "us," or "our"). We
					are excited to have you as a valued customer. Before you start
					shopping with us, please carefully review the following Terms of
					Service ("Terms") that govern your use of our website and services. By
					accessing or using Flexa's website and services, you agree to comply
					with these Terms. If you do not agree with these Terms, please do not
					use our website or services.
				</p>
				{/* Section 1 */}
				<h2 className="text-lg font-bold mb-8 mt-6">1. Acceptance of Terms</h2>
				<p>
					By using Flexa's website and services, you affirm that you are of
					legal age to enter into a binding contract and that you have read,
					understood, and agreed to these Terms. If you are using our services
					on behalf of an organization, you represent that you have the
					authority to bind that organization to these Terms.
				</p>

				{/* Section 2 */}
				<h2 className="text-lg font-bold mb-8 mt-6">2. Online Shopping</h2>
				<p>
					a. Product Listings: Flexa offers a wide variety of footwear products
					for sale. Product descriptions, images, and prices are provided for
					your convenience. We strive to ensure that product information is
					accurate and up-to-date, but we do not guarantee the accuracy or
					completeness of such information.
				</p>
				<p>
					b. Pricing: Prices are displayed in the currency of your selected
					region. All prices are subject to change without notice, and such
					changes will not affect orders that have already been placed.
				</p>
				<p>
					c. Order Placement: Placing an order on Flexa's website constitutes an
					offer to purchase the selected products. We reserve the right to
					refuse or cancel any order at our sole discretion, including but not
					limited to orders that appear to be fraudulent or unauthorized.
				</p>
				<p>
					d. Payment: We accept various forms of payment as indicated on our
					website. By providing payment information, you represent and warrant
					that you are authorized to use the payment method and that the
					information is accurate.
				</p>

				{/* Section 3 */}
				<h2 className="text-lg font-bold mb-8 mt-6">3. Shipping and Returns</h2>
				<p>
					a. Shipping: Flexa ships products to addresses within regions
					specified on our website. Shipping costs and estimated delivery times
					are provided during the checkout process. We are not responsible for
					delays in shipping that are beyond our control.
				</p>
				<p>
					b. Returns and Exchanges: We have a return and exchange policy in
					place, which you can find on our website. Please review this policy to
					understand the conditions under which returns and exchanges are
					accepted.
				</p>

				{/* Section 4 */}
				<h2 className="text-lg font-bold mb-8 mt-6">4. User Accounts</h2>
				<p>
					a. Account Creation: To make purchases and access certain features of
					our website, you may need to create a user account. You are
					responsible for maintaining the security of your account credentials
					and for any activity that occurs under your account.
				</p>
				<p>
					b. User Content: If you post, upload, or submit any content to our
					website, such as reviews or comments, you grant Flexa a non-exclusive,
					royalty-free, worldwide, perpetual, and irrevocable right to use,
					reproduce, modify, adapt, publish, translate, distribute, and display
					such content.
				</p>

				{/* Section 5 */}
				<h2 className="text-lg font-bold mb-8 mt-6">5. Privacy</h2>
				<p>
					Your privacy is important to us. Our Privacy Policy outlines how we
					collect, use, and protect your personal information. By using our
					services, you consent to the practices described in the Privacy
					Policy.
				</p>

				{/* Section 6 */}
				<h2 className="text-lg font-bold mb-8 mt-6">
					6. Intellectual Property
				</h2>
				<p>
					All content on the Flexa website, including but not limited to text,
					images, graphics, logos, and software, is protected by intellectual
					property rights owned or licensed by Flexa. You may not use,
					reproduce, modify, or distribute any such content without our prior
					written consent.
				</p>
				<h2 className="text-lg font-bold mb-8 mt-6">
					7. Limitation of Liability
				</h2>
				<p>
					To the extent permitted by law, Flexa shall not be liable for any
					indirect, consequential, incidental, special, or punitive damages
					arising out of or in connection with your use of our website or
					services.
				</p>

				{/* Section 8 */}
				<h2 className="text-lg font-bold mb-8 mt-6">
					8. Governing Law and Dispute Resolution
				</h2>
				<p>
					These Terms shall be governed by and construed in accordance with the
					laws of [Jurisdiction]. Any disputes arising from or relating to these
					Terms shall be resolved through arbitration in accordance with the
					rules of [Arbitration Provider], and the arbitration shall take place
					in [City, State].
				</p>

				{/* Section 9 */}
				<h2 className="text-lg font-bold mb-8 mt-6">9. Changes to Terms</h2>
				<p>
					Flexa reserves the right to modify or update these Terms at any time.
					We will notify you of any material changes by posting the updated
					Terms on our website. Your continued use of our services after such
					changes signifies your acceptance of the modified Terms.
				</p>

				{/* Section 10 */}
				<h2 className="text-lg font-bold mb-8 mt-6">10. Contact Information</h2>
				<p>
					If you have any questions, comments, or concerns about these Terms or
					our services, please contact us at [Contact Email].
				</p>
				<p>
					Thank you for choosing Flexa for your shoe shopping needs. We hope you
					enjoy a great shopping experience with us!
				</p>
			</div>
		</section>
	);
};

export default TermsAndConditions;
