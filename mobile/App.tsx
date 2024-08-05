import { StyleSheet, View } from 'react-native'
import React from 'react'
import DropPrice from '~/components/common/DropPrice'

const App = () => {
  const handlePriceChange = (minPrice: number, maxPrice: number) => {
    console.log(`Min Price: ${minPrice}, Max Price: ${maxPrice}`);
  };
  return (
    <View style={styles.container}>
      <DropPrice title='Price' max={100} min={0} onPriceChange={handlePriceChange} />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})