import React, { useState, createRef, useEffect } from 'react';
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
import { map } from 'lodash';

import { BlurView } from 'expo-blur';
import { SliderBox } from 'react-native-image-slider-box';
// import { Picker } from '@react-native-picker/picker';
// import { Picker } from '@react-native-community/picker';
import getTheme from '../../utils/native-base-theme/components';
import material from '../../utils/native-base-theme/variables/variables';

import HomeCard from './HomeCard';
import FooterComponent from '../../Components/layout/FooterComponent';
import HeaderComponent from '../../Components/Header';
import Register from './Register';

const WINDOW_WIDTH = Dimensions.get('window').width;

const HomeScreen = ({ navigation }) => {
    const pressHandler = (screenName = 'ProfileScreen') => {
        navigation.push(screenName);
    };

    function OTPSubmitHandler(pageChange, page) {
        page == 3 ? setModalVisible(false) : pageChange(page);
    }

    useEffect(() => {});

    const [modalVisible, setModalVisible] = useState(true);
    const TransportIcon = require('../../../assets/images/Transport.png');
    const CourierIcon = require('../../../assets/images/Courier.png');

    const HomcardList = [
        [
            {
                url: CourierIcon,
                title: 'Courier',
                onPress: 'CourierScreen',
            },
            {
                url: TransportIcon,
                title: 'Transport',
                onPress: 'TransportScreen',
            },
        ],
        [
            {
                url: null,
                title: 'Taxi/cab',
                onPress: 'CourierScreen',
            },
            {
                url: null,
                title: 'Buy',
                onPress: 'TransportScreen',
            },
        ],
        [
            {
                url: null,
                title: 'Order',
                onPress: 'CourierScreen',
            },
            {
                url: null,
                title: 'Hire',
                onPress: 'TransportScreen',
            },
        ],
        [
            {
                url: null,
                title: 'Call Emergency',
                onPress: 'CourierScreen',
            },
            {
                url: null,
                title: 'Job',
                onPress: 'TransportScreen',
            },
        ],
    ];

    const images = [
        require('../../../assets/images/homeSlider1.png'),
        'https://source.unsplash.com/1024x768/?water',
        'https://source.unsplash.com/1024x768/?girl',
        'https://source.unsplash.com/1024x768/?tree',
    ];
    return (
        <StyleProvider style={getTheme(material)}>
            <Container>
                <HeaderComponent navigation={navigation} type="home" />
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
                        {map(HomcardList, (eachField, index) => {
                            console.log(eachField[0].url);
                            return (
                                <Row key={index}>
                                    <Col>
                                        <HomeCard
                                            url={eachField[0].url}
                                            title={eachField[0].title}
                                            onPress={eachField[0].onPress}
                                            navigation={navigation}
                                        />
                                    </Col>
                                    <Col>
                                        <HomeCard
                                            url={eachField[1].url}
                                            title={eachField[1].title}
                                            onPress={eachField[1].onPress}
                                            navigation={navigation}
                                        />
                                    </Col>
                                </Row>
                            );
                        })}
                    </Grid>
                    <Register
                        modalVisible={modalVisible}
                        onSubmitHandler={OTPSubmitHandler}
                    />
                </Content>
                <FooterComponent navigation={navigation} />
                {modalVisible && (
                    <BlurView
                        intensity={50}
                        tint="dark"
                        style={[
                            StyleSheet.absoluteFill,
                            styles.nonBlurredContent,
                        ]}
                    ></BlurView>
                )}
            </Container>
        </StyleProvider>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    blurredImage: {
        width: 192,
        height: 500,
    },
    nonBlurredContent: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});
