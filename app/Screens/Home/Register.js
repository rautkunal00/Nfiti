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
import { Button, Text } from 'native-base';
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
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>
                            Register Your Number
                        </Text>
                        <DropdownWrapper>
                            <Dropdown
                                style={styles.input}
                                dropdownOptions={option}
                                placeholder="Country code"
                                value={option.calling_code}
                            />
                        </DropdownWrapper>
                        <SafeAreaView>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeNumber}
                                value={number}
                                placeholder="Your Phone Number"
                                keyboardType="numeric"
                            />
                        </SafeAreaView>
                        <Button
                            primary
                            rounded
                            onClickHandler={onSubmitHandler}
                            style={{flex:1}}
                        >
                            <Text>Send OTP</Text>
                        </Button>
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
        width: 249,
        height: 41,
        backgroundColor: '#F194FF',
        padding: 10,
        elevation: 2,
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
        width: 249,
        height: 20,
        marginTop: 23,
        borderBottomWidth: 0.5,
    },
});
export default Register;
