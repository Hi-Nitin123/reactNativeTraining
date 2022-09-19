import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

function LoginScreen({navigation}) {
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');

  const styles = StyleSheet.create({
    loginInput: {
      fontSize: 20,
      marginVertical: 10,
    },
    passwordInput: {
      fontSize: 20,
      marginVertical: 10,
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
    <View style={{padding: 10}}>
      <TextInput
        style={styles.loginInput}
        placeholder="Enter Email"
        onChangeText={inputValue => setText(inputValue)}
        value={text}
      />
      <TextInput
        style={styles.passwordInput}
        placeholder="Enter Password"
        onChangeText={pswd => setPassword(pswd)}
        value={password}
      />
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text style={{fontSize: 25, color: 'white'}}>{'Login'}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LoginScreen;
