import React from 'react';
import { View, Text } from 'react-native';
import { Header, Title, Button, Left, Right, Body, Icon } from 'native-base';

const HeaderComponent = (props) => {
    return (
        <Header>
            <Left>
                <Button
                    transparent
                    onPress={() => {
                        props.navigation.push('MyDrawer');
                        props.navigation.navigate('MyDrawer');
                    }}
                >
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
    );
};

export default HeaderComponent;
