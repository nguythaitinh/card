import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Marketplace: FC = () => {
	return (
		<View>
			<Text style={styles.text}>Marketplace</Text>
		</View>
	);
};

export default Marketplace;

const styles = StyleSheet.create({
	text: {
		color: '#fff',
	},
});
