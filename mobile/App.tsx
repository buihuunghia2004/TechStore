import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppButton from '~/components/common/AppButton'
import { assets } from '~/styles/app/assets'
import IconButton from '~/components/common/IconButton'
const App = () => {
  return (
    <View>
      <IconButton icon={assets.icon.google}/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})