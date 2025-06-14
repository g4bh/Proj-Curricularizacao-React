import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, Image, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import Botao from '../../Components/Botao/Index';
import Input from '../../Components/Inputs/Index';
import Header from '../../Components/Header/Index';

import imagemPerfil from '../../../assets/perfil.png';
import { styles } from './Styles';
import api from '../../Service/Api';

function Perfil() {
  const navigation = useNavigation();

  const [userId, setUserId] = useState(null);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  useEffect(() => {
    const buscarDadosUsuario = async () => {
      const id = await AsyncStorage.getItem('userId');
      if (!id) return;

      try {
        const response = await api.get(`/usuarios/${id}`);
        const data = response.data;

        setUserId(id);
        setNome(data.nome);
        setEmail(data.email);
        setTelefone(data.telefone);
      } catch (err) {
        console.error(err);
        alert('Erro ao buscar dados do usuário');
      }
    };

    buscarDadosUsuario();
  }, []);

  const salvarAlteracoes = async () => {
    try {
      const response = await api.put(`/usuarios/${userId}`, {
        nome,
        email,
        telefone
        });

      if (response.status === 200) {
        alert('Dados atualizados com sucesso!');
      } else {
        alert('Erro ao atualizar dados');
      }
    } catch (error) {
      console.error(error);
      alert('Erro na requisição');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header tituloPagina="Perfil" />

        <View style={styles.areaPerfil}>
          <Image source={imagemPerfil} style={styles.imagemPerfil} />
          <Text style={styles.nomePerfil}>{nome}</Text>
        </View>

        <View style={styles.formBox}>
          <Text style={styles.label}>E-mail</Text>
          <Input
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="seu@email.com"
            color="#999"
          />

          <Text style={styles.label}>Telefone</Text>
          <Input
            style={styles.input}
            value={telefone}
            onChangeText={setTelefone}
            placeholder="11 91234-5678"
            color="#999"
          />

          <View style={styles.areaBotao}>
            <Botao titulo="Salvar alterações" cor="#2c3e50" onPress={salvarAlteracoes} />
          </View>

          <View style={styles.areaBotao}>
            <Botao
              titulo="Sair"
              cor="#7F2E2E"
              onPress={() => navigation.navigate('Login')}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Perfil;