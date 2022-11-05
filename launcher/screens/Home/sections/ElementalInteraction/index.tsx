import React, { FC } from 'react';
import { Image, ImageBackground, StyleSheet } from 'react-native';
import { Text } from '@metacraft/ui';
import UnderRealmButton from 'components/Marketplace/Button';
import { headingSize, sharedStyle } from 'screens/Home/shared';
import resources from 'utils/resources';

interface Props {
	responsiveLevel: number;
}

const ElementalInteractionSection: FC<Props> = ({ responsiveLevel }) => {
	const visualSize = [700, 600, 500, 360][responsiveLevel];
	const backgroundHeight = visualSize + 300;
	const backgroundImageSize = {
		width: backgroundHeight * 1.4085,
		height: backgroundHeight,
	};
	const visualImageSize = {
		width: visualSize,
		height: visualSize,
		marginVertical: 40,
	};

	return (
		<ImageBackground
			style={styles.container}
			source={resources.home.elementalInteractionFirstBackground}
		>
			<ImageBackground
				source={resources.home.elementalInteractionSecondBackground}
				style={[backgroundImageSize, styles.imageContainer]}
			>
				<Text
					style={[sharedStyle.heading, styles.heading, styles.blackText]}
					responsiveSizes={headingSize}
				>
					Elemental Interaction
				</Text>
				<Text style={styles.blackText}>
					Generating vs. overcoming interaction
				</Text>
				<Text style={styles.blackText}>
					Generating vs. overcoming interaction
				</Text>
				<Image
					source={resources.home.elementalInteractionVisual}
					style={visualImageSize}
				/>
				<UnderRealmButton style={styles.button}>
					<Text style={sharedStyle.buttonText}>Explore more</Text>
				</UnderRealmButton>
			</ImageBackground>
		</ImageBackground>
	);
};

export default ElementalInteractionSection;

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
	},
	heading: {
		fontFamily: 'Volkhov',
	},
	blackText: {
		color: '#000',
	},
	imageContainer: {
		paddingHorizontal: 15,
		paddingVertical: 40,
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		width: 200,
	},
});
