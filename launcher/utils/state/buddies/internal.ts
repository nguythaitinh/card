import { proxy } from 'valtio';
import { Profile } from 'utils/types/graphql';

export interface BuddyState {
	list: Profile[];
	loading: boolean;
}

export const buddyState = proxy<BuddyState>({
	list: [],
	loading: true,
});
