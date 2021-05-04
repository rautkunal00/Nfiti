import React from 'react';
import { View,  } from 'react-native';
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
} from 'native-base';

const HeaderComponent = () => {
    return (
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
                   <Text style={{fontSize:10}}>Become a Partner</Text>
                </Button>
                <Button transparent>
                    <Icon name="notifications" />
                </Button>
                <Button transparent>
                    <Icon name="cart" />
                </Button>
            </Right>
        </Header>
    );
};

export default HeaderComponent;
