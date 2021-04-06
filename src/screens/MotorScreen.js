import React, {Component} from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';
import MotorController from '../components/MotorController';
import {BleManager} from 'react-native-ble-plx';
import GLOBAL from '../helpers/global';

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
        <MotorController
          text={'Shoulder'}
          lftBtnText={'Backward'}
          rgtBtnText={'Forward'}
          onPressActuateLeft={() => this.sendData('Sw==\n')} /*Base64 for K*/
          onPressActuateRight={() => this.sendData('Tg==\n')} /*Base64 for N*/
          onPressRelease={() => this.sendData('Uw==\n')} /*Base64 for S*/
        />
        <MotorController
          text={'Elbow'}
          lftBtnText={'Backward'}
          rgtBtnText={'Forward'}
          onPressActuateLeft={() => this.sendData('Qg==\n')} /*Base64 for B*/
          onPressActuateRight={() => this.sendData('Qw==\n')} /*Base64 for C*/
          onPressRelease={() => this.sendData('Uw==\n')} /*Base64 for S*/
        />
        <MotorController
          text={'Wrist'}
          lftBtnText={'Backward'}
          rgtBtnText={'Forward'}
          onPressActuateLeft={() => this.sendData('WQ==\n')} /*Base64 for X*/
          onPressActuateRight={() => this.sendData('WA==\n')} /*Base64 for Y*/
          onPressRelease={() => this.sendData('Uw==\n')} /*Base64 for S*/
        />
        <MotorController
          text={'Gripper'}
          lftBtnText={'Open'}
          rgtBtnText={'Close'}
          onPressActuateLeft={() => this.sendData('Rw==\n')} /*Base64 for G*/
          onPressActuateRight={() => this.sendData('Ug==\n')} /*Base64 for R*/
          onPressRelease={() => this.sendData('Uw==\n')} /*Base64 for S*/
        />
        <MotorController
          text={'Forearm'}
          lftBtnText={'CCW'}
          rgtBtnText={'CW'}
          onPressActuateLeft={() => this.sendData('Rg==\n')} /*Base64 for F*/
          onPressActuateRight={() => this.sendData('QQ==\n')} /*Base64 for A*/
          onPressRelease={() => this.sendData('Uw==\n')} /*Base64 for S*/
        />
        <MotorController
          text={'Base'}
          lftBtnText={'CCW'}
          rgtBtnText={'CW'}
          onPressActuateLeft={() => this.sendData('Vg==\n')} /*Base64 for V*/
          onPressActuateRight={() => this.sendData('UQ==\n')} /*Base64 for Q*/
          onPressRelease={() => this.sendData('Uw==\n')} /*Base64 for S*/
        />
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
