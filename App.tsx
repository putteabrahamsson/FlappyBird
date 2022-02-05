import React, { ReactElement } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import LobbyNavigator from './src/navigations/navigators/LobbyNavigator';
import { StateProvider } from './src/store/Context/StateContext';

const App: () => ReactElement = () => {
  return (
    <NavigationContainer>
      <LobbyNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
