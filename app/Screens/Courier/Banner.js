import React from 'react';
import { StyleSheet, Image } from 'react-native';
import {
    Container,
    Header,
    Content,
    Card,
    CardItem,
    Thumbnail,
    Text,
    Button,
    Icon,
    Left,
    Body,
    Right,
} from 'native-base';


const Banner = () => {
    const imageURI = require('../../../assets/images/Courier.jpg');
    
    return (
        <Card transparent>
            <CardItem cardBody style={[styles.blue]}>
                <Image
                    source={imageURI}
                    style={{ height: 100, width: null, flex: 1, opacity: 0.6 }}
                />
            </CardItem>
        </Card>
    );
};

const styles = StyleSheet.create({
    blue: {
      backgroundColor: '#073259',
      marginTop: -4,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10
    },
  });
  

export default Banner;
