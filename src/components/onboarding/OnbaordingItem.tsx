import {Image, StyleSheet, Text, View} from 'react-native';
import {Screen} from '../../../@types';
import {SCREEN_WIDTH} from '../../constants';
type Props = {
  screen: Screen;
};

const OnboardingItem = ({screen}: Props) => {
  return (
    <View
      style={{
        flexDirection: 'column',
        flex: 1,
        width: SCREEN_WIDTH,
      }}>
      <View style={{alignItems: 'center'}}>
        <Image source={screen.image} style={{width: '100%', height: 350}} />
      </View>
      <View
        style={{
          alignItems: 'center',
          height: '12%',
          justifyContent: 'space-between',
          marginTop: 30,
        }}>
        <Text style={styles.title}>{screen.title}</Text>
        <Text style={styles.description}>{screen.description}</Text>
      </View>
    </View>
  );
};

export default OnboardingItem;

const styles = StyleSheet.create({
  title: {
    color: '#ab49c1',
    fontSize: 22,
    fontWeight: 'bold',
  },
  description: {
    color: '#7598a5',
  },
  header: {
    alignSelf: 'flex-end',
    margin: 10,
    marginBottom: 10,
  },
});
