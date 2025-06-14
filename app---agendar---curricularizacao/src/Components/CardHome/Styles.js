import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
   card: {
  backgroundColor: '#EAF4FF',
  borderRadius: 16,
  padding: 25,
  marginBottom: 10,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
},

tituloCard: {
  fontSize: 30,
  fontWeight: '600',
  color: '#4A87CC',
},

dataCard: {
  fontSize: 20,
  fontWeight: '400',
  color: '#5A6B81',
  marginTop: 10,
},

botaoVer: {
  backgroundColor: '#2E547F',
  borderRadius: 15,
  paddingVertical: 8,
  paddingHorizontal: 16,
},

textoBotaoVer: {
  color: '#fff',
  fontWeight: '700',
  fontSize: 40,
},
});

export {styles}