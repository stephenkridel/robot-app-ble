import React, {Component} from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';
import {BleManager} from 'react-native-ble-plx';
import GLOBAL from '../helpers/global';

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.manager = new BleManager();

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

  componentWillUnmount() {}

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
            GLOBAL.device = device;
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

  render() {
    return (
      <SafeAreaView>
        <Text style={styles.DevicesHeader}>Robot Arm Controller</Text>
        <Text style={styles.ConnectionText}>
          {this.state.isConnected ? 'Device is Connected' : 'Connecting...'}
        </Text>
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
