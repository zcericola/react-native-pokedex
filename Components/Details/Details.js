import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import axios from 'axios';

class Details extends Component {
  constructor() {
    super();
    this.state = {
      pokeDetails: [],
      img: ''
    };
  }

  componentDidMount() {
    const { url } = this.props.navigation.state.params;
    axios.post('http://localhost:3002/details/', { url }).then(res => {
      console.log(res.data.sprites);
      this.setState({
        pokeDetails: res.data,
        img: res.data.sprites.front_default
      });
    });
  }

  render() {
    const { name, url } = this.props.navigation.state.params;
    const { pokeDetails, img } = this.state;
    return (
      <View style={styles.container}>
        <Text style = {styles.text}>Name: {pokeDetails.name}</Text>
        <Text style = {styles.text}>Order: {pokeDetails.order}</Text>
        <Text style = {styles.text}>Height: {pokeDetails.height}</Text>
        <Text style = {styles.text}>Weight: {pokeDetails.weight}</Text>
        <Text style = {styles.text}>Base Experience: {pokeDetails.base_experience}</Text>
        <Image
        style = {{'height': 350, 'width': 350, 'marginTop': 20}}
          source={{
            uri: `${
              img
                ? img: 'https://orig00.deviantart.net/34b4/f/2013/243/9/b/pokeball_by_sosyn12-d6kgwvf.png'
            }`
          }}
        >
        </Image>

      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  text: {
      fontSize: 30,
      textAlign: 'left'
  }
});

export default Details;
