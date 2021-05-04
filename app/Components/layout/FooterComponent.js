import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Footer, FooterTab } from 'native-base';
import styled from 'styled-components/native';

const FooterComponent = props => {
    return (
        <Footer>
            <FooterTab>
                <StyledView>
                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.push('ProfileScreen');
                            props.navigation.navigate('ProfileScreen');
                        }}
                    >
                        <StyledListImage
                            source={require('../../../assets/images/profile.png')}
                            style={{ width: 30, height: 30 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate('HomeScreen');
                        }}
                    >
                        <StyledListImage
                            source={require('../../../assets/images/msg.png')}
                            style={{ width: 33, height: 30 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate('HomeScreen');
                        }}
                    >
                        <StyledListImage
                            source={require('../../../assets/images/home.png')}
                            style={{ width: 30, height: 30 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate('HomeScreen');
                        }}
                    >
                        <StyledListImage
                            source={require('../../../assets/images/money.png')}
                            style={{ width: 40, height: 30 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate('HomeScreen');
                        }}
                    >
                        <StyledListImage
                            source={require('../../../assets/images/watch.png')}
                            style={{ width: 30, height: 30 }}
                        />
                    </TouchableOpacity>
                </StyledView>
            </FooterTab>
        </Footer>
    );
};

const StyledView = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

const StyledListImage = styled.Image`
    margin: 20px;
`;

export default FooterComponent;
