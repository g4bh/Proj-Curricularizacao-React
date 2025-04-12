import { View, StyleSheet, FlatList, Text, Button } from 'react-native';

import {styles} from './Styles'


function Card(props){
return(
    <View style={styles.card}>
    <View> 
      <Text style={styles.tituloCard}> {props.data.tipoVisita} </Text>
      <Text style={styles.dataCard}> {props.data.dataVisita} </Text>
    </View>
      <Button color='#2E547F' title='Ver'/>
    </View>

  );


}

export default Card