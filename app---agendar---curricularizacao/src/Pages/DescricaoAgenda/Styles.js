import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginHorizontal: 'auto',
    backgroundColor: '#FBFBFB',
    height: '100%',
  },
  opcoesMenu:{
    padding: 25,
  },
  tituloInput: {
    color: '#4A87CC',
    fontSize: 20,
    fontWeight: 800
  },
  descricaoVisita: {
    color: '#2c3e50',
    fontSize: 20,
    fontWeight: 400,
    marginBottom: 30
  },

header: {
    backgroundColor: '#FBFBFB',
    flexDirection: 'row',
    width: '100%',
    marginTop: 30,
    padding: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  areaBotao: {
    marginTop: -45,
    padding: 20
  },
   areaDescricao: {
    marginTop: -45,
    padding: 20,
    marginBottom: 30
  },
    headerLeft:{
    flex: 1
    },

});

export { styles };
