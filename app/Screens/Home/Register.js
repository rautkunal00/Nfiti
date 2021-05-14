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
import { DropdownWrapper, StyledIcon } from './styles';
import Country from '../../utils/Country';
import { padding } from '../../styles/mixins';

const option = [];
Country.forEach((eachField, index) => {
    option.push(eachField.name + ' (+' + eachField.calling_code + ')');
});
const Register = props => {
    const { modalVisible } = props;
    const [page, pageChange] = useState(1);
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                {page == 1 ? (
                    <MobileEnter {...props} pageChange={pageChange} />
                ) : (
                    <VerifyOTP {...props} pageChange={pageChange} />
                )}
            </Modal>
        </View>
    );
};

const MobileEnter = props => {
    const [number, onChangeNumber] = React.useState(null);
    const { onSubmitHandler, pageChange, page } = props;

    return (
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>Register Your Number</Text>
                <Item style={{ width: 250 }}>
                    <Dropdown
                        style={styles.input}
                        dropdownOptions={option}
                        placeholder={option[98]}
                        value={option.calling_code}
                        fontSize={15}
                        width={250}
                        renderRightComponent={
                            <StyledIcon
                                source={require('../../../assets/images/dropdown.png')}
                            />
                        }
                    />
                </Item>
                <Item style={{ width: 250 }}>
                    <Input
                        placeholderTextColor="#CCC"
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="Your Phone Number"
                        keyboardType="numeric"
                        style={{ fontSize: 15 }}
                    />
                </Item>
                <Item style={{ width: 250 }}>
                    <Button
                        style={styles.openButton}
                        block
                        onPress={() => {
                            onSubmitHandler(pageChange, 2);
                        }}
                    >
                        <Text>Send OTP</Text>
                    </Button>
                </Item>
            </View>
        </View>
    );
};

const VerifyOTP = props => {
    const [number, onChangeNumber] = React.useState(null);
    const { onSubmitHandler, pageChange } = props;

    return (
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>Verification Code</Text>
                <Text style={styles.modalText2}>
                    Please type the verification code sent to +91 9823 345 374
                </Text>
                <Item style={{ width: 250, borderBottomColor: "#fff", marginTop: 10 }}>
                    <Input
                        placeholderTextColor="#CCC"
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="-"
                        keyboardType="numeric"
                        style={styles.otp}
                    />
                    <Input
                        placeholderTextColor="#CCC"
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="-"
                        keyboardType="numeric"
                        style={styles.otp}
                    />
                    <Input
                        placeholderTextColor="#CCC"
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="-"
                        keyboardType="numeric"
                        style={styles.otp}
                    />
                    <Input
                        placeholderTextColor="#CCC"
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="-"
                        keyboardType="numeric"
                        style={styles.otp}
                    />
                </Item>
                <Text style={styles.modalText3}>Resend Code ?</Text>
                <Item style={{ width: 250 }}>
                    <Button
                        style={styles.openButton}
                        block
                        onPress={() => {
                            onSubmitHandler(pageChange, 3);
                        }}
                    >
                        <Text>Submit</Text>
                    </Button>
                </Item>
            </View>
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
        height: 'auto',
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
        opacity: 0.56,
    },
    modalText2: {
        textAlign: 'center',
        fontSize: 12,
        padding: 10,
    },
    modalText3: {
        fontSize: 10,
        marginTop: 5,
        opacity: 0.56,
    },
    input: {
        width: 250,
    },
    otp:{
        height: 40,
        width: "auto",
        borderRadius: 0,
        borderWidth: 1,
        marginRight: 10,
        marginLeft: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 12
    }
});
export default Register;
