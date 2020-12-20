import React, {Component} from 'react';
import {Text, Button} from 'react-native';
import {BleManager} from 'react-native-ble-plx';

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.manager = new BleManager();
    this.deviceList = [];
  }

  componentDidMount() {
    const subscription = this.manager.onStateChange((state) => {
      if (state === 'PoweredOn') {
        this.scanAndConnect();
        subscription.remove();
      }
    }, true);
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
      if (device.name === 'HC-05' || device.name === 'HM-10') {
        // Stop scanning as it's not necessary if you are scanning for one device.
        this.manager.stopDeviceScan();

        device
          .connect()
          .then((device) => {
            return device.discoverAllServicesAndCharacteristics();
          })
          .then((device) => {
            // Do work on device with services and characteristics
            console.log(`Connected to device ${device.name}`);
          })
          .catch((error) => {
            console.log(error);
          });
        // Proceed with connection.
      }
    });
  }

  render() {
    return (
      <>
        <Text>Hello World</Text>
      </>
    );
  }
}
