import React, { FC } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Text } from '@metacraft/ui';
import CompactLayout from 'components/layouts/Compact';
import UnderRealmButton from 'components/Marketplace/Button';
import { iStyles } from 'utils/styles';

import BoxSellingSection from './sections/BoxSelling';
import HeadingSection from './sections/Heading';

const BrowserMarketplace: FC = () => {
	return (
		<CompactLayout>
			<ScrollView
				contentContainerStyle={[
					iStyles.contentContainer,
					styles.scrollContentContainer,
				]}
			>
				<HeadingSection />
				<BoxSellingSection />
				<Text style={styles.text}>Marketplace</Text>
				<UnderRealmButton title="Login" />
			</ScrollView>
		</CompactLayout>
	);
};

export default BrowserMarketplace;

const styles = StyleSheet.create({
	scrollContentContainer: {
		flex: 1,
		backgroundColor: '#150101',
	},
	text: {
		color: '#fff',
	},
});
