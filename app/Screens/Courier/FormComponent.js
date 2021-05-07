import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import {
    Form,
    Item,
    Icon,
    Radio,
    Grid,
    Row,
    Col,
    H3,
    Card,
    Textarea,
} from 'native-base';
import styled from 'styled-components/native';
import Input from '../../Components/Input';
import DatePicker from '../../Components/DatePicker';

import FieldPreview from './components/FieldPreview/';
import Button from '../../Components/Button';
import RadioButton from '../../Components/RadioButton/GridRadio';

import {
    PickupWrapper,
    StyledImage,
    Wrapper,
    StyledMap,
    StyledHeading,
    StyledField,
    FormWrapper,
    FlexWrapper,
} from './styles';
import { map } from 'lodash';

const FormComponent = props => {
    const [date, setDate] = useState(new Date());
    const {
        pickupData,
        handleFieldChange,
        onSubmitHandler,
        destinationData,
    } = props;
    return (
        // <Form>
        //     <Card transparent>
        //         <H3>From,</H3>
        //         <Item
        //             rounded
        //             style={{ borderRadius: 20, backgroundColor: '#fff',paddingLeft:10 }}
        //         >
        //             <FontAwesome name="map-marker" color="#ffe018" size={32}/>
        //             <Input
        //                 placeholderTextColor="#5a5858"
        //                 placeholder="Address"
        //                 option={{ inlineLabel: true }}
        //             />
        //         </Item>
        //         <Item
        //             rounded
        //             style={{ borderRadius: 20, backgroundColor: '#fff' }}
        //         >
        //             <Textarea
        //                 rowSpan={3}
        //                 style={{
        //                     paddingTop: 15,
        //                     paddingLeft: 20,
        //                     width: 100 + '%',
        //                 }}
        //                 placeholderTextColor="#5a5858"
        //                 placeholder="Type your note here..."
        //             />
        //             <FontAwesome name="file-text-o" size={20} style={{marginLeft:-30}} />
        //         </Item>
        //         <DatePicker mode="date" placeholder="Date" value={date} onChangeHandler={(value)=>{setDate(value)}}/>
        //     </Card>
        // </Form>
        <>
            <Form>
                <Item
                    rounded
                    style={{ borderRadius: 20, backgroundColor: '#fff' }}
                >
                    <Icon name="search" />
                    <Input placeholder="Sending something.." />
                </Item>

                <RadioButton {...props} />
            </Form>
            <FormWrapper>
                <StyledHeading>From</StyledHeading>
                <PickupWrapper elevation={10}>
                    {map(pickupData, (eachField, index) => {
                        return (
                            <StyledField key={index}>
                                {!!eachField.children ? (
                                    <FlexWrapper>
                                        {map(
                                            eachField.children,
                                            (eachItem, itemIndex) => {
                                                return (
                                                    <View
                                                        style={{
                                                            flex: 1,
                                                            height: 41,
                                                            ...eachItem.style,
                                                        }}
                                                        key={itemIndex}
                                                    >
                                                        <FieldPreview
                                                            handleFieldChange={
                                                                handleFieldChange
                                                            }
                                                            parentKey={
                                                                eachField.parentKey
                                                            }
                                                            field={eachItem}
                                                        />
                                                    </View>
                                                );
                                            }
                                        )}
                                    </FlexWrapper>
                                ) : (
                                    <FieldPreview
                                        parentKey={null}
                                        handleFieldChange={handleFieldChange}
                                        field={eachField}
                                    />
                                )}
                            </StyledField>
                        );
                    })}
                </PickupWrapper>
            </FormWrapper>
            <FormWrapper>
                <StyledHeading>To</StyledHeading>
                <PickupWrapper elevation={10}>
                    {map(destinationData, (eachField, index) => {
                        return (
                            <StyledField key={index}>
                                {!!eachField.children ? (
                                    <FlexWrapper>
                                        {map(
                                            eachField.children,
                                            (eachItem, itemIndex) => {
                                                return (
                                                    <View
                                                        style={{
                                                            flex: 1,
                                                            height: 41,
                                                            ...eachItem.style,
                                                        }}
                                                        key={itemIndex}
                                                    >
                                                        <FieldPreview
                                                            handleFieldChange={
                                                                handleFieldChange
                                                            }
                                                            parentKey={
                                                                eachField.parentKey
                                                            }
                                                            field={eachItem}
                                                        />
                                                    </View>
                                                );
                                            }
                                        )}
                                    </FlexWrapper>
                                ) : (
                                    <FieldPreview
                                        parentKey={null}
                                        handleFieldChange={handleFieldChange}
                                        field={eachField}
                                    />
                                )}
                            </StyledField>
                        );
                    })}
                </PickupWrapper>
                <Button title="Submit Request" onClickHandler={onSubmitHandler} />
            </FormWrapper>
        </>
    );
};

const StyledGrid = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 10px;
    padding: 10px;
`;

const StyledCol = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    ${'' /* background-color: red; */}
`;

const StyledRow = styled.View`
    width: 75px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

export default FormComponent;
