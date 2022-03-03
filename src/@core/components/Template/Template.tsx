import React from 'react';
import {StyleSheet, View} from 'react-native';

interface Props {}

const Template: React.FC<Props> = () => {
  return <View style={styles.container} />;
};

export default Template;

const styles = StyleSheet.create({
  container: {},
});
