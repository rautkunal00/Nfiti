import React from 'react'
import {Formik} from 'formik'
const AppFormContainer = ({initialValues,validationSchema,onSubmit,children}) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {()=>(
                <>
                    {children}
                </>
            )}
        </Formik>
    )
}

export default AppFormContainer
