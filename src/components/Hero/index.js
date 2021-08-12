import React from 'react';
import {Text, ImageBackground, View, Image} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

const Hero = ({movie}) => {
  return (
    <ImageBackground style={styles.hero} source={{uri: movie.cover}}>
      <Image
        style={styles.logo}
        resizeMode="contain"
        source={{uri: movie.logoMobile ? movie.logoMobile : movie.logo}} // se tiver(?) logomobile passa senao(:) so logo normal
      />
      <View style={styles.containerTop10}>
        <Image
          style={styles.top10Badge}
          resizeMode="contain"
          source={require('../../assets/badge-top-10.png')}
        />
        <Text style={styles.top10Text}>Top 1 de hoje no Brasil</Text>
      </View>
      <LinearGradient
        style={styles.gradient}
        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']}
      />
    </ImageBackground>
  );
};

export default Hero;
