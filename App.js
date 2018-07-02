import React from 'react';
import { StyleSheet, Text, WebView, View } from 'react-native';
import { RootStack } from './router/routes';
// import Header from './Components/Header/Header';

export default class App extends React.Component {
  //returns only our route config. You can only return one routing component at a time.
  render() {
    return <RootStack />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
    backgroundColor: '#000'
  }
});
