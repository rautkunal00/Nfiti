// libraries
import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { View } from 'react-native';
import Moment from 'react-moment';

// styles
import { StyledDateTimeValue, StyledDateTime, RightComponent } from './style';

const DateTimePickerComponent = props => {
    const {
        mode,
        value,
        onChangeHandler,
        options,
        renderRightComponent,
        disabled,
    } = props;
    const [showPicker, setShowPicker] = useState(false);

    const handleShowPicker = (isShowPicker = true) => {
        setShowPicker(isShowPicker);
    };

    const pickerChangeHandler = (event, selectedField) => {
        if (event.type !== 'dismissed') {
            onChangeHandler(selectedField);
        }
    };

    return (
        <View>
            <StyledDateTimeValue onPress={() => handleShowPicker(true)}>
                <Moment
                    format={mode === 'date' ? 'D MMM YYYY' : 'h:mm:ss a'}
                    element={StyledDateTime}
                >
                    {new Date(value).toISOString()}
                </Moment>
            </StyledDateTimeValue>
            {showPicker && !disabled && (
                <DateTimePicker
                    value={value}
                    mode={mode}
                    is24Hour={false}
                    display="default"
                    onChange={(event, selectedField) => {
                        handleShowPicker(false);
                        pickerChangeHandler(event, selectedField);
                    }}
                    maximumDate={new Date(2300, 10, 20)}
                    minimumDate={new Date()}
                    {...options}
                />
            )}
            {renderRightComponent && (
                <RightComponent>{renderRightComponent}</RightComponent>
            )}
        </View>
    );
};

DateTimePickerComponent.defaultProps = {
    mode: 'date',
    value: new Date(),
    onChangeHandler: () => {},
    disabled: false,
};

export default DateTimePickerComponent;
