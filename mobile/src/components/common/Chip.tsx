import { Image, StyleProp, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import { ChipStyle } from '~/styles/components/common/ChipStyle'
import { assets } from '~/styles/app/assets'
interface Props {
  text: string,
  onRemovePress?: () => void,
  positionStyle?: StyleProp<ViewStyle>
}
const Chip: React.FC<Props> = ({text,onRemovePress}) => {
  return (
    <View style={ChipStyle.container}>
      <Text>{text}</Text>
      <TouchableOpacity onPress={onRemovePress}>
      <Image source={assets.icon.close_square} style={ChipStyle.removeIcon}/>
      </TouchableOpacity>
    </View>
  )
}

export default Chip