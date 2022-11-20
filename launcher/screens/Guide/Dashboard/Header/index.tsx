import React, { FC, useEffect, useState } from 'react';
import {
	Dimensions,
	ImageBackground,
	StyleSheet,
	Text,
	View,
} from 'react-native';

import resources from '../../../../utils/resources';

import Icon from './Icon';

const labels = {
	heading: 'How To Play',
	subHeading:
		'Under Realm is a strategy card game that focus heavily on grand strategy so understanding the Game rules carefully can help you the 1st understanding on how to setup our Battlefield',
};

const headingBackgroundRatio = 404 / 1296;

export enum ViewType {
	Battlefield,
	Play,
	Card,
}

const Header: FC = () => {
	const window = Dimensions.get('window');

	const [dimensions, setDimensions] = useState({ window });
	const [activeIconIndex, setActiveIconIndex] = useState(0);

	useEffect(() => {
		const subscription = Dimensions.addEventListener('change', ({ window }) => {
			setDimensions({ window });
		});
		return () => subscription?.remove();
	});

	const headingBackgroundStyle = {
		height: dimensions.window.width * headingBackgroundRatio,
	};
	return (
		<ImageBackground
			source={resources.guide.headingBackground}
			resizeMode="cover"
			style={[styles.headingBackground, headingBackgroundStyle]}
		>
			<Text style={styles.heading}>{labels.heading}</Text>
			<Text style={styles.subHeading}>{labels.subHeading}</Text>
			<View style={styles.icons}>
				<Icon type={ViewType.Battlefield} />
				<Icon type={ViewType.Play} />
				<Icon type={ViewType.Card} />
			</View>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	headingBackground: {
		width: '100%',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	heading: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#fff',
		fontFamily: 'Volkhov',
	},
	subHeading: {
		fontSize: 10,
		color: '#EBEBEB',
		textAlign: 'center',
		maxWidth: 800,
		marginHorizontal: 24,
	},
	icons: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default Header;
