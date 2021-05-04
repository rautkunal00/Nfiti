import React, { Component } from 'react';
import Transport from './';
import find from 'lodash/find';
import flatten from 'lodash/flatten';
import findIndex from 'lodash/findIndex';
import { Image } from 'react-native';

class TransportContainer extends Component {
    state = {
        pickupData: [],
        destinationData: [],
    };

    componentDidMount() {
        const pickupData = [
            {
                type: 'text',
                label: 'Name',
                key: 'name',
            },
            {
                type: 'text',
                label: 'Address',
                key: 'address',
            },
            {
                parentKey: 'urgencyCat',
                children: [
                    {
                        type: 'dropdown',
                        label: 'Select Urgency',
                        key: 'urgency',
                        options: ['Any Time', 'Now', 'Today', 'Tomorrow'],
                    },
                    {
                        type: 'dropdown',
                        label: 'Select Category',
                        key: 'category',
                        options: [
                            'Boxes',
                            'Electrical Goods',
                            'Furniture',
                            'Machine',
                        ],
                    },
                ],
            },
            {
                parentKey: 'dateTime',
                children: [
                    {
                        type: 'date',
                        label: 'Date',
                        key: 'date',
                        // renderRightComponent: 'cal',
                    },
                    {
                        type: 'time',
                        label: 'Time',
                        key: 'time',
                        // renderRightComponent: 'time',
                    },
                ],
            },
            {
                type: 'dropdown',
                label: 'Select Vehicle Type',
                key: 'vehicle',
                options: ['Ace', 'Ape', 'Container truck', 'Truck'],
            },
            {
                parentKey: 'weightSize',
                children: [
                    {
                        type: 'number',
                        label: 'Weight',
                        key: 'weight',
                    },
                    {
                        type: 'number',
                        label: 'Size',
                        key: 'size',
                    },
                ],
            },
            {
                type: 'text',
                label: 'Description/Requirement...',
                key: 'description',
            },
            {
                type: 'number',
                label: 'Expected Rate',
                key: 'rate',
            },
        ];

        const destinationData = [
            {
                type: 'text',
                label: 'Destination',
                key: 'destination',
            },
            {
                type: 'text',
                label: 'Special request',
                key: 'request',
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
            console.log(tomorrow, 'tomorrow');
            dateField.value = tomorrow;
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

        this.setState({
            pickupData,
        });
    };

    onSubmitHandler = () => {
        const a = 10;
        console.log(this.state.pickupData);
    };

    render() {
        return <Transport {...this} {...this.state} {...this.props} />;
    }
}

export default TransportContainer;
