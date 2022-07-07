import { graphQlClient } from 'utils/graphql';
import * as queries from 'utils/graphql/query';
import { extractJwt } from 'utils/lib/auth';
import { Profile } from 'utils/types/graphql';

import { accountState } from './internal';

export const syncProfile = async (): Promise<Profile | null> => {
	const jwt = await extractJwt();
	accountState.loading = !!jwt;

	if (!jwt) return null;

	try {
		const { data } = await graphQlClient.query({ query: queries.profile });
		const profile = data?.profile || {};
		accountState.profile = profile;

		return profile;
	} catch (e) {
		console.log(e);
	} finally {
		accountState.loading = false;
	}

	return null;
};

export const clearProfile = (): void => {
	accountState.profile = {} as never;
};
