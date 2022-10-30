# robot-app-ble

### Background

This app was built to be a controller for a 5-axis robot arm. The robot arm was designed to teach children about STEM and robotics. An app was chosen as the controller of choice because it's easily extensible, accessible, and intuitive.

### About this app

This app was built with bare workflow React Native and JavaScript. A main component of the app is Polidea's BLE PLX JavaScript library. This handles a lot of the Bluetooth connectivity. ConnectScreen connects to the BLE device and stores the details in a global object. MotorScreen renders components for each of the 5 different motors based on data from the constants folder. MotorScreen passes a function called sendData with arguments of the Bluetooth tranceiver's UUID information and data which are both defined in the constants folder. This sendData function sends serial data to the Arduino which is read and used to control the motors.

#### /screens/MotorScreen.js

```
const sendData = (data) => {
  device.writeCharacteristicWithoutResponseForService(UUID_1, UUID_2, data);
};
```

#### /constants/technicalSpecs.js

```
export const UUID_1 = '0000FFE0-0000-1000-8000-00805F9B34FB';
export const UUID_2 = '0000FFE0-0000-1000-8000-00805F9B34FB';
export const NAME_1 = 'HM-10';
export const NAME_2 = 'DSD-Tech';
```

#### /screens/ConnectScreen.js

```
GLOBAL_DEVICE = scanAndConnect().then((device) => {
  setIsConnected(true);
  return device;
});
```

### Arduino code

The repo at https://github.com/stephenkridel/RobotController is the corresponding arduino code.

<img src="https://github.com/stephenkridel/robot-app-ble/blob/master/images/app.PNG" align="center" height=350>

<img src="https://github.com/stephenkridel/robot-app-ble/blob/master/images/robot.PNG" align="center" height=350>
