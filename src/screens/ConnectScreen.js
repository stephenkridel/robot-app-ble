import React, {useEffect, useState} from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';
import bleConnector from '../helpers/bleConnector';

// setup a global variable to store the connected device
// to share between tabs. This is a simple way to do it
// but could also be done through react navigation

const HomeScreen = () => {
  [isConnected, setIsConnected] = useState(false);

  useEffect(() => connectToDevice(), []);

  const connectToDevice = async () => {
    try {
      await bleConnector.connect();
      setIsConnected(true);
    } catch (e) {
      console.log('Problem connecting with device', e);
    }
  };

  return (
    <SafeAreaView>
      <Text style={styles.DevicesHeader}>Robot Arm Controller</Text>
      <Text style={styles.ConnectionText}>
        {isConnected ? 'Device is Connected' : 'Connecting...'}
      </Text>
    </SafeAreaView>
  );
};

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

export default HomeScreen;
export {GLOBAL_DEVICE};
