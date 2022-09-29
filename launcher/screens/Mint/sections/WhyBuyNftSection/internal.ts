import { ImageStyle, StyleSheet } from 'react-native';

const borderHorizontalStyle = {
	position: 'absolute',
	left: 0,
	right: 0,
} as ImageStyle;

const borderVerticalStyle = {
	position: 'absolute',
	top: 0,
	bottom: 0,
	width: 26,
} as ImageStyle;

const edgeStyle = {
	position: 'absolute',
	width: 37,
	height: 37,
} as ImageStyle;

const width = 86;
const height = 85;

export const styles = StyleSheet.create({
	container: {
		paddingVertical: 80,
		paddingHorizontal: 50,
	},
	background: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
	},
	borderBottom: {
		...borderHorizontalStyle,
		bottom: 0,
		height: 24,
	},
	borderTop: {
		...borderHorizontalStyle,
		top: 0,
		height: 19,
	},
	borderLeft: {
		...borderVerticalStyle,
		left: 0,
	},
	borderRight: {
		...borderVerticalStyle,
		right: 0,
	},
	edgeTopLeft: {
		...edgeStyle,
		top: 0,
		left: 0,
	},
	edgeTopRight: {
		...edgeStyle,
		top: 0,
		right: 0,
	},
	edgeBottomLeft: {
		...edgeStyle,
		bottom: 0,
		left: 0,
	},
	edgeBottomRight: {
		...edgeStyle,
		bottom: 0,
		right: 0,
	},
	patternTopLeft: {
		...edgeStyle,
		top: 10,
		left: 15,
		width,
		height,
	},
	patternTopRight: {
		...edgeStyle,
		top: 10,
		right: 15,
		width,
		height,
	},
	patternBottomLeft: {
		...edgeStyle,
		bottom: 10,
		left: 15,
		width,
		height,
	},
	patternBottomRight: {
		...edgeStyle,
		bottom: 10,
		right: 15,
		width,
		height,
	},
	contentContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
	},
	title: {
		fontWeight: '500',
		marginBottom: 20,
	},
});

interface WhyBuyNft {
	title: string;
	detail: string;
}

export const whyBuyNft: WhyBuyNft[] = [
	{
		title: 'Rare & Unique',
		detail:
			'There is only 2,390 NFTs created from Developers, no more NFT founded from us, except for special occasions, eg.Tournament,...',
	},
	{
		title: 'Rare & Unique',
		detail:
			'There is only 2,390 NFTs created from Developers, no more NFT founded from us, except for special occasions, eg.Tournament,...',
	},
	{
		title: 'Rare & Unique',
		detail:
			'There is only 2,390 NFTs created from Developers, no more NFT founded from us, except for special occasions, eg.Tournament,...',
	},
	{
		title: 'Rare & Unique',
		detail:
			'There is only 2,390 NFTs created from Developers, no more NFT founded from us, except for special occasions, eg.Tournament,...',
	},
];
