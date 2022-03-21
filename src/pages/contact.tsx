import { useState } from 'react';
import { Description, SubTitle, Title } from '@components/common/Text';
import Layout from '@components/Layout';

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
		<Layout pageName={'contact'} pageTitle="F0lio - Contact">
			<section className="relative ">
				<Title>Contact</Title>
				<Description>
					Nisi minim officia ea et aliqua voluptate amet aliqua magna aliqua
					nulla.
				</Description>
				<form
					className="z-0 flex w-full flex-col gap-y-4 py-6"
					onSubmit={(e) => handleSubmit(e)}
				>
					<div className="relative rounded py-1 transition-all duration-500 ">
						<div className="absolute -mt-3 px-1 text-xs uppercase tracking-wider">
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
								className="w-100 z-0 mt-2 block h-full w-full rounded-lg border  border-gray-700 bg-transparent px-3 py-3 text-gray-300 outline-none focus:border-gray-600 focus:outline-none dark:border-gray-800 dark:bg-gray-900"
							/>
						</p>
					</div>
					<div className="relative rounded py-1 transition-all duration-500">
						<div className="absolute -mt-3 px-1 text-xs uppercase tracking-wider">
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
								className="w-100 z-0 mt-2 block h-full w-full rounded-lg border  border-gray-700 bg-transparent px-3 py-3 text-gray-300 outline-none focus:border-gray-600 focus:outline-none dark:border-gray-800 dark:bg-gray-900"
							/>
						</p>
					</div>
					<div className="relative rounded py-1 transition-all duration-500 ">
						<div className="absolute -mt-3 px-1 text-xs uppercase tracking-wider">
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
							className="w-100 z-0 mt-2 block h-full w-full rounded-lg border  border-gray-700 bg-transparent px-3 py-3 text-gray-300 outline-none focus:border-gray-600 focus:outline-none dark:border-gray-800 dark:bg-gray-900"
						></textarea>
					</div>

					<button
						onSubmit={(e) => handleSubmit(e)}
						type="submit"
						className="right-0 rounded-lg border border-gray-400 px-6 py-3 font-bold text-gray-400 transition duration-300 ease-in-out hover:border-gray-200 hover:text-gray-200 md:w-32"
					>
						Send
					</button>
				</form>
			</section>
		</Layout>
	);
};

export default Contact;
