import React from 'react';
import { View, Text } from 'react-native';
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
            <Item>
            <Icon name="navigate" style={{color:"#ffe018"}} />
            <Input placeholder="26, Straight Heights, Western" option={{inlineLabel: true}}/>
            </Item>
            </Body>
            <Right>
                <Button primary>
                   <Text>Become a Pasrtner</Text>
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
