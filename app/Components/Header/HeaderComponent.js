import React from 'react';
import { View } from 'react-native';
// import Button from '../Button'
import { Header, Title, Left, Right, Body, Icon, Button, Text } from 'native-base';
// import  Button  from '../../utils/native-base-theme/components';


const HeaderComponent = props => {
    switch (props.type) {
        case 'home':
            return <HomeHeader title={props.title} {...props} />;
        case 'courier':
            return <IconHeader title={props.title} {...props} />;
        case 'transport':
            return <IconHeader title={props.title} {...props} />;
        default:
            return (
                <BackBtnHeader title="Please provide valid type" {...props} />
            );
    }
};

HeaderComponent.defaultProps = {
    title: 'Title',
};

export default HeaderComponent;

const HomeHeader = () => {
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

const BackBtnHeader = props => {
    return (
        <Header>
            <Left>
                <Button transparent onPress={() => props.navigation.goBack()}>
                    <Icon name="arrow-back" />
                </Button>
            </Left>
            <Body>
                <Title>{props.title}</Title>
            </Body>
        </Header>
    );
};

const IconHeader = () => {
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
    );
};
