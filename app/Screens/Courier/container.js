import React, { Component } from 'react';
import FormComponent from './FormComponent';
import find from 'lodash/find';

import { StyledIcon } from './styles';

class FormComponentContainer extends Component {
    state = {
        pickupData: [],
        destinationData: [],
    };

    componentDidMount() {
        const pickupData = [
            {
                type: 'text',
                label: 'Address',
                key: 'address',
            },
            {
                type: 'textarea',
                label: 'Type your note here...',
                key: 'note',
                renderRightComponent: (
                    <StyledIcon
                        style={{
                            width: 15,
                            height: 19,
                        }}
                        source={require('../../../assets/images/file.png')}
                    />
                )
            },
            {
                parentKey: 'dateTime',
                children: [
                    {
                        type: 'date',
                        label: 'Date',
                        key: 'date',
                        style: {marginRight: 10, marginleft: 10},
                        renderRightComponent: (
                            <StyledIcon
                                source={require('../../../assets/images/date.png')}
                            />
                        ),
                    },
                    {
                        type: 'dropdown',
                        label: 'Time',
                        key: 'time',
                        style: {marginRight: 10, marginleft: 10},
                        options: [
                            '01.30 - 02.00 AM',
                            '02.00 - 02.30 PM',
                            '03.00 - 03.30 PM',
                            '04.00 - 04.30 AM',
                            '01.30 - 02.00 AM',
                            '02.00 - 02.30 PM',
                            '03.00 - 03.30 PM',
                            '04.00 - 04.30 AM',
                        ],
                        renderRightComponent: (
                            <StyledIcon
                                style={{
                                    width: 20,
                                    height: 20,
                                    position: 'absolute',
                                    top: -5,
                                    right: -5,
                                }}
                                source={require('../../../assets/images/time-picker.png')}
                            />
                        ),
                    },
                    {
                        type: 'dropdown',
                        label: 'Time',
                        key: 'time',
                        style: {marginRight: 10, marginleft: 10},
                        options: [
                            '01.30 - 02.00 AM',
                            '02.00 - 02.30 PM',
                            '03.00 - 03.30 PM',
                            '04.00 - 04.30 AM',
                            '01.30 - 02.00 AM',
                            '02.00 - 02.30 PM',
                            '03.00 - 03.30 PM',
                            '04.00 - 04.30 AM',
                        ],
                        renderRightComponent: (
                            <StyledIcon
                                style={{
                                    width: 20,
                                    height: 20,
                                    position: 'absolute',
                                    top: -5,
                                    right: -5,
                                }}
                                source={require('../../../assets/images/time-picker.png')}
                            />
                        ),
                    },
                ],
            },
            {
                parentKey: 'weightSize',
                children: [
                    {
                        type: 'number',
                        label: 'Weight',
                        key: 'weight',
                        style: {marginRight: 10, marginleft: 10},
                    },
                    {
                        type: 'number',
                        label: 'Size',
                        key: 'size',
                        style: {marginRight: 10, marginleft: 10},
                    },
                ],
            },
        ];

        const destinationData = [
            {
                type: 'text',
                label: 'Address',
                key: 'address',
            },
            {
                type: 'textarea',
                label: 'Type your note here...',
                key: 'note',
                renderRightComponent: (
                    <StyledIcon
                        style={{
                            width: 15,
                            height: 19,
                        }}
                        source={require('../../../assets/images/file.png')}
                    />
                )
            },
        ];

        this.setState({
            pickupData,
            destinationData,
        });
    }

    setUrgencyBasedDate = value => {
        const { pickupData } = this.state;
        const dateField = find(pickupData, ['parentKey', 'dateTime'])
            .children[0];

        if (value === 'Now' || value === 'Today') {
            dateField.value = new Date();
        } else if (value === 'Tomorrow') {
            let tomorrow = new Date();
            tomorrow.setDate(new Date().getDate() + 1);
            dateField.value = tomorrow;
        }
    };

    setDateBasedUrgency = value => {
        const { pickupData } = this.state;
        const urgencyField = find(pickupData, ['parentKey', 'urgencyCat'])
            .children[0];

        if (value !== new Date() || value !== new Date().getDate() + 1) {
            urgencyField.value = 'Any Time';
        }
    };

    handleFieldChange = (key, value, parentKey) => {
        const { pickupData } = this.state;
        let field;
        if (!parentKey) {
            field = find(pickupData, ['key', key]);
        } else {
            let children = find(pickupData, ['parentKey', parentKey]).children;
            field = find(children, ['key', key]);
        }
        field.value = value;
        if (key === 'urgency') {
            this.setUrgencyBasedDate(value);
        }

        if (key === 'date') {
            this.setDateBasedUrgency(value);
            // field.value = value;
        }

        this.setState({
            pickupData,
        });
    };

    onSubmitHandler = () => {};

    render() {
        return <FormComponent {...this} {...this.state} {...this.props} />;
    }
}

export default FormComponentContainer;
