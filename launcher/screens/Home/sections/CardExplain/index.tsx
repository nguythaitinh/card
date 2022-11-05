import React, { FC } from 'react';
import {
	Image,
	ImageBackground,
	Linking,
	ScaledSize,
	StyleSheet,
	View,
} from 'react-native';
import { Text } from '@metacraft/ui';
import UnderRealmButton from 'components/Marketplace/Button';
import { headingSize, sharedStyle } from 'screens/Home/shared';
import resources from 'utils/resources';

interface Props {
	dimension: ScaledSize;
	responsiveLevel: number;
}

export const CardExplainSection: FC<Props> = ({
	dimension,
	responsiveLevel,
}) => {
	const imageWidth = Math.min(dimension.width, 992) - 30;
	const imageStyle = {
		width: imageWidth,
		height: imageWidth * 0.7268,
	};
	const heightRatio = [1.2, 1.4, 1.5, 2][responsiveLevel];
	const onMintPress = () =>
		Linking.openURL('https://underrealm.stormgate.io/mint');

	return (
		<View style={styles.container}>
			<ImageBackground
				source={resources.home.cardExplainBackground}
				style={[styles.background, { height: imageWidth * heightRatio }]}
			>
				<View>
					<Text style={sharedStyle.heading} responsiveSizes={headingSize}>
						Collect Cards, Build Decks
					</Text>
					<Text style={styles.subText}>
						Whether they are Hero or Spells, it&rsquo;s your own strategy to
						choose your Class and Elemental. Build your unique strategy, own it
						and become the best Adventurer at ATEM. The battlefield is all
						yours!
					</Text>
				</View>
				<Image source={resources.home.cardExplain} style={imageStyle} />
				<View style={styles.buttonContainer}>
					<UnderRealmButton style={styles.button} onPress={onMintPress}>
						<Text style={sharedStyle.buttonText}>Mint NFT</Text>
					</UnderRealmButton>
					{/* <UnderRealmButton
						isSubButton
						style={styles.button}
						onPress={onMintPress}
					>
						<Text style={sharedStyle.buttonText}>Explore Card</Text>
					</UnderRealmButton> */}
				</View>
			</ImageBackground>
		</View>
	);
};

export default CardExplainSection;

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
	},
	subText: {
		marginBottom: 20,
		textAlign: 'center',
		color: '#fff',
		maxWidth: 800,
	},
	background: {
		paddingHorizontal: 15,
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		flexWrap: 'wrap',
	},
	button: {
		width: 220,
		margin: 15,
	},
});
