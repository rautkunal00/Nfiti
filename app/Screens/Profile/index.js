import React, { useState } from 'react';
import styled from 'styled-components/native';
import { 
    StyleSheet, 
    Text, 
    View, 
    Button, 
    FlatList, 
    ScrollView, 
    TouchableOpacity, 
    Image 
} from 'react-native';

const ProfileScreen = () => {
    const [data, setData] = useState([
        {
            id: '1',
            name: "My Orders",
            slug: "/orders"
        },
        {
            id: '2',
            name: "My Subscription",
            slug: "/subscription"
        },
        {
            id: '3',
            name: "My review & rating",
            slug: "/review_rating"
        },
        {
            id: '4',
            name: "My Wallet",
            slug: "/wallet"
        },
        {
            id: '5',
            name: "Offers",
            slug: "/offers"
        },
        {
            id: '6',
            name: "T & C",
            slug: "/t_c"
        },
        {
            id: '7',
            name: "Contact Us",
            slug: "/contact"
        },
        {
            id: '8',
            name: "My Request",
            slug: "/request"
        },
    ])
    return (
        <StyledTopView>
            <FlatList 
                keyExtractor={(item) => item.id}
                data={data}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        <StyledSpace></StyledSpace>
                        <StyledText>{item.name}</StyledText>
                        <StyledImage source={require('../../../assets/images/arrow.png')} />
                    </TouchableOpacity>
                )}
            />
            <StyledOuterView>
                <StyledView>
                    <StyledListImage source={require('../../../assets/images/profile.png')} style={{width: 30, height: 30}} />
                    <StyledListImage source={require('../../../assets/images/msg.png')} style={{width: 30, height: 30}} />
                    <StyledListImage source={require('../../../assets/images/home.png')} style={{width: 30, height: 30}} />
                    <StyledListImage source={require('../../../assets/images/money.png')} style={{width: 30, height: 30}} />
                    <StyledListImage source={require('../../../assets/images/watch.png')} style={{width: 30, height: 30}} />
                </StyledView>
            </StyledOuterView>
        </StyledTopView>
    )
}

export default ProfileScreen;

const StyledText = styled.Text`
    color: #073259;
    font-size: 20px;
    background: #fff;
    width: 90%;
    padding: 15px 15px 15px 40px;
    margin: 10px auto;
    border-radius: 10px;
    box-shadow: 10px 10px 8px #000;
    position: relative;
`;

const StyledTopView = styled.View`
    width: 100%;
    height: 100%;
    padding-top: 100px;
    position: relative;
`;

const StyledSpace = styled.Text`
    position: absolute;
    top: 12px;
    left: 20px;
    width: 12px;
    height: 55px;
    z-index: 1;
    background:  #073259;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
`;

const StyledImage = styled.Image`
    width: 12px;
    height: 20px;
    position: absolute;
    top: 25px;
    right: 35px;
`;

const StyledOuterView = styled.View`
    background: #fff;
    padding: 5px 0;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
`;

const StyledView = styled.View`
    width: 85%;
    display: flex;
    margin: 10px auto;
    flex-direction: row;
    justify-content: space-between;
`;

const StyledListImage = styled.Image`
    padding: 0px;
`;