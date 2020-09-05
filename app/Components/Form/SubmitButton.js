import React from 'react'
import { View, Text } from 'react-native';
import {useFormikContext} from 'formik';
import AppButton from './AppButton'
const SubmitButton = ({title}) => {
    const {handleSubmit} = useFormikContext()
    // const submit = (handleSubmit) =>{
    //     handleSubmit()
    // }
    return (
        <AppButton btnTitle={title} onPress={handleSubmit}/>
    )
}

export default SubmitButton
