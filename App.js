import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

  

import Home from './src/Home'
import Cadastro from './src/Cadastro'
import Login from './src/Login'

import {Provider} from 'react-redux'
import {createStore} from 'redux'
import Reducers from './src/Reducers';

const Stack = createStackNavigator()

let store = createStore(Reducers);

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}