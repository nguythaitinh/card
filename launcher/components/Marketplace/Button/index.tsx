import React, { FC, Fragment, ReactNode, useState } from 'react';
import {
	Image,
	ImageStyle,
	StyleSheet,
	Text,
	TextStyle,
	TouchableOpacity,
	View,
	ViewStyle,
} from 'react-native';
import { Hoverable } from '@metacraft/ui';
import { idleLayout } from 'utils/helper';
import resources from 'utils/resources';

interface Props {
	style?: ViewStyle;
	title?: string;
	texStyle?: TextStyle;
	children?: ReactNode;
	onPress?: () => void;
}

export const UnderRealmButton: FC<Props> = ({
	style,
	title = '',
	texStyle,
	children,
	onPress,
}) => {
	const [layout, setLayout] = useState(idleLayout);
	const source = resources.marketplace.underRealmInteractMaterial.normal;

	const middle = {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 20,
		right: 20,
	} as ImageStyle;

	const edge = {
		position: 'absolute',
		top: 0,
		height: layout.height,
		width: layout.height,
	};

	const left = {
		...edge,
		left: 0,
	} as ImageStyle;

	const right = {
		...edge,
		right: 0,
	} as ImageStyle;

	return (
		<Hoverable style={[styles.container, style]}>
			<TouchableOpacity
				onLayout={({ nativeEvent }) => setLayout(nativeEvent.layout)}
				onPress={onPress}
			>
				{layout.width && (
					<Fragment>
						<Image style={middle} source={source.middle} resizeMode="repeat" />
						<Image style={left} source={source.left} />
						<Image style={right} source={source.right} />
					</Fragment>
				)}
				<View>
					{children || (
						<Text style={[{ textAlign: 'center' }, texStyle]}>{title}</Text>
					)}
				</View>
			</TouchableOpacity>
		</Hoverable>
	);
};

export default UnderRealmButton;

const styles = StyleSheet.create({
	container: {
		paddingVertical: 12,
		paddingHorizontal: 10,
	},
});
