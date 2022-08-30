import { useEffect } from 'react';
import { useSnapshot } from 'valtio';
import { buddyActions, BuddyState, buddyState } from 'utils/state/buddies';

export const useBuddies = (deps = []): BuddyState => {
	const snapshot = useSnapshot<BuddyState>(buddyState);

	useEffect(() => {
		if (snapshot.list.length === 0) {
			buddyActions.fetchBuddies();
		}
	}, deps);

	return snapshot as BuddyState;
};
