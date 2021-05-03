import React, { useState } from 'react';
import { Image } from 'react-native';
import { Container, Grid, Col, Row, Content, StyleProvider } from 'native-base';
// import { Picker } from '@react-native-picker/picker';
// import { Picker } from '@react-native-community/picker';
import getTheme from '../../utils/native-base-theme/components';
import material from '../../utils/native-base-theme/variables/variables';

import HomeCard from './HomeCard';
import FooterComponent from '../../Components/layout/FooterComponent';
import HeaderComponent from '../../Components/layout/HeaderComponent';

const HomeScreen = ({ navigation }) => {
    // const [selectedLanguage, setSelectedLanguage] = useState();

    const TransportIcon = require('../../../assets/images/Transport.png');
    const CourierIcon = require('../../../assets/images/Courier.png');
    return (
        <StyleProvider style={getTheme(material)}>
            <Container>
                <HeaderComponent />
                <Content padder>
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
                                    onPress={'HomeScreen'}
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
                <FooterComponent />
            </Container>
        </StyleProvider>
    );
};

export default HomeScreen;
