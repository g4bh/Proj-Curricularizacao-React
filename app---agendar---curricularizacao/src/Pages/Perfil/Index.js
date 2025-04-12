import {  View, ScrollView, Text, Image } from 'react-native';
import { styles } from './Styles';

import Botao from '../../Components/Botao/Index'
import Input from '../../Components/Inputs/Index'
import Header from '../../Components/Header/Index'

import imagemPerfil from '../../../assets/FotoPerfil.jpg'


function AgendarVisita() {

  return (
    <View style={styles.container}>
      <ScrollView>
      <Header tituloPagina="Perfil" />

      <View style={styles.areaPerfil}>
        <Image source={ imagemPerfil } style={styles.imagemPerfil}/>
        <Text style={styles.nomePerfil}>Pingu Silva</Text> 
      </View>

      <View style={styles.formBox }>
              <Text style={styles.label}>E-mail</Text>
              <Input
                style={styles.input}
                placeholder="email-muitolegal@gmail.com"
                color ="#999"
              />

              <Text style={styles.label}>Telefone</Text>
              <Input
                style={styles.input}
                placeholder="13 999388888"
                color = "#999"
                secureTextEntry
              />

               <Text style={styles.label}>Senha</Text>
              <Input
                style={styles.input}
                placeholder="*************"
                color = "#999"
                secureTextEntry
              />
              
        <View style={styles.areaBotao}>
              <Botao 
                titulo = "Salvar alterações"
                cor = "#2c3e50"
               />

          </View>
        </View>
      
     </ScrollView>

    </View>
  );
}

export default AgendarVisita
