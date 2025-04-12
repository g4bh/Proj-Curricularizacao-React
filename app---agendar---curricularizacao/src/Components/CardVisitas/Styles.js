import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    card: {
  backgroundColor: '#fff',
  borderRadius: 16,
  padding: 25,
  marginBottom: 10,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
},

tituloCard: {
  fontSize: 20,
  fontWeight: '800',
  color: '#2E547F',
},

dataCard: {
  fontSize: 14,
  fontWeight: '400',
  color: '#5A6B81',
},

botaoVer: {
  backgroundColor: '#2E547F',
  borderRadius: 8,
  paddingVertical: 8,
  paddingHorizontal: 16,
},

textoBotaoVer: {
  color: '#fff',
  fontWeight: '700',
  fontSize: 16,
},

});

export {styles}