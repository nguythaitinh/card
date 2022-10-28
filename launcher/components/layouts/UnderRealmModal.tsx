import React, { FC, ReactNode } from 'react';
import {
	Image,
	ImageBackground,
	ImageStyle,
	StyleSheet,
	ViewStyle,
} from 'react-native';
import resources from 'utils/resources';

interface Props {
	style?: ViewStyle;
	children: ReactNode;
}

export const UnderRealmModal: FC<Props> = ({ style, children }) => {
	return (
		<ImageBackground
			source={resources.marketplace.popupBackground}
			style={[styles.container, style]}
		>
			<Image source={resources.marketplace.popupBorder} style={styles.top} />
			<Image source={resources.marketplace.popupBorder} style={styles.bottom} />
			<Image source={resources.marketplace.popupBorder} style={styles.left} />
			<Image source={resources.marketplace.popupBorder} style={styles.right} />
			{children}
		</ImageBackground>
	);
};

export default UnderRealmModal;

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
		padding: 20,
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
});
