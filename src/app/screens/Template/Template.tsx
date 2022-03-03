import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Props} from '../../navigation/interfaceInject';

const Template: React.FC<Props> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Template</Text>
      </View>
    </SafeAreaView>
  );
};

export default Template;

const styles = StyleSheet.create({
  container: {},
});
