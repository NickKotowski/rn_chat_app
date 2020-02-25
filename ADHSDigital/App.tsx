import React, { PureComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';

import { Provider } from 'react-redux';
import reducer from './src/Reducer';
import { store } from './src/store';

import AppNavigator from './src/navigation/AppNavigator';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 10,
    textAlign: 'center'
  },
  childrenStyle: {
    position: 'absolute',
    bottom:0,
    marginBottom: 30,
  },
})

class App extends PureComponent {
  public render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

// example of a function with tests written as well

export const add = (a: number, b: number) => {
  return a + b;
}

export default App;
