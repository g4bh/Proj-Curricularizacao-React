import React, { Component, useState } from 'react';
import { TextInput, View, Text} from 'react-native';
import Botao from '../Botao/Index'; 

import {Picker} from '@react-native-picker/picker';

import {styles} from './Styles'

function FormAgendamento(props) {
    const [tipoServico, setTipoServico] = useState(1)
    const [dataServico, setDataServico] = useState(1)
    const [horaServico, setHoraServico] = useState(1)

  return (
    <View>
    <Text style={styles.tituloInput}>Tipo de serviço</Text>
      <View>
        <Picker
        selectedValue={tipoServico}
        onValueChange={ (itemValue, itemIndex) => setTipoServico(itemValue) }
        style={styles.input}
        >
          <Picker.Item key={1} value={1} label="Visita Técnica" />
          <Picker.Item key={2} value={2} label="Higienização" />
        </Picker>
    </View>

    <Text style={styles.tituloInput}>Data do serviço</Text>
    <Text style={styles.subtituloInput}>As datas apresentadas serão as datas que a empresa terá a disponibilidade de executar o serviço</Text>
      <View>
      <Picker
        selectedValue={dataServico}
        onValueChange={ (itemValue, itemIndex) => setDataServico(itemValue) }
        style={styles.input}
        >
          <Picker.Item key={1} value={1} label="Segunda, 14 de abril" />
          <Picker.Item key={2} value={2} label="Terça, 19 de maio" />
          <Picker.Item key={3} value={3} label="Quinta, 5 de junho" />
        </Picker>
    </View>


    <Text style={styles.tituloInput}>Hora do serviço</Text>
      <View>
      <Picker
        selectedValue={horaServico}
        onValueChange={ (itemValue, itemIndex) => setHoraServico(itemValue) }
        style={styles.input}
        >
          <Picker.Item key={1} value={1} label="10:00" />
          <Picker.Item key={2} value={2} label="14:00" />
          <Picker.Item key={3} value={3} label="16:00" />
        </Picker>
    </View>


    <Text style={styles.tituloInput}>Endereço</Text>
      <View>
      <TextInput
        style={styles.input}
      />
    </View>

    <Text style={styles.tituloInput}>N° da residência</Text>
      <View>
      <TextInput
        style={styles.input}
      />
    </View>

    <Text style={styles.tituloInput}>Cidade</Text>
      <View>
      <TextInput
        style={styles.input}
      />
    </View>

    <Text style={styles.tituloInput}>Nome do acolhedor</Text>
    <Text style={styles.subtituloInput}>Digite o nome de quem estará disponível para atender o instalador no dia marcado</Text>
      <View>
      <TextInput
        style={styles.input}
      />
    </View>

    </View>
  );
}

export default FormAgendamento