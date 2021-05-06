import styled from 'styled-components/native';

export const StyledDateTimeValue = styled.TouchableOpacity`
    padding: 12px 10px;
    width: 100%;
    background-color: ${props => props.theme.COLOR_PALETTE.WHITE};
    border-radius: 10px;
`;

export const StyledDateTime = styled.Text`
    width: 100%;
    font-size: 12px;
    background-color: ${props => props.theme.COLOR_PALETTE.WHITE};
    color: ${props => props.theme.COLOR.TEXT_COLOR};
`;

export const RightComponent = styled.View`
    width: 18px;
    height: 18px;
    position: absolute;
    right: 10px;
    top: 10px;
`;
