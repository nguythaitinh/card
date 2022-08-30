import { StyleSheet } from 'react-native';
import { RootParamList } from 'stacks/Browser/shared';

export const styles = StyleSheet.create({
	container: {},
	contentContainer: {
		paddingHorizontal: 12,
		alignItems: 'center',
		flexDirection: 'row',
	},
	branding: {
		color: '#FFFFFF',
		fontSize: 18,
		fontWeight: '500',
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
	// Icon: FC<NavIconProps>;
	title: string;
	route: {
		name: keyof RootParamList;
	};
}

export const navigationItems: NavigationConfig[] = [
	{
		title: 'HOME',
		route: {
			name: 'Home',
		},
	},
	{
		title: 'PROFILE',
		route: {
			name: 'AuthResponse',
		},
	},
	{
		title: 'COLLECTION',
		route: {
			name: 'AuthResponse',
		},
	},
];
