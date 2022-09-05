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
import Animated from 'react-native-reanimated';
import { Hoverable } from '@metacraft/ui';
import { idleLayout } from 'utils/helper';
import resources from 'utils/resources';

import { HoveredStyleFunc, useDefaultHoveredStyle } from './shared';

interface Props {
	style?: ViewStyle;
	title?: string;
	texStyle?: TextStyle;
	children?: ReactNode;
	onPress?: () => void;
	useHoveredStyle?: HoveredStyleFunc;
}

const AnimatedView = Animated.createAnimatedComponent(View);

export const UnderRealmButton: FC<Props> = ({
	style,
	title = '',
	texStyle,
	children,
	onPress,
	useHoveredStyle = useDefaultHoveredStyle,
}) => {
	const [layout, setLayout] = useState(idleLayout);
	const source = resources.marketplace.underRealmInteractMaterial.hover;

	const middle = {
		position: 'absolute',
		top: 0,
		left: 20,
		right: 20,
		height: layout.height,
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
		<TouchableOpacity
			style={[styles.container, style]}
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
				{children || <Text style={[styles.titleStyle, texStyle]}>{title}</Text>}
			</View>
			<Hoverable
				style={{ ...middle, left: 0, right: 0 }}
				animatedStyle={useHoveredStyle}
			>
				<AnimatedView />
			</Hoverable>
		</TouchableOpacity>
	);
};

export default UnderRealmButton;

const styles = StyleSheet.create({
	container: {
		paddingVertical: 12,
		paddingHorizontal: 10,
	},
	titleStyle: {
		textAlign: 'center',
		color: '#fff',
	},
});
