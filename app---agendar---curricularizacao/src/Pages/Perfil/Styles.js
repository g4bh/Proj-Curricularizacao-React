import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginHorizontal: 'auto',
    backgroundColor: '#FBFBFB',
    height: '100%'
  },

header: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 30,
    flexGrow: 1,
    justifyContent: 'center',
  },
  logotipo: {
    marginTop: 20,
    width: 300,
    height: 70,
    resizeMode: 'contain'
  },
  formBox: {
    padding: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: 'center',
  },
  label: {
    color: '#4A87CC',
    fontWeight: '800',
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    backgroundColor: '#4A87CC',
    borderRadius: 12,
    padding: 19,
    marginTop: 10,
    marginBottom: 30,
    fontSize: 16,
  },
  areaPerfil: {
    alignItems: 'center',
    marginBottom: 24
  },
  imagemPerfil: {
    marginTop: 20,
    marginLeft: 20,
    width: 200,
    height: 200,
    resizeMode: 'contain',
    borderRadius: 100,
    padding: 30,
    justifyContent: 'center',
  },
  nomePerfil: {
    color: '#54687F',
    fontWeight: '800',
    marginBottom: 5,
    marginTop: 30,
    fontSize: 20
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  footerText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#fff',
  },
  footerLink: {
    fontWeight: '800',
    color: '#fff',
  },
  areaBotao: {
    marginTop: 26
  },
});

export { styles };
