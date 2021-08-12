import React, {useEffect, useState} from 'react';
import {View, ScrollView, RefreshControl} from 'react-native';
import styles from './styles';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import ButtonVertical from '../../components/ButtonVertical';
import Previas from '../../components/Previas';
import Section from '../../components/Section';
import api from '../../services/api';
import {Button, Title} from 'react-native-paper';

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [principal, setPrincipal] = useState({}); //object
  const [sections, setSections] = useState([]); //array

  const getHome = async () => {
    try {
      setRefreshing(true);
      const response = await api.get('/home');
      const res = response.data;

      if (res.error) {
        alert(res.message);
        setRefreshing(false);
        return false;
      }

      setPrincipal(res.principal);
      setSections(res.sections);
      setRefreshing(false);

    } catch (err) {
      setRefreshing(false);
      alert(err.message);
    }
  };

  useEffect(() => {
    getHome();
  }, []);

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={getHome} />
      }>
      <Header />
      <Hero movie={principal} />
      <View style={styles.menuHeader}>
        <ButtonVertical icon="plus" text="Minha Lista" />
        <Button icon="play" uppercase={false} mode="contained" color="#fff">
          Assistir
        </Button>
        <ButtonVertical icon="information-outline" text="Saiba Mais" />
      </View>
      <View style={styles.previaContainer}>
        <Title style={styles.previaTitle}>Prévias</Title>
        <Previas movies={sections[0]} />
      </View>
      {sections.map((section, index) => (
        <Section section={section} key={index} /> // to be able to have 4 sections
      ))}
    </ScrollView>
  );
};

export default Home;
