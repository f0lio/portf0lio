import { Description, Title } from '@components/common/Text';
import Layout from '@components/Layout';
import { useState } from 'react';

import { BiSend as SendIcon } from 'react-icons/bi';
import { FaTwitter } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

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
				<div className="flex flex-col justify-center gap-x-3 md:flex-row">
					<form
						className="z-0 col-span-4 flex w-full flex-col gap-y-4 py-6"
						onSubmit={(e) => handleSubmit(e)}
					>
						<div className="relative rounded py-1 transition-all duration-500 ">
							<div className="absolute -mt-3 px-1 text-xs uppercase tracking-wider ">
								<label
									htmlFor="name"
									className="font-medium text-gray-400 hover:text-primary-3"
								>
									Full Name
								</label>
							</div>
							<p>
								<input
									onChange={(e) => handleChange(e)}
									name="name"
									id="name"
									autoComplete="false"
									tabIndex={0}
									type="text"
									className="form-input z-0 mt-2 block md:w-96"
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
									tabIndex={0}
									type="text"
									className="form-input z-0 mt-2 block md:w-96"
								/>
							</p>
						</div>
						<div className="relative rounded py-1 transition-all duration-500 ">
							<div className="absolute -mt-3 px-1 text-xs uppercase tracking-wider">
								<p>
									<label
										htmlFor="message"
										className="font-medium text-gray-400"
									>
										Message
									</label>
								</p>
							</div>

							<textarea
								onChange={(e) => handleChange(e)}
								name="message"
								id="message"
								cols={10}
								rows={5}
								className="form-input z-0 mt-2 block md:w-96"
							></textarea>
						</div>

						<button
							onSubmit={(e) => handleSubmit(e)}
							type="submit"
							className="group flex w-32 items-center justify-center gap-x-4
							rounded-lg border border-gray-500 px-0 py-3
							font-bold text-gray-400 transition duration-200 ease-in-out
							hover:border-primary-3 hover:text-primary-3 focus:border-opacity-70"
						>
							Send
							<SendIcon className="top-2 right-2 duration-150 group-hover:translate-x-1" />
						</button>
					</form>
					<div
						className="flex w-full flex-row justify-between gap-x-4 px-8 pt-8 
								text-secondary md:flex-col md:justify-start md:gap-y-4 md:px-0"
					>
						<a
							href="mailto:contact@f0lio.me"
							target={'_blank'}
							className="flex items-center gap-x-3 hover:text-primary-3 md:px-10"
						>
							<HiMail />
							<p>contact@f0lio.me</p>
						</a>
						<a
							href="www.twitte.com/f0lio"
							target={'_blank'}
							className="flex items-center gap-x-3 hover:text-primary-3 md:px-10"
						>
							<FaTwitter />
							<p>F0lio</p>
						</a>
						<a
							href="www.github.com/f0lio"
							target={'_blank'}
							className="flex items-center gap-x-3 hover:text-primary-3 md:px-10"
						>
							<FaGithub />
							<p>F0lio</p>
						</a>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default Contact;
