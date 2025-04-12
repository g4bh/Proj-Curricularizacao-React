import React from 'react';
import {  View,  Text,  TextInput,  TouchableOpacity,  Image } from 'react-native';
import { styles } from './Styles';

import logotipoAgendAr from '../../../assets/AgendAr.png'

import Input from '../../Components/Inputs/Index'
import Botao from '../../Components/Botao/Index'

function Cadastro() {
  return (
    <View style={styles.container}>

         <View style={styles.header}>
            <View>
              <Image source={logotipoAgendAr} style={styles.logotipo}/>

              <Text style={styles.titulo}>
                <Text style={styles.tituloAzul}>Cadastre-</Text>
                <Text style={styles.tituloAzulEscuro}>se!</Text>
              </Text>

              <Text style={styles.subtitulo}>
                Crie uma conta para acessar o app              
              </Text>
            </View>
    </View>

      <View style={styles.formBox }>
              <Text style={styles.label}>Nome completo</Text>
              <Input
                style={styles.input}
                placeholder="Digite seu nome"
                color ="#999"
              />

              <Text style={styles.label}>Telefone</Text>
              <Input
                style={styles.input}
                placeholder="Digite seu telefone"
                color = "#999"
              />

              <Text style={styles.label}>Email</Text>
              <Input
                style={styles.input}
                placeholder="Digite sua e-mail"
                color = "#999"
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
                titulo = "Cadastre-se"
                cor = "#2c3e50"
               />

              <Text style={styles.footerText}>
                Já tem conta? <Text style={styles.footerLink}>Faça o Login</Text>
              </Text>
          </View>


            </View>
      
    </View>
  );
}

export default Cadastro
