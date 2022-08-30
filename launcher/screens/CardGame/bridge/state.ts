import { proxy } from 'valtio/vanilla';
import { CardDuel } from 'utils/types/graphql';

export interface BridgeState {
	duelId?: string;
	duel?: CardDuel;
}

export const bridgeState = proxy<BridgeState>({});
