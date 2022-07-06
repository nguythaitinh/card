import type { FC } from 'react';
import { ApolloProvider } from '@apollo/client/react';
import { Provider as UIProvider } from '@cocrafts/metacraft-ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from 'screens/Home';
import { graphQlClient } from 'utils/graphql';
import { linking } from 'utils/routes';

const Stack = createStackNavigator();

export const App: FC = () => {
	return (
		<ApolloProvider client={graphQlClient}>
			<UIProvider>
				<NavigationContainer linking={linking}>
					<Stack.Navigator>
						<Stack.Screen name="Home" component={Home} />
					</Stack.Navigator>
				</NavigationContainer>
			</UIProvider>
		</ApolloProvider>
	);
};

export default App;
