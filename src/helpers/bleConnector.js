// a singleton implementation of the BLE device
// allows for only one connected device that can
// be shared across the application

import {BleManager} from 'react-native-ble-plx';

let manager = new BleManager();
let device = null;

const bleConnector = {
  connect() {
    return new Promise((resolve, reject) => {
      manager.startDeviceScan(null, null, async (error, _device) => {
        if (error) {
          reject('Error in BLE Manager Device Scan');
        }

        if (_device.name === NAME_1 || _device.name === NAME_2) {
          manager.stopDeviceScan();
          await _device.connect();
          _device.discoverAllServicesAndCharacteristics;
          device = _device;
          resolve();
        }
      });
    });
  },
  writeCharacteristic() {
    if (device) {
      device.writeCharacteristicWithoutResponseForService(
        arguments[0],
        arguments[1],
        arguments[2],
      );
    } else {
      throw new Error('Device has not been connected yet');
    }
  },
};

Object.freeze(bleConnector);
export default bleConnector;
