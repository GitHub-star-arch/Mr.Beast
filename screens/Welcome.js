
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class Welcome extends React.Component {

  render() {
    return (
//Our Motto Is Hurt The Rich And Help The Poor.
      <View style={styles.container, {backgroundColor:"blue"}}> 
        <Text>
          Sharing Is Caring
        </Text>
        <TouchableOpacity style={styles.laver} onPress={() => this.props.navigation.navigate('DonorList')}>
          <Text>
            Donor List
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('PlacesThatNeedHelp')}>
          <Text>
            Places That Need Help
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Funds')}>
          <Text>
            Donate Fund
          </Text>
        </TouchableOpacity>
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
    width: 200,

  },
  laver: {
    backgroundColor: '#6d9e8a',
    borderColor: '#1209af',
    borderWidth: 10,
    borderTopLeftRadius: -10,
    height: 50,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
