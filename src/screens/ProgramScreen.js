import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {device} from '../helpers/global';
import MotorEvent from '../components/MotorEvent';
import {UUID_1, UUID_2} from '../constants/technicalSpecs';
import {STOP_MOTORS_CHAR} from '../constants/motorSignals';

const MotorScreen = () => {
  useEffect(() => {
    return () => sendData(STOP_MOTORS_CHAR);
  }, []);

  const sendData = (data) => {
    device.writeCharacteristicWithoutResponseForService(UUID_1, UUID_2, data);
  };

  return (
    <SafeAreaView style={styles.Container}>
      <MotorEvent />
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
