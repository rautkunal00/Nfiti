import React from 'react';
import { StyledItem, StyledInput } from './style';

const InputComponent = props => {
    const { placeholder, onChangeHandler, inputOptions } = props;

    return (
        <StyledItem regular>
            <StyledInput
                placeholder={placeholder}
                onChangeText={text => onChangeHandler(text)}
                {...inputOptions}
            />
        </StyledItem>
    );
};

InputComponent.defaultProps = {
    inputOptions: {},
};

export default InputComponent;
