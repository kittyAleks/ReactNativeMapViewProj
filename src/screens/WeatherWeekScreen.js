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

export default function WeatherWeekScreen({navigation, route}) {

    // const { item } = route.params;
    // console.log('WeatherWeekScreen route.params', route.params)

    const openNewScreen = item => {
        console.log('EEE ITEM', item);
    };

    return (
        <View>
            <ImageBackground
                style={{ flex: 1, width: '100%', height: 1000}}
                resizeMode='cover'
                source={require('../img/detail_img.jpg')}
                blurRadius={1}>
            </ImageBackground>

            <InputGroup style={{ paddingLeft: 25, paddingRight: 25, marginVertical: 20}} borderType='regular'>
                <Input
                    style={styles.inputStyle}
                    placeholderTextColor = {"#909090"}
                    borderType='regular'
                    // value={searchText}
                    autoCapitalize="none"
                    autoCorrect={false}
                    // onChangeText={onSearchNameTextChange}
                    placeholder='Kyiv, Ukraine'/>
            </InputGroup>

            <FlatList
                data={DATA}
                keyExtractor={(item, index) => item.id.toString()}
                renderItem={({item}) =>
                    <CitySearchList item={item} onOpen={openNewScreen}/>
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputStyle: {
        paddingLeft: 20,
        borderRadius: 10,
        height: 50,
        backgroundColor: '#f6f6f6',
        borderColor: 'grey',
        borderWidth: 1,
        opacity: 1.0
    },
});


