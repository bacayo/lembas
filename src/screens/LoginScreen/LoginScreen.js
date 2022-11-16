import { View, Image, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

import InputCard from '../../components/InputCard';
import styles from './LoginScreenStyles';
import MainButton from '../../components/MainButton';
import SocialButton from '../../components/SocialButton';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const signIn = async () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(userCrendentials => {
        const user = userCrendentials.user;
        console.log(user.email);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        navigation.navigate('HomeScreen');
      }
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.loginImg}
        source={require('../../../assets/images/lembas.png')}
      />
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputContainer}>
        <InputCard
          placeholder="Email"
          value={email}
          secureTextEntry={false}
          onChangeText={text => setEmail(text)}
          icon="email"
        />
        <InputCard
          placeholder="Password"
          value={password}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          icon="lock"
        />
        <Text style={styles.recoverPwd}>Forgot Password?</Text>
        <MainButton onPress={signIn} icon="login" text="Login" />
      </View>
      <Text style={[styles.text, styles.textContainer]}>Or, Login with...</Text>
      <View style={styles.socialContainer}>
        <SocialButton icon="google" />
        <SocialButton icon="facebook" />
        <SocialButton icon="apple" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>New to lembas?</Text>
        <Text style={[styles.text, styles.register]}>Register</Text>
      </View>
    </View>
  );
};

export default LoginScreen;
