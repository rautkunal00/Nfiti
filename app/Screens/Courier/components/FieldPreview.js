import React from 'react';
import { DropdownWrapper } from '../styles';

import get from 'lodash/get';

import Input from '../../../Components/Input';
import Dropdown from '../../../Components/Dropdown';
import DatePicker from '../../../Components/DatePicker';

import {
    Form,
    Item,
    Icon,
    Radio,
    Grid,
    Row,
    Col,
    H3,
    Card,
    Textarea,
} from 'native-base';

const FieldPreview = props => {
    const { field, parentKey, handleFieldChange } = props;
    const fieldType = get(field, `type`);

    const fieldUpdateHandler = value => {
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
                        value={field.value}
                        renderRightComponent={field.renderRightComponent}
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
                    renderRightComponent={field.renderRightComponent}
                />
            );
        case 'textarea':
            return (
                <Textarea
                    rowSpan={3}
                    style={{
                        paddingTop: 15,
                        paddingLeft: 20,
                        width: 100 + '%',
                    }}
                    placeholderTextColor="#5a5858"
                    placeholder={get(field, `label`)}
                    onChangeHandler={fieldUpdateHandler}
                />
            );

        default:
            return null;
    }
};

export default FieldPreview;
