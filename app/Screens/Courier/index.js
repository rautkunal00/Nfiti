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
// import HeaderComponent from './HeaderComponent';
import HeaderComponent from '../../Components/Header';

import Banner from './Banner';
import FormComponent from './container';

const index = props => {
    return (
        <Container style={{ backgroundColor: '#e4e4e4' }}>
            <HeaderComponent
                type="courier"
                title="Courier"
                navigation={props.navigation}
            />
            <Banner />
            <Content padder>
                <FormComponent {...props} />
            </Content>
            <FooterComponent navigation={props.navigation} />
        </Container>
    );
};

export default index;
