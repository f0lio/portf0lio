import Layout from "@components/Layout";

import { TechBox } from "@components/common/Boxes";
import { Description, Title, SubTitle } from "@components/common/Text";
import techs from "../data/techs";

const About = () => {
	return (
		<Layout pageName={"about"}>
			<div>
				<Title>About</Title>
				<Description>
					Consectetur reprehenderit elit tempor labore tempor minim nulla
					officia non quis. Duis anim cupidatat quis elit magna id dolore
					reprehenderit id aliquip consectetur amet dolor. Et commodo fugiat
					elit aute. Eu cupidatat id irure anim.
				</Description>

				<div className="">
					<SubTitle>Technologies</SubTitle>

					<ul className="grid grid-cols-4 py-2">
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
