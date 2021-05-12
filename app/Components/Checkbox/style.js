import { CheckBox, Item } from 'native-base';
import styled from 'styled-components/native';
import { Text } from 'react-native';

export const StyledInput = styled(CheckBox)`
    background-color: white;
    border-radius: 5px;
    width: 25px;
    height: 25px;
    border-color: #707070;
`;

export const StyledItem = styled(Item)`
    width: 100%;
    border-color: transparent;
`;

export const StyledText = styled(Text)`
    font-size: 14px;
    margin-left: 20px;
    color: #5a5858;
`;
