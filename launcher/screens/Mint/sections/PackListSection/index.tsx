import React, { FC } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Text } from '@metacraft/ui';
import { packList, PackStats } from 'screens/Mint/shared';
import { navigate } from 'stacks/Browser/shared';
import { iStyles } from 'utils/styles';

import PackBundle from './PackBundle';

export const PackListSection: FC = () => {
	const onPackPress = (pack: PackStats) => {
		navigate('Mint', { screen: 'DetailPack', params: { id: pack.route } });
	};

	return (
		<View style={iStyles.contentContainer}>
			<Text style={styles.packTotal} responsiveSizes={[30, 30, 25, 20]}>
				2390 NFTs
			</Text>
			<Text style={styles.packDescribe}>
				A NFT is all you need to start your journey in Under Realm. Increase
				your chances to win by owning a genesis NFT
			</Text>
			<ScrollView contentContainerStyle={styles.packListing} horizontal>
				{packList.map((item) => (
					<PackBundle key={item.route} item={item} onPress={onPackPress} />
				))}
			</ScrollView>
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
		marginHorizontal: 'auto',
		paddingVertical: 100,
		flexDirection: 'row',
		justifyContent: 'center',
	},
});
