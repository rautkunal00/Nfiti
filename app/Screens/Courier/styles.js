import styled from 'styled-components/native';
import { Input, Item } from 'native-base';
import theme from '../../styles/themes'

export const Wrapper = styled.ScrollView`
    /* display: flex; */
`;

export const StyledImage = styled.Image`
    height: 150px;
`;

export const StyledField = styled.View`
    margin-bottom: 18px;
`;

export const StyledMap = styled.Image`
    height: 200px;
`;

export const StyledHeading = styled.Text`
    font-size: 15px;
    margin: 45px 0 20px 20px;
    color: ${theme.COLOR.BLACK_TEXT};
    font-weight: bold;
`;

export const FromFormWrapper = styled.View``;

export const PickupWrapper = styled.View`
    border-radius: 25px;
    width: 100%;
`;

export const StyledInput = styled(Input)``;

export const FormWrapper = styled.View`
    width: 94%;
    margin: 0 auto;
`;

export const StyledItem = styled(Item)`
    background-color: #fff;
    border-radius: 10px;
`;

export const FlexWrapper = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

export const DropdownWrapper = styled.View`
    width: 100%;
`;

export const StyledIcon = styled.Image`
    width: 100%;
    height: 100%;
`;
