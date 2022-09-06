import { ViewStyle } from 'react-native';
import {
	AnimatedStyleProp,
	SharedValue,
	useAnimatedStyle,
	withTiming,
} from 'react-native-reanimated';

export type HoveredStyleFunc = (
	isHoverd: SharedValue<boolean>,
) => AnimatedStyleProp<ViewStyle>;

export const useDefaultHoveredStyle: HoveredStyleFunc = (isHovered) =>
	useAnimatedStyle(() => ({
		backgroundColor: '#000',
		opacity: withTiming(isHovered.value ? 0 : 0.2, { duration: 120 }),
	}));
