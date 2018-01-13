import React, {PureComponent} from 'react';
import {StyleSheet, Text, TouchableHighlight} from "react-native";

export default class BlueRoundedButton extends PureComponent {


  render() {
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        style={styles.button}>
        <Text
          style={styles.buttonText}>
          {this.props.name}
        </Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#488aff',
    borderRadius: 4,
    height: 40,
    borderWidth: 1,
    padding: 6,
    margin: 2
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white'
  }
});