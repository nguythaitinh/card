import { useCallback, useEffect } from 'react';
import { Hub, HubCallback } from '@aws-amplify/core';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootParamList } from 'stacks/Browser/shared';
import { useSnapshot } from 'utils/hook';
import { accountActions } from 'utils/state/account';
import { ThemeState, themeState } from 'utils/state/theme';

interface InitConfig {
	withProfileFetch: boolean;
	onSignIn?: () => void;
	onSignOut?: () => void;
}

export const useAppInit = ({
	withProfileFetch,
	onSignIn,
	onSignOut,
}: InitConfig): void => {
	const onAuth = useCallback<HubCallback>(({ payload: { event, data } }) => {
		if (event === 'signIn' && data?.username) {
			accountActions.syncProfile();
			onSignIn?.();
		} else if (event === 'signOut') {
			onSignOut?.();
		}
	}, []);

	useEffect(() => {
		if (withProfileFetch) accountActions.syncProfile();
		Hub.listen('auth', onAuth);

		return () => Hub.remove('auth', onAuth);
	}, []);
};

export const useRootNavigation = (): StackNavigationProp<RootParamList> => {
	return useNavigation<StackNavigationProp<RootParamList>>();
};

export const useTheme = (): ThemeState => {
	return useSnapshot(themeState);
};
