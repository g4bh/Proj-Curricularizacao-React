import React, { useState } from 'react';
import { View, Text, Image, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import { styles } from './Styles';
import api from '../../Service/Api';
import logotipoAgendAr from '../../../assets/AgendAr.png';

import Input from '../../Components/Inputs/Index';
import Botao from '../../Components/Botao/Index';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation();

  const fazerLogin = async () => {
    if (!email || !senha) {
      alert('Campos obrigatórios', 'Preencha o e-mail e a senha.');
      return;
    }

    try {
      const response = await api.post('/usuarios/login', {
        email,
        senha,
      });

      if (response.status === 200 || response.status === 201) {
        const usuario = response.data;
       
        await AsyncStorage.setItem('userId', usuario.id.toString());

        alert('Sucesso', 'Login realizado com sucesso!');
        navigation.navigate('Main');
      } else {
        alert('Credenciais inválidas.');
      }
    } catch (error) {
      console.log('Erro no login:', error);
      alert('Erro ao conectar com o servidor.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Image source={logotipoAgendAr} style={styles.logotipo} />

          <Text style={styles.titulo}>
            <Text style={styles.tituloAzul}>Bem-</Text>
            <Text style={styles.tituloAzulEscuro}>vindo!</Text>
          </Text>

          <Text style={styles.subtitulo}>
            Entre com suas credenciais para acessar o app!
          </Text>
        </View>
      </View>

      <View style={styles.formBox}>
        <Text style={styles.label}>E-mail</Text>
        <Input
          style={styles.input}
          placeholder="Digite seu e-mail"
          color="#999"
          variavel={setEmail}
        />

        <Text style={styles.label}>Senha</Text>
        <Input
          style={styles.input}
          placeholder="Digite sua senha"
          color="#999"
          secureTextEntry
          variavel={setSenha}
        />

        <View style={styles.areaBotao}>
          <Botao
            titulo="Login"
            cor="#2c3e50"
            onPress={fazerLogin}
          />

          <Text style={styles.footerText}>
            Não tem conta?{' '}
            <Text style={styles.footerLink} onPress={() => navigation.navigate('Cadastro')}>
              Cadastre-se
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

export default Login;
