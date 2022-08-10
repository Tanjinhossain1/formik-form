import { useFormik } from 'formik';
import React, { useState } from 'react';
import AddressDetails from './AddressDetails';
import ContactDetail from './ContactDetail';
import OthersDetail from './OthersDetail';
import PersonalDetail from './PersonalDetail';
import * as yup from 'yup';



let schema = yup.object().shape({
    name: yup.string().required('Name is Required'),

    age: yup.number().required('Age is Required').positive('Type Here Positive Number ').integer("Don't Allow Integer age"),

    mobile: yup.string()
    .min(10,'minimum 10 digit')
    .max(14,'maximum 14 digit')
    .matches(/(\+88|88|(\+91|91)){1}?-?[0-9]\d{8}/g ,'Only BD or Indian Number is valid with country code')
    .required('mobile is Required'),

    email: yup.string().email('Enter a valid email').required('Email is Required'),

    label:yup.string().when('guardianName', (guardianName, field) =>
    guardianName ? field.required() : field
   ),
});

const FormicForm = () => {
  
    const formik = useFormik({
        initialValues: {
            name: '', age: '', sex: '', mobile: '', idType: '', govtId: '', label: '', guardianName: '', email: '', emergencyNumber: '', address: '', state: '', city: '', country: '', pinCode: '', occupation: '', religion: '', marital: '', bloodGroup: '', nationality: ''
        },
        validationSchema: schema,
        onSubmit: (values) => {
            // if (values.mobile.includes('+88') || values.mobile.includes('+91')) {
            //     alert('its valid')
            // } else {
            //     alert('Give Country Code and allow only India Or Bangladesh')
            // }
        }
    })
    return (
        <div style={{
            margin: 50
        }} >
            <div>
                <form onSubmit={formik.handleSubmit} >


                    {/* Personal Detail fields  */}
                    <PersonalDetail  formik={formik} />

                    {/* Contact detail fields  */}
                    <ContactDetail formik={formik} />

                    {/* Address Detail fields  */}
                    <AddressDetails formik={formik} />

                    {/* Others Detail Field  */}
                    <OthersDetail formik={formik} />

                    {/* cancel or submit button  */}
                    <div className='buttons-container'>
                        <button type='button' className='cancelButton' >CANCEL <br /> <span>(ESC)</span></button>
                        <button type="submit" className='submitButton' value='SUBMIT'>SUBMIT <br /> <span>(% S)</span></button>
                    </div>
                </form>
            </div>
        </div >
    );
};

export default FormicForm;