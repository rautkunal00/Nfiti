import React, { useState } from 'react';
import {
    Alert,
    Modal,
    StyleSheet,
    View,
    SafeAreaView,
    TextInput,
} from 'react-native';
import Dropdown from '../../Components/Dropdown';
import { Button, Text, Item, Input } from 'native-base';
import Colors from '../../styles/colors';
import { DropdownWrapper } from './styles';
import Country from '../../utils/Country';

const option = [];
Country.forEach((eachField, index) => {
    option.push(eachField.name + ' (+' + eachField.calling_code + ')');
});
const Register = props => {
    const { onSubmitHandler, modalVisible } = props;
    const [number, onChangeNumber] = React.useState(null);
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>
                            Register Your Number
                        </Text>
                        <Item style={{width:250}}>
                                <Dropdown
                                    style={styles.input}
                                    dropdownOptions={option}
                                    placeholder="Country code"
                                    value={option.calling_code}
                                />
                        </Item>
                        <Item style={{width:250}}>
                            <Input
                                placeholderTextColor='#CCC'
                                onChangeText={onChangeNumber}
                                value={number}
                                placeholder="Your Phone Number"
                                keyboardType="numeric"
                            />
                        </Item>
                        <Item style={{width:250}}>
                            <Button
                                style={styles.openButton}
                                block
                                onClickHandler={onSubmitHandler}
                            >
                                <Text>Send OTP</Text>
                            </Button>
                        </Item>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        width: 327,
        height: 246,
        margin: 20,
        backgroundColor: 'white',
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    openButton: {
        width: 250,
        marginTop: 26,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    input: {
        width: 250,
        
    },
});
export default Register;
