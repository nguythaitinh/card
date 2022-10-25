import React, { FC } from 'react';
import ScrollLayout from 'components/layouts/Scroll';
import { iStyles } from 'utils/styles';

export const HomeScreen: FC = () => {
	return (
		<ScrollLayout
			contentContainerStyle={iStyles.contentContainer}
		></ScrollLayout>
	);
};

export default HomeScreen;
