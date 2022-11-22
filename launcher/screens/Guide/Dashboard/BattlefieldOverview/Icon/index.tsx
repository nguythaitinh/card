import React, { FC } from 'react';
import { Image, Text } from 'react-native';

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

interface Props {
	type: ViewType;
}

const Icon: FC<Props> = ({ type }: Props) => {
	let resource = null;
	let label = null;

	switch (type) {
		case ViewType.Hand:
			resource = require('../../../../assets/images/guide/hand-icon.png');
			label = 'Hand';
			break;
		case ViewType.Deck:
			resource = require('../../../../assets/images/guide/deck-icon.png');
			label = 'Deck';
			break;
		case ViewType.Spell:
			resource = require('../../../../assets/images/guide/spell-icon.png');
			label = 'Spell';
			break;
		case ViewType.Grave:
			resource = require('../../../../assets/images/guide/grave-icon.png');
			label = 'Grave';
			break;
		case ViewType.SummonZone:
			resource = require('../../../../assets/images/guide/summon-zone-icon.png');
			label = 'Summon Zone';
			break;
		case ViewType.EndTurn:
			resource = require('../../../../assets/images/guide/end-turn-icon.png');
			label = 'End Turn';
			break;
		case ViewType.HealthPoint:
			resource = require('../../../../assets/images/guide/health-point-icon.png');
			label = 'Health Point';
			break;
		case ViewType.History:
			resource = require('../../../../assets/images/guide/history-icon.png');
			label = 'History';
			break;
	}

	return <Image source={resource} />;
};

export default Icon;
