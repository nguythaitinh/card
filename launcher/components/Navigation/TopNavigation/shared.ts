import { FC } from 'react';
import { StyleSheet } from 'react-native';
import DiamondIcon from 'components/icons/Diamond';
import ShapesIcon from 'components/icons/Shapes';
import { RootParamList } from 'stacks/Browser/shared';

export const navigationHeight = 64;

export const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
	},
	contentContainer: {
		paddingHorizontal: 12,
		height: navigationHeight,
		alignItems: 'center',
		flexDirection: 'row',
	},
	branding: {
		color: '#FFFFFF',
		fontSize: 20,
		paddingRight: 12,
	},
	navContainer: {
		flex: 1,
		flexDirection: 'row',
	},
});

export interface NavIconProps {
	size?: number;
	color?: string;
}

export interface NavigationConfig {
	Icon: FC<NavIconProps>;
	title: string;
	route: {
		name: keyof RootParamList;
	};
}

export const navigationItems: NavigationConfig[] = [
	{
		Icon: ShapesIcon,
		title: 'build',
		route: {
			name: 'Home',
		},
	},
	{
		Icon: DiamondIcon,
		title: 'marketplace',
		route: {
			name: 'AuthResponse',
		},
	},
];
