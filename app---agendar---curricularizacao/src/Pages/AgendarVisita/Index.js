import {  View, ScrollView } from 'react-native';
import { styles } from './Styles';

import FormAgendamento from '../../Components/Forms/Index'
import Header from '../../Components/Header/Index'
import Botao from '../../Components/Botao/Index'; 

function AgendarVisita() {

  return (
    <View style={styles.container}>
      <ScrollView>
      <Header tituloPagina="Agendar Visita" />

      <View style={styles.opcoesMenu }>
            <FormAgendamento
              modo="editar"
            />
      </View>
      
<View style={styles.areaBotao}>
              <Botao 
                titulo = "Confirmar visita"
                cor = "#2E547F"
               />

          </View>
     </ScrollView>

    </View>
  );
}

export default AgendarVisita
