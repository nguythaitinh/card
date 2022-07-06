import Auth, { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { ICredentials } from '@aws-amplify/core';

import config from './awsConfig';
import {
	AuthError,
	ChallengedUser,
	platformOptions,
	redirectOrigin,
	simpleId,
} from './internal';

const {
	region,
	userPoolId,
	userPoolWebClientId,
	cognitoAuthDomain,
	cognitoAuthScopes,
} = config;

Auth.configure({
	region,
	userPoolId,
	userPoolWebClientId,
	authenticationFlowType: 'CUSTOM_AUTH',
	oauth: {
		...platformOptions,
		domain: cognitoAuthDomain,
		scope: cognitoAuthScopes,
		redirectSignIn: `${redirectOrigin}/dashboard`,
		redirectSignOut: `${redirectOrigin}/authentication`,
		responseType: 'code',
	},
});

export const extractJwt = async (): Promise<string | null> => {
	try {
		const session = await Auth.currentSession();

		if (session?.isValid()) {
			const token = await session.getIdToken();
			return token.getJwtToken();
		}
	} catch (error) {
		console.log(error);
	}

	return null;
};

export const googleSignIn = (): Promise<ICredentials> => {
	return Auth.federatedSignIn({
		provider: CognitoHostedUIIdentityProvider.Google,
	});
};

export const signOut = (): Promise<unknown> => {
	return Auth.signOut();
};

export const amplifySignIn = async (
	address: string,
): Promise<ChallengedUser> => {
	try {
		return await Auth.signIn(address);
	} catch (err) {
		if ((err as AuthError).message?.includes?.('not exist')) {
			const params = { username: address, password: `@${simpleId(29)}` };
			await Auth.signUp(params);

			return amplifySignIn(address);
		} else {
			throw err;
		}
	}
};
