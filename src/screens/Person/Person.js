import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

export default class Home extends Component {

  constructor(props) {
    super(props);
  };

  componentDidMount() {
    let name = this.props.navigation.state.params.name;
    this.props.getPerson(name);
  };

  render() {
    const {person} = this.props;

    if(!person.data){
      return null;
      console.log(person.data.name)
    }

    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: person.data.avatar_url}}/>
        <View style={styles.infoContainer}>
          <Text style={styles.textName}>{person.data.name}</Text>
          <Text style={styles.textState}>{person.data.location}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: 'white',
  },
  textName: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  textState: {
    fontSize: 16
  },
  infoContainer: {
    flex: 8,
    marginTop: 20,
    flexDirection:'column',
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
  },
  image: {
    flex: 2,
    width: 80,
    height: 80,
    borderRadius: 30,
    margin: 5
  },
});
