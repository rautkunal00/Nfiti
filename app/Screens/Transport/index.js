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
} from './styles';

const TransportService = props => {
    const { pickupData, handleFieldChange, onSubmitHandler } = props;
    return (
        <Wrapper>
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
                            <StyledField
                                // elevation={2}

                                key={index}
                            >
                                {!!eachField.children ? (
                                    <FlexWrapper>
                                        {map(
                                            eachField.children,
                                            (eachItem, itemIndex) => {
                                                return (
                                                    <View
                                                        style={{
                                                            minWidth: 150,
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
            <TouchableOpacity onPress={onSubmitHandler}>
                <Text>Press Here</Text>
            </TouchableOpacity>
        </Wrapper>
    );
};

export default TransportService;
