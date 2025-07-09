import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/Stack';

import HomeScreen from './Screen/HomeScreen';
import SecondaryScreen from './Screen/SecondaryScreen';
import CafeScreen from './Screen/CafeScreen';
import PaoScreen from './Screen/PaoScreen';
import BoloScreen from './Screen/BolosScreen';

const Stank = createStackNavigator();

export default function App () {
 return(
  <NavigationContainer>
    <Stank.Navigator initialRouteName='home'>
      <Stank.Screen name="Home" component= {HomeScreen} options={{title: 'Bem-vindo'}}/>
      <Stank.Screen name='Secondary' component={Secondary} options={{title: 'Opçãoes Deliciosas'}}/>
      <Stank.Screen name='Cafe' component={CafeScreen} options={{title: 'Nosso Café'}}/>
      <Stank.Screen name='Bolo' component={Bolo} options={{title:'Bolo de Chocolate'}}/>
      <Stank.Screen name='Pao' component={PaoScreen} options={{title: 'Pão Caseiro'}}/>
    </Stank.Navigator>
  </NavigationContainer>
 );

}