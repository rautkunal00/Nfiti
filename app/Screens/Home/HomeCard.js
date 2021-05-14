import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
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
    H3,
    Thumbnail,
    CardItem,
    StyleProvider,
} from 'native-base';
import getTheme from '../../utils/native-base-theme/components';
import material from '../../utils/native-base-theme/variables/variables';
import styled from 'styled-components/native';

const HomeCard = props => {
    const pressHandler = () => {
        // console.log(props.navigation);
        props.navigation.push(props.onPress);
        props.navigation.navigate(props.onPress);
    };

    return (
        <TouchableOpacity>
            <Card
                style={{
                    borderRadius: 10,
                    shadowOpacity: 0,
                    borderColor: '#fff',
                }}
                elevation={10}
            >
                <CardItem
                    button={true}
                    style={{ borderRadius: 10 }}
                    onPress={() => pressHandler()}
                >
                    <Body>
                        <StyledListImage
                            source={props.url}
                            style={{
                                width: 150,
                                height: 75,
                            }}
                        />
                        <H3
                            style={{
                                alignSelf: 'center',
                                marginBottom: 10,
                                color: '#444648',
                            }}
                        >
                            {props.title}
                        </H3>
                    </Body>
                </CardItem>
            </Card>
        </TouchableOpacity>
    );
};

export default HomeCard;

const StyledListImage = styled.Image`
    margin: 20px;
`;
