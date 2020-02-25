import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import Button from '../src/components/Button';

interface Props {
  children?: JSX.Element // ? denotes optional
  text: string,
  styles?: object,
  response: string,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

class Example extends React.Component<Props> {
  public render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.text}</Text>
        <Button
          value={this.props.app.counter}
        />
        <View style={this.props.styles}>
          {this.props.children}
        </View>
        <Text>Can I pass a prop to a child? {this.props.response}</Text>
        <Text>Counter: {this.props.app.counter}</Text>
      </View>
    )
  }
}

export default connect(state => ({ app: state }))(Example);
