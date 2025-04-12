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
  titulo: {
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
    padding: 19,
    marginTop: 10,
    marginBottom: 30,
    fontSize: 16,
    borderColor: '#4A87CC',
    borderWidth: 2
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
