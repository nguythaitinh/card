import React, { FC } from 'react';
import {
	ImageBackground,
	ScaledSize,
	StyleSheet,
	TouchableOpacity,
	View,
} from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import { Text } from '@metacraft/ui';
import { headingSize, sharedStyle } from 'screens/Home/shared';
import resources from 'utils/resources';

import ClassBackground from './ClassBackground';
import ClassSummary from './ClassSummary';
import { classList } from './shared';
import SlideIndicator from './SlideIndicator';

interface Props {
	responsiveLevel: number;
	dimension: ScaledSize;
}

const ClassessSection: FC<Props> = ({ responsiveLevel, dimension }) => {
	const classActive = useSharedValue('summoner');
	const classIdList = classList.map((item) => item.id);

	return (
		<ImageBackground
			source={resources.home.classes.background}
			style={styles.container}
		>
			{responsiveLevel < 2 &&
				classList.map((item) => (
					<ClassBackground
						key={item.id}
						id={item.id}
						imageBackground={item.image.backgroundActive}
						classActive={classActive}
					/>
				))}
			<Text style={[sharedStyle.heading]} responsiveSizes={headingSize}>
				5 Hero Classes
			</Text>
			<Text style={styles.content}>
				In the ATEM, there are 5 main classes that represents different
				philosophies, playstyle and strategies. Knowing the specialty of your
				card class will create a huge advantage for you on the battlefield.
			</Text>
			<ClassSummary
				responsiveLevel={responsiveLevel}
				dimension={dimension}
				classIdList={classIdList}
				classActive={classActive}
			/>
			{responsiveLevel < 2 && (
				<View style={styles.slideIndicatorContainer}>
					{classIdList.map((item) => (
						<TouchableOpacity
							key={item}
							style={{ padding: 10 }}
							onPress={() => (classActive.value = item)}
						>
							<SlideIndicator classId={item} classActive={classActive} />
						</TouchableOpacity>
					))}
				</View>
			)}
		</ImageBackground>
	);
};

export default ClassessSection;

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		paddingVertical: 40,
	},
	content: {
		textAlign: 'center',
		maxWidth: 800,
		paddingBottom: 20,
		paddingHorizontal: 15,
		color: '#fff',
	},
	slideIndicatorContainer: {
		width: '100%',
		marginTop: 20,
		paddingHorizontal: 20,
		flexDirection: 'row',
		justifyContent: 'center',
	},
});
