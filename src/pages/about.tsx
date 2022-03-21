import Layout from '@components/Layout';

import { TechBox } from '@components/common/Boxes';
import { Description, Title, SubTitle } from '@components/common/Text';
import { techs } from '@data/index';

const About = () => {
	return (
		<Layout pageName={'about'} pageTitle="F0lio - About">
			<div>
				<Title>About</Title>
				<div className="py-2">
					<Description>
						Consectetur reprehenderit elit tempor labore tempor minim nulla
						officia non quis. Duis anim cupidatat quis elit magna id dolore
						reprehenderit id aliquip consectetur amet dolor. Et commodo fugiat
						elit aute. Eu cupidatat id irure anim.
					</Description>
				</div>
				<div className="">
					<SubTitle>Technologies</SubTitle>
					<ul className="grid grid-cols-2 flex-wrap gap-4 py-4 sm:grid-cols-3 md:grid-cols-4">
						{/* <IconContext.Provider value={{ color: "blue", className: "" }}> */}
						{techs.map((t, key) => (
							<TechBox tech={t} key={key} />
						))}
						{/* </IconContext.Provider> */}
					</ul>
				</div>
			</div>
		</Layout>
	);
};
export default About;
