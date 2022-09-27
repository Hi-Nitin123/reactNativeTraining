import react from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
  StatusBar,
  Alert,
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
    errorContainer: {
      fontSize: 15,
      color: 'red',
      marginTop: -8,
    },
    textInput: {
      backgroundColor: 'white',
      borderRadius: 30,
      width: 300,
      height: 45,
      marginBottom: 20,
      paddingStart: 20,

      alignItems: 'center',
      fontSize: 20,
      marginVertical: 20,
    },
    passwordInput: {
      backgroundColor: 'white',
      borderRadius: 30,
      width: 300,
      height: 45,
      marginBottom: 20,
      paddingStart: 20,
      fontSize: 20,

      alignItems: 'center',
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#6699ff',
    },

    loginBtn: {
      width: '60%',
      borderRadius: 25,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 40,
      backgroundColor: '#1a8cff',
      marginLeft: 10,
      marginTop: 30,
    },
  });

  return (
    <View style={styles.container}>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{email: '', password: ''}}
        onSubmit={() => {
          Alert.alert('Congratulations', 'You are logged in successfully');
          navigation.navigate('Home');
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
          touched,
        }) => (
          <>
            <View>
              <TextInput
                name="email"
                placeholder="Email Address"
                style={styles.textInput}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
              />
            </View>
            {errors.email && (
              <Text style={styles.errorContainer}>{errors.email}</Text>
            )}
            <View>
              <TextInput
                name="password"
                placeholder="Password"
                style={styles.passwordInput}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={true}
              />
            </View>
            {errors.password && (
              <Text style={styles.errorContainer}>{errors.password}</Text>
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
