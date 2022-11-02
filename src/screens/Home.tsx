import {Text, View} from 'react-native';
import React from 'react';
import Button from '../components/shared/Button';
type Props = {
  onBackPress: () => void;
};
const Home = ({onBackPress}: Props) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignSelf: 'center'}}>
      <Text>Welcome To Home Screen</Text>
      <Button
        onPress={onBackPress}
        style={{
          padding: 10,
          backgroundColor: '#1e90ff',
          alignItems: 'center',
          borderRadius: 5,
          marginVertical: 10,
        }}>
        <Text style={{color: 'white'}}>Back To Onboarding</Text>
      </Button>
    </View>
  );
};

export default Home;
