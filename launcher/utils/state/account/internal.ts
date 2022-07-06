import { Profile } from 'utils/types';
import { proxy } from 'valtio';

export interface AccountState {
	profile: Profile;
	loading: boolean;
}

export const accountState = proxy<AccountState>({
	profile: {},
	loading: true,
});
