import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import { stormIcons } from '@metacraft/icons';
import { themeState } from '@metacraft/ui';
import AuthenticationBundle from 'components/Navigation/AuthenticationBundle';
import { navigate } from 'stacks/Browser/shared';
import { useSnapshot } from 'utils/hook';
import { iStyles } from 'utils/styles';

import NavigationItem from './NavigationItem';
import { navigationItems } from './shared';

const { Flag } = stormIcons;

export const LocalNavigation: FC = () => {
	const { colors, sizes } = useSnapshot(themeState);

	const containerStyle: ViewStyle = {
		zIndex: 1,
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		backgroundColor: colors.primary,
		borderBottomWidth: 1,
		borderColor: 'rgba(255, 255, 255, 0.02)',
	};

	const innerContainerStyle: ViewStyle = {
		flexDirection: 'row',
		height: sizes.topNavigation,
	};

	return (
		<View style={containerStyle}>
			<View style={[iStyles.contentContainer, innerContainerStyle]}>
				<TouchableOpacity style={styles.flagContainer} activeOpacity={0.8}>
					<Flag style={styles.flag} colors={flagColors} />
				</TouchableOpacity>
				<View style={styles.navContainer}>
					{navigationItems.map((item, i) => {
						return (
							<NavigationItem
								key={i}
								config={item}
								onPress={({ route }) => navigate(route.name)}
							/>
						);
					})}
				</View>
				<AuthenticationBundle />
			</View>
		</View>
	);
};

export default LocalNavigation;

const flagColors: string[] = ['#220d0d', '#301717', '#4a2828', '#FFFFFF'];
const styles = StyleSheet.create({
	flagContainer: {
		width: 120,
	},
	flag: {
		position: 'absolute',
	},
	navContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
	},
});
