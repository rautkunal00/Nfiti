import React, { Component, useState } from 'react';
import {Text} from 'native-base'
import {
    StyledRadio,
    StyledGrid,
    StyledCol,
    StyledRow,
} from './style';
import { map } from 'lodash';

const PROP = [
    {
        key: 'Apparels',
        text: 'Apparels',
    },
    {
        key: 'Paper & Parcel',
        text: 'Paper & Parcel',
    },
    {
        key: 'Groceries',
        text: 'Groceries',
    },
    {
        key: 'Cake & Gifts',
        text: 'Cake & Gifts',
    },
    {
        key: 'Material',
        text: 'Material',
    },
];

export default class App extends Component {
    render() {
        return (
            <StyledGrid>
                {map(PROP, (eachField, index) => {
                    return (
                        <StyledCol key={index}>
                            <StyledRow>
                                <StyledRadio selected={index==2} />
                            </StyledRow>
                            <StyledRow>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        textAlign: 'center',
                                    }}
                                >
                                    {eachField.text}
                                </Text>
                            </StyledRow>
                        </StyledCol>
                    );
                })}
            </StyledGrid>
        );
    }
}
