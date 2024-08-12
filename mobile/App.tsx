import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppButton from '~/components/common/AppButton'
import { assets } from '~/styles/app/assets'
import CheckBox from '~/components/common/CheckBox'
import Chip from '~/components/common/Chip'
import DropSelect from '~/components/common/DropSelect'

const App = () => {
  return (
    <View style={styles.container}>
      <DropSelect title='Sort' data={['11111111111111111111', '2', '3', '4', '5']}/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})