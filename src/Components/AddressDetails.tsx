import React from 'react';
import { MenuItem, Select, TextField, Typography } from '@mui/material';

const AddressDetails = (props: any) => {
    const formik = props.formik;
    return (
        <div>
            
        {/* Address detail field  */}
        <div style={{ marginTop: 32 }}>
            <Typography variant="h5" sx={{ textDecoration: 'underline' }} >Address Details</Typography>
            <div style={{ display: 'flex', gap: 50, justifyContent: 'space-between', marginTop: 12 }}>
                {/* address field */}
                <div style={{ display: 'flex' }}>
                    <label htmlFor="address">Address</label>
                    <TextField onChange={formik.handleChange} name='address' sx={{ width: 600, marginLeft: 6 }} hiddenLabel placeholder='Enter address' size="small"
                    />
                </div>
                {/* state field */}
                <div style={{ display: 'flex' }}>
                    <label htmlFor="state">State</label>
                    <div>
                        <Select onChange={formik.handleChange} name='state' sx={{ width: 420, marginLeft: 6 }}
                            // value={state}
                            size="small"
                            // onChange={handleStateChange}
                            displayEmpty>
                            <MenuItem defaultValue="Uttar Pradesh" >
                                Enter State
                            </MenuItem>
                            <MenuItem value='Uttar Pradesh'>Uttar Pradesh</MenuItem>
                            <MenuItem value='Assam'>Assam</MenuItem>
                            <MenuItem value='Dhaka'>Dhaka</MenuItem>
                        </Select>
                    </div>
                </div>
                {/* city field */}
                <div style={{ display: 'flex' }}>
                    <label htmlFor="City">City</label>
                    <div>
                        <Select onChange={formik.handleChange} name='city' sx={{ width: 360, marginLeft: 6 }}
                            size="small"
                            // value={city}
                            // onChange={handleCityChange}
                            displayEmpty>
                            <MenuItem defaultValue="Delhi" >
                                Enter City
                            </MenuItem>
                            <MenuItem value='Delhi'>Delhi</MenuItem>
                            <MenuItem value='Narayanganj'>Narayanganj</MenuItem>
                        </Select>
                    </div>
                </div>
            </div>
        </div>
        {/* country field */}
        <div style={{ display: 'flex', gap: 50, marginTop: 12 }}>
            <div style={{ display: 'flex' }}>
                <label htmlFor="country">country</label>
                <TextField onChange={formik.handleChange} name='country' sx={{ width: 600, marginLeft: 7 }} hiddenLabel placeholder='Enter country' size="small"
                />
            </div>
            {/* pin code field */}
            <div style={{ display: 'flex', marginLeft: 30 }}>
                <label htmlFor="pinCode">Pincode </label>
                <TextField onChange={formik.handleChange} name='pinCode' sx={{ width: 350, marginLeft: 6 }} hiddenLabel placeholder='Enter Pin Code' size="small"
                />
            </div>

        </div>
    </div>
    );
};

export default AddressDetails;