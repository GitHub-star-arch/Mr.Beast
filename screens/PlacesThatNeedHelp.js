
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class Places extends React.Component {

  render() {
    return (
      <View>
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Welcome')}>
          <Text>
            Back
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
    width: 100,
  },
});
