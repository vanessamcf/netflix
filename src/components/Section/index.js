import React from 'react';

import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import {Title} from 'react-native-paper';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const Section = ({section, hasTopBorder}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {hasTopBorder && <View style={styles.borderTop} />}
      <Title style={styles.sectionTitle}>{section[0]?.genres[0]}</Title>
      <FlatList
        style={styles.list}
        horizontal
        data={section} // pass items
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Movie', {movie: item, section})}
            key={index}>
            <ImageBackground
              style={[
                styles.cover,
                {marginRight: 10, marginLeft: index == 0 ? 20 : 0},
              ]}
              source={{
                uri: item.cover,
              }}>
              <Image
                resizeMode="contain"
                style={styles.logo}
                source={{uri: item.logoMobile ? item.logoMobile : item.logo}} // se tiver(?) logomobile passa senao(:) so logo normal
              />
            </ImageBackground>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Section;
