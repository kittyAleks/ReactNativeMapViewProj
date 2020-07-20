import React  from 'react'
import { StyleSheet } from 'react-native'

/* Components */

import MapScreen from '../screens/MapScreen';
import { createStackNavigator } from '@react-navigation/stack';
import WeatherWeekScreen from '../screens/WeatherWeekScreen';
import CitySearchScreen from '../screens/CitySearchScreen';
import LinearGradient from "react-native-linear-gradient";

const defaultOptions = {
    headerStyle: {
        backgroundColor: '#3619FF',
    },

    headerTintColor: '#fff',
    headerTitleStyle: {
        fontSize: 20
    }
};

const RootStack = createStackNavigator();

const RootStackScreen = () => (
    <RootStack.Navigator>
        <RootStack.Screen name='Back'
            options={{
                headerShown: false
            }}
          component={MapScreen} />
        <RootStack.Screen
            name='WeatherWeekScreen'
            component={WeatherWeekScreen}
            options={{
                headerBackground: () => <LinearGradient colors={['#533df2', '#799BF3']} style={{height: '100%'}}/>,
                headerTitle: 'WeatherWeekScreen',
                ...defaultOptions
            }}
        />
        <RootStack.Screen
            name='CitySearchScreen'
            component={CitySearchScreen}
            options={{
                headerBackground: () => <LinearGradient colors={['#533df2', '#799BF3']} style={{height: '100%'}}/>,
                headerTitle: 'CitySearchScreen',
                ...defaultOptions
            }}
        />
    </RootStack.Navigator>
);

export default RootStackScreen

