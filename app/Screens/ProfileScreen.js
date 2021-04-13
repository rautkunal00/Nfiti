import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, FlatList, ScrollView, TouchableOpacity, Image } from 'react-native'

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
        <View style={styles.container}>
            <Text>Profile Screen</Text>
            <FlatList 
                keyExtractor={(item) => item.id}
                data={data}
                renderItem={({ item }) => (
                    <Button 
                        title={item.name}
                    />
                )}
            />
            <ScrollView>
                <Image source={require('../../assets/images/profile.png')} style={{width: 50, height: 50}} />
                <Image source={require('../../assets/images/msg.png')} style={{width: 50, height: 50}} />
                <Image source={require('../../assets/images/home.png')} style={{width: 50, height: 50}} />
                <Image source={require('../../assets/images/money.png')} style={{width: 50, height: 50}} />
                <Image source={require('../../assets/images/watch.png')} style={{width: 50, height: 50}} />
            </ScrollView>
        </View>
    )
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignContent:'center'
    },
    icon: {
        flex:1,
    }
})
