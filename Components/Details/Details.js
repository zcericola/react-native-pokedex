import React, { Component } from 'react';
//activityIndicator is a built in loading animation for react-native
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import axios from 'axios';

class Details extends Component {
  constructor() {
    super();
    this.state = {
      pokeDetails: [],
      img: ''
    };
  }

 async componentDidMount() {
    const { url } = this.props.navigation.state.params;
    try{
   let response = await axios.post('http://localhost:3002/details/', { url });
   this.setState({pokeDetails: response.data, img: response.data.sprites.front_default});
  }catch(err){
    console.log(err);
      }
   }
  

  render() {
    const { name, url } = this.props.navigation.state.params;
    const { pokeDetails, img } = this.state;
    return (
      <View style={styles.container}>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.h1}>{pokeDetails.name}</Text>
        </View>
        <Text style={styles.text}>Order: {pokeDetails.order}</Text>
        <Text style={styles.text}>Height: {pokeDetails.height}</Text>
        <Text style={styles.text}>Weight: {pokeDetails.weight}</Text>
        <Text style={styles.text}>
          Base Experience: {pokeDetails.base_experience}
        </Text>
        {img !== undefined && img.length > 0 ? (
          <Image
            style={{ height: 350, width: 350, marginTop: 20 }}
            source={{
              uri: `${img}`
            }}
          />
        ) : (
          <ActivityIndicator
            size="large"
            color="#2a75bb"
            style={{ marginTop: 30 }}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 20,
    flex: 1
  },

  h1: {
    fontSize: 36,
    color: '#2a75bb',
    padding: 10,
    alignItems: 'center'
  },
  text: {
    fontSize: 30,
    textAlign: 'left'
  }
});

export default Details;
