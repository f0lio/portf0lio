import { useState } from "react";
import { Description, SubTitle, Title } from "@components/common/Text";
import Layout from "@components/Layout";

const Contact = () => {
	const [contactInfo, setContactInfo] = useState({});

	const handleChange = (e) => {
		setContactInfo({
			...contactInfo,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log(contactInfo);
	};

	return (
		<Layout pageName={"contact"} pageTitle="F0lio - Contact">
			<section className="relative ">
				<Title>Contact</Title>
				<Description>
					Nisi minim officia ea et aliqua voluptate amet aliqua magna aliqua
					nulla.
				</Description>
				<form
					className="z-0 flex flex-col w-full py-6 gap-y-4"
					onSubmit={(e) => handleSubmit(e)}
				>
					<div className="relative py-1 transition-all duration-500 rounded ">
						<div className="absolute px-1 -mt-3 text-xs tracking-wider uppercase">
							<label htmlFor="name" className="font-medium text-gray-400">
								Full Name
							</label>
						</div>
						<p>
							<input
								onChange={(e) => handleChange(e)}
								name="name"
								id="name"
								autoComplete="false"
								tabIndex="0"
								type="text"
								className="block z-0 w-full h-full px-3 py-3 mt-2 bg-transparent  text-gray-300 border rounded-lg outline-none w-100 dark:bg-gray-900 dark:border-gray-800 focus:border-gray-600 border-gray-700 focus:outline-none"
							/>
						</p>
					</div>
					<div className="relative py-1 transition-all duration-500 rounded">
						<div className="absolute px-1 -mt-3 text-xs tracking-wider uppercase">
							<p>
								<label htmlFor="email" className="font-medium text-gray-400">
									Email
								</label>
							</p>
						</div>
						<p>
							<input
								onChange={(e) => handleChange(e)}
								name="email"
								id="email"
								autoComplete="false"
								tabIndex="0"
								type="text"
								className="block z-0 w-full h-full px-3 py-3 mt-2 bg-transparent  text-gray-300 border rounded-lg outline-none w-100 dark:bg-gray-900 dark:border-gray-800 focus:border-gray-600 border-gray-700 focus:outline-none"
							/>
						</p>
					</div>
					<div className="relative py-1 transition-all duration-500 rounded ">
						<div className="absolute px-1 -mt-3 text-xs tracking-wider uppercase">
							<p>
								<label htmlFor="message" className="font-medium text-gray-400">
									Message
								</label>
							</p>
						</div>

						<textarea
							onChange={(e) => handleChange(e)}
							name="message"
							id="message"
							cols="10"
							rows="5"
							className="block z-0 w-full h-full px-3 py-3 mt-2 bg-transparent  text-gray-300 border rounded-lg outline-none w-100 dark:bg-gray-900 dark:border-gray-800 focus:border-gray-600 border-gray-700 focus:outline-none"
						></textarea>
					</div>

					<button
						onSubmit={(e) => handleSubmit(e)}
						type="submit"
						className="right-0 px-6 py-3 font-bold text-gray-400 transition duration-300 ease-in-out border border-gray-400 rounded-lg md:w-32 hover:border-gray-200 hover:text-gray-200"
					>
						Send
					</button>
				</form>
			</section>
		</Layout>
	);
};

export default Contact;
