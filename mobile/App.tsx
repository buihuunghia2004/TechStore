import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppButton from '~/components/common/AppButton'
import { assets } from '~/styles/app/assets'
import CheckBox from '~/components/common/CheckBox'

const App = () => {
  return (
    <View>
      <CheckBox checked={true} title='1000' sub='(999)'/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})