import React, { FC } from 'react';
import {
	Image,
	ImageBackground,
	StyleSheet,
	TouchableOpacity,
	View,
} from 'react-native';
import {
	localNavigations,
	navigationHeight,
} from 'components/Navigation/shared';
import resources from 'utils/resources';
import { iStyles } from 'utils/styles';

import NavigationItem from './Item';

export const InternalNavigation: FC = () => {
	return (
		<ImageBackground
			style={styles.container}
			source={resources.navigation.bg}
			resizeMode="repeat"
		>
			<View style={[iStyles.contentContainer, styles.contentContainer]}>
				<TouchableOpacity activeOpacity={0.9}>
					<Image source={resources.navigation.logo} style={styles.logo} />
				</TouchableOpacity>
				{localNavigations.map((item) => {
					return <NavigationItem key={item.title} item={item} />;
				})}
			</View>
		</ImageBackground>
	);
};

export default InternalNavigation;

const logoHeight = 84;
const styles = StyleSheet.create({
	container: {
		backgroundColor: '#21150f',
		height: navigationHeight.local,
	},
	contentContainer: {
		flexDirection: 'row',
	},
	logo: {
		marginLeft: -24,
		marginRight: -64,
		width: (249 / 101) * logoHeight,
		height: logoHeight,
	},
});
