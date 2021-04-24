
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import db from '../config'

export default class DonorList extends React.Component {

  constructor() {
    super();
    this.state = {
      AllDetails: [],
    }
  }


  componentDidMount = () => {
    this.getDetails();
  }

  getDetails = () => {
    console.log("No Problem");
    var AllDetails = []
    db.collection('SaviorsOfTheWeak').onSnapshot((snapshot) => {
      var details = snapshot.docs.map((doc) => { doc.data(); console.log(doc.data()); AllDetails.push(doc.data()); });
      this.setState({ AllDetails: AllDetails })
    })
  }

  renderItem = ({ item, i }) => {
    return (
      <View style={styles.container}>
        <Text>
          {item.Name}:{item.Amount}
        </Text>
      </View>
    )
  }

  render() {
    if (this.state.AllDetails !== '') {
      console.log(this.state.AllDetails);
    }
    return (
      <View>
        {this.state.AllDetails.length === 0 ? (
          <View>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Welcome')}>
              <Text>
                Back
            </Text>
            </TouchableOpacity>
            <Text>Loading...</Text>
          </View>
        ) : (
          <View>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Welcome')}>
              <Text>
                Back
            </Text>
            </TouchableOpacity>
            <FlatList
              keyExtractor={(index, item) => { index.toString() }}
              data={this.state.AllDetails}
              renderItem={this.renderItem}
            />
          </View>
        )}
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
