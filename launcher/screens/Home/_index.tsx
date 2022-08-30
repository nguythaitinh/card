import { FC, useEffect } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated';
import AuthenticationBundle from 'components/AuthenticationBundle';
import Buddies from 'components/Buddies';
import TopNavigation from 'components/Navigation';

import HomeDashboard from './Dashboard';

const AnimatedIBG = Animated.createAnimatedComponent(ImageBackground);

export const HomeScreen: FC = () => {
	const opacity = useSharedValue(0);
	const backgroundUri = { uri: '/dragon-cover.png' };

	const containerStyle = useAnimatedStyle(() => ({
		flex: 1,
		flexDirection: 'row',
		opacity: opacity.value,
	}));

	useEffect(() => {
		opacity.value = withTiming(1, { duration: 1000 });
	}, []);

	return (
		<AnimatedIBG style={containerStyle} source={backgroundUri}>
			<View style={styles.contentContainer}>
				<TopNavigation style={styles.bottomBorder} />
				<HomeDashboard />
			</View>
			<View style={styles.rightPaneContainer}>
				<AuthenticationBundle style={styles.bottomBorder} />
				<Buddies />
			</View>
		</AnimatedIBG>
	);
};

export default HomeScreen;

export const styles = StyleSheet.create({
	contentContainer: {
		flex: 1,
	},
	bottomBorder: {
		borderBottomWidth: 1,
		borderColor: 'rgba(255, 255, 255, 0.025)',
	},
	rightPaneContainer: {
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		width: 280,
	},
});
