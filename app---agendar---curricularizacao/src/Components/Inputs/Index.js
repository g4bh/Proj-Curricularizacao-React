import { View, TextInput } from 'react-native'

import {styles} from './Styles'

function Input(props){
  return(
    <View>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        placeholderTextColor={props.color}
        keyboardType={props.tipo}
      />
    </View>
  )
}

export default Input