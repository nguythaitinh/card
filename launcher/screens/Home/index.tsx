import { FC, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated';
import AuthenticationBundle from 'components/AuthenticationBundle';
import Buddies from 'components/Buddies';

import TopNavigation from '../../components/Navigation';

export const HomeScreen: FC = () => {
	const opacity = useSharedValue(0);
	const containerStyle = useAnimatedStyle(() => ({
		flex: 1,
		flexDirection: 'row',
		opacity: opacity.value,
	}));

	useEffect(() => {
		opacity.value = withTiming(1, { duration: 1000 });
	}, []);

	return (
		<Animated.View style={containerStyle}>
			<View style={styles.contentContainer}>
				<TopNavigation />
			</View>
			<View>
				<AuthenticationBundle />
				<Buddies />
			</View>
			{/*<View style={styles.innerContainer}>*/}
			{/*</View>*/}
		</Animated.View>
	);
};

export default HomeScreen;

export const styles = StyleSheet.create({
	innerContainer: {
		flex: 1,
		flexDirection: 'row',
		paddingTop: 50,
	},
	contentContainer: {
		flex: 1,
	},
});
