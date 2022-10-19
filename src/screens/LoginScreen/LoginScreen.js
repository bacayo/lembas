import { View, Image, Text } from 'react-native';
import React, { useState } from 'react';

import InputCard from '../../components/InputCard';
import styles from './LoginScreenStyles';
import MainButton from '../../components/MainButton';
import SocialButton from '../../components/SocialButton';
import ScreenNames from '../../constants/ScreenNames';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        <MainButton icon="login" text="Login" />
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
