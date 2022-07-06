import { gql } from '@apollo/client';

export * from './account';

export const greeting = gql`
	query Greeting {
		greeting
	}
`;
