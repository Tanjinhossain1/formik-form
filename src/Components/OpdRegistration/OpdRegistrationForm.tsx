import React from 'react';
import { MenuItem, Select, TextField } from '@mui/material';
import OpdTable from './OpdTable';
import { useFormik } from 'formik';
import * as yup from 'yup';

let schema = yup.object().shape({
    consultation: yup.string().required('Age is Required'),
    date: yup.string().required('date is Required'),

});

const OpdRegistrationForm = () => {
    interface FormDetail {
        date:string;
        consultation:string;
        refer:string;
        
     }
    const initialValues:FormDetail = {
        date:'',consultation:'',refer:''
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: schema,
        onSubmit: (values) => {
        }
    })
    return (
        <div className='' style={{ backgroundColor: '#f5f7f7', padding: 40,height:1000 }}>

            <div style={{ width: '75%', margin: 'auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <div>
                        <span style={{ fontSize: 24, backgroundColor: 'white', paddingLeft: 20, paddingRight: 20, borderRadius: 12 }} >SEARCH PATIENT</span>
                    </div>
                    <div>
                        <p style={{ textDecoration: 'underline', fontWeight: 600, fontSize: 20 }}>OPD Registration Detail</p>

                        <form>

                            {/* date field  */}
                            <div style={{ display: 'flex' }}>
                                <label htmlFor="date">Date<span style={{ color: 'red' }}>*</span> </label>
                                <TextField type='date' name='date' sx={{ width: 300, marginLeft: 11 }} hiddenLabel placeholder='Enter Occupation' size="small"
                                />
                            </div>

                            {/* consultant field  */}
                            <div style={{ display: 'flex', marginTop: 12 }}>

                                <label htmlFor="consultant">Consultant</label>
                                <Select name='consultant' sx={{ width: 400, marginLeft: 6 }}
                                    size="small"
                                    displayEmpty>
                                    <MenuItem defaultValue="dk vatsal" >
                                        DK VATSAL
                                    </MenuItem>
                                    <MenuItem value='dk okal'>DK OKAL</MenuItem>
                                </Select>
                            </div>

                            {/* refer by field  */}
                            <div style={{ display: 'flex', marginTop: 12 }}>
                                <label htmlFor="referred">Referred </label>
                                <TextField name='referred' sx={{ width: 501, marginLeft: 8 }} hiddenLabel placeholder='Enter Occupation' size="small"
                                />
                            </div>
                        </form>

                    </div>
                </div>
            </div>
            {/* table used  */}
            <OpdTable />
        </div>
    );
};

export default OpdRegistrationForm;