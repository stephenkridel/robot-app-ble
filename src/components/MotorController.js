import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import MotorButton from './MotorButton.js';

const MotorController = (props) => {
  return (
    <View style={styles.Controller}>
      <Text style={styles.Header}>{props.text}</Text>
      <View style={styles.Controls}>
        <MotorButton
          color={'cornflowerblue'}
          btnText={props.lftBtnText}
          onPressActuate={props.onPressActuateCCW}
          onPressRelease={props.onPressRelease}
        />
        <MotorButton
          color={'aquamarine'}
          btnText={props.lftBtnText}
          onPressActuate={props.onPressActuateCW}
          onPressRelease={props.onPressRelease}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Header: {
    fontSize: 30,
    textAlign: 'center',
    color: 'black',
  },
  Controls: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  Controller: {
    marginHorizontal: 10,
    marginBottom: 20,
    padding: 10,
    elevation: 10,
    borderRadius: 20,
    backgroundColor: 'white',
  },
});

export default MotorController;
