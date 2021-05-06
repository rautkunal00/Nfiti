// libraries
import React from 'react';

// styles
import { PressButton, ButtonText } from './styles';

const Button = props => {
    const { title, onClickHandler } = props;

    return (
        <PressButton onPress={onClickHandler}>
            <ButtonText>{title}</ButtonText>
        </PressButton>
    );
};

Button.defaultProps = {
    title: 'Button',
    onClickHandler: () => {},
};

export default Button;
