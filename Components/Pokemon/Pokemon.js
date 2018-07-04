//lists all the pokemon from the API

import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import Header from '../Header/Header';
import axios from 'axios';

class Pokemon extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: []
    };
  }
  async componentDidMount() {
    let response = await axios.get('http://localhost:3002/pokemon');
    this.setState({pokemon: response.data});
    
  }

//Routing here
  //pass in the current object and you have access to name, url, etc @ this.props.navigation.state.params
  goToDetails = (pokemon) => {
    this.props.navigation.navigate('Details', pokemon);

  }

  render() {
    const { pokemon } = this.state;
    let names = pokemon.map((c, i) => {
      //return the names
      return <ListItem key={c.name + i} title={c.name} style={styles.items}   onPress = {() => this.goToDetails(c)}/>;
    });

    return (
      <View style={styles.container}>
        <Header />
        <ScrollView>
          <List style={styles.list}>{names}</List>
        </ScrollView>
      </View>
    );
  }
}

export default Pokemon;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10
  },
  items: {
    width: '100%'
  },
  
  list: {
    marginTop: 10,
    marginBottom: 10
  }
});
