import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
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
import Input from '../../Components/Input'
import DatePicker from '../../Components/DatePicker'

const FormComponent = () => {
    const [date, setDate] = useState(new Date());
    return (
        <Form>
            <Item rounded style={{ borderRadius: 20, backgroundColor: '#fff', }}>
                <Icon name="search" />
                <Input
                    placeholder="Sending something.."
                />
            </Item>

            <StyledGrid>
                <StyledCol>
                    <StyledRow>
                        <Radio
                            color={'#707070'}
                            selectedColor={'#5cb85c'}
                            selected={false}
                        />
                    </StyledRow>
                    <StyledRow>
                        <Text style={{ fontSize: 16, textAlign: 'center' }}>
                            Appearels
                        </Text>
                    </StyledRow>
                </StyledCol>

                <StyledCol>
                    <StyledRow>
                        <Radio
                            color={'#707070'}
                            selectedColor={'#5cb85c'}
                            selected={false}
                        />
                    </StyledRow>
                    <StyledRow>
                        <Text style={{ fontSize: 16, textAlign: 'center' }}>
                            Paper & Parcel
                        </Text>
                    </StyledRow>
                </StyledCol>

                <StyledCol>
                    <StyledRow>
                        <Radio
                            color={'#707070'}
                            selectedColor={'#5cb85c'}
                            selected={false}
                        />
                    </StyledRow>
                    <StyledRow>
                        <Text style={{ fontSize: 16, textAlign: 'center' }}>
                            Groceries
                        </Text>
                    </StyledRow>
                </StyledCol>

                <StyledCol>
                    <StyledRow>
                        <Radio
                            color={'#707070'}
                            selectedColor={'#5cb85c'}
                            selected={false}
                        />
                    </StyledRow>
                    <StyledRow>
                        <Text style={{ fontSize: 16, textAlign: 'center' }}>
                            Cake & Gifts
                        </Text>
                    </StyledRow>
                </StyledCol>

                <StyledCol>
                    <StyledRow>
                        <Radio
                            color={'#707070'}
                            selectedColor={'#5cb85c'}
                            selected={false}
                        />
                    </StyledRow>
                    <StyledRow>
                        <Text style={{ fontSize: 16, textAlign: 'center' }}>
                            Material
                        </Text>
                    </StyledRow>
                </StyledCol>
            </StyledGrid>
            <Card transparent>
                <H3>From,</H3>
                <Item
                    rounded
                    style={{ borderRadius: 20, backgroundColor: '#fff',paddingLeft:10 }}
                >
                    <FontAwesome name="map-marker" color="#ffe018" size={32}/>
                    <Input
                        placeholderTextColor="#5a5858"
                        placeholder="Address"
                        option={{ inlineLabel: true }}
                    />
                </Item>
                <Item
                    rounded
                    style={{ borderRadius: 20, backgroundColor: '#fff' }}
                >
                    <Textarea
                        rowSpan={3}
                        style={{
                            paddingTop: 15,
                            paddingLeft: 20,
                            width: 100 + '%',
                        }}
                        placeholderTextColor="#5a5858"
                        placeholder="Type your note here..."
                    />
                    <FontAwesome name="file-text-o" size={20} style={{marginLeft:-30}} />
                </Item>
                <DatePicker mode="date" placeholder="Date" value={date} onChangeHandler={(value)=>{setDate(value)}}/>
            </Card>
        </Form>
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
