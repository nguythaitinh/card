import type { FC } from 'react';
import { ApolloProvider } from '@apollo/client/react';
import { Provider as UIProvider } from '@metacraft/ui';
import BrowserStack from 'stacks/Browser';
import { graphQlClient } from 'utils/graphql';
import { useAppInit } from 'utils/hook';
import { launcherTheme } from 'utils/theme';

export const App: FC = () => {
	useAppInit({
		withProfileFetch: true,
	});

	return (
		<ApolloProvider client={graphQlClient}>
			<UIProvider theme={launcherTheme}>
				<BrowserStack />
			</UIProvider>
		</ApolloProvider>
	);
};

export default App;
