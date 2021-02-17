import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const MotorButton = (props) => {
  return (
    <TouchableOpacity
      onPressIn={props.onPressActuate}
      onPressOut={props.onPressRelease}
      style={[styles.Button, {backgroundColor: props.color}]}>
      <Text style={styles.ButtonText}>{props.btnText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Button: {
    height: 60,
    width: 60,
    borderRadius: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonText: {
    fontSize: 20,
    color: 'black',
  },
});

export default MotorButton;
