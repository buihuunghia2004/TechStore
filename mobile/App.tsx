import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppHeader from '~/components/common/AppHeader';

const App = () => {
  return (
    <View style={styles.container}>
      <AppHeader/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  scrollView: {
    flex: 1,
  },
});
