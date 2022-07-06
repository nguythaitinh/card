import type { FC } from 'react';
import { ApolloProvider } from '@apollo/client/react';
import { Provider as UIProvider } from '@cocrafts/metacraft-ui';
import BrowserStack from 'stacks/Browser';
import { graphQlClient } from 'utils/graphql';
import { useAppInit } from 'utils/hook';

export const App: FC = () => {
	useAppInit({
		withProfileFetch: true,
	});

	return (
		<ApolloProvider client={graphQlClient}>
			<UIProvider>
				<BrowserStack />
			</UIProvider>
		</ApolloProvider>
	);
};

export default App;
