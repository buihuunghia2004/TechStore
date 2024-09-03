import {
  Animated,
  StatusBar,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import IconButton from '~/components/common/IconButton';
import {assets} from '~/styles/app/assets';
import Tab from '~/components/common/Tab';
import useFade from '~/hooks/animation/useFade';
import useSlide from '~/hooks/animation/useSlide';
import LoginForm from './Form/LoginForm';
import RegisterForm from './Form/RegisterForm';
import { AuthScreenStyle } from '~/styles/screens/AuthScreenStyle';

const AuthScreen = () => {
  const [isLogin, setLogin] = useState('Login');
  const loginOpacity = useFade(isLogin === 'Login');
  const registerOpacity = useFade(isLogin === 'Register');
  const {registerTranslate, loginTranslate} = useSlide(isLogin === 'Login');

  const handleOnPress = (key: string) => {
    setLogin(key);
  };
  return (
    <View style={AuthScreenStyle.container}>
      <StatusBar backgroundColor="white" />
      <IconButton icon={assets.icon.arrowBack} />
      <Text style={AuthScreenStyle.textLogo}>Tech Heim</Text>
      <Tab
        onItemPress={key => handleOnPress(key)}
        type="Register"
        data={['Login', 'Register']}
      />
      <Animated.View
        style={[
          {
            transform: [
              {
                translateX:
                  isLogin === 'Login' ? loginTranslate : registerTranslate,
              },
            ],
          },
        ]}>
        {isLogin === 'Login' ? (
          <Animated.View style={{opacity: loginOpacity}}>
            <LoginForm />
          </Animated.View>
        ) : (
          <Animated.View style={{opacity: registerOpacity}}>
            <RegisterForm />
          </Animated.View>
        )}
      </Animated.View>
    </View>
  );
};
export default AuthScreen;
