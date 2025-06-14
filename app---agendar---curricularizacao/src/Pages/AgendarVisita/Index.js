import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, ScrollView, Alert } from 'react-native';

import { styles } from './Styles';
import FormAgendamento from '../../Components/Forms/Index';
import Header from '../../Components/Header/Index';
import Botao from '../../Components/Botao/Index';

function AgendarVisita() {
  const [userId, setUserId] = useState(null);

  const [tipoServico, setTipoServico] = useState(1);
  const [dataServico, setDataServico] = useState(1);
  const [horaServico, setHoraServico] = useState(1);
  const [cepEndereco, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  const [cidade, setCidade] = useState('');
  const [acolhedor, setAcolhedor] = useState('');

  useEffect(() => {
    const buscarId = async () => {
      const id = await AsyncStorage.getItem('userId');
      setUserId(id);
    };
    buscarId();
  }, []);

  const confirmarVisita = async () => {
    if (!userId) {
      alert('Usuário não identificado!');
      return;
    }

    const novaVisita = {
      tipoServico,
      dataServico,
      horaServico,
      cepEndereco,
      endereco,
      numeroResidencia: parseInt(numero),
      cidade,
      nomeAcolhedor: acolhedor,
    };

    try {
      const response = await fetch(`https://api-agendar.onrender.com/visitas/usuario/${userId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(novaVisita),
      });

      if (response.ok) {
        alert('Visita agendada com sucesso!');
      } else {
        alert('Erro ao agendar visita');
      }
    } catch (error) {
      console.error(error);
      alert('Erro na requisição');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header tituloPagina="Agendar Visita" />

        <View style={styles.opcoesMenu}>
          <FormAgendamento
            tipoServico={tipoServico}
            setTipoServico={setTipoServico}
            dataServico={dataServico}
            setDataServico={setDataServico}
            horaServico={horaServico}
            setHoraServico={setHoraServico}
            cepEndereco={cepEndereco}
            setCep={setCep}
            endereco={endereco}
            setEndereco={setEndereco}
            numero={numero}
            setNumero={setNumero}
            cidade={cidade}
            setCidade={setCidade}
            nomeAcolhedor={acolhedor}
            setAcolhedor={setAcolhedor}
          />
        </View>

        <View style={styles.areaBotao}>
          <Botao
            titulo="Confirmar visita"
            cor="#2E547F"
            onPress={confirmarVisita}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default AgendarVisita;
