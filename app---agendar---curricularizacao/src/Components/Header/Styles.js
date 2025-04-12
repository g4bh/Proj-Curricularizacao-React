import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
   header: {
    backgroundColor: '#FBFBFB',
    width: '100%',
    marginTop: 25,
    padding: 10,
   },
  caixaLogoSeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10, 
    paddingHorizontal: 16,
    paddingTop: 20,
  },
    setaIcone: {
    marginTop: 0,
    width: 10,
    height: 30,
    marginRight: 20,
    resizeMode: 'contain'
  },
  logotipo: {
    marginTop: 0,
    width: 100,
    height: 30,
    resizeMode: 'contain'
  },
  titulo: {
    color: '#2E547F',
    fontSize: 30,
    fontWeight: '800',
    marginTop: 30,
    marginLeft: 15,
  },
  tituloAzul: {
    color: '#59aaff',
  },
  tituloAzulEscuro: {
    color: '#2c3e50',
  },
});

export {styles}