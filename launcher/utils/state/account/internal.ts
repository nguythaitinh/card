import { Profile } from 'utils/types/graphql';
import { proxy } from 'valtio';

export interface AccountState {
	profile: Profile;
	loading: boolean;
}

export const accountState = proxy<AccountState>({
	profile: {} as never,
	loading: true,
});
