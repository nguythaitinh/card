import React, { FC } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Text } from '@metacraft/ui';

import resources from '../../../../../utils/resources';
import { ViewType } from '../../BattlefieldOverview';

interface Props {
	type: ViewType;
}

const Icon: FC<Props> = ({ type }: Props) => {
	let resource = null;
	let label = null;

	switch (type) {
		case ViewType.Hand:
			resource = resources.guide.battlefieldOverview.hand;
			label = 'Hand';
			break;
		case ViewType.Deck:
			resource = resources.guide.battlefieldOverview.deck;
			label = 'Deck';
			break;
		case ViewType.Spell:
			resource = resources.guide.battlefieldOverview.spell;
			label = 'Spell';
			break;
		case ViewType.Grave:
			resource = resources.guide.battlefieldOverview.grave;
			label = 'Grave';
			break;
		case ViewType.SummonZone:
			resource = resources.guide.battlefieldOverview.summonZone;
			label = 'Summon Zone';
			break;
		case ViewType.EndTurn:
			resource = resources.guide.battlefieldOverview.endTurn;
			label = 'End Turn';
			break;
		case ViewType.HealthPoint:
			resource = resources.guide.battlefieldOverview.healthPoint;
			label = 'Health Point';
			break;
		case ViewType.History:
			resource = resources.guide.battlefieldOverview.history;
			label = 'History';
			break;
	}

	return (
		<View style={styles.container}>
			<Image source={resource} style={styles.icon} resizeMode={'contain'} />
			<Text style={styles.label}>{label}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
	},
	icon: {
		width: 32,
		height: 32,
	},
	label: {
		fontSize: 10,
		color: '#EBEBEB',
		textAlign: 'center',
		marginTop: 4,
	},
});

export default Icon;
