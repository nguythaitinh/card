import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { stormIcons } from '@metacraft/icons';
import { navigationHeight } from 'components/Navigation/shared';
import { iStyles } from 'utils/styles';

import { stormNavigations } from '../shared';

import NavigationItem from './Item';

const { Dragon } = stormIcons;

export const StormNavigation: FC = () => {
	return (
		<View style={styles.container}>
			<View style={[iStyles.contentContainer, styles.contentContainer]}>
				<TouchableOpacity style={styles.brandingIcon}>
					<Dragon size={20} />
				</TouchableOpacity>
				{stormNavigations.map((item) => {
					return <NavigationItem key={item.title} item={item} />;
				})}
			</View>
		</View>
	);
};

export default StormNavigation;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#111111',
	},
	contentContainer: {
		flexDirection: 'row',
	},
	brandingIcon: {
		justifyContent: 'center',
		marginHorizontal: 32,
		paddingHorizontal: 8,
		height: navigationHeight.storm,
	},
});
