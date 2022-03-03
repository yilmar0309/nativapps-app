import React from 'react';
import {Text, StyleSheet, Modal, Pressable, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {AlertSlice, setHiddenAlert} from '@presenter/io/alertSlice';

const Alert = () => {
  const dispatch = useDispatch();
  const {visible, options} = useSelector(
    ({alert}: {alert: AlertSlice}) => alert,
  );

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => console.log('request close')}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{options.message}</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => dispatch(setHiddenAlert())}>
            <Text style={styles.textStyle}>Accept</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default Alert;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 50,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    paddingHorizontal: 20,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: 'red',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
