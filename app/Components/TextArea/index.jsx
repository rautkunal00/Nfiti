import React from 'react';
import { View } from 'react-native';
import { StyledItem, StyledTextArea } from './style';

const RightComponent = props => {
    const { renderRightComponent } = props;
    return (
        <View
            style={{
                width: 10,
                height: 10,
            }}
        >
            {renderRightComponent}
        </View>
    );
};

const TextAreaComponent = props => {
    const { placeholder, onChangeHandler, inputOptions, renderRightComponent } = props;

    return (
        <StyledItem regular>
            <StyledTextArea
                placeholder={placeholder}
                onChangeText={text => onChangeHandler(text)}
                {...inputOptions}
            />
            <RightComponent renderRightComponent={renderRightComponent}/>
        </StyledItem>
    );
};

TextAreaComponent.defaultProps = {
    inputOptions: {},
};

export default TextAreaComponent;
