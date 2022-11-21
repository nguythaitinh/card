import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import Text from 'components/Text';

const label = 'Battlefield Overview';

const Title: FC = () => {
	return <Text style={styles.text}>{label}</Text>;
};

const styles = StyleSheet.create({
	text: {
		fontSize: 26,
		color: '#fff',
		fontFamily: 'Volkhov',
	},
});

export default Title;
