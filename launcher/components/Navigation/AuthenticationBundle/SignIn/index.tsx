import { FC, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AnimateDirections, BindDirections, modalActions } from '@metacraft/ui';

import SignInMenu from './Menu';

export const SignIn: FC = () => {
	const containerRef = useRef<View>(null);

	const showSignInOptions = () => {
		modalActions.show({
			id: 'signInOptions',
			component: SignInMenu,
			bindingRef: containerRef,
			bindingDirection: BindDirections.BottomLeft,
			animateDirection: AnimateDirections.BottomLeft,
		});
	};

	return (
		<View ref={containerRef} style={styles.container}>
			<TouchableOpacity onPress={showSignInOptions}>
				<Text style={styles.buttonTitle}>Sign In</Text>
			</TouchableOpacity>
		</View>
	);
};

export default SignIn;

const styles = StyleSheet.create({
	container: {},
	buttonTitle: {
		color: '#FFFFFF',
	},
});
