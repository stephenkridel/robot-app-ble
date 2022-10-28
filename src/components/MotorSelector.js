import React, {useState} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const MotorSelector = () => {
  const [selectedMotor, setSelectedMotor] = useState();
  const [number, onChangeNumber] = useState(null);

  return (
    <View style={styles.Controls}>
      <Picker
        selectedValue={selectedMotor}
        onValueChange={(itemValue) => setSelectedMotor(itemValue)}>
        <Picker.Item label="Elbow" value="E" />
        <Picker.Item label="Shoulder" value="S" />
        <Picker.Item label="Gripper" value="G" />
        <Picker.Item label="Forearm" value="F" />
      </Picker>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Controls: {
    elevation: 10,
    width: '90%',
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 20,
    marginVertical: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default MotorSelector;
