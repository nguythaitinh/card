import { proxy } from 'valtio';

interface AppState {
	counter: number;
	privacy: boolean;
}

export const appState = proxy<AppState>({
	counter: 0,
	privacy: false,
});
