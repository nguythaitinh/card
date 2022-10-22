import React, { FC, ReactNode } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import Animated, {
	useAnimatedScrollHandler,
	useAnimatedStyle,
	useDerivedValue,
	useSharedValue,
} from 'react-native-reanimated';
import InternalNavigation from 'components/Navigation/Internal';
import { navigationHeight } from 'components/Navigation/shared';
import StormNavigation from 'components/Navigation/Storm';

interface Props {
	children?: ReactNode;
	style?: ViewStyle;
	contentContainerStyle?: ViewStyle;
}

export const ScrollLayout: FC<Props> = ({ children, style }) => {
	const scrollOffset = useSharedValue(0);
	const translate = useDerivedValue(() => {
		return scrollOffset.value > navigationHeight.storm
			? navigationHeight.storm
			: scrollOffset.value;
	});
	const scrollHandler = useAnimatedScrollHandler({
		onScroll: ({ contentOffset }) => {
			scrollOffset.value = contentOffset.y;
		},
	});

	const navigationStyle = useAnimatedStyle(() => ({
		zIndex: 1,
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		transform: [{ translateY: -translate.value }],
	}));

	return (
		<View style={styles.container}>
			<Animated.View style={navigationStyle}>
				<StormNavigation />
				<InternalNavigation />
			</Animated.View>
			<Animated.ScrollView
				style={[styles.contentContainer, style]}
				onScroll={scrollHandler}
				showsVerticalScrollIndicator={false}
				scrollEventThrottle={5}
			>
				{children}
			</Animated.ScrollView>
		</View>
	);
};

export default ScrollLayout;

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	contentContainer: {},
	navContainer: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
	},
});
