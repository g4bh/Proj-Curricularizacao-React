  import React, { useState } from 'react';
  import { View, Text, Image, Alert, ActivityIndicator } from 'react-native';
  import { useNavigation } from '@react-navigation/native';

  import { styles } from './Styles';
  import logotipoAgendAr from '../../../assets/AgendAr.png';
  import api from '../../Service/Api';

  import Input from '../../Components/Inputs/Index';
  import Botao from '../../Components/Botao/Index';

  function Cadastro() {

    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    async function cadastrarUsuario() {
      if (!nome || !telefone || !email || !senha) {
        alert('Campos obrigatórios', 'Preencha todos os campos.');
        return;
      }

      setLoading(true);

      try {
        const response = await api.post('/usuarios/cadastro', {
          nome,
          telefone,
          email,
          senha,
        });

        if (response.status === 200 || response.status === 201 ) {
          alert('Sucesso', 'Usuário cadastrado com sucesso!');
          navigation.navigate('Login')
        } else {
          alert('Erro ao cadastrar usuário.');
        }
      } catch (error) {
        if (error.response && error.response.data) {
          alert(error.response.data);
        } else {
          alert('Erro ao conectar com o servidor.');
        }
        console.error('Erro no cadastro:', error);
      } finally {
        setLoading(false);
      }
    }

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Image source={logotipoAgendAr} style={styles.logotipo} />

            <Text style={styles.titulo}>
              <Text style={styles.tituloAzul}>Cadastre-</Text>
              <Text style={styles.tituloAzulEscuro}>se!</Text>
            </Text>

            <Text style={styles.subtitulo}>
              Crie uma conta para acessar o app
            </Text>
          </View>
        </View>

        <View style={styles.formBox}>
          <Text style={styles.label}>Nome completo</Text>
          <Input
            style={styles.input}
            placeholder="Digite seu nome"
            color="#999"
            variavel={setNome}
          />

          <Text style={styles.label}>Telefone</Text>
          <Input
            style={styles.input}
            placeholder="Digite seu telefone"
            color="#999"
            variavel={setTelefone}
          />

          <Text style={styles.label}>Email</Text>
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
            {loading ? (
              <ActivityIndicator size="large" color="#2c3e50" />
            ) : (
              <Botao
                titulo="Cadastre-se"
                cor="#2c3e50"
                onPress={cadastrarUsuario}
              />
            )}

            <Text style={styles.footerText}>
              Já tem conta?{' '}
              <Text
                style={styles.footerLink}
                onPress={() => navigation.navigate('Login')}
              >
                Faça o Login
              </Text>
            </Text>
          </View>
        </View>
      </View>
    );
  }

  export default Cadastro;
