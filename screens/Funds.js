
import React from 'react';
import db from '../config'
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';

export default class Funds extends React.Component {

  constructor() {
    super();
    this.state = {
      Name: '',
      Amount: '',
      Contact: '',
      Address: '',
    }
  }
//Hurt the rich and help the poor
  UpdateDonors = () => {
    console.log("It works");
    db.collection('SaviorsOfTheWeak').add({
      Name: this.state.Name,
      Amount: this.state.Amount,
      Contact: this.state.Contact,
      Address: this.state.Address,
    })
  }

  render() {
    return (
      <View>
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Welcome')}>
          <Text>
            Back
          </Text>
        </TouchableOpacity>
        <View style={styles.container}>
          <TextInput placeholder="Last, First Name" onChangeText={(text) => { this.setState({ Name: text }) }} style={styles.inputbox} />
          <TextInput placeholder="Amount" onChangeText={(text) => { this.setState({ Amount: text }) }} style={styles.inputbox} />
          <TextInput placeholder="Contact" onChangeText={(text) => { this.setState({ Contact: text }) }} style={styles.inputbox} />
          <TextInput placeholder="Address" onChangeText={(text) => { this.setState({ Address: text }) }} style={styles.inputbox} />
          <TouchableOpacity style={styles.button} onPress={() => { this.props.navigation.navigate('Payment'); this.UpdateDonors(); }}>
            <Text>
              Proceed To Pay
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 150,
  },
  button: {
    backgroundColor: '#4dffa6',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    padding: 10,
    borderColor: '#008040',
    borderWidth: 5,
    height: 50,
    width: 150,
  },
  inputbox: {
    borderWidth: 2,
    width: 200,
    height: 50,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
