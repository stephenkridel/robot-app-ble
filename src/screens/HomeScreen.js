import React, {Component} from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';
import {BleManager} from 'react-native-ble-plx';
import MotorController from '../components/MotorController';

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.manager = new BleManager();

    this.device = null;

    this.state = {
      isConnected: false,
    };
  }

  componentDidMount() {
    const subscription = this.manager.onStateChange((state) => {
      if (state === 'PoweredOn') {
        this.scanAndConnect();
        subscription.remove();
      }
    }, true);
  }

  componentWillUnmount() {
    this.sendData('Uw==\n');
  }

  scanAndConnect() {
    console.log('Connecting...');
    this.manager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        console.log(error);
        return;
      }

      // Check if it is a device you are looking for based on advertisement data
      // or other criteria.
      console.log(device.name);
      console.log(device.serviceUUIDs);
      if (device.name === 'HM-10' || device.name === 'DSD TECH') {
        // Stop scanning as it's not necessary if you are scanning for one device.
        this.manager.stopDeviceScan();

        device
          .connect()
          .then((device) => {
            this.state.device = device;
            return device;
          })
          .then((device) => {
            return device.discoverAllServicesAndCharacteristics();
          })
          .then((device) => {
            // Do work on device with services and characteristics
            console.log(`Connected to device ${device.name}`);
            this.setState({isConnected: true});
          })
          .catch((error) => {
            console.log(error);
          });
        // Proceed with connection.
      }
    });
  }

  sendData(data) {
    this.state.device.writeCharacteristicWithoutResponseForService(
      '0000FFE0-0000-1000-8000-00805F9B34FB',
      '0000FFE1-0000-1000-8000-00805F9B34FB',
      data,
    );
  }

  render() {
    return (
      <SafeAreaView>
        <Text style={styles.DevicesHeader}>Robot Arm Controller</Text>
        <Text style={styles.ConnectionText}>
          {this.state.isConnected ? 'Device is Connected' : 'Connecting...'}
        </Text>
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
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  DevicesHeader: {
    fontSize: 30,
    textAlign: 'center',
    marginHorizontal: 30,
    marginVertical: 30,
    color: 'black',
  },
  Devices: {
    fontSize: 30,
    marginTop: 20,
    marginLeft: 20,
  },
  ConnectionText: {
    width: '100%',
    backgroundColor: 'lightblue',
    fontSize: 20,
    padding: 5,
    marginBottom: 20,
  },
});
