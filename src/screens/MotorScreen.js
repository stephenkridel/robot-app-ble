import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import MotorController from '../components/MotorController';

import {MOTORS} from '../constants/motors';
import {STOP_MOTORS_CHAR} from '../constants/motorSignals';
import {UUID_1, UUID_2} from '../constants/technicalSpecs';
import bleConnector from '../helpers/bleConnector';

const MotorScreen = () => {
  // send the stopping character when the user leaves the screen
  // return needed for componentWillUnmount functionality
  useEffect(() => {
    return () => sendData(STOP_MOTORS_CHAR);
  }, []);

  const sendData = (data) => {
    bleConnector.writeCharacteristic(UUID_1, UUID_2, data);
  };

  return (
    <SafeAreaView style={styles.Container}>
      {MOTORS.forEach((el) => (
        <MotorController
          text={el.text}
          lftBtnText={el.lftBtnText}
          rgtBtnText={el.rgtBtnText}
          onPressActuateLeft={sendData(el.lftBtnChar)}
          onPressActuateRight={sendData(el.rgtBtnChar)}
          onPressRelease={sendData(el.releaseChar)}
        />
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
});

export default MotorScreen;
