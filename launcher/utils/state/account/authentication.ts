import { Auth } from '@aws-amplify/auth';
import { Crypto } from '@cocrafts/kernel';
import { PublicKey } from '@solana/web3.js';
import bs58 from 'bs58';
import { graphQlClient } from 'utils/graphql';
import * as queries from 'utils/graphql/query';
import { amplifySignIn, extractJwt } from 'utils/lib';
import { Profile } from 'utils/types';

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

export interface LoginPayload {
	publicKey: PublicKey | null;
	signMessage?: (message: Uint8Array) => Promise<Uint8Array>;
}

export const walletSignIn = async ({
	publicKey,
	signMessage,
}: LoginPayload): Promise<void> => {
	accountState.loading = true;

	try {
		const cognitoUser = await amplifySignIn(publicKey?.toString() as string);
		const { nonce } = cognitoUser.challengeParam;
		const message = Crypto.loginMessage(nonce);
		const encodedMessage = new TextEncoder().encode(message);
		const signature = await signMessage?.(encodedMessage);
		const encodedSignature = bs58.encode(signature || []);

		await Auth.sendCustomChallengeAnswer(cognitoUser, encodedSignature);
	} catch (e) {
		console.log(e);
	} finally {
		accountState.loading = false;
	}
};
