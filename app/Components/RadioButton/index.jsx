import React from 'react';
import { View } from 'react-native';
import { StyledItem, StyledRadio, StyledGrid, StyledCol, StyledRow } from './style';
import theme from '../../styles/themes';

const RadioBtn = props => {
    const { placeholder, onChangeHandler, radioOptions, selected } = props;
    console.log(theme.COLOR.ACTIVE_PRIMARY);
    return (
        <StyledItem regular>
            <StyledRadio
                {...radioOptions}
                color={theme.COLOR_PALETTE.BLACK}
                selectedColor={theme.COLOR.ACTIVE_PRIMARY}
                selected={selected}
                // onPress={onChangeHandler}
            />
        </StyledItem>
    );
};

RadioBtn.defaultProps = {
    radioOptions: {},
};


export default RadioBtn;
