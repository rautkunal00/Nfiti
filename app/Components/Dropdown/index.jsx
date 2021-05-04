import React from 'react';
import ModalDropdown from 'react-native-modal-dropdown';
import { withTheme } from 'styled-components/native';
import { Text, View } from 'react-native';
import { padding } from '../../styles/mixins';

const RightArrow = () => {
    return (
        <Text
            style={{
                right: 0,
                position: 'absolute',
            }}
        >
            +
        </Text>
    );
};

const Dropdown = props => {
    const {
        onChangeHandler,
        placeholder,
        dropdownOptions,
        defaultOptions,
    } = props;

    return (
        <ModalDropdown
            onSelect={(index, value) => {
                onChangeHandler(value);
            }}
            style={{
                minWidth: 130,
                width: '100%',
                backgroundColor: 'white',
                ...padding(15, 18, 15, 18),
                borderRadius: 10,
            }}
            textStyle={{
                fontSize: 10,
                color: props.theme.COLOR.TEXT_COLOR,
            }}
            dropdownStyle={{
                marginTop: -10,
            }}
            renderRightComponent={() => <RightArrow />}
            defaultValue={placeholder}
            renderSeparator={() => <View></View>}
            options={dropdownOptions}
            {...defaultOptions}
        />
    );
};

export default withTheme(Dropdown);
