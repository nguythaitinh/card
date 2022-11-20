import React, { FC } from 'react';
import { Text, View } from 'react-native';

import resources from '../../../../utils/resources';

import { ViewType } from '.';

interface Props {
	type: ViewType;
}

const Icon: FC<Props> = ({ type }: Props) => {
	let resource = null;
	let label = null;

	switch (type) {
		case ViewType.Battlefield:
			resource = resources.guide.battlefieldIconNormal;
			label = 'Battlefield';
			break;
		case ViewType.Play:
			resource = require('./assets/play.png');
			label = 'Play';
			break;
		case ViewType.Card:
			resource = require('./assets/card.png');
			label = 'Card';
			break;
	}

	return (
		<View>
			<Image source={require('assets/images/launcher/launcher-icon.png')} />
		</View>
	);
};

export default Icon;
