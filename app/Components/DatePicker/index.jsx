import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { View, Text } from 'react-native';
import Moment from 'react-moment';

import { StyledDateTimeValue } from './style';

const DateTimePickerComponent = props => {
    const { mode, value, placeholder, onChangeHandler, options } = props;
    const [showPicker, setShowPicker] = useState(false);
    

    const handleShowPicker = (isShowPicker = true) => {
        setShowPicker(isShowPicker);
    };

    const pickerChangeHandler = selectedField => {
        console.log('selectedField', selectedField);
        onChangeHandler(selectedField);
    };
    console.log(showPicker, 'showPicker');
    return (
        <View>
            <StyledDateTimeValue onPress={() => handleShowPicker(true)}>
                {/* <Text>{new Date(value).toISOString()}</Text> */}
                <Moment
                    format={mode === 'date' ? 'D MMM YYYY' : 'h:mm:ss a'}
                    element={Text}
                >
                    {new Date(value).toISOString()}
                </Moment>
            </StyledDateTimeValue>
            {showPicker && (
                <DateTimePicker
                    value={value}
                    mode={mode}
                    is24Hour={false}
                    display="default"
                    onChange={(event, selectedField) => {
                        handleShowPicker(false);
                        pickerChangeHandler(selectedField);
                    }}
                    maximumDate={new Date(2300, 10, 20)}
                    minimumDate={new Date(1950, 0, 1)}
                    {...options}
                />
            )}
        </View>
    );
};

DateTimePickerComponent.defaultProps = {
    mode: 'date',
    value: new Date(),
    onChangeHandler: () => {},
};

export default DateTimePickerComponent;
