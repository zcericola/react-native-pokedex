import React from 'react';

import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';

//components
import Pokemon from '../Components/Pokemon/Pokemon';
import Details from '../Components/Details/Details';
import Settings from '../Components/Settings/Settings';
import Contact from '../Components/Contact/Contact';

//controls the tabs on the bottom of our screen
export const Tabs = createBottomTabNavigator({
  Pokemon: {
    screen: Pokemon
  },
  Contact: {
    screen: Contact
  },
  Settings: {
    screen: Settings
  }
});

//This is the root from which all your navigation occurs. Since I wanted to have both Tabs and normal screen, to screen clicking, I added the Tabs configuration to the RootStack.
export const RootStack = createStackNavigator({
  Tabs: {
    screen: Tabs
  },
  Home: {
    screen: Pokemon
  },

  Details: {
    screen: Details,
    navigationOptions: ({ navigation }) => {
      title: `${navigation.state.params.name}`;
    }
  }
});
