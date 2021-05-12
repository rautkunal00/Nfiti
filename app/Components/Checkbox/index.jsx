import React from 'react';
import { StyledItem, StyledInput, StyledText } from './style';

const InputComponent = props => {
    const { placeholder, onChangeHandler, inputOptions } = props;

    return (
        <StyledItem regular>
            <StyledInput
                type="checkbox"
                onChangeText={text => onChangeHandler(text)}
                {...inputOptions}
            />
            <StyledText>{placeholder}</StyledText>
        </StyledItem>
    );
};

InputComponent.defaultProps = {
    inputOptions: {},
};

export default InputComponent;
