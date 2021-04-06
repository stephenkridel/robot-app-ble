import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MotorScreen from './src/screens/MotorScreen';
import ProgramScreen from './src/screens/ProgramScreen';
import ConnectScreen from './src/screens/ConnectScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/AntDesign';

const ConnectStack = createStackNavigator(
  {
    Connect: ConnectScreen,
  },
  {
    initialRouteName: 'Connect',
    defaultNavigationOptions: {
      headerShown: false,
      cardStyle: {backgroundColor: 'white'},
    },
  },
);

const MotorStack = createStackNavigator(
  {
    Motor: MotorScreen,
  },
  {
    initialRouteName: 'Motor',
    defaultNavigationOptions: {
      headerShown: false,
      cardStyle: {backgroundColor: 'white'},
    },
  },
);

const ProgramStack = createStackNavigator(
  {
    Program: ProgramScreen,
  },
  {
    initialRouteName: 'Program',
    defaultNavigationOptions: {
      headerShown: false,
      cardStyle: {backgroundColor: 'white'},
    },
  },
);

const App = createBottomTabNavigator(
  {
    Connect: ConnectStack,
    Motor: MotorStack,
    Program: ProgramStack,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({tintColor}) => {
        const {routeName} = navigation.state;
        let IconComponent = Icon;
        let iconName;
        if (routeName === 'Motor') {
          iconName = 'home';
        } else if (routeName === 'Program') {
          iconName = 'codesquare';
        } else if (routeName === 'Connect') {
          iconName = 'search1';
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'rgb(108, 99, 255)',
      inactiveTintColor: 'gray',
    },
  },
);

export default createAppContainer(App);
