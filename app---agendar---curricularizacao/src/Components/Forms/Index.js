import React from 'react';
import { TextInput, View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from './Styles';

function FormAgendamento({
  tipoServico, setTipoServico,
  dataServico, setDataServico,
  horaServico, setHoraServico,
  cep, setCep,
  endereco, setEndereco,
  numero, setNumero,
  cidade, setCidade,
  acolhedor, setAcolhedor,
}) {
  return (
    <View>
      <Text style={styles.tituloInput}>Tipo de serviço</Text>
      <Picker
        selectedValue={tipoServico}
        onValueChange={setTipoServico}
        style={styles.input}>
        <Picker.Item value="" label="Selecione o tipo de visita" />
        <Picker.Item value="Visita Técnica" label="Visita Técnica" />
        <Picker.Item value="Higienização" label="Higienização" />
      </Picker>

      <Text style={styles.tituloInput}>Data do serviço</Text>
      <Picker
        selectedValue={dataServico}
        onValueChange={setDataServico}
        style={styles.input}>
        <Picker.Item value="" label="Selecione a data" />
        <Picker.Item value="2025-06-15" label="Segunda, 15 de junho" />
        <Picker.Item value="2025-06-20" label="Sábado, 20 de junho" />
      </Picker>

      <Text style={styles.tituloInput}>Hora do serviço</Text>
      <Picker
        selectedValue={horaServico}
        onValueChange={setHoraServico}
        style={styles.input}>
        <Picker.Item value="" label="Selecione o horário" />
        <Picker.Item value="10:00" label="10:00" />
        <Picker.Item value="14:00" label="14:00" />
        <Picker.Item value="16:00" label="16:00" />
      </Picker>

    <Text style={styles.tituloInput}>Cep</Text>
      <TextInput
        style={styles.input}
        value={cep}
        onChangeText={setCep}
      />

      <Text style={styles.tituloInput}>Endereço</Text>
      <TextInput
        style={styles.input}
        value={endereco}
        onChangeText={setEndereco}
      />

      <Text style={styles.tituloInput}>N° da residência</Text>
      <TextInput
        style={styles.input}
        value={numero}
        onChangeText={setNumero}
      />

      <Text style={styles.tituloInput}>Cidade</Text>
      <TextInput
        style={styles.input}
        value={cidade}
        onChangeText={setCidade}
      />

      <Text style={styles.tituloInput}>Nome do acolhedor</Text>
      <Text style={styles.subtituloInput}>
        Digite o nome de quem estará disponível para atender o instalador no dia marcado
      </Text>
      <TextInput
        style={styles.input}
        value={acolhedor} 
        onChangeText={setAcolhedor}
      />
    </View>
  );
}

export default FormAgendamento;
