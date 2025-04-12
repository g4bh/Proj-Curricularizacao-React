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

headerLeft:{
flex: 1
},
  logotipo: {
    marginTop: 0,
    width: 140,
    height: 30,
    resizeMode: 'contain'
  },
  titulo: {
    color: '#2E547F',
    fontSize: 28,
    fontWeight: '800',
    marginTop: 30,
  },
  tituloAzul: {
    color: '#59aaff',
  },
  tituloAzulEscuro: {
    color: '#2c3e50',
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
  },
  subtitulo: {
    fontSize: 14,
    color: '#2c3e50',
    marginTop: 10,
    fontWeight: '500',
  },

  formBox: {
    backgroundColor: '#59aaff',
    padding: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: 'center',
  },
  label: {
    color: '#fff',
    fontWeight: '800',
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    fontSize: 16,
  },
  cardAgendar: {
  backgroundColor: '#EAF4FF',
  borderRadius: 12,
  padding: 30,
  marginBottom: 16,
  flexDirection: 'row',
  alignItems: 'center',
  shadowColor: '#000',
},

  cardVerAgendas: {
    backgroundColor: '#D3E8FF',
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
});

export { styles };
