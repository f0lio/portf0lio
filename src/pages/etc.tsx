import React from 'react';
import Layout from '@components/Layout';
import { Title, SubTitle, Description } from '@components/common/Text';
import { MaxWidthWrapper } from '@components/common/Containers';

const Etc = () => {
	return (
		<Layout pageName={'etc'} pageTitle="F0lio - Etc">
			<MaxWidthWrapper>
				<Title>Etc</Title>
				<Description>stuff you may like</Description>
			</MaxWidthWrapper>
		</Layout>
	);
};
export default Etc;
