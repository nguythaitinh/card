import { FC, useEffect } from 'react';
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated';
import TopNavigation from 'components/Navigation/TopNavigation';
export const HomeScreen: FC = () => {
	const opacity = useSharedValue(0);
	const containerStyle = useAnimatedStyle(() => ({
		flex: 1,
		opacity: opacity.value,
	}));

	useEffect(() => {
		opacity.value = withTiming(1, { duration: 1000 });
	}, []);

	return (
		<Animated.View style={containerStyle}>
			<TopNavigation />
		</Animated.View>
	);
};

export default HomeScreen;
