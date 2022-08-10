import React from 'react';
import { MenuItem, Select, TextField, Typography } from '@mui/material';

const PersonalDetail = (props: any) => {
    const formik = props.formik;

    return (
        <div>
            <Typography variant="h5" sx={{ textDecoration: 'underline', marginTop: 5 }} >Personal Detail</Typography>
            <div style={{ display: 'flex', gap: 50, justifyContent: 'space-between', marginTop: 12 }}>
                {/* Name field  */}
                <div style={{ display: 'flex' }}>
                    <label htmlFor="name">Name<span style={{ color: 'red' }}>*</span></label>
                    <TextField
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                        onChange={formik.handleChange} name="name" sx={{ width: 600, marginLeft: 6 }} hiddenLabel placeholder='Enter Name' size="small"
                    />
                </div>

                {/* age   field  */}
                <div style={{ display: 'flex' }}>
                    <label htmlFor="name">Date of Birth or Age<span style={{ color: 'red' }}>*</span></label>
                    <TextField
                        error={formik.touched.age && Boolean(formik.errors.age)}
                        helperText={formik.touched.age && formik.errors.age}
                        type='number'
                        onChange={formik.handleChange} name='age' sx={{ width: 400, marginLeft: 6, }} hiddenLabel id="filled-hidden-label-small" placeholder='DD/MM/YY or Age in Years' size="small"
                    />
                </div>

                {/* sex/gender  field  */}
                <div style={{ display: 'flex' }}>
                    <label htmlFor="name">Sex<span style={{ color: 'red' }}>*</span></label>
                    <div>
                        <Select onChange={formik.handleChange} name='sex' sx={{ width: 250, marginLeft: 6 }}
                            // value={sex}
                            size="small"
                            // onChange={handleChange}
                            displayEmpty>
                            <MenuItem defaultValue="male" >
                                Enter Sex
                            </MenuItem>
                            <MenuItem value='male'>Male</MenuItem>
                            <MenuItem value='female'>Female</MenuItem>
                        </Select>
                    </div>
                </div>
            </div>

            {/* seacend line  field */}
            <div style={{ marginTop: 30, display: 'flex', gap: 50, justifyContent: 'space-between' }}>
                {/* mobile  field  */}
                <div style={{ display: 'flex' }}>
                    <label htmlFor="mobile">Mobile</label>
                    <div>
                        <TextField

                            error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                            helperText={formik.touched.mobile && formik.errors.mobile}
                            onChange={formik.handleChange} name='mobile' sx={{ width: 400, marginLeft: 6 }} hiddenLabel placeholder='Enter mobile' size="small"
                        />
                    </div>
                </div>


                {/* idType  field  */}
                <div style={{ display: 'flex' }}>
                    <label htmlFor="mobile">Govt Issue Id </label>

                    <Select onChange={formik.handleChange} name='idType' sx={{ width: 250, marginLeft: 6 }}
                        // value={idType}
                        // onChange={handleGovtIdChange}
                        size='small'
                        displayEmpty>
                        <MenuItem defaultValue="national" >
                            ID Type
                        </MenuItem>
                        <MenuItem value='national'>National</MenuItem>
                        <MenuItem value='passport'>Passport</MenuItem>
                    </Select>
                    {/* govt id  field  */}
                    <TextField onChange={formik.handleChange} name='govtId' sx={{ width: 520, marginLeft: 6 }} hiddenLabel placeholder='Enter Govt ID' size="small"
                    />
                </div>
            </div>
        </div>
    );
};

export default PersonalDetail;