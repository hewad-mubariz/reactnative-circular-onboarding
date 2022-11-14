import {useCallback, useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import Animated, {
  runOnJS,
  useAnimatedRef,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';
import {Screen} from '../../@types';
import CircularButton from '../components/onboarding/CircularButton';
import OnboardingItem from '../components/onboarding/OnbaordingItem';
import Button from '../components/shared/Button';
import {SCREEN_WIDTH} from '../constants';

type Props = {
  screens: Array<Screen>;
  onComplete: () => void;
};
const Onboarding = ({onComplete, screens}: Props) => {
  const [index, setIndex] = useState(0);
  const scrollHandler = useAnimatedScrollHandler(event => {
    runOnJS(setIndex)(Math.round(event.contentOffset.x / SCREEN_WIDTH));
  });

  const aref = useAnimatedRef<Animated.ScrollView>();

  const onPressButton = () => {
    aref.current?.scrollTo({
      x: index > 0 ? SCREEN_WIDTH * (index + 1) : SCREEN_WIDTH,
      y: 0,
      animated: true,
    });
    setIndex(index + 1);
    if (index === screens.length - 1) {
      onCompleteCallback();
    }
  };
  const onCompleteCallback = () => {
    onComplete();
    setIndex(0);
  };

  return (
    <>
      <View style={styles.header}>
        <Button>
          <Text>Skip</Text>
        </Button>
      </View>
      <Animated.ScrollView
        style={{flex: 1}}
        onScroll={scrollHandler}
        ref={aref}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        pagingEnabled>
        {screens.map((screen, index) => {
          return <OnboardingItem screen={screen} key={index.toString()} />;
        })}
      </Animated.ScrollView>
      <CircularButton
        screensLenght={screens.length}
        onPress={onPressButton}
        index={index}
      />
    </>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  header: {
    alignSelf: 'flex-end',
    margin: 10,
    marginBottom: 10,
  },
});
