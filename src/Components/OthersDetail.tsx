import React from 'react';
import { MenuItem, Select, TextField, Typography } from '@mui/material';

const OthersDetail = (props:any) => {
    const formik = props.formik;
    return (
        <div>
             <div style={{ marginTop: 32 }}>
                <Typography variant="h5" sx={{ textDecoration: 'underline' }} >Others Detail</Typography>
                <div style={{ display: 'flex', gap: 50, justifyContent: 'space-between', marginTop: 12 }}>
                    {/* occupation field  */}
                    <div style={{ display: 'flex' }}>
                        <label htmlFor="occupation">Occupation </label>
                        <TextField onChange={formik.handleChange} name='occupation' sx={{ width: 300, marginLeft: 6 }} hiddenLabel placeholder='Enter Occupation' size="small"
                        />
                    </div>
                    {/* religion field */}
                    <div style={{ display: 'flex' }}>
                        <label htmlFor="Religion">Religion</label>
                        <div>
                            <Select onChange={formik.handleChange} name='religion' sx={{ width: 300, marginLeft: 6 }}
                                // value={religion}
                                size="small"
                                // onChange={(e) => setReligion(e.target.value)}
                                displayEmpty>
                                <MenuItem defaultValue="Islam" >
                                    Enter Religion
                                </MenuItem>
                                <MenuItem value='Islam'>Islam</MenuItem>
                                <MenuItem value='Hindu'>Hindu</MenuItem>
                            </Select>
                        </div>
                    </div>

                    {/* marital field */}
                    <div style={{ display: 'flex' }}>
                        <label htmlFor="marital">Marital Status</label>
                        <div>
                            <Select onChange={formik.handleChange}  name='marital' sx={{ width: 300, marginLeft: 6 }}
                                // value={marital}
                                size="small"
                                // onChange={(e) => setMarital(e.target.value)}
                                displayEmpty>
                                <MenuItem defaultValue="Married" >
                                    Enter Marital
                                </MenuItem>
                                <MenuItem value='Married'>Married</MenuItem>
                                <MenuItem value='UnMarried'>UnMarried</MenuItem>
                            </Select>
                        </div>
                    </div>

                    {/* blood group field */}
                    <div style={{ display: 'flex' }}>
                        <label htmlFor="bloodGroup">Blood Group</label>
                        <div>
                            <Select onChange={formik.handleChange} name='bloodGroup' sx={{ width: 200, marginLeft: 6 }}
                                // value={bloodGroup}
                                size="small"
                                // onChange={(e) => setBloodGroup(e.target.value)}
                                displayEmpty>
                                <MenuItem defaultValue="A+" >
                                    Group
                                </MenuItem>
                                <MenuItem value='A+'>A+</MenuItem>
                                <MenuItem value='A-'>A-</MenuItem>
                                <MenuItem value='B+'>B+</MenuItem>
                                <MenuItem value='AB+'>AB+</MenuItem>
                            </Select>
                        </div>
                    </div>
                </div>
            </div>
            {/* nationality field */}
            <div style={{ marginTop: 20 }}>
                <div style={{ display: 'flex' }}>
                    <label htmlFor="nationality">Nationality </label>
                    <TextField onChange={formik.handleChange} name='nationality' sx={{ width: 300, marginLeft: 6 }} hiddenLabel placeholder='Enter nationality' size="small"
                    />
                </div>
            </div>
        </div>
    );
};

export default OthersDetail;