import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'

import theme from './src/global/styles/theme';
import { Dashboard } from './src/screens/Dashboard';
import SplashScreen from 'react-native-splash-screen';
import { Text } from 'react-native';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular, 
    Poppins_500Medium,
    Poppins_700Bold
  });

  if (!fontsLoaded) {
    return (<AppLoading/>);
  }

  return (
    <>
    <StatusBar style='light'/>   
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
    </>
  );
}
