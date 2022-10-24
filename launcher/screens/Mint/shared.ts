import { StyleSheet } from 'react-native';
import { ScaledSizes } from '@metacraft/ui';

interface MintSizes {
	responsiveHeadings: ScaledSizes;
}

export const mintSizes: MintSizes = {
	responsiveHeadings: [45, 45, 38, 30],
};

export const mintStyle = StyleSheet.create({
	heading: {
		fontWeight: '600',
		color: '#fff',
		textAlign: 'center',
	},
	background: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
	},
});

export type Rarity = 'Rare' | 'Epic' | 'Mythical' | 'Legendary' | 'Immortal';

type RarityRate = Record<Rarity, number>;

export interface PackStats {
	title: string;
	route: string;
	total: number;
	remaining: number;
	unitPrice: number;
	sugarId: string;
	rarity: RarityRate;
}

export const packList: PackStats[] = [
	{
		title: 'Bronze',
		route: 'bronze',
		total: 951,
		remaining: 951,
		unitPrice: 15,
		sugarId: 'GcyRX3s882L79irZAG7QuSCf7bQEptj16gLjC62mkyrx',
		rarity: {
			Rare: 55.2,
			Epic: 25.87,
			Mythical: 12.93,
			Legendary: 6.0,
			Immortal: 0,
		},
	},
	{
		title: 'Silver',
		route: 'silver',
		total: 694,
		remaining: 694,
		unitPrice: 25,
		sugarId: 'GcyRX3s882L79irZAG7QuSCf7bQEptj16gLjC62mkyrx',
		rarity: {
			Rare: 32.42,
			Epic: 43.66,
			Mythical: 12.97,
			Legendary: 10.81,
			Immortal: 0.14,
		},
	},
	{
		title: 'Gold',
		route: 'gold',
		total: 488,
		remaining: 488,
		unitPrice: 40,
		sugarId: 'GcyRX3s882L79irZAG7QuSCf7bQEptj16gLjC62mkyrx',
		rarity: {
			Rare: 15.37,
			Epic: 17.21,
			Mythical: 47.95,
			Legendary: 18.44,
			Immortal: 1.03,
		},
	},
	{
		title: 'Platinum',
		route: 'platinum',
		total: 210,
		remaining: 210,
		unitPrice: 100,
		sugarId: 'GcyRX3s882L79irZAG7QuSCf7bQEptj16gLjC62mkyrx',
		rarity: {
			Rare: 7.14,
			Epic: 18.57,
			Mythical: 21.43,
			Legendary: 48.57,
			Immortal: 4.29,
		},
	},
	{
		title: 'Titan',
		route: 'titan',
		total: 30,
		remaining: 30,
		unitPrice: 250,
		sugarId: 'GcyRX3s882L79irZAG7QuSCf7bQEptj16gLjC62mkyrx',
		rarity: {
			Rare: 0,
			Epic: 0,
			Mythical: 39.99,
			Legendary: 39.99,
			Immortal: 20.02,
		},
	},
];

type PackMap = Record<string, PackStats>;
export const packMap: PackMap = packList.reduce((a, i) => {
	a[i.route] = i;
	return a;
}, {} as PackMap);
