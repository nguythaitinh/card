import {
	acceptGameInvitation,
	resumePlayingGame,
	sendGameInvitation,
} from './game';

export const liveActions = {
	sendGameInvitation,
	acceptGameInvitation,
	resumePlayingGame,
};

export * from './internal';
