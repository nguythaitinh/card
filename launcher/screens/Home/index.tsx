import React, { FC } from 'react';
import ScrollLayout from 'components/layouts/Scroll';
import { iStyles } from 'utils/styles';

import HeadingSection from './sections/Heading';

export const HomeScreen: FC = () => {
	return (
		<ScrollLayout contentContainerStyle={iStyles.contentContainer}>
			<HeadingSection />
		</ScrollLayout>
	);
};

export default HomeScreen;
