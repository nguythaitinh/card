import React, { FC, ReactNode } from 'react';
import { View, ViewStyle } from 'react-native';
import { themeState } from '@metacraft/ui';
import { useSnapshot } from 'utils/hook';
import { iStyles } from 'utils/styles';

import TopNavigation from './TopNavigation';

interface Props {
	children?: ReactNode;
	style?: ViewStyle;
	contentContainerStyle?: ViewStyle;
}

export const CompactLayout: FC<Props> = ({
	children,
	style,
	contentContainerStyle,
}) => {
	const { sizes } = useSnapshot(themeState);
	const containerStyle = {
		flex: 1,
		paddingTop: sizes.topNavigation,
	};

	const innerStyle = [
		iStyles.contentContainer,
		{ flex: 1 },
		contentContainerStyle,
	];

	return (
		<View style={[containerStyle, style]}>
			<TopNavigation />
			<View style={innerStyle}>{children}</View>
		</View>
	);
};

export default CompactLayout;
