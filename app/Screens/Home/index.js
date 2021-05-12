import React from 'react'
import { Image, View, Dimensions, StyleSheet } from 'react-native';
import {
    Container,
    Grid,
    Col,
    Row,
    Content,
    StyleProvider,
    Slider,
    Box,
    Root,
    Card,
} from 'native-base';

import { SliderBox } from 'react-native-image-slider-box';
// import { Picker } from '@react-native-picker/picker';
// import { Picker } from '@react-native-community/picker';
import getTheme from '../../utils/native-base-theme/components';
import material from '../../utils/native-base-theme/variables/variables';

import HomeCard from './HomeCard';
import FooterComponent from '../../Components/layout/FooterComponent';
import HeaderComponent from '../../Components/layout/HeaderComponent';

const WINDOW_WIDTH = Dimensions.get('window').width;

const HomeScreen = ({ navigation }) => {
    const pressHandler = (screenName = 'ProfileScreen') => {
        navigation.push(screenName);
    };

    const TransportIcon = require('../../../assets/images/Transport.png');
    const CourierIcon = require('../../../assets/images/Courier.png');
    const images = [
        require('../../../assets/images/homeSlider1.png'),
        'https://source.unsplash.com/1024x768/?water',
        'https://source.unsplash.com/1024x768/?girl',
        'https://source.unsplash.com/1024x768/?tree',
    ];
    return (
        <StyleProvider style={getTheme(material)}>
            <Container>
                <HeaderComponent navigation={navigation}/>
                <Content padder>
                    <SliderBox
                        images={images}
                        sliderBoxHeight={200}
                        onCurrentImagePressed={index =>
                            console.log(`image ${index} pressed`)
                        }
                        dotColor="#FFEE58"
                        inactiveDotColor="#90A4AE"
                        paginationBoxVerticalPadding={20}
                        autoplay
                        circleLoop
                        resizeMethod={'resize'}
                        resizeMode={'cover'}
                        paginationBoxStyle={{
                            position: 'absolute',
                            bottom: 0,
                            padding: 0,
                            alignItems: 'center',
                            alignSelf: 'center',
                            justifyContent: 'center',
                            paddingVertical: 10,
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 1 },
                            shadowOpacity: 0.8,
                            shadowRadius: 2,
                            elevation: 5,
                        }}
                        dotStyle={{
                            width: 0,
                            height: 0,
                        }}
                        ImageComponentStyle={{
                            borderRadius: 15,
                            width: '97%',
                            marginTop: 5,
                        }}
                        imageLoadingColor="#2196F3"
                        parentWidth={WINDOW_WIDTH - 20}
                    />
                    <Grid>
                        <Row>
                            <Col>
                                <HomeCard
                                    url={CourierIcon}
                                    title="Courier"
                                    onPress={'CourierScreen'}
                                    navigation={navigation}
                                />
                            </Col>
                            <Col>
                                <HomeCard
                                    url={TransportIcon}
                                    title="Transport"
                                    onPress={'TransportScreen'}
                                    navigation={navigation}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <HomeCard
                                    url={CourierIcon}
                                    title="Profile"
                                    onPress={'ProfileScreen'}
                                    navigation={navigation}
                                />
                            </Col>
                            <Col>
                                <HomeCard
                                    url={TransportIcon}
                                    title="Login"
                                    onPress={'HomeScreen'}
                                    navigation={navigation}
                                />
                            </Col>
                        </Row>
                    </Grid>
                </Content>
                <FooterComponent navigation={navigation} />
            </Container>
        </StyleProvider>
    );
};

export default HomeScreen;

// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         justifyContent:'center',
//         alignContent:'center'
//     }
// })
//         justifyContent: 'center',
//         alignContent: 'center',
//     },
// });
