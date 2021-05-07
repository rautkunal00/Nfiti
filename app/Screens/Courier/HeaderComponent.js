import React from 'react';
import { View } from 'react-native';
import {
    Header,
    Title,
    Button,
    Left,
    Right,
    Body,
    Icon,
    Form,
    Item,
    Text,
    Input,
    StyleProvider,
} from 'native-base';

import getTheme from '../../utils/native-base-theme/components';
import material from '../../utils/native-base-theme/variables/variables';

const HeaderComponent = () => {
    return (
        <StyleProvider style={getTheme(material)}>
            <Header noShadow>
                <Left>
                    <Button transparent>
                        <Icon name="menu" />
                    </Button>
                </Left>
                <Body>
                    <Title>Courier</Title>
                </Body>
                <Right>
                    <Button rounded primary>
                        <Text style={{ fontSize: 10 }}>Become a Partner</Text>
                    </Button>
                    <Button transparent>
                        <Icon name="notifications" />
                    </Button>
                    <Button transparent>
                        <Icon name="cart" />
                    </Button>
                </Right>
            </Header>
        </StyleProvider>
    );
};

export default HeaderComponent;
