import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RootStack } from './router/routes';
// import Header from './Components/Header/Header';

export default class App extends React.Component {
  render() {
    return (
           <RootStack />

  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 20,
    backgroundColor: '#000'
  }
});
