import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const MotorButton = (props) => {
  return (
    <TouchableOpacity
      onPressIn={props.onPressActuate}
      onPressOut={props.onPressRelease}
      style={[styles.Button, {backgroundColor: props.color}]}>
      <Text style={styles.ButtonText}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Button: {
    height: 75,
    width: 75,
    borderRadius: 75,
    margin: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonText: {
    fontSize: 30,
    color: 'black',
  },
});

export default MotorButton;
