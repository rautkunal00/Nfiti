import React, { useState } from 'react';
import { Image } from 'react-native';
import { Footer, FooterTab } from 'native-base';
import styled from 'styled-components/native';

const FooterComponent = () => {
    return (
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
