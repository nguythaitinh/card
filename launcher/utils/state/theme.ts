import { ThemeState as LibThemeState } from '@cocrafts/metacraft-ui';
import { proxy } from 'valtio';

export interface ThemeSizes {
	topNavigationSize: number;
	leftNavigationSize: number;
}

export type ThemeState = LibThemeState & {
	sizes: ThemeSizes;
};

export const defaultTheme: ThemeState = {
	colors: {
		primary: '#3772fe',
		bg: '#1b2136',
		bgLight: '#1d2237',
		bgLighter: '#252c48',
	},
	sizes: {
		topNavigationSize: 48,
		leftNavigationSize: 70,
	},
};

export const themeState = proxy<ThemeState>(defaultTheme);
