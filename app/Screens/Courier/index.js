import React from 'react';
import { View } from 'react-native';
import {
    Container,
    Grid,
    Col,
    Row,
    Content,
    StyleProvider,
    Form,
    Item,
    Input,
    Button,
    Text,
    Icon,
} from 'native-base';

import getTheme from '../../utils/native-base-theme/components';
import material from '../../utils/native-base-theme/variables/variables';

import FooterComponent from '../../Components/layout/FooterComponent';
import HeaderComponent from './HeaderComponent';
import Banner from './Banner';
import FormComponent from './FormComponent';

const index = ({ navigation }) => {
    return (
        <StyleProvider style={getTheme(material)}>
            <Container style={{ backgroundColor: '#e4e4e4' }}>
                <HeaderComponent />
                <Banner />
                <Content padder>
                    <FormComponent />
                </Content>
                <FooterComponent navigation={navigation} />
            </Container>
        </StyleProvider>
    );
};

export default index;

