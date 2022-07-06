import { FC, ReactNode } from 'react';
import {
	StyleProp,
	StyleSheet,
	TextStyle,
	TouchableOpacity,
	ViewStyle,
} from 'react-native';
import Animated, {
	SharedValue,
	useAnimatedStyle,
	withSpring,
} from 'react-native-reanimated';
import Hoverable from 'components/Hoverable';
import Text from 'components/Text';
import { useSnapshot } from 'utils/hook';
import { ThemeState, themeState } from 'utils/state/theme';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const styles = StyleSheet.create({
	container: {},
});

interface Props {
	style?: StyleProp<ViewStyle>;
	children?: ReactNode;
	title?: string;
	titleStyle?: StyleProp<TextStyle>;
	onPress?: () => void;
}

export const Hyperlink: FC<Props> = ({
	style,
	children,
	title,
	titleStyle,
	onPress,
}) => {
	const { colors } = useSnapshot<ThemeState>(themeState);
	const linkStyle = [titleStyle, { color: colors.primary }];

	const useHoveredStyle = (isHovered: SharedValue<boolean>) => {
		return useAnimatedStyle(() => {
			return {
				opacity: withSpring(isHovered.value ? 0.5 : 1),
			};
		}, []);
	};

	return (
		<Hoverable
			style={[styles.container, style]}
			animatedStyle={useHoveredStyle}
		>
			<AnimatedTouchable style={styles.container} onPress={onPress}>
				{children || <Text style={linkStyle}>{title}</Text>}
			</AnimatedTouchable>
		</Hoverable>
	);
};

export default Hyperlink;
