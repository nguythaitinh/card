import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { RootParamList } from '../../stacks/Browser/shared';
import DiamondIcon from '../icons/Diamond';
import ShapesIcon from '../icons/Shapes';

export const navigationHeight = 64;

export const styles = StyleSheet.create({
	container: {},
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
		paddingLeft: 24,
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
		title: 'HOME',
		route: {
			name: 'Home',
		},
	},
	{
		Icon: DiamondIcon,
		title: 'PROFILE',
		route: {
			name: 'AuthResponse',
		},
	},
	{
		Icon: DiamondIcon,
		title: 'COLLECTION',
		route: {
			name: 'AuthResponse',
		},
	},
];
