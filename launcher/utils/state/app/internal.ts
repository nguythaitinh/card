import { proxy } from 'valtio';
import { WalletAdapterNetwork as Network } from '@solana/wallet-adapter-base';

interface AppState {
	counter: number;
	privacy: boolean;
	network: Network;
}

export const appState = proxy<AppState>({
	counter: 0,
	privacy: false,
	network: gitBranch === 'dev' ? Network.Devnet : Network.Mainnet,
});
