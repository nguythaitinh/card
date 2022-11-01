import React, { FC, useState } from 'react';
import {
	Image,
	LayoutRectangle,
	ScaledSize,
	StyleSheet,
	View,
	ViewStyle,
} from 'react-native';
import { Text } from '@metacraft/ui';
import { idleLayout } from 'utils/helper';
import resources from 'utils/resources';
import { iStyles } from 'utils/styles';

interface Props {
	dimension: ScaledSize;
	responsiveLevel: number;
}

export const GameIntroSection: FC<Props> = ({ dimension, responsiveLevel }) => {
	const [layout, setLayout] = useState<LayoutRectangle>(idleLayout);
	const width = Math.min(dimension.width, iStyles.contentContainer.maxWidth);
	const imageSize = {
		width,
		height: responsiveLevel > 1 ? width * 0.7 : width * 0.35945,
		marginBottom: 20,
	};

	const container = {
		height: layout.height - 130,
		alignItems: 'center',
	} as ViewStyle;

	return (
		<View style={container}>
			<View
				style={[styles.contentContainer, { width }]}
				onLayout={({ nativeEvent }) => {
					setLayout(nativeEvent.layout);
				}}
			>
				<Image source={resources.home.cardsImage} style={imageSize} />
				<Text style={styles.content}>
					Under Realm: Rise of Magic takes place in a chaotic, fragmented world
					of ATEM where human and other races are constantly fighting each
					other, to wrench the endless thirst for power, wealth, and gradually
					take control over ATEM.
				</Text>
				<Text style={styles.content}>
					Under Realm: Rise of Magic takes place in a chaotic, fragmented world
					of ATEM where human and other races are constantly fighting each
					other, to wrench the endless thirst for power, wealth, and gradually
					take control over ATEM. Steel, blood and brute force were the main
					material of the savage battles until mysteriously, mankind discovered
					the long-lost magical scripts that allow them to summon mighty,
					ancient creatures/ entities that can turn the tide in no time. And no
					one wants to be left behind in this race. Adventurers across ATEM are
					desired by factions to discover the forgotten dungeons across this
					continent. Players join the Under Realm as Adventurers who will
					confront each other in the search for the long-lost scripts in hidden
					dungeon across ATEM.
				</Text>
				<Text style={styles.content}>
					Are you ready to discover the forgotten stories of this world,
					Adventurer?
				</Text>
			</View>
		</View>
	);
};

export default GameIntroSection;

const styles = StyleSheet.create({
	contentContainer: {
		position: 'absolute',
		top: -130,
		alignItems: 'center',
		paddingHorizontal: 15,
		paddingBottom: 40,
	},
	content: {
		textAlign: 'center',
		maxWidth: 800,
		paddingBottom: 20,
		color: '#fff',
	},
});
