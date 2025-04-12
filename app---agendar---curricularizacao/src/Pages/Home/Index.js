import {  View,  Text,  TouchableOpacity,  Image, ScrollView} from 'react-native';
import { styles } from './Styles';

import logotipoAgendAr from '../../../assets/AgendAr.png'

import iconePlus  from '../../../assets/+.png'
import iconeCheck  from '../../../assets/Vector.png'

import CardHome from '../../Components/BotaoHome/Index'


function Home() {
  return (
    <View style={styles.container}>

         <View style={styles.header}>
            <View>
              <Image source={logotipoAgendAr} style={styles.logotipo}/>

              <Text style={styles.titulo}>
                <Text style={styles.tituloAzul}>Bem-</Text>
                <Text style={styles.tituloAzulEscuro}>vindo(a)!</Text>
              </Text>
              <Text style={styles.subtitulo}>Escolha a opção que deseja!</Text>

            </View>
    </View>

      <View style={styles.opcoesMenu }>
            <CardHome
        iconSource={iconePlus}
        titulo="Agendar Visita"
        subtitulo="Agende uma visita ou um serviço"
        corCard="#EAF4FF"
        style={styles.cardAgendar}
      />
             <CardHome
        iconSource={iconeCheck}
        titulo="Ver agendas"
        subtitulo="Veja os agendamentos marcados"
        corCard="#D3E8FF"
        style={styles.cardVerAgendas}
      />
      </View>
    </View>
  );
}

export default Home
