import {  View, ScrollView } from 'react-native';
import { styles } from './Styles';

import FormAgendamento from '../../Components/Forms/Index'
import Header from '../../Components/Header/Index'
import Botao from '../../Components/Botao/Index'; 


function DescricaoAgenda() {

  return (
    <View style={styles.container}>
      <ScrollView>
      <Header tituloPagina="Instalação" />

      <View style={styles.opcoesMenu }>
            <FormAgendamento
              modo="visualizar"
            />
      </View>
    
        <View style={styles.areaBotao}>
              <Botao  
              titulo = "Cancelar visita"
              cor = "#7F2E2E"
              />

          </View>
     </ScrollView>

    </View>
  );
}

export default DescricaoAgenda
