import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppButton from '~/components/common/AppButton'
import { assets } from '~/styles/app/assets'
const App = () => {
  return (
    <View style={[styles.container,{flexDirection:'row',gap:8}]}>
      <AppButton
        leftIcon={assets.icon.sms}
        rightIcon={assets.icon.sms}
        onPress={() => console.log()}
        title='Login' />
        <AppButton
        leftIcon={assets.icon.google}
        rightIcon={assets.icon.google}
        outline
        onPress={() => console.log()}
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