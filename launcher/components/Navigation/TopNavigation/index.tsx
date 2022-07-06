import { FC } from 'react';
import { View } from 'react-native';
import AuthenticationBundle from 'components/Navigation/AuthenticationBundle';
import Text from 'components/Text';
import { navigate } from 'stacks/Browser/shared';

import NavigationItem from './NavigationItem';
import { NavigationConfig, navigationItems, styles } from './shared';

export const TopNavigation: FC = () => {
	const onNavigation = ({ route }: NavigationConfig) => {
		navigate(route.name);
	};

	return (
		<View style={styles.container}>
			<View style={styles.contentContainer}>
				<Text style={styles.branding}>M</Text>
				<View style={styles.navContainer}>
					{navigationItems.map((item, i) => {
						return (
							<NavigationItem key={i} config={item} onPress={onNavigation} />
						);
					})}
				</View>
				<AuthenticationBundle />
			</View>
		</View>
	);
};

export default TopNavigation;
