import React from 'react';
import {View, StyleSheet, Text, Platform, TouchableOpacity, Image, Button} from 'react-native';
import {FONTFAMILY} from '../theme';
import LinearGradient from "react-native-linear-gradient";

export const CitySearchList = ({item, rowID, onOpen, navigation}) => {
    const ms = item.dt * 1000;
    const weekdayName = new Date(ms).toLocaleString('ru', {weekday: 'long'});
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity key={item.id}>
                <LinearGradient
                    onPress={()=> navigation.navigate('WeatherWeekScreen')}
                    colors={['#533df2', '#799BF3']}
                    style={styles.buttonStyle}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <Text style={{color: 'white'}}>{weekdayName}</Text>
                        <Text>{item.main.temp} °C</Text>
                    </View>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginTop: 10,
        paddingTop: 10,
        paddingHorizontal: 10,
    },
    buttonStyle: {
        width: 300,
        height: 45,
        justifyContent: 'center',
        borderRadius: 5,
        marginVertical: 10,
    },

});

