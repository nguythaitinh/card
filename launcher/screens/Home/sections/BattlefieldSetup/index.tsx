import React, { FC } from 'react';
import {
	ImageBackground,
	ScaledSize,
	StyleSheet,
	ViewStyle,
} from 'react-native';
import { Text } from '@metacraft/ui';
import UnderRealmButton from 'components/Marketplace/Button';
import { headingSize, sharedStyle } from 'screens/Home/shared';
import resources from 'utils/resources';
import { iStyles } from 'utils/styles';

interface Props {
	dimension: ScaledSize;
}

const BattlefieldSetupSection: FC<Props> = ({ dimension }) => {
	const width = Math.min(dimension.width, iStyles.contentContainer.maxWidth);
	const container = {
		width,
		height: (width * 1033) / 1728,
		alignItems: 'center',
		justifyContent: 'center',
	} as ViewStyle;

	return (
		<ImageBackground
			source={resources.home.battlefieldBackground}
			style={container}
		>
			<Text style={sharedStyle.heading} responsiveSizes={headingSize}>
				Battlefield Setup
			</Text>
			<UnderRealmButton style={styles.button}>
				<Text style={styles.buttonText}>How to play</Text>
			</UnderRealmButton>
		</ImageBackground>
	);
};

export default BattlefieldSetupSection;

const styles = StyleSheet.create({
	button: {
		width: 220,
	},
	buttonText: {
		textAlign: 'center',
		color: '#fff',
	},
});
