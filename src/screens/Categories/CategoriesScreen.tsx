import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const CategoriesScreen = (props: any) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text>CategoriesScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#e5e5e5',
  },
});

export default CategoriesScreen;
