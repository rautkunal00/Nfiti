import React, { useState } from 'react';
// import { Input, Item, Text } from 'native-base';
import { StyledInput, StyledItem, DropdownWrapper } from '../styles';
import { TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import ModalDropdown from 'react-native-modal-dropdown';
import get from 'lodash/get';

import Input from '../../../Components/Input';
import Dropdown from '../../../Components/Dropdown';
import DatePicker from '../../../Components/DatePicker';
import { padding } from '../../../styles/mixins';

const FieldPreview = props => {
    const { field, parentKey, handleFieldChange } = props;
    const fieldType = get(field, `type`);
    console.log(field, '--');

    const fieldUpdateHandler = value => {
        console.log(value, '==');
        handleFieldChange(field.key, value, parentKey);
    };

    switch (fieldType) {
        case 'text':
            return (
                <Input
                    placeholder={get(field, `label`)}
                    onChangeHandler={fieldUpdateHandler}
                />
            );

        case 'number':
            return (
                <Input
                    placeholder={get(field, `label`)}
                    onChangeHandler={fieldUpdateHandler}
                    inputOptions={{
                        style: {
                            width: '100%',
                        },
                        keyboardType: 'numeric',
                    }}
                />
            );

        case 'dropdown':
            return (
                <DropdownWrapper>
                    <Dropdown
                        onChangeHandler={fieldUpdateHandler}
                        dropdownOptions={get(field, `options`)}
                        placeholder={get(field, `label`)}
                        defaultOptions={{
                            isFullWidth: field.isFullWidth,
                        }}
                    />
                </DropdownWrapper>
            );

        case 'date':
            return (
                <DatePicker
                    mode="date"
                    placeholder="Date"
                    value={field.value}
                    onChangeHandler={fieldUpdateHandler}
                />
            );

        case 'time':
            return (
                <DatePicker
                    mode="time"
                    placeholder="Time"
                    value={field.value}
                    onChangeHandler={fieldUpdateHandler}
                />
            );

        default:
            return null;
    }
};

export default FieldPreview;
