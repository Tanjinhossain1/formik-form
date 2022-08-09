import { MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';

const FormicSecondForm = (setMobile: any,setIdType:any,setGovtId:any,govtId:any) => {
    const setMobils = setMobile.setMobile;
    const setIdTypes = setIdType.setIdType;

    const handleChange = (event: any) => {
        setGovtId(event.target.value as string);
    };
    return (
        <div style={{marginTop:30,display: 'flex', gap: 50, justifyContent: 'space-between' }}>

            <div style={{ display: 'flex' }}>
                <label htmlFor="mobile">Mobile<span style={{ color: 'red' }}>*</span></label>
                <TextField onBlur={(e) => setMobils(e.target.value)} name='mobile' sx={{ width: 400, marginLeft: 5 }} hiddenLabel placeholder='Enter mobile' size="small"
                />
            </div>
            <div style={{ display: 'flex' }}>
                <label htmlFor="mobile">Govt Issue Id <span style={{ color: 'red' }}>*</span></label>

                <Select onBlur={(e) => setIdTypes(e.target.value)}  name='idType' sx={{ width: 250, marginLeft: 6 }}
                                    value={govtId}
                                    onChange={handleChange}
                                    displayEmpty>
                                    <MenuItem value="" >
                                        ID Type
                                    </MenuItem>
                                    <MenuItem value='national'>National</MenuItem>
                                    <MenuItem value='passport'>Passport</MenuItem>
                                </Select>
                <TextField onBlur={(e) => setMobils(e.target.value)} name='mobile' sx={{ width: 400, marginLeft: 5 }} hiddenLabel placeholder='Enter mobile' size="small"
                />
            </div>
        </div>
    );
};

export default FormicSecondForm;