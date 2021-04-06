import React, {Component} from 'react';
import {Text, StyleSheet, View, SafeAreaView, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MotorSelector from '../components/MotorSelector';
import Icon from 'react-native-vector-icons/AntDesign';

export default class MotorEvent extends Component {
  constructor() {
    super();

    this.state = {
      eventNum: 1,
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.Container}>
        {Array(this.state.eventNum).fill(<MotorSelector />)}
        <TouchableOpacity
          style={styles.Button}
          onPress={() => {
            this.setState((prevState) => {
              return {eventNum: prevState.eventNum + 1};
            });
            console.log(this.state.eventNum);
          }}>
          <Icon name={'plus'} size={35} color={'white'} />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    justifyContent: 'space-between',
    overflow: 'scroll',
  },
  Button: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 20,
  },
});
