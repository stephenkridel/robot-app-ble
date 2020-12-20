import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
// import { createBottomTabNavigator } from 'react-navigation-tabs';

const App = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerShown: false,
      cardStyle: {backgroundColor: 'white'},
    },
  },
);

export default createAppContainer(App);

/*
const App = createBottomTabNavigator(
	{
		Sessions: SessionStack,
		About: AboutStack
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ tintColor }) => {
				const { routeName } = navigation.state;
				let IconComponent = AntDesign;
				let iconName;
				if (routeName === 'About') {
					iconName = 'infocirlceo';
				} else if (routeName === 'Sessions') {
					iconName = 'bars';
				}
				return (
					<IconComponent
						name={iconName}
						size={25}
						color={tintColor}
					/>
				);
			}
		}),
		tabBarOptions: {
			activeTintColor: 'rgb(108, 99, 255)',
			inactiveTintColor: 'gray'
		}
	}
);
*/
