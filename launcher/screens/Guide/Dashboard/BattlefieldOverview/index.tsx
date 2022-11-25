import React, { FC, useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import Animated, {
	useAnimatedStyle,
	withTiming,
} from 'react-native-reanimated';
import { Hoverable } from '@metacraft/ui';

import { HoveredStyleFunc } from '../../../../components/Marketplace/Button/shared';

import Icon from './Icon';
// import { HoveredStyleFunc, useDefaultHoveredStyle } from './shared';
import Title from './Title';

const AnimatedView = Animated.createAnimatedComponent(View);

export enum ViewType {
	Hand,
	Deck,
	Spell,
	Grave,
	SummonZone,
	EndTurn,
	HealthPoint,
	History,
}

interface ViewTypeIcon {
	type: ViewType;
	label: string;
}

const viewTypeIcons: ViewTypeIcon[] = [
	{
		type: ViewType.Hand,
		label: 'Hand',
	},
	{
		type: ViewType.Deck,
		label: 'Deck',
	},
	{
		type: ViewType.Spell,
		label: 'Spell',
	},
	{
		type: ViewType.Grave,
		label: 'Grave',
	},
	{
		type: ViewType.SummonZone,
		label: 'Summon Zone',
	},
	{
		type: ViewType.EndTurn,
		label: 'End Turn',
	},
	{
		type: ViewType.HealthPoint,
		label: 'Health Point',
	},
	{
		type: ViewType.History,
		label: 'History',
	},
];

const BattlefieldOverview: FC = () => {
	const [currentViewTypeIconIndex, setCurrentViewTypeIconIndex] =
		useState<number>(0);

	const useHoveredStyle: HoveredStyleFunc = (isHovered) =>
		useAnimatedStyle(() => ({
			opacity: withTiming(isHovered.value ? 1 : 0.5, { duration: 250 }),
		}));

	const onIconPress = (index: number) => setCurrentViewTypeIconIndex(index);
	return (
		<View style={styles.container}>
			<Title />
			<View style={styles.iconsRow}>
				<FlatList
					renderItem={({ item, index }) => (
						<TouchableOpacity
							activeOpacity={1}
							key={item.type}
							onPress={() => onIconPress(index)}
						>
							{currentViewTypeIconIndex === index ? (
								<Icon key={item.type} type={item.type} />
							) : (
								<Hoverable animatedStyle={useHoveredStyle}>
									<AnimatedView>
										<Icon key={item.type} type={item.type} />
									</AnimatedView>
								</Hoverable>
							)}
						</TouchableOpacity>
					)}
					data={viewTypeIcons}
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={styles.flatlistContainer}
					style={styles.flatlist}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		alignItems: 'center',
		marginTop: 40,
		paddingHorizontal: 24,
	},
	iconsRow: {
		width: '100%',
		flexDirection: 'row',
		marginTop: 32,
		maxWidth: 600,
	},
	flatlistContainer: {
		width: 600,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	flatlist: { flex: 1, width: 600 },
});

export default BattlefieldOverview;
