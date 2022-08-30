import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { stormIcons } from '@metacraft/icons';
import { themeState } from '@metacraft/ui';
import { useSnapshot } from 'utils/hook';
import { iStyles } from 'utils/styles';

const { Flag } = stormIcons;

export const TopNavigation: FC = () => {
	const { sizes } = useSnapshot(themeState);

	const containerStyle = {
		backgroundColor: '#331e1e',
	};

	const innerContainerStyle = {
		height: sizes.topNavigation,
	};

	return (
		<View style={containerStyle}>
			<View style={[iStyles.contentContainer, innerContainerStyle]}>
				<TouchableOpacity activeOpacity={0.8}>
					<Flag style={styles.flag} colors={flagColors} />
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default TopNavigation;

const flagColors: string[] = ['#220d0d', '#301717', '#4a2828', '#FFFFFF'];
const styles = StyleSheet.create({
	container: {},
	flag: {
		position: 'absolute',
	},
});
