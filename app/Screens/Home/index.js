import React, { useState } from 'react';
import { Image } from 'react-native';
import {
    Container,
    Header,
    Title,
    Grid,
    Col,
    Row,
    Content,
    Footer,
    FooterTab,
    Button,
    Left,
    Right,
    Body,
    Icon,
    Text,
    Card,
    Form,
    H3,
    Thumbnail,
    CardItem,
    StyleProvider,
} from 'native-base';
// import { Picker } from '@react-native-picker/picker';
// import { Picker } from '@react-native-community/picker';
import getTheme from '../../utils/native-base-theme/components';
import material from '../../utils/native-base-theme/variables/variables';
import styled from 'styled-components/native';

import HomeCard from './HomeCard';

const HomeScreen = ({ navigation }) => {
    // const [selectedLanguage, setSelectedLanguage] = useState();

    const TransportIcon = require('../../../assets/images/Transport.png');
    const CourierIcon = require('../../../assets/images/Courier.png');
    return (
        <StyleProvider style={getTheme(material)}>
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Nfiti</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name="call" />
                        </Button>
                        <Button transparent>
                            <Icon name="notifications" />
                        </Button>
                        <Button transparent>
                            <Icon name="settings" />
                        </Button>
                    </Right>
                </Header>
                <Content padder>
                    <Grid>
                        <Row>
                            <Col>
                                <HomeCard
                                    url={CourierIcon}
                                    title="Courier"
                                    onPress={'HomeScreen'}
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
                <Footer>
                    <FooterTab>
                            <StyledView>
                                <StyledListImage
                                    source={require('../../../assets/images/profile.png')}
                                    style={{ width: 30, height: 30 }}
                                />
                                <StyledListImage
                                    source={require('../../../assets/images/msg.png')}
                                    style={{ width: 30, height: 30 }}
                                />
                                <StyledListImage
                                    source={require('../../../assets/images/home.png')}
                                    style={{ width: 30, height: 30 }}
                                />
                                <StyledListImage
                                    source={require('../../../assets/images/money.png')}
                                    style={{ width: 30, height: 30 }}
                                />
                                <StyledListImage
                                    source={require('../../../assets/images/watch.png')}
                                    style={{ width: 30, height: 30 }}
                                />
                            </StyledView>
                    </FooterTab>
                </Footer>
            </Container>
        </StyleProvider>
    );
};

export default HomeScreen;

const StyledListImage = styled.Image`
    margin: 20px;
`;

const StyledView = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;
