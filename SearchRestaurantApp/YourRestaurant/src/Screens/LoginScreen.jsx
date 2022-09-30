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
  Form,
} from 'react-native';
import {useFormik} from 'formik';

const validate = values => {
  console.log('called');
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  }
  return errors;
};

const LoginScreen = ({navigation}) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: values => {
      Alert.alert('Congratulations', 'You are logged in successfully');
      navigation.navigate('Home');
    },
  });

  const styles = StyleSheet.create({
    errorContainer: {
      fontSize: 15,
      color: 'red',
      marginTop: -8,
      marginLeft: 110,
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
      width: 120,
      borderRadius: 25,
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 40,
      backgroundColor: '#1a8cff',
      marginLeft: 80,
      marginTop: 11,
    },
  });

  return (
    <View style={styles.container}>
      {/* <Form onSubmit={formik.handleSubmit}> */}

      <View>
        <TextInput
          style={styles.textInput}
          onChange={formik.handleChange('email')}
          onBlur={formik.handleBlur('email')}
          value={formik.values.email}
          placeholder="Enter Email"
        />
        {console.log(formik.values.email, formik.values.password, 'showerr')}
        {formik.errors.email && formik.touched.email ? (
          <Text style={styles.errorContainer}>{formik.errors.email}</Text>
        ) : null}
        <TextInput
          style={styles.textInput}
          dfg
          placeholder="Enter Password"
          onChange={formik.handleChange('password')}
          onBlur={formik.handleBlur('password')}
          value={formik.values.password}
        />
        {formik.errors.password && formik.touched.password ? (
          <Text style={styles.errorContainer}>{formik.errors.password}</Text>
        ) : null}

        <TouchableOpacity
          type="submit"
          style={styles.loginBtn}
          onPress={formik.handleSubmit}
          disabled={!formik.isValid}>
          <Text style={{fontSize: 25, color: 'white'}}>{'Login'}</Text>
        </TouchableOpacity>
      </View>
      {/* </Form> */}
    </View>
  );
};

export default LoginScreen;
