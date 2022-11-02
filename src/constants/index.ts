import { Platform,Dimensions } from "react-native";
import { Screen } from "../../@types";
const {width,height} = Dimensions.get('window')
export const isPlatformAndroid = Platform.OS === 'android'
export const isPlatformIOS = Platform.OS === 'ios'
export const SCREEN_WIDTH = width
export const SCREEN_HEIGHT = height
export const screens = [
     {
        id: 1,
        title: 'Pay Easy & Receive Easy',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae',
        image: require('../../assets/onboarding1.png'),
      },
      {
        id: 2,
        title: 'Get Your Money  Everywhere',
    
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae',
        image: require('../../assets/onboarding2.png'),
      },
      {
        id: 3,
        title: 'Report any error to Us',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae',
        image: require('../../assets/onboarding3.png'),
      },
      {
        id: 4,
        title: 'Send Money Abroad',
        description:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae',
        image: require('../../assets/onboarding4.png'),
      },
]