import React from 'react';

import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import {Icon} from 'react-native-elements';
//components
import Pokemon from '../Components/Pokemon/Pokemon';
import Details from '../Components/Details/Details';
import Settings from '../Components/Settings/Settings';
export const RootStack = createStackNavigator({
  Home: {
    screen: Pokemon
  },

  Details: {
    screen: Details,
    navigationOptions: ({ navigation }) => {
      title: `${navigation.state.params.name}`;
    }
  },

   TabStack:  createBottomTabNavigator({
   Home: {
     screen: Pokemon,
     navigationOptions: {
       tabBarIcon: () => <Icon name="list" size={35} color={"blue"}  />
     }
   },
   Settings: Settings
  })



});

