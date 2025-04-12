import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    baseCard: {
  borderRadius: 12,
  padding: 30,
  marginBottom: 16,
  flexDirection: 'row',
  alignItems: 'center',
  shadowColor: '#000',
},
 icone: {
    width: 30,
    height: 30,
    resizeMode: 'contain'
},
tituloCard: {
    color: '#2E547F',
    fontSize: 20,
    fontWeight: '800',
  },
  subtituloCard: {
    color: '#2E547F',
    fontSize: 14,
    fontWeight: '400',
    width: '95%'
  },

});

export {styles}