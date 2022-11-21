import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import Title from './Title';

const BattlefieldOverview: FC = () => {
	return (
		<View style={styles.container}>
			<Title />
		</View>
	);
};

const styles = StyleSheet.create({
	container: { width: '100%', alignItems: 'center', marginTop: 40 },
});

export default BattlefieldOverview;
