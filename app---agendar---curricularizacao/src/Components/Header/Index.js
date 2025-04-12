import { View, Text, Image, TouchableOpacity } from 'react-native'
import logotipoAgendAr from '../../../assets/AgendAr.png'
import setaIcon from '../../../assets/setaIcon.jpg'

import {styles} from './Styles'

function Header(props){

  return(
    <View style={styles.header}>
            <View style={styles.caixaLogoSeta}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={setaIcon} style={styles.setaIcone} />
              </TouchableOpacity>
              <Image source={logotipoAgendAr} style={styles.logotipo}/>
          </View>
          <Text style={styles.titulo}>
                 <Text style={styles.tituloAzulEscuro}>{props.tituloPagina}</Text>
          </Text>
    </View>
  )
}

export default Header