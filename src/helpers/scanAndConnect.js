import {BleManager} from 'react-native-ble-plx';

const scanAndConnect = () => {
  let manager = new BleManager();

  manager.startDeviceScan(null, null, async (error, device) => {
    try {
      if (device.name === 'HM-10' || device.name === 'DSD TECH') {
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
