import React, {useState, useEffect} from 'react'
import {
    View,
    StyleSheet,
    ImageBackground,
    Image,
    ScrollView,
    Alert,
    FlatList,
    TouchableOpacity,
    TouchableHighlight,
} from 'react-native';
import {Container, Button, Text} from 'native-base'
import {DATA} from "../data";
import LinearGradient from 'react-native-linear-gradient';
import MapView, { PROVIDER_GOOGLE, Marker, Callout, Polygon } from 'react-native-maps';

const MAP_API_KEY = 'bf0219cc64e9bfcb6ffc79fd2e58efc0';
const GET_WEATHER_BY_COORDINATES_URL = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&units=metric&appid=${MAP_API_KEY}`;

export default function MapScreen({navigation, route}) {
    const [coordinates, setСoordinates] = useState({
        latitude: 50.5,
        longitude: 30.5,
        latitudeDelta: 0.2,
        longitudeDelta: 0.2,
    });

    const [markers, setMarkers] = useState([]);
    const [markerLastIndex, setMarkerLastIndex] = useState(1);

    const onMapPress = (e) => {
        const coordinate = e.nativeEvent.coordinate;
        /*let marker = {
            key: markerLastIndex,
            coordinate: coordinate,
            color: '#4fc84f',
        };
        setMarkers([...markers, marker]);*/

        setMarkerLastIndex( markerLastIndex + 1 );
        let url = GET_WEATHER_BY_COORDINATES_URL;
        url = url.replace('{lat}', coordinate.latitude);
        url = url.replace('{lon}', coordinate.longitude);


        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log('data',data);
                setMarkers([...markers, {...data, coordinate: coordinate}]);
            });
        console.log('setMarkers', markers);

    };

    console.log('markers', markers);

    // const handleCalloutPress = (index) => {
    //     alert('Hello')
    // }

    const gotoCity = () => {
        navigation.navigate('WeatherWeekScreen', {markers})
    };

    return (
        <Container style={{
            flex: 1,
        }}>
            <View style={{flex: 1}}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={{flex: 1}}
                    initialRegion={coordinates}
                    showsUserLocation={true}
                    onPress={onMapPress}
                >
                    {markers.map((marker, index) => (
                        <Marker
                            // onPress={() => navigation.navigate('WeatherWeekScreen', {markers})}
                            key={index}
                            coordinate={marker.coordinate}
                            pinColor={'#ff2061'}
                            image={require('../img/map_marker.png')}
                            title={'description'}
                            description={'description'}
                        >
                            <Button
                                title="Go to Jane's profile"
                                onPress={gotoCity}
                            />

                            {/*<Callout*/}
                            {/*    onPress={handleCalloutPress}*/}
                            {/*>*/}
                            {/*    <View style={styles.bubble}>*/}
                            {/*        <Text>{marker.name}</Text>*/}
                            {/*        <Text>+{marker.main.temp}°</Text>*/}
                            {/*    </View>*/}
                            {/*</Callout>*/}

                        </Marker>
                    ))}
                </MapView>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                    <TouchableOpacity onPress={()=> alert('Hello')}>
                        <LinearGradient
                            colors={['#533df2', '#799BF3']}
                            style={styles.buttonStyle}>
                            <Text style={{color: 'white'}}>MAP</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> navigation.navigate('CitySearchScreen')}>
                        <LinearGradient
                            colors={['#533df2', '#799BF3']}
                            style={styles.buttonStyle}>
                            <Text style={{color: 'white'}}>SEARCH</Text>
                        </LinearGradient>
                    </TouchableOpacity>
            </View>

        </Container>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        width: 180,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginVertical: 10
    },
    bubble: {
        flexDirection: 'column',
        backgroundColor: 'white',
        borderRadius: 5,
        alignSelf: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
        width: 150,
        opacity: 0.8,
    },
    // arrow: {
    //     backgroundColor: 'transparent',
    //     borderColor: 'transparent',
    //     borderTopColor: '#fff',
    //     borderWidth: 16,
    //     alignSelf: 'center',
    //     marginTop: -32,
    // },
    // arrowBorder: {
    //     backgroundColor: 'transparent',
    //     borderColor: 'transparent',
    //     borderTopColor: '#007a87',
    //     borderWidth: 16,
    //     alignSelf: 'center',
    //     marginTop: -0.7,
    // },

});


