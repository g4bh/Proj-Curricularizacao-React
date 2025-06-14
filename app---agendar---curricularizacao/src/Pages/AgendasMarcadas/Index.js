import { useEffect, useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, FlatList, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './Styles';

import Card from '../../Components/CardVisitas/Index';
import Header from '../../Components/Header/Index';

function AgendasMarcadas() {
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
          const response = await fetch(`https://api-agendar.onrender.com/visitas/usuario/${userId}`);
          const data = await response.json();
          setFeed(data);
        } catch (err) {
          console.error('Erro ao buscar visitas:', err);
          Alert.alert('Erro', 'Não foi possível carregar as visitas.');
        }
      };

      buscarVisitas();
    }, [userId])
  );

  return (
    <View style={styles.container}>
      <Header tituloPagina="Agendas marcadas" />

      <View style={styles.opcoesMenu}>
        <FlatList
          data={feed}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Card data={item} />}
        />
      </View>
    </View>
  );
}

export default AgendasMarcadas;
