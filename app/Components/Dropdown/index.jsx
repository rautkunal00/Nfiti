import React from 'react';
import ModalDropdown from 'react-native-modal-dropdown';
import { withTheme } from 'styled-components/native';
import { View } from 'react-native';
import { padding } from '../../styles/mixins';

const RightArrow = props => {
    const { renderRightComponent } = props;
    return (
        <View
            style={{
                width: 10,
                height: 10,
                position: 'absolute',
                right: -5,
            }}
        >
            {renderRightComponent}
        </View>
    );
};

const Dropdown = props => {
    const {
        onChangeHandler,
        placeholder,
        dropdownOptions,
        defaultOptions,
        renderRightComponent,
        value,
    } = props;
    return (
        <ModalDropdown
            onSelect={(index, value) => {
                console.log(value, 'value');
                onChangeHandler(value);
            }}
            style={{
                backgroundColor: 'white',
                ...padding(12, 18, 12, 18),
                borderRadius: 10,
            }}
            textStyle={{
                fontSize: 12,
                color: props.theme.COLOR.TEXT_COLOR,
            }}
            dropdownStyle={{
                marginTop: -10,
            }}
            renderRightComponent={() => (
                <RightArrow renderRightComponent={renderRightComponent} />
            )}
            defaultValue={value || placeholder}
            renderSeparator={() => <View></View>}
            options={dropdownOptions}
            {...defaultOptions}
        />
    );
};

export default withTheme(Dropdown);
