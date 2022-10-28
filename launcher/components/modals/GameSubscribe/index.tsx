import React, { FC, useState } from 'react';
import {
	ActivityIndicator,
	ScaledSize,
	StyleSheet,
	TextInput,
	View,
	ViewStyle,
} from 'react-native';
import { useMutation } from '@apollo/client';
import { modalActions } from '@metacraft/ui';
import { Text } from '@metacraft/ui';
import UnderRealmButton from 'components/Marketplace/Button';
import * as mutations from 'utils/graphql/mutation';
import { useInput } from 'utils/hook';
import { MetacraftGames } from 'utils/types';
import { validateEmail } from 'utils/validation';

import Subscribed from './Subscribed';

interface Props {
	dimensions: ScaledSize;
}

export const GameSubscribe: FC<Props> = ({ dimensions }) => {
	const [loading, setLoading] = useState(false);
	const [subscribeGame] = useMutation(mutations.subscribeGame);
	const emailInput = useInput();
	const isEmailValid = validateEmail(emailInput.value);
	const contentWidth = Math.min(dimensions.width - 16, 480);
	const containerStyle = {
		alignSelf: 'center',
		width: contentWidth,
		paddingVertical: 40,
		paddingHorizontal: 30,
		backgroundColor: '#512b18',
		borderRadius: 10,
	} as ViewStyle;

	const onSubscribe = () => {
		setLoading(true);

		subscribeGame({
			variables: {
				input: {
					email: emailInput.value,
					game: MetacraftGames.Card,
				},
			},
			onCompleted: () => {
				setLoading(false);
				emailInput.onChangeText('');

				modalActions.hide('gameSubscribe');

				modalActions.show({
					id: 'subscribed',
					component: Subscribed,
				});
			},
		});
	};

	return (
		<View style={containerStyle}>
			<Text style={styles.title}>Alpha Sign-up</Text>
			<View style={styles.inputContainer}>
				<TextInput {...emailInput} placeholder="Email" style={styles.input} />
			</View>
			<UnderRealmButton
				disabled={!isEmailValid}
				style={styles.button}
				onPress={onSubscribe}
				title="Subscribe"
			>
				{loading && <ActivityIndicator color="white" />}
			</UnderRealmButton>
			<Text style={styles.footerDesc}>
				Only 10,000 free slots available.{'\n'}
				Get a chance to experience soonest
			</Text>
		</View>
	);
};

export default GameSubscribe;

const styles = StyleSheet.create({
	title: {
		fontSize: 20,
		textAlign: 'center',
		marginBottom: 25,
	},
	separator: {
		alignSelf: 'center',
	},
	inputContainer: {
		paddingHorizontal: 20,
		marginBottom: 25,
		borderWidth: 1,
		borderColor: '#fff',
		borderRadius: 10,
	},
	input: {
		marginVertical: 15,
		color: '#fff',
	},
	button: {
		alignSelf: 'center',
		width: 180,
	},
	buttonText: {
		textAlign: 'center',
	},
	footerDesc: {
		marginTop: 30,
		fontWeight: '300',
		fontSize: 13,
		lineHeight: 16,
		textAlign: 'center',
	},
});
