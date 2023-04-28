import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts, Inter_700Bold, Inter_400Regular } from '@expo-google-fonts/inter';
import { Loading } from './src/components/Loading';
import Home from './src/screens/Home';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  });

  if (!fontsLoaded) {
    return (
      <Loading />
    );
  }

  return (
    <SafeAreaProvider>
      <Home />
      <StatusBar style="light" />
    </SafeAreaProvider>
  );
}
