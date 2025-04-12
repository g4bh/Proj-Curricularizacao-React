import { View, Button, TouchableOpacity, Text } from 'react-native'

import {styles} from './Styles'

function Botao(props){
  return(
    <View>
        <Button 
          title = {props.titulo}
          color = {props.cor}
          padding = {props.pad}
        />    
      </View>
  )
}

export default Botao