import React, { FC, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Animated, {
	useAnimatedStyle,
	withTiming,
} from 'react-native-reanimated';
import { Hoverable, Text } from '@metacraft/ui';

import {
	HoveredStyleFunc,
	useDefaultHoveredStyle,
} from '../../../../components/Marketplace/Button/shared';

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
	const [currentViewTypeIcon, setCurrentViewTypeIcon] = useState<ViewTypeIcon>(
		viewTypeIcons[0],
	);

	const useHoveredStyle: HoveredStyleFunc = (isHovered) =>
		useAnimatedStyle(() => ({
			opacity: withTiming(isHovered.value ? 1 : 0.7, { duration: 250 }),
		}));

	return (
		<View style={styles.container}>
			<Title />
			<View style={styles.iconsRow}>
				{viewTypeIcons.map((viewTypeIcon) => (
					<TouchableOpacity activeOpacity={0.7} key={viewTypeIcon.type}>
						<Hoverable
							style={{ left: 0, right: 0, justifyContent: 'center' }}
							animatedStyle={useHoveredStyle}
						>
							<AnimatedView>
								<Icon key={viewTypeIcon.type} type={viewTypeIcon.type} />
							</AnimatedView>
						</Hoverable>
					</TouchableOpacity>
				))}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: { width: '100%', alignItems: 'center', marginTop: 40 },
	iconsRow: {
		width: 600,
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
		marginTop: 32,
	},
});

export default BattlefieldOverview;
