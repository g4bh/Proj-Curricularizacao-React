import { useState } from 'react';
import {  View,  FlatList } from 'react-native';
import { styles } from './Styles';

import Card from '../../Components/CardVisitas/Index'
import Header from '../../Components/Header/Index'

function AgendasMarcadas() {

let cards_mockados = [
        {id: 1, tipoVisita: 'Instalação', dataVisita: 'Segunda, 4 de maio'},
        {id: 2, tipoVisita: 'Higienização', dataVisita: 'Sábado, 4 de maio'},
        {id: 3, tipoVisita: 'Instalação', dataVisita: 'Terça, 4 de maio'},
        {id: 4, tipoVisita: 'Higienização', dataVisita: 'Quinta, 4 de maio'},
        {id: 5, tipoVisita: 'Instalação', dataVisita: 'Sexta, 4 de maio'},
        {id: 6, tipoVisita: 'Higienização', dataVisita: 'Quarta, 4 de maio'},
        {id: 6, tipoVisita: 'Higienização', dataVisita: 'Quarta, 4 de maio'},
        {id: 6, tipoVisita: 'Higienização', dataVisita: 'Quarta, 4 de maio'},
        {id: 6, tipoVisita: 'Higienização', dataVisita: 'Quarta, 4 de maio'},
        {id: 6, tipoVisita: 'Higienização', dataVisita: 'Quarta, 4 de maio'},
        {id: 6, tipoVisita: 'Higienização', dataVisita: 'Quarta, 4 de maio'},
        {id: 6, tipoVisita: 'Higienização', dataVisita: 'Quarta, 4 de maio'},
      ]

  const [feed ] = useState(cards_mockados)


  return (
    <View style={styles.container}>

      <Header tituloPagina="Agendas marcadas" />

      <View style={styles.opcoesMenu }>
             <FlatList 
                data={feed} 
                keyExtractor={(item) => item.id} 
                renderItem={ ({item}) => <Card data={item}/>} 
              />
      </View>
      
    </View>
  );
}

export default AgendasMarcadas
