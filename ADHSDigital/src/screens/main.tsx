import React, { PureComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Example from '../../boilerplate/Example';

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

class Main extends PureComponent {
  public render() {
    return (
      <View style={styles.container}>
        <Example
          text={'React Native Base App'}
          styles={styles.childrenStyle}
          response={'Yes'}
        >
          <View>
            <Text style={styles.text}>by doc.coach</Text>
            <Text style={styles.text}>Version 1.0</Text>
          </View>
        </Example>
      </View>
    );
  }
}

// example of a function with tests written as well

export const add = (a: number, b: number) => {
  return a + b;
}

export default Main;
