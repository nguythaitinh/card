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
		unitPrice: 18,
		sugarId: 'HnDJapRRFfhuusQGx2TEfA8wcLTUibAasMq5KYbm3kCD',
		rarity: {
			Rare: 60,
			Epic: 25,
			Mythical: 10,
			Legendary: 5,
			Immortal: 0,
		},
	},
	{
		title: 'Silver',
		route: 'silver',
		total: 694,
		remaining: 694,
		unitPrice: 18,
		sugarId: 'HnDJapRRFfhuusQGx2TEfA8wcLTUibAasMq5KYbm3kCD',
		rarity: {
			Rare: 60,
			Epic: 25,
			Mythical: 10,
			Legendary: 5,
			Immortal: 0,
		},
	},
	{
		title: 'Gold',
		route: 'gold',
		total: 491,
		remaining: 491,
		unitPrice: 18,
		sugarId: 'HnDJapRRFfhuusQGx2TEfA8wcLTUibAasMq5KYbm3kCD',
		rarity: {
			Rare: 60,
			Epic: 25,
			Mythical: 10,
			Legendary: 5,
			Immortal: 0,
		},
	},
	{
		title: 'Platinum',
		route: 'platinum',
		total: 215,
		remaining: 215,
		unitPrice: 18,
		sugarId: 'HnDJapRRFfhuusQGx2TEfA8wcLTUibAasMq5KYbm3kCD',
		rarity: {
			Rare: 60,
			Epic: 25,
			Mythical: 10,
			Legendary: 5,
			Immortal: 0,
		},
	},
	{
		title: 'Titan',
		route: 'titan',
		total: 39,
		remaining: 39,
		unitPrice: 18,
		sugarId: 'HnDJapRRFfhuusQGx2TEfA8wcLTUibAasMq5KYbm3kCD',
		rarity: {
			Rare: 60,
			Epic: 25,
			Mythical: 10,
			Legendary: 5,
			Immortal: 0,
		},
	},
];

type PackMap = Record<string, PackStats>;
export const packMap: PackMap = packList.reduce((a, i) => {
	a[i.route] = i;
	return a;
}, {} as PackMap);
