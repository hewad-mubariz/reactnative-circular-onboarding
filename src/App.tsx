import {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {screens} from './constants';

import Home from './screens/Home';
import Onboarding from './screens/Onboarding';

const App = () => {
  //TODO::Should be persisted in Localstorage

  const [isFirstLaunch, setIsFirstLaunch] = useState(true);
  const handleOnComplete = () => {
    setIsFirstLaunch(false);
  };
  const handleBackPress = () => {
    setIsFirstLaunch(true);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      {isFirstLaunch ? (
        <Onboarding screens={screens} onComplete={handleOnComplete} />
      ) : (
        <Home onBackPress={handleBackPress} />
      )}
    </SafeAreaView>
  );
};

export default App;
