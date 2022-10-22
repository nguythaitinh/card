import React, { FC } from 'react';
import { Linking, StyleSheet, TouchableOpacity, View } from 'react-native';
import { stormIcons } from '@metacraft/icons';
import { navigationHeight } from 'components/Navigation/shared';
import { iStyles } from 'utils/styles';

import { NavigationConfig, stormNavigations } from '../shared';

import NavigationItem from './Item';

const { Dragon } = stormIcons;

export const StormNavigation: FC = () => {
	const onNavigate = async (item: NavigationConfig) => {
		await Linking.openURL(item.url as string);
	};

	return (
		<View style={styles.container}>
			<View style={[iStyles.contentContainer, styles.contentContainer]}>
				<TouchableOpacity style={styles.brandingIcon}>
					<Dragon size={18} />
				</TouchableOpacity>
				{stormNavigations.map((item) => {
					return (
						<NavigationItem
							key={item.title}
							item={item}
							onNavigate={onNavigate}
						/>
					);
				})}
			</View>
		</View>
	);
};

export default StormNavigation;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#0b0d12',
	},
	contentContainer: {
		flexDirection: 'row',
	},
	brandingIcon: {
		justifyContent: 'center',
		marginHorizontal: 22,
		paddingHorizontal: 8,
		height: navigationHeight.storm,
	},
});
