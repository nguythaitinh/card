import React, { FC } from 'react';
import {
	Image,
	ImageStyle,
	Linking,
	ScaledSize,
	ScrollView,
	StyleSheet,
	View,
} from 'react-native';
import { Hyperlink, Text } from '@metacraft/ui';
import { NftWithToken } from '@metaplex-foundation/js';
import UnderRealmButton from 'launcher/components/Marketplace/Button';

import Card from '../../components/Marketplace/Card';
import resources from '../../utils/resources';

interface Props {
	dimensions: ScaledSize;
	nft: NftWithToken;
}

export const Popup: FC<Props> = ({ dimensions, nft }) => {
	const width = Math.min(dimensions.width - 40, 1000);
	const imageSource = nft.uri.replace('.json', '.png');

	return (
		<View style={[styles.container, { width }]}>
			<Image
				source={resources.marketplace.popupBackground}
				style={styles.background}
			/>
			<Image source={resources.marketplace.popupBorder} style={styles.top} />
			<Image source={resources.marketplace.popupBorder} style={styles.bottom} />
			<Image source={resources.marketplace.popupBorder} style={styles.left} />
			<Image source={resources.marketplace.popupBorder} style={styles.right} />
			<View style={[styles.contentContainer, { width }]}>
				<Text
					responsiveSizes={[20]}
					style={{
						fontWeight: '500',
						marginTop: 30,
						marginBottom: 15,
						textAlign: 'center',
					}}
				>
					You have successfully purchased{' '}
					<Text style={{ color: '#ccb182' }}>1</Text> NFT Card
				</Text>
				<Text style={{ textAlign: 'center', marginBottom: 30 }}>
					Please check your Wallet for the NFT. Chat with us on{' '}
					<Hyperlink
						title="Discord"
						onPress={() => Linking.openURL('https://discord.gg/sXcz9Em4AR')}
					/>{' '}
					if any support needed.
				</Text>
				<ScrollView
					contentContainerStyle={{
						paddingVertical: 20,
						flexDirection: 'row',
						marginHorizontal: 'auto',
					}}
					horizontal
					showsHorizontalScrollIndicator={false}
				>
					<Card
						isCardUp={false}
						animationFlipDisable
						style={{ marginHorizontal: 10 }}
						imageSource={imageSource}
					/>
				</ScrollView>
				<View style={{ marginVertical: 30 }}>
					<Text style={{ textAlign: 'center', fontStyle: 'italic' }}>
						*Some Hero characters visual are not available yet and will be
						revealed later
					</Text>
					{/* <UnderRealmButton
						style={{
							marginHorizontal: 'auto',
							marginTop: 20,
						}}
					>
						<Text
							style={{
								textAlign: 'center',
								paddingVertical: 5,
								paddingHorizontal: 60,
								fontWeight: '500',
							}}
							responsiveSizes={[16]}
						>
							View in my profile
						</Text>
					</UnderRealmButton> */}
				</View>
			</View>
		</View>
	);
};

export default Popup;

const borderVertical = {
	position: 'absolute',
	width: 10,
	top: 0,
	bottom: 0,
} as ImageStyle;

const borderHorizontal = {
	position: 'absolute',
	height: 10,
	left: 0,
	right: 0,
} as ImageStyle;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		position: 'relative',
	},
	background: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
	},
	top: {
		...borderHorizontal,
		top: 0,
	},
	bottom: {
		...borderHorizontal,
		bottom: 0,
	},
	left: {
		...borderVertical,
		left: 0,
	},
	right: {
		...borderVertical,
		right: 0,
	},
	contentContainer: {
		padding: 30,
		position: 'relative',
	},
});
