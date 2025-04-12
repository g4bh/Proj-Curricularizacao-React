import { View, Text, TouchableOpacity, Image } from 'react-native';

import {styles} from './Styles'


function Card(props){
return(
   <TouchableOpacity
  style={[styles.baseCard, props.style, { backgroundColor: props.corCard }]}
  onPress={props.onPress}
>
  <Image source={props.iconSource} style={styles.icone} />
  <View style={{ marginLeft: 30 }}>
    <Text style={styles.tituloCard}>{props.titulo}</Text>
    <Text style={styles.subtituloCard}>{props.subtitulo}</Text>
  </View>
</TouchableOpacity>

  );  


}

export default Card