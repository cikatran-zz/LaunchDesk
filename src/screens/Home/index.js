import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import BlueRoundedButton from '../../components/BlueRoundedButton'

export default class Home extends Component {


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Top 5 Github Users</Text>
        <Text>Tap the username to see more information</Text>
        <View style={styles.buttonContainer}>
          <BlueRoundedButton name="GrahamCampbell" onPress={() => this.props.navigation.navigate('Person', {name: 'grahamCampbell'})} />
          <BlueRoundedButton name="fabpot" onPress={() => this.props.navigation.navigate('Person', {name: 'fabpot'})}/>
          <BlueRoundedButton name="weierophinney" onPress={() => this.props.navigation.navigate('Person', {name: 'weierophinney'})}/>
          <BlueRoundedButton name="rkh" onPress={() => this.props.navigation.navigate('Person', {name: 'rkh'})}/>
          <BlueRoundedButton name="josh" onPress={() => this.props.navigation.navigate('Person', {name: 'josh'})}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: 'white',
  },
  title: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  buttonContainer: {
    flexDirection:'row',
    flexWrap: 'wrap',
    marginTop: 3
  }
});
