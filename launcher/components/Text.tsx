import { FC } from 'react';
import { StyleSheet, Text, TextProps, TextStyle } from 'react-native';

const styles = StyleSheet.create({
	essential: {
		fontFamily: 'Poppins',
	},
});

type Props = TextProps & {
	style?: TextStyle;
};

export const ManagedText: FC<Props> = ({ style, ...rest }) => {
	return <Text {...rest} style={[styles.essential, style]} />;
};

export default ManagedText;
