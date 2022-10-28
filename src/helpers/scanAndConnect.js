import {BleManager} from 'react-native-ble-plx';
import {NAME_1, NAME_2} from '../constants/technicalSpecs';

const scanAndConnect = () => {
  let manager = new BleManager();

  manager.startDeviceScan(null, null, async (error, device) => {
    try {
      if (device.name === NAME_1 || device.name === NAME_2) {
        manager.stopDeviceScan();
        await device.connect();
        await device.discoverAllServicesAndCharacteristics();
        return device;
      }
    } catch (e) {
      console.log(e);
    }
  });
};

export {scanAndConnect};
