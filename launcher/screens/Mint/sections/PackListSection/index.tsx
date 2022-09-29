import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '@metacraft/ui';

import { iStyles } from '../../../../utils/styles';

import { packInfo } from './internal';
import ListingItem from './ListingItem';

export const PackListSection: FC = () => {
	return (
		<View style={iStyles.contentContainer}>
			<Text style={styles.packTotal} responsiveSizes={[30, 30, 25, 20]}>
				2390 NFTs
			</Text>
			<Text style={styles.packDescribe}>
				A NFT is all you need to start your journey in Under Realm. Increase
				your chances to win by owning a genenis NFT
			</Text>
			<View style={styles.packListing}>
				{packInfo.map((item) => (
					<ListingItem
						key={item.rarity}
						packRarity={item.rarity}
						packTotal={item.total}
						packRemaining={item.total}
						price={item.price}
					/>
				))}
			</View>
		</View>
	);
};

export default PackListSection;

const styles = StyleSheet.create({
	packTotal: {
		marginVertical: 15,
		textAlign: 'center',
		fontWeight: 'bold',
		color: '#cdc8b5',
	},
	packDescribe: {
		textAlign: 'center',
		paddingHorizontal: 15,
		maxWidth: 650,
		marginHorizontal: 'auto',
	},
	packListing: {
		paddingVertical: 100,
		flexDirection: 'row',
		justifyContent: 'center',
	},
});
