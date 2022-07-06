import { FC } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useBuddies } from 'utils/hook';

import BuddyItem, { BuddyProps } from './BuddyItem';

export const Buddies: FC = () => {
	const { list } = useBuddies();

	const renderBuddy = (props: BuddyProps) => {
		return <BuddyItem {...props} />;
	};

	return (
		<View style={styles.container}>
			<FlatList data={list} renderItem={renderBuddy} />
		</View>
	);
};

export default Buddies;

const styles = StyleSheet.create({
	container: {
		paddingVertical: 12,
		paddingLeft: 16,
	},
});
