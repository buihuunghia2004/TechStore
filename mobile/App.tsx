import { StyleSheet, View } from 'react-native'
import React from 'react'

const App = () => {
  const handlePriceChange = (minPrice: number, maxPrice: number) => {
    console.log(`Min Price: ${minPrice}, Max Price: ${maxPrice}`);
  };
  return (
    <View style={styles.container}>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})