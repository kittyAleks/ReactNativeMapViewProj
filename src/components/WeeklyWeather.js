import React from 'react';
import {View, StyleSheet, Text, Platform, TouchableOpacity, Image, Button} from 'react-native';
import LinearGradient from "react-native-linear-gradient";

export const WeeklyWeather = ({item}) => {
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity key={item.id}>
                <LinearGradient
                    colors={['#533df2', '#799BF3']}
                    style={styles.buttonStyle}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <Text style={{color: 'white'}}>{item.day_of_the_week}</Text>
                        <Text style={{color: 'white'}}>{item.deg}</Text>
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

