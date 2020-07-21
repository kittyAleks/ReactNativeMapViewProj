import React, {useEffect, useState } from 'react'
import {
    View,
    StatusBar,
    StyleSheet,
    ActivityIndicator,
    ImageBackground,
    Image,
    ScrollView,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import {Container, InputGroup, Input, Text, Button as NBButton, Icon as NBIcon, Button} from 'native-base'
import {CitySearchList} from '../components/CitySearchList';
import {DATA} from '../data';

const MAP_API_KEY = '22295d90be572afe2dcdc216eb009d94';
const GET_FORECAST_BY_COORDINATES_URL = `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&units=metric&appid=${MAP_API_KEY}`;

export default function WeatherWeekScreen({route}) {
    const [days, setDays] = useState([]);

    useEffect(() => {
        if (route.params.locationCoord) {
            let url = GET_FORECAST_BY_COORDINATES_URL;
            url = url.replace('{lat}', route.params.locationCoord.lat);
            url = url.replace('{lon}', route.params.locationCoord.lon);
            fetch(url)
                .then(res => res.json())
                .then((data) => {
                    const dailyData = data.list.filter(getting => getting.dt_txt.includes("18:00:00"));
                    setDays(dailyData)
                });
        }
    });

    return (
        <View>

            <ImageBackground
                style={{ flex: 1, width: '100%', height: 1000}}
                resizeMode='cover'
                source={require('../img/detail_img.jpg')}
                blurRadius={1}>
            </ImageBackground>
            <View style={styles.mainContainer}>
                <Text>{route.params.locationName}</Text>
            </View>

            <FlatList
                data={days}
                keyExtractor={(item, index) => item.id}
                renderItem={({item}) =>
                    <CitySearchList item={item}/>
                }
            />

        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'white',
        alignSelf: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
        color: '#A5A5A5',
        borderColor: '#A5A5A5',
        marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        width: 220,
        opacity: 0.8,
    },
});


