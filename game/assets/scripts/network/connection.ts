import cardEngine from '@cocrafts/engine-card';

import { createConnection } from './internal';

const { commandCreators } = cardEngine;

export const connection = createConnection({
	clientId: 'cardGame',
	endpoint: 'wss://94zbw8sdk9.execute-api.ap-northeast-1.amazonaws.com/prod/',
	onConnect: ({ send }) => {
		send({ client: 'cardGame', message: 'from Game client' });
	},
	onMessage: (payload) => {
		console.log('server replied:', payload);
	},
});

export default connection;
