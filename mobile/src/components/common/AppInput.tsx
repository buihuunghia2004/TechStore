import { Image, ImageProps, StyleProp, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useSharedValue } from 'react-native-reanimated';
import { AppInputStyles } from '~/styles/components/common/AppInputStyles'
import { iconStyles } from '~/styles/globalStyles'
import { assets } from '~/styles/app/assets';

interface Props {
  value: string,
  placeholder?: string,
  leftIcon?: ImageProps,
  clearIcon?: boolean,
  isPassword?: boolean,
  isError?: boolean,
  textError?: string,
  disable?: boolean,
  onFocus?: () => void,
  onBlur?: () => void,
  onChangeText: (text: string) => void,
}
interface State {
  state: string,
  style: StyleProp<any>,
  icon: ImageProps
}

const AppInput: React.FC<Props> = (props) => {
  const INACTIVE: State = { state: 'inactive', style: AppInputStyles.inactive, icon: assets.icon.close_circle_inactive }
  const FOCUSED: State = { state: 'foucused', style: AppInputStyles.foucused, icon: assets.icon.close_circle_focus }
  const DISABLE: State = { state: 'disable', style: AppInputStyles.disable, icon: assets.icon.close_circle_inactive }
  const ERROR: State = { state: 'error', style: AppInputStyles.error, icon: assets.icon.close_circle_error }
  const {isError = false, textError = '', disable = false} = props
  const [state, setState] = useState<State>(INACTIVE)
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false)
  const translateX = useSharedValue(30);
  const translateY = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value }
      ],
    };
  });
  useEffect(() => {
    if (state.state === INACTIVE.state && props.value === '') {
      console.log(props.value);
      translateX.value = withTiming(30, { duration: 300 }, (isFinished) => {
      });
      translateY.value = withTiming(22, { duration: 300 });
    } else if (state.state === FOCUSED.state) {
      translateX.value = withTiming(0, { duration: 300 }, (isFinished) => {
      });
      translateY.value = withTiming(0, { duration: 300 });
    }
  }, [state])

  return (
    <View style={AppInputStyles.container}>
      <View style={[
        AppInputStyles.containerInput,
        state.style,
        disable ? DISABLE.style : isError ? ERROR.style : state.style
      ]}>
        <Image source={props.leftIcon} style={iconStyles.icon20} />
        <TextInput
          value={props.value}
          onChangeText={props.onChangeText}
          style={AppInputStyles.input}
          editable={!disable}
          secureTextEntry={props.isPassword && !isShowPassword}
          onFocus={() => { setState(FOCUSED), props.onFocus }}
          onBlur={() => { setState(INACTIVE), props.onBlur }}
        />
        <TouchableOpacity onPress={props.isPassword ? () => setIsShowPassword(!isShowPassword) : () => props.onChangeText('')}>
          {props.isPassword ?
            <Image source={isShowPassword ? assets.icon.eye_open : assets.icon.eye_slash} style={iconStyles.icon20} /> :
            <Image source={disable ? DISABLE.icon : isError ? ERROR.icon : state.icon} style={iconStyles.icon20} />
          }
        </TouchableOpacity>
      </View>
      {isError && props.placeholder && !disable && <Text style={[AppInputStyles.textError]}>{textError}</Text>}
      <Animated.Text style={[
        AppInputStyles.label,
        animatedStyle,
        AppInputStyles.labelBackground,
        disable ? DISABLE.style : isError ? ERROR.style : state.style
      ]}>{props.placeholder}</Animated.Text>
    </View>
  )
}

export default AppInput
