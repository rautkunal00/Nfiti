import React, { Component } from 'react';
import Signup from './';
import find from 'lodash/find';

import { StyledIcon } from './styles';

class PartnerContainer extends Component {
    state = {
        basicData: [],
        documentData: [],
        bankData: [],
    };

    componentDidMount() {
        const basicData = [
            {
                type: 'text',
                label: 'Name individual / Firm',
                key: 'name',
            },
            {
                type: 'text',
                label: 'Address',
                key: 'address',
            },
            {
                parentKey: 'emailCat',
                children: [
                    {
                        type: 'text',
                        label: 'Enter your email',
                        key: 'email',
                    },
                    {
                        type: 'number',
                        label: 'Contact No.',
                        key: 'phnumber',
                    },
                ],
            },
            {
                parentKey: 'parCat',
                children: [
                    {
                        type: 'dropdown',
                        label: 'Category',
                        key: 'category',
                        options: ['Transport', 'Courier'],
                        style: {
                            marginRight: 10,
                        },
                        renderRightComponent: (
                            <StyledIcon
                                source={require('../../../assets/images/dropdown.png')}
                            />
                        ),
                    },
                    {
                        type: 'dropdown',
                        label: 'Sub Category',
                        key: 'subcategory',
                        options: [
                            'Pickup truck',
                            'Electrical Goods',
                            'Furniture',
                            'Machine',
                        ],
                        renderRightComponent: (
                            <StyledIcon
                                source={require('../../../assets/images/dropdown.png')}
                            />
                        ),
                    },
                ],
            },
            {
                parentKey: 'experienceCat',
                children: [
                    {
                        type: 'text',
                        label: 'Experience',
                        key: 'exp',
                    },
                    {
                        type: 'text',
                        label: 'USP/Speciality',
                        key: 'usp',
                    },
                ],
            },
            
        ];

        const documentData = [
            {
                parentKey: 'doc1',
                children: [
                    {
                        type: 'chkbox',
                        tick: 'false',
                        label: 'AADHAR CARD',
                        key: 'aadhar',
                    },
                    {
                        type: 'chkbox',
                        tick: 'false',
                        label: 'NOC',
                        key: 'noc',
                    },
                ],
            },
            {
                parentKey: 'doc2',
                children: [
                    {
                        type: 'chkbox',
                        tick: 'false',
                        label: 'DRIVING LICENCE',
                        key: 'drivlic',
                    },
                    {
                        type: 'chkbox',
                        tick: 'false',
                        label: 'PAN CARD',
                        key: 'pan',
                    },
                ],
            },
            {
                parentKey: 'doc3',
                children: [
                    {
                        type: 'chkbox',
                        tick: 'false',
                        label: 'EXPERIENCE CERTIFICATE',
                        key: 'expcert',
                    },
                    {
                        type: 'chkbox',
                        tick: 'false',
                        label: 'POLICE VERIFICATION INDIVIDUAL',
                        key: 'police',
                    },
                ],
            },
            {
                type: 'chkbox',
                tick: 'false',
                label: 'GST CERTIFICATE',
                key: 'gst',
            },
            {
                parentKey: 'doc4',
                children: [
                    {
                        type: 'chkbox',
                        tick: 'false',
                        label: 'GUMASTA LICENCE',
                        key: 'gumastalic',
                    },
                    {
                        type: 'chkbox',
                        tick: 'false',
                        label: 'RC BOOK',
                        key: 'rc',
                    },
                ],
            },
            {
                type: 'chkbox',
                tick: 'false',
                label: 'MSME/OTHER CERTIFICATE',
                key: 'msmeother',
            },
            {
                type: 'chkbox',
                tick: 'false',
                label: 'MACHINE LICENCE',
                key: 'machinelic',
            },
            {
                type: 'text',
                label: 'Special request',
                key: 'request',
            },
        ];
        const bankData = [
            {
                parentKey: 'bankCat',
                children: [
                    {
                        type: 'text',
                        label: 'Bank account no.',
                        key: 'accno',
                    },
                    {
                        type: 'text',
                        label: 'IFSC Code',
                        key: 'ifsc',
                    },
                ],
            },
            {
                type: 'text',
                label: 'Bank name',
                key: 'bname',
            },
        ];

        this.setState({
            basicData,
            documentData,
            bankData,
        });
    }

    // setUrgencyBasedDate = value => {
    //     const { pickupData } = this.state;
    //     const dateField = find(pickupData, ['parentKey', 'dateTime'])
    //         .children[0];

    //     if (value === 'Now' || value === 'Today') {
    //         dateField.value = new Date();
    //     } else if (value === 'Tomorrow') {
    //         let tomorrow = new Date();
    //         tomorrow.setDate(new Date().getDate() + 1);
    //         dateField.value = tomorrow;
    //     }
    // };

    // setDateBasedUrgency = value => {
    //     const { pickupData } = this.state;
    //     const urgencyField = find(pickupData, ['parentKey', 'urgencyCat'])
    //         .children[0];

    //     if (value !== new Date() || value !== new Date().getDate() + 1) {
    //         urgencyField.value = 'Any Time';
    //     }
    // };

    // handleFieldChange = (key, value, parentKey) => {
    //     const { pickupData } = this.state;
    //     let field;
    //     if (!parentKey) {
    //         field = find(pickupData, ['key', key]);
    //     } else {
    //         let children = find(pickupData, ['parentKey', parentKey]).children;
    //         field = find(children, ['key', key]);
    //     }
    //     field.value = value;
    //     if (key === 'urgency') {
    //         this.setUrgencyBasedDate(value);
    //     }

    //     if (key === 'date') {
    //         this.setDateBasedUrgency(value);
    //         // field.value = value;
    //     }

    //     this.setState({
    //         pickupData,
    //     });
    // };

    onSubmitHandler = () => {};

    render() {
        return <Signup {...this} {...this.state} {...this.props} />;
    }
}

export default PartnerContainer;
