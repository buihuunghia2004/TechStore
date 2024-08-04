import { View, Text, TouchableOpacity, StyleProp, TextStyle } from 'react-native'
import React from 'react'
import { TextUnderLineStyle } from '~/styles/components/common/TextUnderLineStyle'
import { colors } from '~/styles/colors'
interface Props {
  fontStyle: StyleProp<TextStyle>,
  text: string,
  isColor?: boolean,
  onPress?: () => void
}
const TextUnderline: React.FC<Props> = ({
fontStyle,
text,
onPress,
isColor=false
}) => {
  return (
    <TouchableOpacity activeOpacity={1} style={TextUnderLineStyle.container} onPress={onPress}>
      <Text style={[fontStyle,TextUnderLineStyle.text,isColor && {color:colors.primary}]}>{text}</Text>
      <View style={TextUnderLineStyle.line}/>
    </TouchableOpacity>
  )
}

export default TextUnderline