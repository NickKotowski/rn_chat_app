import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addNumber } from '../Actions';


interface Props {
  onPress?: () => void,
  label: string,
  state: object,
  value: number,
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    backgroundColor: 'blue',
    borderRadius: 30,
  },
  whiteFont: {
    color: 'white',
  }
})

class Button extends React.Component<Props> {
  public render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.addNumber(this.props.value)}
        style={styles.container}
      >
        <Text style={styles.whiteFont}>Add 1</Text>
      </TouchableOpacity>
    )
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addNumber,
  }, dispatch)
);

export default connect(null, mapDispatchToProps)(Button);
