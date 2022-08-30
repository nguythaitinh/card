import { FC, RefObject } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { AnimateDirections, BindDirections, modalActions } from '@metacraft/ui';
import { useBuddies } from 'utils/hook';
import { Profile } from 'utils/types/graphql';

import BuddyItem, { BuddyProps } from './BuddyItem';
import BuddyMenu from './Menu';

export const Buddies: FC = () => {
	const { list } = useBuddies();

	const onBuddyPress = (profile: Profile, bindingRef: RefObject<View>) => {
		modalActions.show({
			id: 'buddyMenu',
			component: BuddyMenu,
			bindingRef,
			bindingDirection: BindDirections.Left,
			animateDirection: AnimateDirections.TopLeft,
			positionOffset: { x: -50, y: 0 },
			context: profile,
		});
	};

	const renderBuddy = (props: BuddyProps) => {
		return <BuddyItem {...props} onPress={onBuddyPress} />;
	};

	return (
		<View style={styles.container}>
			<FlatList
				showsVerticalScrollIndicator={false}
				data={list}
				renderItem={renderBuddy}
			/>
		</View>
	);
};

export default Buddies;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingVertical: 12,
		paddingLeft: 16,
	},
});
