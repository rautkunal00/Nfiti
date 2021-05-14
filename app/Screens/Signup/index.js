import React from 'react';
import { View } from 'react-native';

import FieldPreview from './components/FieldPreview/';
import Button from '../../Components/Button';
import { map } from 'lodash';
import HeaderComponent from '../../Components/Header';
import FooterComponent from '../../Components/Footer';
import CheckBox from '../../Components/Checkbox';
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

import {
    Container,
    Grid,
    Col,
    Row,
    Content,
    StyleProvider,
    Slider,
    Box,
    Root,
    Card,
    Item,
} from 'native-base';

const PartnerSignup = props => {
    const {
        basicData,
        handleFieldChange,
        onSubmitHandler,
        documentData,
        bankData,
        navigation,
    } = props;
    return (
        <Container>
            <HeaderComponent type="default" title='Partner' navigation={props.navigation} />
            <Content>
                <Wrapper>
                    {/* TODO change this image */}
                    <StyledImage
                        source={{
                            uri:
                                'https://i.picsum.photos/id/101/2621/1747.jpg?hmac=cu15YGotS0gIYdBbR1he5NtBLZAAY6aIY5AbORRAngs',
                        }}
                        style={{marginBottom:14}}
                    />
                    {/* Basic details */}
                    <FormWrapper>
                        <PickupWrapper elevation={10}>
                            {map(basicData, (eachField, index) => {
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
                                                                    field={
                                                                        eachItem
                                                                    }
                                                                />
                                                            </View>
                                                        );
                                                    }
                                                )}
                                            </FlexWrapper>
                                        ) : (
                                            <FieldPreview
                                                parentKey={null}
                                                handleFieldChange={
                                                    handleFieldChange
                                                }
                                                field={eachField}
                                            />
                                        )}
                                    </StyledField>
                                );
                            })}
                        </PickupWrapper>
                    </FormWrapper>
                    {/* Documents */}
                    <FormWrapper>
                        <StyledHeading>Documents (Please select atleast 2)</StyledHeading>
                        <PickupWrapper elevation={10}>
                            {map(documentData, (eachField, index) => {
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
                                                                    field={
                                                                        eachItem
                                                                    }
                                                                />
                                                            </View>
                                                        );
                                                    }
                                                )}
                                            </FlexWrapper>
                                        ) : (
                                            <FieldPreview
                                                parentKey={null}
                                                handleFieldChange={
                                                    handleFieldChange
                                                }
                                                field={eachField}
                                            />
                                        )}
                                    </StyledField>
                                );
                            })}
                        </PickupWrapper>
                    </FormWrapper>
                    {/* Bank info */}
                    <FormWrapper>
                        <StyledHeading>Bank Details</StyledHeading>
                        <PickupWrapper elevation={10}>
                            {map(bankData, (eachField, index) => {
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
                                                                    field={
                                                                        eachItem
                                                                    }
                                                                />
                                                            </View>
                                                        );
                                                    }
                                                )}
                                            </FlexWrapper>
                                        ) : (
                                            <FieldPreview
                                                parentKey={null}
                                                handleFieldChange={
                                                    handleFieldChange
                                                }
                                                field={eachField}
                                            />
                                        )}
                                    </StyledField>
                                );
                            })}
                        </PickupWrapper>
                    </FormWrapper>

                    <Button title="Submit Request" onClickHandler={onSubmitHandler} />
                </Wrapper>
            </Content>
            <FooterComponent navigation={navigation} />
        </Container>
    );
};

export default PartnerSignup;
