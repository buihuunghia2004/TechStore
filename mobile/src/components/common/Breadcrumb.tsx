import { Image, StyleProp, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import { BreadcrumbStyle } from '~/styles/app/components/common/BreadcrumbStyle'
import { assets } from '~/styles/app/assets'
import { iconStyles } from '~/styles/globalStyles'
interface Props {
  data: string[],
  onItemPress?: (index: number) => void
  positionStyle?: StyleProp<ViewStyle>
}
const Breadcrumb: React.FC<Props> = (props) => {
  const {
    data,
    positionStyle
  }=props
  return (
    <View style={[BreadcrumbStyle.container, positionStyle]}>
      {
        data.map((item, index) => {
          return (
            <TouchableOpacity onPress={() => props.onItemPress?.(index)} style={BreadcrumbStyle.itemContainer} key={index}>
              <Text style={data.length - 1 === index ? BreadcrumbStyle.textCurrent : BreadcrumbStyle.text}>{item}</Text>
              {data.length - 1 !== index && <Image source={assets.icon.arrow_right_sm} style={iconStyles.icon16} />}
            </TouchableOpacity>
          )
        })
      }
    </View>
  )
}

export default Breadcrumb