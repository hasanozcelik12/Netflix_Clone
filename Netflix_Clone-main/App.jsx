import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import RootNavigation from './src/router/rootNavigation';
import {Provider} from 'react-redux';
import {store} from './src/store';
import {StatusBar, Text} from 'react-native';
import {aplicationColors} from './src/theme/colors';
export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const linking = {
    prefixes: [
      'netflixclone://',
      'http://www.netflixClone.com', 
      'https://www.netflixClone.com',
    
    ],
    config: {
      screens: {
        TAB: '',
        MOVIEDETAIL: 'details/:muvieId',
      },
    },
  };
  return (
    <Provider store={store}>
      <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
        <StatusBar backgroundColor={aplicationColors.PRIMARY} />
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
}
