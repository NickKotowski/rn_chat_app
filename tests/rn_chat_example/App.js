import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

const ActionCable = require('actioncable');

import { ActionCableProvider, ActionCableConsumer } from 'react-actioncable-provider';

const cable = ActionCable.createConsumer('ws://localhost:3000/cable');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''

    }
  }

  handleReceived = (message) => {
    this.setState({ message: message.content.message });
  }

	render() {
		return (
      <ActionCableProvider cable={cable}>
        <ActionCableConsumer
          channel="RoomChannel"
          onReceived={this.handleReceived}
        >
          <View style={styles.container}>
            <Text style={styles.welcome}>
              Welcome to React Native!
            </Text>
            <Text>{this.state.message}</Text>
          </View>
        </ActionCableConsumer>
      </ActionCableProvider>
	  )
	}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  message: {
  	borderBottomWidth: 1,
  	borderColor: 'black'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
