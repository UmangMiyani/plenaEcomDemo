import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const MoreScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text>MoreScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#dedede',
  },
});

export default MoreScreen;
