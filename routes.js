import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from './src/pages/Login';
import Home from './src/pages/Home';
import Movie from './src/pages/Movie';
import FakePage from './src/pages/FakePage';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={'#fff'}
      shifting={false}
      barStyle={{backgroundColor: '#141414'}}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="buscar"
        component={FakePage}
        options={{
          tabBarLabel: 'Buscar',
          tabBarIcon: ({color}) => (
            <Icon name="magnify" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="em-breve"
        component={FakePage}
        options={{
          tabBarLabel: 'Em breve',
          tabBarIcon: ({color}) => (
            <Icon name="play-speed" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="downloads"
        component={FakePage}
        options={{
          tabBarLabel: 'Downloads',
          tabBarIcon: ({color}) => (
            <Icon name="download" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="mais"
        component={FakePage}
        options={{
          tabBarLabel: 'Mais',
          tabBarIcon: ({color}) => <Icon name="menu" color={color} size={26} />,
        }}
      />
    </Tab.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          options={{headerShown: false}} //hide header login
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{headerShown: false}} //hide header login
          name="Home"
          component={HomeTabs}
        />
        <Stack.Screen
          options={{headerShown: false}} //hide header login
          name="Movie"
          component={Movie}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
