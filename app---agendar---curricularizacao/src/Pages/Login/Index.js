import React from 'react';
import {  View,  Text,  TextInput,  TouchableOpacity,  Image } from 'react-native';
import { styles } from './Styles';

import logotipoAgendAr from '../../../assets/AgendAr.png'

import Input from '../../Components/Inputs/Index'
import Botao from '../../Components/Botao/Index'

function Login() {
  return (
    <View style={styles.container}>

         <View style={styles.header}>
            <View>
              <Image source={logotipoAgendAr} style={styles.logotipo}/>

              <Text style={styles.titulo}>
                <Text style={styles.tituloAzul}>Bem-</Text>
                <Text style={styles.tituloAzulEscuro}>vindo!</Text>
              </Text>

              <Text style={styles.subtitulo}>
                Entre com suas credenciais para acessar o app!
              </Text>
            </View>
    </View>

      <View style={styles.formBox }>
              <Text style={styles.label}>E-mail</Text>
              <Input
                style={styles.input}
                placeholder="Digite seu e-mail"
                color ="#999"
              />

              <Text style={styles.label}>Senha</Text>
              <Input
                style={styles.input}
                placeholder="Digite sua senha"
                color = "#999"
                secureTextEntry
              />
              
        <View style={styles.areaBotao}>
              <Botao 
                titulo = "Login"
                cor = "#2c3e50"
               />

              <Text style={styles.footerText}>
                Não tem conta? <Text style={styles.footerLink}>Cadastre-se</Text>
              </Text>
          </View>
        </View>
      
    </View>
  );
}

export default Login
