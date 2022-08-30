import { FC, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { AnimateDirections, BindDirections, modalActions } from '@metacraft/ui';
import Button from 'components/Button';

import SignInMenu from './Menu';

const styles = StyleSheet.create({
	container: {},
});

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
			<Button outline title="Sign In" onPress={showSignInOptions} />
		</View>
	);
};

export default SignIn;
