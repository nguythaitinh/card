import React, { FC } from 'react';
import { LayoutRectangle, StyleSheet, View } from 'react-native';
import Animated, {
	useAnimatedScrollHandler,
	useAnimatedStyle,
	useSharedValue,
} from 'react-native-reanimated';
import { AppState, appState, Text } from '@metacraft/ui';
import CompactLayout from 'components/layouts/Compact';
import UnderRealmButton from 'components/Marketplace/Button';
import { idleLayout } from 'utils/helper';
import { useSnapshot } from 'utils/hook';
import resources from 'utils/resources';
import { iStyles } from 'utils/styles';

import BoxSellingSection from './sections/BoxSelling';
import HeadingSection from './sections/Heading';

const BrowserMarketplace: FC = () => {
	const headingLayout = useSharedValue<LayoutRectangle>(idleLayout);
	const scrollOffset = useSharedValue(0);
	const contentOffsetVertical = useSharedValue(0);
	const { windowDimensions } = useSnapshot<AppState>(appState);
	const scaledWidth = Math.min(
		windowDimensions.width,
		iStyles.contentContainer.maxWidth,
	);

	const scrollHandler = useAnimatedScrollHandler(
		{
			onScroll: ({ contentOffset }) => {
				contentOffsetVertical.value = contentOffset.y;
				if (contentOffset.y < headingLayout.value.height) {
					scrollOffset.value = headingLayout.value.height - contentOffset.y;
				} else {
					scrollOffset.value = 0;
				}
			},
		},
		[headingLayout, scrollOffset.value],
	);

	const backgroundStyle = useAnimatedStyle(() => ({
		opacity: 0.5,
		width: scaledWidth,
		height: windowDimensions.height,
		position: 'absolute',
		transform: [
			{
				translateY: scrollOffset.value,
			},
		],
	}));

	return (
		<CompactLayout>
			<View style={iStyles.contentContainer}>
				<View
					style={{
						position: 'absolute',
						width: scaledWidth,
						height: windowDimensions.height,
						backgroundColor: '#150101',
					}}
				/>
				<Animated.Image
					source={resources.marketplace.mainBackground}
					style={backgroundStyle}
				/>
			</View>

			<Animated.ScrollView
				contentContainerStyle={iStyles.contentContainer}
				onScroll={scrollHandler}
				scrollEventThrottle={10}
				showsVerticalScrollIndicator={false}
			>
				<HeadingSection
					onLayout={({ nativeEvent }) => {
						headingLayout.value = nativeEvent.layout;
						scrollOffset.value = Math.max(
							nativeEvent.layout.height - contentOffsetVertical.value,
							0,
						);
					}}
				/>
				<BoxSellingSection />
				<Text style={styles.text}>Marketplace</Text>
				<UnderRealmButton title="Login" />
			</Animated.ScrollView>
		</CompactLayout>
	);
};

export default BrowserMarketplace;

const styles = StyleSheet.create({
	text: {
		color: '#fff',
	},
});
