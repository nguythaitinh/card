import React, { FC } from 'react';
import { Text, View } from 'react-native';

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
	return (
		<View>
			<Text>Icon</Text>
		</View>
	);
};

export default Icon;
