import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStackScreen from './src/navigation/RootStackScreen';
// import {MyState} from "./src/context/MyState";

export default App = () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};
