import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#2c3e50',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  }
});

export { styles };