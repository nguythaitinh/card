import React, { FC, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Icon from './Icon';
import Title from './Title';

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

	return (
		<View style={styles.container}>
			<Title />
			<View style={styles.iconsRow}>
				{viewTypeIcons.map((viewTypeIcon) => (
					<Icon key={viewTypeIcon.type} type={viewTypeIcon.type} />
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
