import { MessageData, MessageType } from '../internal';

import setReadyHandler from './setReady';

export const handleMessage = (payload: MessageData): void => {
	if (payload.type === MessageType.NotifyReady) {
		setReadyHandler();
	}
};
