import { View, StyleSheet, FlatList, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './Styles';

function Card(props) {
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.tituloCard}>{props.data.tipoServico}</Text>
        <Text style={styles.dataCard}>{props.data.dataServico}</Text>
      </View>
      <Button
        color="#2E547F"
        title="Ver"
        onPress={() => navigation.navigate('DescricaoAgenda', { dados: props.data })}
      />
    </View>
  );
}

export default Card;
