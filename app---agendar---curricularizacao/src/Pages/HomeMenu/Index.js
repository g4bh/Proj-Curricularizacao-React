import { useEffect, useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import { styles } from './Styles';
import logotipoAgendAr from '../../../assets/AgendAr.png';
import api from '../../Service/Api';

import Menu from '../../Components/Menu/Index';
import CardHome from '../../Components/CardHome/Index';

function Home() {
  const [userId, setUserId] = useState(null);
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    const buscarId = async () => {
      const id = await AsyncStorage.getItem('userId');
      setUserId(id);
    };
    buscarId();
  }, []);

  useFocusEffect(
    useCallback(() => {
      const buscarVisitas = async () => {
        if (!userId) return;

        try {
          const response = await fetch(`https://api-agendar.onrender.com/visitas/proximas/usuario/${userId}`);
          if (!response.ok) throw new Error('Erro na resposta da API');

          const data = await response.json();
          setFeed(data);
        } catch (err) {
          console.error('Erro ao buscar visitas:', err);
        }
      };

      buscarVisitas();
    }, [userId])
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Image source={logotipoAgendAr} style={styles.logotipo} />
          <Text style={styles.titulo}>
            <Text style={styles.tituloAzul}>Bem-</Text>
            <Text style={styles.tituloAzulEscuro}>vindo(a)!</Text>
          </Text>
          <Text style={styles.subtitulo}>Escolha a opção que deseja!</Text>
        </View>
      </View>

      <View style={styles.opcoesMenu}>
        <Text style={styles.tituloCards}>Visitas próximas</Text>

        <FlatList
          data={feed}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <CardHome data={item} />}
        />
      </View>
    </View>
  );
}

export default Home;
