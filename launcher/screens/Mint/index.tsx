import React, { FC } from 'react';
import { AppState, appState } from '@metacraft/ui';
import ScrollLayout from 'components/layouts/Scroll';
import { useSnapshot } from 'utils/hook';

import BannerSection from './sections/BannerSection';
import FaqSection from './sections/FaqSection';
import PackListSection from './sections/PackListSection';
import WhyBuyNftSection from './sections/WhyBuyNftSection';

export const MintScreen: FC = () => {
	const { windowDimensions } = useSnapshot<AppState>(appState);

	return (
		<ScrollLayout>
			<BannerSection dimensions={windowDimensions} />
			<PackListSection />
			<WhyBuyNftSection dimensions={windowDimensions} />
			<FaqSection />
		</ScrollLayout>
	);
};

export default MintScreen;
