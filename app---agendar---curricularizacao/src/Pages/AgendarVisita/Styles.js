import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginHorizontal: 'auto',
    backgroundColor: '#FBFBFB',
    height: '100%'
  },
  opcoesMenu:{
    padding: 25,
  },

header: {
    backgroundColor: '#FBFBFB',
    flexDirection: 'row',
    width: '100%',
    marginTop: 45,
    padding: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  fotoPerfil: {
  width: 40,
  height: 40,
  borderRadius: 20,
  marginLeft: 10,
},
areaBotao: {
    marginTop: -45,
    padding: 20
  },
headerLeft:{
flex: 1
},

});

export { styles };
