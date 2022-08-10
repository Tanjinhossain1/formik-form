import { MenuItem, Select, TextField, Typography } from '@mui/material';
import React from 'react';

const ContactDetail = (props: any) => {
    const formik = props.formik;
    return (
        <div>
            {/* Contact detail fields  */}
            <Typography variant="h5" sx={{ textDecoration: 'underline', marginTop: 5 }} >Contact Detail</Typography>
            <div style={{ display: 'flex', gap: 50, justifyContent: 'space-between', marginTop: 12 }}>

                {/* labels  field  */}
                <div style={{ display: 'flex' }}>
                    <label htmlFor="labels">Guardian Details</label>
                   <div style={{display:'flex',flexDirection:'column'}}>
                   <Select
                          error={formik.touched.label && Boolean(formik.errors.label)}
                         
                     onChange={formik.handleChange} name='label' sx={{ width: 200, marginLeft: 6 }}
                        size="small"
                        displayEmpty>
                        <MenuItem defaultValue='father' >
                            Enter Label
                        </MenuItem>
                        <MenuItem value='father'>father</MenuItem>
                        <MenuItem value='mother'>mother</MenuItem>
                    </Select>
                        <label htmlFor='' style={{color:'red',marginLeft:50}} >{formik.touched.label && formik.errors.label}</label>
                   </div>
                    {/* guardian Name field */}
                    <TextField onChange={formik.handleChange} name='guardianName' sx={{ width: 300, marginLeft: 3 }} hiddenLabel placeholder='Enter Guardian Name' size="small"
                    />
                </div>

                {/* email field */}
                <div style={{ display: 'flex' }}>
                    <label htmlFor="email">Email</label>
                    <TextField
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                     onChange={formik.handleChange} type='email'  name='email' sx={{ width: 320, marginLeft: 3, }} hiddenLabel id="filled-hidden-label-small" placeholder='Enter Email' size="small"
                    />
                </div>
                {/* emergency Number field */}
                <div style={{ display: 'flex' }}>
                    <label htmlFor="emergencyNumber">Emergency Contact  Number</label>
                    <TextField onChange={formik.handleChange} name='emergencyNumber' sx={{ width: 300, marginLeft: 4, }} hiddenLabel id="filled-hidden-label-small" placeholder='Enter Emergency Number' size="small"
                    />
                </div>
            </div>



           
        </div>
    );
};

export default ContactDetail;