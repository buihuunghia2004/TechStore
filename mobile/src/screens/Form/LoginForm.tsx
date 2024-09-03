import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppButton from '~/components/common/AppButton'
import { containerStyles, globalStyles, textStyles } from '~/styles/globalStyles'
import * as Yup from 'yup';
import {Formik} from 'formik';
import AppInput from '~/components/common/AppInput';
import { assets } from '~/styles/app/assets';
import CheckBox from '~/components/common/CheckBox';
import { AuthScreenStyle } from '~/styles/screens/AuthScreenStyle';

const loginValidationSchema = Yup.object().shape({
    email_login: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password_login: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });
const LoginForm: React.FC = () => {
  return (
    <Formik
      initialValues={{
        email_login: '',
        password_login: '',
      }}
      validationSchema={loginValidationSchema}
      onSubmit={values => console.log(values)}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        resetForm,
      }) => (
        <View>
          <Text style={AuthScreenStyle.textTitle}>Create your account</Text>
          <View style={AuthScreenStyle.inputContainer}>
            <AppInput
              placeholder="E-mail"
              onChangeText={handleChange('email_login')}
              onBlur={handleBlur('email_login')}
              value={values.email_login}
              leftIcon={assets.icon.sms}
              positionStyle={AuthScreenStyle.inputPositionStyle}
              textError={errors.email_login}
              isError={touched.email_login && !!errors.email_login}
            />
            <AppInput
              placeholder="Password"
              onChangeText={handleChange('password_login')}
              onBlur={handleBlur('password_login')}
              value={values.password_login}
              leftIcon={assets.icon.key}
              textError={errors.password_login}
              isError={touched.password_login&& !!errors.password_login}
            />
          </View>
          <View style={AuthScreenStyle.checkBoxContainer}>
            <CheckBox />
            <Text>I agree to all</Text>
            <TouchableOpacity>
              <Text style={AuthScreenStyle.linkText}>Terms & Conditions</Text>
            </TouchableOpacity>
          </View>
          <AppButton title="Create Account" onPress={handleSubmit} />
          <View style={AuthScreenStyle.lineContainer}>
            <View style={globalStyles.line} />
            <Text style={{textAlign: 'center', marginHorizontal: 8}}>
              Or Sign Up with
            </Text>
            <View style={globalStyles.line} />
          </View>
          <View style={[containerStyles.containerBetween, {gap: 16}]}>
            <AppButton
              leftIcon={assets.icon.facebook}
              outline
              onPress={() => console.log()}
              title="Facebook"
              positionStyle={{flex: 1}}
            />
            <AppButton
              leftIcon={assets.icon.google}
              onPress={() => console.log()}
              outline
              title="Google"
              positionStyle={{flex: 1, marginBottom: 24}}
            />
          </View>
          <View
            style={[
              containerStyles.containerCenter,
              {flexDirection: 'row'},
            ]}>
            <Text>Already have an account?</Text>
            <TouchableOpacity>
              <Text style={AuthScreenStyle.linkTextFooter}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  )
}
export default LoginForm