import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
// import {
//     Container,
//     Header,
//     Content,
//     Form,
//     Item,
//     Input,
//     Label,
// } from 'native-base';

import FieldPreview from './components/FieldPreview/';
import Button from '../../Components/Button';
import { map } from 'lodash';

import {
    FromFormWrapper,
    PickupWrapper,
    StyledImage,
    Wrapper,
    StyledMap,
    StyledHeading,
    StyledField,
    FormWrapper,
    FlexWrapper,
    PressButton,
    ButtonText,
} from './styles';

const TransportService = props => {
    const {
        pickupData,
        handleFieldChange,
        onSubmitHandler,
        destinationData,
    } = props;
    return (
        <Wrapper>
            {/* TODO change this image */}
            <StyledImage
                source={{
                    uri:
                        'https://i.picsum.photos/id/101/2621/1747.jpg?hmac=cu15YGotS0gIYdBbR1he5NtBLZAAY6aIY5AbORRAngs',
                }}
            />
            {/* TODO map integration */}
            <StyledMap
                source={{
                    uri:
                        'https://www.thestatesman.com/wp-content/uploads/2020/04/googl_ED.jpg',
                }}
            />
            {/* From */}
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

            {/* To Form */}
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
            </FormWrapper>
            <Button title="Submit" onClickHandler={onSubmitHandler} />
        </Wrapper>
    );
};

export default TransportService;
