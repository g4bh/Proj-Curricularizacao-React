import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, Alert } from 'react-native';
import { styles } from './Styles';
import { useRoute, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import FormAgendamento from '../../Components/Forms/Index';
import Header from '../../Components/Header/Index';
import Botao from '../../Components/Botao/Index';

function DescricaoAgenda() {
  const route = useRoute();
  const navigation = useNavigation();
  const { dados } = route.params;

  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const buscarId = async () => {
      const id = await AsyncStorage.getItem('userId');
      setUserId(id);
    };
    buscarId();
  }, []);

  const cancelarVisita = async () => {
  try {
    const response = await fetch(`https://api-agendar.onrender.com/visitas/${dados.id}/usuario/${userId}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      alert('Visita cancelada com sucesso!');
      navigation.goBack();
    } else {
      alert('Não foi possível cancelar a visita.');
    }
  } catch (error) {
    console.error(error);
    alert('Erro na requisição.');
  }
};

  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.areaDescricao}>
        <Header tituloPagina={dados.tipoServico} />
        <View style={styles.opcoesMenu}>
          <Text style={styles.tituloInput}>Tipo de visita:</Text>
          <Text style={styles.descricaoVisita}>{dados.tipoServico}</Text>

          <Text style={styles.tituloInput}>Data: </Text>
          <Text style={styles.descricaoVisita}>{dados.dataServico}</Text>

          <Text style={styles.tituloInput}>Hora:</Text>
          <Text style={styles.descricaoVisita}>{dados.horaServico}</Text>

          <Text style={styles.tituloInput}>Endereço:</Text>
          <Text style={styles.descricaoVisita}>{dados.endereco}, {dados.numeroResidencia}</Text>

          <Text style={styles.tituloInput}>Cidade: </Text>
          <Text style={styles.descricaoVisita}>{dados.cidade}</Text>

          <Text style={styles.tituloInput}>Acolhedor: </Text>
          <Text style={styles.descricaoVisita}>{dados.nomeAcolhedor}</Text>
        </View>
      </View> 
        <View style={styles.areaBotao}>
          <Botao
            titulo="Cancelar visita"
            cor="#7F2E2E"
            onPress={cancelarVisita}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default DescricaoAgenda;
