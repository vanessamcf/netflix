import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    display: 'flex',
    alignSelf: 'center',
    marginBottom: 100,
  },
  login: {
    marginBottom: 20,
  },
  smallText: {
    color: 'rgba(255,255,255,0.6)',
    textAlign: 'center',
    marginTop: 30,
  },
  loginButton: {
    borderColor: '#c3c3c3',
    borderWidth:1,
    marginBottom:20,
    padding:10,
  },
});

export default styles;

