/* eslint-disable no-alert */
/* eslint-disable eqeqeq */
import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {Title, Button, Paragraph, Caption} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SinglePickerMaterialDialog} from 'react-native-material-dialog';

import ButtonVertical from '../../components/ButtonVertical';
import Section from '../../components/Section';
import Episode from '../../components/Episode';
import api from '../../services/api';

import styles from './styles';

const Movie = ({route, navigation}) => {
  const {movie, section} = route.params;
  // const [type] = useState('serie');
  const [visible, setVisible] = useState(false);
  const [season, setSeason] = useState({
    value: movie?.seasons[0]?._id,
    label: movie?.seasons[0]?.title, //season title in the arrow down
  }); // ? usa pra peruntar se existir
  const [episodes, setEpisodes] = useState([]);

  const getEpisodes = async season_id => {
    try {
      const response = await api.get(`/episode/season/${season_id}`);
      const res = response.data;

      if (res.error) {
        alert(res.message);
        return false;
      }
      setEpisodes(res.episodes);
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    if (movie.type == 'serie') {
      getEpisodes(season.value);
    }
  }, []);

  return (
    <>
      <SinglePickerMaterialDialog
        title={`${movie.title} - Temporadas`}
        items={movie?.seasons.map(season => ({
          value: season._id,
          label: season.title,
        }))}
        onCancel={() => {
          setVisible(false);
        }}
        visible={visible}
        selectedItem={season}
        onOk={result => {
          getEpisodes(result.selectedItem.value);
          setVisible(false);
          setSeason(result.selectedItem);
        }}
      />
      <ScrollView style={styles.container}>
        <ImageBackground style={styles.hero} source={{uri: movie.cover}}>
          <SafeAreaView>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack(); // Retornar aula 14 minuto 20 n ta retornando
              }}
              style={styles.buttonBack}>
              <Icon name="arrow-left" color="#fff" size={25} />
            </TouchableOpacity>
          </SafeAreaView>
        </ImageBackground>
        <View style={styles.containerPadding}>
          <Title>{movie.title}</Title>
          <Button
            style={styles.buttonPlay}
            icon="play"
            uppercase={false}
            mode="contained"
            color="#fff">
            Assistir
          </Button>
          <Paragraph>{movie.description}</Paragraph>
          <Caption style={styles.captionInfo}>
            Elenco: {''}
            <Caption style={styles.captionWhite}>
              {movie.cast.join(', ')}
            </Caption>{' '}
            {''}
            Gêneros: {''}
            <Caption style={styles.captionWhite}>
              {movie.genres.join(', ')}
            </Caption>{' '}
            {''}
            Cenas e momentos: {''}{' '}
            <Caption style={styles.captionWhite}>
              {movie.scenes_moments.join(', ')}
            </Caption>
          </Caption>
          <View style={styles.menu}>
            <ButtonVertical icon="plus" text="Minha Lista" />
            <ButtonVertical icon="thumb-up" text="Classifique" />
            <ButtonVertical icon="send" text="Compartilhe" />
            <ButtonVertical icon="download" text="Baixar" />
          </View>
          {movie.type == 'serie' && (
            <>
              <TouchableOpacity
                onPress={() => setVisible(true)}
                style={styles.buttonTemporada}>
                <Text style={styles.temporadaName}>{season.label}</Text>
                <Icon name="chevron-down" color="#fff" size={20} />
              </TouchableOpacity>
              <FlatList
                data={episodes}
                renderItem={({item, index}) => (
                  <Episode episode={item} key={index} />
                )}
              />
            </>
          )}
        </View>
        {movie.type == 'movie' && <Section section={section} hasTopBorder />}
      </ScrollView>
    </>
  );
};

export default Movie;
