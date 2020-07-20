import React, {useEffect, useState} from 'react'
import {View, StatusBar, StyleSheet, ActivityIndicator, ImageBackground, Image, ScrollView, TouchableOpacity, Button }
from 'react-native';
import { Container, InputGroup, Input, Text, Button as NBButton, Icon as NBIcon} from 'native-base'
import SingleCardView from 'react-native-simple-card';
import LinearGradient from "react-native-linear-gradient";

const MAP_API_KEY = 'bf0219cc64e9bfcb6ffc79fd2e58efc0';

export default function CitySearchScreen({route}) {

    const [searchText, setSearchText] = useState('');
    const [days, setDays] = useState([]);

    const onSearchTextChange = (searchText) => {
        setSearchText(searchText);
        if(searchText && searchText.length > 2) {
            /* getWeather(searchText)*/
        } else {
            setDays([])
        }
    };

    const getWeather = async () => {
        console.log('QQQ searchText', searchText)
            const weatherURL =
                `https://api.openweathermap.org/data/2.5/forecast?q=${searchText}&lang=ru&units=metric&APPID=${MAP_API_KEY}`
        console.log('QQQ weatherURL', weatherURL)
            fetch(weatherURL)
                .then(res => res.json())
                .then((data) => {
                    const dailyData = data.list.filter(getting => getting.dt_txt.includes("18:00:00"));
                    console.log('QQQ dailyData', dailyData);
                    setDays( dailyData);
                });
        console.log('QQQ days', days)
    };

    return (
        <Container style={{
            flex: 1,
        }}>
            <View>
                <ImageBackground
                    style={{ flex: 1, width: '100%', height: 1000}}
                    resizeMode='cover'
                    source={require('../../src/img/detail_img.jpg')}
                    >
                </ImageBackground>
                <InputGroup style={{ paddingLeft: 25, paddingRight: 25, marginVertical: 20}} borderType='regular'>
                    <Input
                        style={styles.inputStyle}
                        placeholderTextColor = {"#909090"}
                        borderType='regular'
                        value={searchText}
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={onSearchTextChange}
                        placeholder='Select city name...'/>
                </InputGroup>
                <Button onPress={getWeather} title={'Get Weather'}>

                </Button>

                <ScrollView>
                    {days.map((item, index) => {
                        const ms = item.dt * 1000;
                        const weekdayName = new Date(ms).toLocaleString('ru', {weekday: 'long'});
                        return <View key={index}>
                            <LinearGradient colors={['#533df2', '#799BF3']}
                                            style={styles.buttonStyle}>
                                    <Text>{weekdayName? weekdayName : ''}</Text>
                                    <Text>{item.main.temp} °C</Text>
                            </LinearGradient>
                        </View>
                    })}
                </ScrollView>

            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        shadowColor: '#787878',
        shadowRadius: 5,
        shadowOffset: { width: 8, height: 8 },
        shadowOpacity: 1.1,
    },
    inputStyle: {
        paddingLeft: 20,
        borderRadius: 10,
        height: 50,
        backgroundColor: '#f6f6f6',
        borderColor: 'grey',
        borderWidth: 1,
        opacity: 1.0
    },
    buttonStyle: {
        flexDirection: 'row',
        width: 300,
        height: 45,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 5,
        marginVertical: 10,
        alignSelf: 'center'
    },
});


