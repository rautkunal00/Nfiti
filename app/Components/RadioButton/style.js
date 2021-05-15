import { Radio, Item, Text } from 'native-base';
import styled from 'styled-components/native';
import theme from '../../styles/themes'

export const StyledRadio = styled(Radio)`
    
`;

export const StyledItem = styled(Item)`
    width: 100%;
    border-color: transparent;
`;

export const StyledGrid = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 10px;
    padding: 10px;
`;

export const StyledCol = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    ${'' /* background-color: red; */}
`;

export const StyledRow = styled.View`
    width: 75px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;
