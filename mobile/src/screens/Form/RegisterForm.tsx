import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import * as Yup from 'yup';
import {Formik} from 'formik';
import AppInput from '~/components/common/AppInput';
import {containerStyles, globalStyles, textStyles} from '~/styles/globalStyles';
import {assets} from '~/styles/app/assets';
import AppButton from '~/components/common/AppButton';
import CheckBox from '~/components/common/CheckBox';
import { AuthScreenStyle } from '~/styles/screens/AuthScreenStyle';

const RegisterForm: React.FC = () => {
  const registerVaidationSchema = Yup.object().shape({
    username: Yup.string().required('Username is require'),
    email_register: Yup.string()
      .email('Invalid email adress')
      .required('Email is reuquire'),
    password_register: Yup.string().min(
      6,
      'Password must be at least 6 characters',
    ),
  });

  return (
    <Formik
      initialValues={{
        username: '',
        email_register: '',
        password_register: '',
      }}
      validationSchema={registerVaidationSchema}
      onSubmit={values => console.log(values)}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View>
          <Text style={AuthScreenStyle.textTitle}>Create your account</Text>
          <View style={AuthScreenStyle.inputContainer}>
            <AppInput
              placeholder="Full Name"
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
              leftIcon={assets.icon.user}
              positionStyle={AuthScreenStyle.inputPositionStyle}
              textError={errors.username}
              isError={touched.username && !!errors.username}
            />
            <AppInput
              placeholder="E-mail"
              onChangeText={handleChange('email_register')}
              onBlur={handleBlur('email_register')}
              value={values.email_register}
              leftIcon={assets.icon.sms}
              positionStyle={AuthScreenStyle.inputPositionStyle}
              textError={errors.email_register}
              isError={touched.email_register && !!errors.email_register}
            />
            <AppInput
              placeholder="Password"
              onChangeText={handleChange('password_register')}
              onBlur={handleBlur('password_register')}
              leftIcon={assets.icon.key}
              value={values.password_register}
              textError={errors.password_register}
              isError={touched.password_register && !!errors.password_register}
            />
          </View>
          <View style={AuthScreenStyle.checkBoxContainer}>
            <CheckBox/>
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
            style={[containerStyles.containerCenter, {flexDirection: 'row'}]}>
            <Text>Already have an account?</Text>
            <TouchableOpacity>
              <Text style={AuthScreenStyle.linkTextFooter}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default RegisterForm;
