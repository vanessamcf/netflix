import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {Caption, Title} from 'react-native-paper';

import styles from './styles';

const Episode = ({episode}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.row}>
        <Image style={styles.cover} source={{uri: episode.cover}} />
        <View>
          <Title style={styles.title}>
            {episode.number}. {episode.title}
          </Title>
          <Caption>45 min.</Caption>
        </View>
      </View>
      <Caption>{episode.description}</Caption>
    </TouchableOpacity>
  );
};

export default Episode;
