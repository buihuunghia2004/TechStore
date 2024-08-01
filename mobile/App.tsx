import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppButton from '~/components/common/AppButton'

const App = () => {
  return (
    <View style={styles.container}>
      <AppButton
        onClick={() => console.log()}
        title='Login' />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})