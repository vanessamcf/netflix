import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: '#fff',
  },
  header: {
    position: 'absolute',
    top: 0,
    zIndex: 999,
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginTop: Platform.OS == 'ios' ? 50 : 0,
    height: 70,
    alignItems: 'center',
  },
});

export default styles;
