import { proxy } from 'valtio';

export interface Profile {
	id?: string;
	address?: string;
	name?: string;
	avatarUrl?: string;
	githubUrl?: string;
	mineral?: number;
}

interface AccountState {
	profile: Profile;
	loading: boolean;
}

export const accountState = proxy<AccountState>({
	profile: {},
	loading: true,
});
