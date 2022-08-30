import { proxy } from 'valtio';
import { ThemeState as LibThemeState } from '@metacraft/ui';

export interface ThemeSizes {
	topNavigationSize: number;
	rightPaneSize: number;
}

export type ThemeState = LibThemeState & {
	sizes: ThemeSizes;
};

export const defaultTheme: ThemeState = {
	colors: {
		primary: '#3772fe',
		background: '#1b2136',
		bg: '#1b2136',
		bgLight: '#1d2237',
		bgLighter: '#252c48',
	},
	sizes: {
		topNavigation: 72,
		leftNavigation: 260,
		topNavigationSize: 72,
		rightPaneSize: 260,
	},
};

export const themeState = proxy<ThemeState>(defaultTheme);
