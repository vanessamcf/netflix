/* eslint-disable no-alert */
import React, {useState, useEffect} from 'react';
import {Image, Text, View, ActivityIndicator} from 'react-native';
import {TextInput, Button} from 'react-native-paper';

// import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/api';
import styles from './styles';

const Login = ({navigation}) => {
  const [logged, setLogged] = useState(0); // status 0 - loading, 1- logged, 2- not logged
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const checkLogin = async () => {
    // AsyncStorage.clear();
    const user = await AsyncStorage.getItem('@user');
    if (user) {
      setLogged(1);
      navigation.replace('Home');
    } else {
      setLogged(2);
    }
  };

  const login = async () => {
    try {
      const response = await api.post('/user/login', credentials);
      const res = response.data;
      if (res.error) {
        alert(res.message);
        return false;
      }
      await AsyncStorage.setItem('@user', JSON.stringify(res.user));
      navigation.replace('Home');
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    checkLogin(); // always when it loads need to check this function
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/logo.png')} />

      {logged == 0 && <ActivityIndicator color="#fff" size="large" />}
      {logged == 2 && (
        <View>
          <TextInput
            label="Email or phone number"
            mode="flat"
            autoCapitalize="none"
            textContentType="emailAddress"
            style={styles.login}
            value={credentials.email}
            onChangeText={text => setCredentials({...credentials, email: text})} // alterar apenas email para text
          />

          <TextInput
            label="Password"
            mode="flat"
            style={styles.login}
            secureTextEntry
            value={credentials.password}
            onChangeText={text =>
              setCredentials({...credentials, password: text})
            } // alterar apenas email para text
          />
          <Button
            mode="outlined"
            style={styles.loginButton}
            onPress={() => login()}>
            Sign in
          </Button>
          <Button
            style={styles.login}
            onPress={() => console.log('Pressed')}
            theme={{colors: {primary: '#fff'}}}>
            Need help?
          </Button>
          <Text style={styles.smallText}>
            Sign in is protected by Google reCAPTCHA to ensure you're not a
            bot.Learn more.
          </Text>
        </View>
      )}
    </View>
  );
};

export default Login;
