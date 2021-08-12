import React from 'react';
import {Text, View, TouchableOpacity, Image, SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; // como se fosse uma view
import styles from './styles';

const Header = () => {
  return (
    <LinearGradient
      style={styles.header}
      colors={['rgba(0,0,0,1)', 'rgba(0,0,0,0)']}>
      <SafeAreaView style={styles.view}>
        <Image source={require('../../assets/logo-compact.png')} />
        <TouchableOpacity>
          <Text style={styles.text}>Séries</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text}>Filmes</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text}>Minha lista</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Header;
