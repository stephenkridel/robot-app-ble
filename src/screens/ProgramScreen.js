import React, {Component} from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';
import MotorController from '../components/MotorController';
import {BleManager} from 'react-native-ble-plx';
import GLOBAL from '../helpers/global';
import MotorEvent from '../components/MotorEvent';

export default class MotorScreen extends Component {
  constructor() {
    super();
    this.manager = new BleManager();

    this.device;

    this.state = {
      isConnected: false,
    };
  }

  componentDidMount() {
    this.device = GLOBAL.device;
    if (this.device) {
      this.device
        .connect()
        .then((device) => {
          this.device = device;
          return device;
        })
        .then((device) => {
          return device.discoverAllServicesAndCharacteristics();
        })
        .then(() => {
          // Do work on device with services and characteristics
          this.setState({isConnected: true});
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  componentWillUnmount() {
    this.sendData('Uw==\n');
  }

  sendData(data) {
    this.device.writeCharacteristicWithoutResponseForService(
      '0000FFE0-0000-1000-8000-00805F9B34FB',
      '0000FFE1-0000-1000-8000-00805F9B34FB',
      data,
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.Container}>
        <MotorEvent />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
});
