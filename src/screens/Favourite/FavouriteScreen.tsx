import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const FavouriteScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text>FavouriteScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#dedede',
  },
});

export default FavouriteScreen;
