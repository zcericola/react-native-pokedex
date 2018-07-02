import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import {
  FormLabel,
  FormInput,
  FormValidationMessage
} from 'react-native-elements';

class Contact extends React.Component {
  handleSubmit() {
    alert('Thank you for contacting us.');
  }

  render() {
      //FormLabel, FormInput are all apart of react-native-elements which enhances the stuff that comes out of the box for react-native
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Questions? Contact Us Below.</Text>
        <FormLabel>Name</FormLabel>
        <FormInput />
        <FormLabel>Email</FormLabel>
        <FormInput />
        <FormLabel>Phone</FormLabel>
        <FormInput />
        <Button
          title="Submit"
          style={styles.button}
          onPress={() => this.handleSubmit()}
          color = {'#2a75bb'}
        />
      </View>
    );
  }
}

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10
  },
  button: {
    height: 40,
    width: 100,
    backgroundColor: '#2a75bb'
  }
});
