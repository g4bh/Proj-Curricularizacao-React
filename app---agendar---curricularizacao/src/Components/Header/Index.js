import { View, Text, Image, TouchableOpacity } from 'react-native'
import logotipoAgendAr from '../../../assets/AgendAr.png'
import setaIcon from '../../../assets/setaIcon.jpg'

import {styles} from './Styles'
import { useNavigation } from '@react-navigation/native';

function Header(props){

  

  return(
    <View style={styles.header}>
        
          <Text style={styles.titulo}>
                 <Text style={styles.tituloAzulEscuro}>{props.tituloPagina}</Text>
          </Text>
    </View>
  )
}

export default Header