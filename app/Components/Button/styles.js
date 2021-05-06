import styled from 'styled-components/native';

export const PressButton = styled.TouchableOpacity`
    background-color: ${props => props.theme.COLOR.ACTIVE_PRIMARY};
    margin: 44px auto;
    width: 50%;
    padding: 15px 0;
    border-radius: 10px;
`;

export const ButtonText = styled.Text`
    color: ${props => props.theme.COLOR_PALETTE.WHITE};
    font-weight: bold;
    font-size: 14px;
    text-align: center;
`;
