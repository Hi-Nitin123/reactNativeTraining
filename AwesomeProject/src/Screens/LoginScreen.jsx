import react from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';

const LoginScreen = ({navigation}) => {
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email Address is Required'),
    password: yup
      .string()
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });
  const styles = StyleSheet.create({
    loginInput: {
      fontSize: 25,
      marginVertical: 25,
      paddingLeft: 15,
    },
    passwordInput: {
      fontSize: 25,
      marginVertical: 20,
      paddingLeft: 15,
    },
    loginBtn: {
      width: '80%',
      borderRadius: 25,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 40,
      backgroundColor: '#1a8cff',
      marginLeft: 35,
    },
  });

  return (
    <View style={styles.loginContainer}>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{email: '', password: ''}}
        onSubmit={() => {
          navigation.navigate('Home');
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <>
            <TextInput
              name="email"
              placeholder="Email Address"
              style={styles.loginInput}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              keyboardType="email-address"
            />
            {errors.email && (
              <Text style={{fontSize: 10, color: 'red'}}>{errors.email}</Text>
            )}
            <TextInput
              name="password"
              placeholder="Password"
              style={styles.passwordInput}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
            />
            {errors.password && (
              <Text style={{fontSize: 10, color: 'red'}}>
                {errors.password}
              </Text>
            )}
            <TouchableOpacity
              style={styles.loginBtn}
              onPress={handleSubmit}
              title="LOGIN"
              disabled={!isValid}>
              <Text style={{fontSize: 25, color: 'white'}}>Login</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
};
export default LoginScreen;
