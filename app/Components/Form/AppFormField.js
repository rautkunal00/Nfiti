import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {useFormikContext} from 'formik'
import AppText from './AppText';
import Error from './Error'
const AppFormField = ({name,inputContainerStyle,...otherProps}) => {
    const {setFieldTouched,handleChange,errors,touched} = useFormikContext()
    return (
        <>
            <AppText
                onBlur={()=>setFieldTouched(name)}
                onChangeText={handleChange(name)}
                signUpStyle={inputContainerStyle}
                inputFieldStyle
                {...otherProps}
            />
            <Error style={{color:'red'}} error={errors[name]} visible={touched[name]}/>
        </>
    )
}

export default AppFormField

const styles = StyleSheet.create({})
