import { proxy } from 'valtio';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';

interface AppState {
	counter: number;
	privacy: boolean;
	network: WalletAdapterNetwork;
}

export const appState = proxy<AppState>({
	counter: 0,
	privacy: false,
	network: __DEV__ ? WalletAdapterNetwork.Devnet : WalletAdapterNetwork.Mainnet,
});
