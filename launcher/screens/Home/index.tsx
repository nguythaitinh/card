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
import { useSnapshot } from 'utils/hook';
import { ThemeState, themeState } from 'utils/state/theme';

import HomeDashboard from './Dashboard';

const AnimatedIBG = Animated.createAnimatedComponent(ImageBackground);

export const HomeScreen: FC = () => {
	const { sizes } = useSnapshot<ThemeState>(themeState);
	const opacity = useSharedValue(0);
	const backgroundUri = { uri: '/dragon-cover.png' };
	const containerStyle = useAnimatedStyle(() => ({
		flex: 1,
		flexDirection: 'row',
		opacity: opacity.value,
	}));
	const panelStyle = {
		backgroundColor: 'rgba(0, 0, 0, 0.2)',
		width: sizes.rightPaneSize,
	};

	useEffect(() => {
		opacity.value = withTiming(1, { duration: 1000 });
	}, []);

	return (
		<AnimatedIBG style={containerStyle} source={backgroundUri}>
			<View style={styles.contentContainer}>
				<TopNavigation />
			</View>
			<View style={panelStyle}>
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
});
