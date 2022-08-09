// import { Button } from '@mui/material';
import { FormControl, FormHelperText, Grid, Input, InputLabel, ListItem, MenuItem, Select, TextField, Typography } from '@mui/material';
import { fontSize } from '@mui/system';
import React, { useState } from 'react';

const FormicForm = () => {
    const [age, setAge] = useState('');
    const handleChange = (event: any) => {
        setAge(event.target.value as string);
    };
    return (
        <div style={{
            margin: 50
        }} >
            <div>
                <Typography variant="h5" sx={{ textDecoration: 'underline' }} >Personal Detail</Typography>

                <form style={{
                    marginTop: 20
                }} >

                    <div style={{ display: 'flex', gap: 50, justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex' }}>
                            <label htmlFor="name">Name<span style={{ color: 'red' }}>*</span></label>
                            <TextField sx={{ width: 600, marginLeft: 6 }} hiddenLabel  placeholder='Enter Name' size="small"
                            />
                        </div>
                        <div style={{ display: 'flex' }}>
                            <label htmlFor="name">Date of Birth or Age<span style={{ color: 'red' }}>*</span></label>
                            <TextField sx={{ width: 400, marginLeft: 6, }} hiddenLabel id="filled-hidden-label-small" placeholder='DD/MM/YY or Age in Years' size="small"
                            />
                        </div>
                        <div style={{ display: 'flex' }}>
                            <label htmlFor="name">Sex<span style={{ color: 'red' }}>*</span></label>
                            <div>
                                <Select  sx={{ width: 250, marginLeft: 6 }}
                                    value={age}
                                    onChange={handleChange}
                                    displayEmpty
                                >
                                    <MenuItem value="" >
                                        Enter Sex
                                    </MenuItem>
                                    <MenuItem value='male'>Male</MenuItem>
                                    <MenuItem value='female'>Female</MenuItem>
                                </Select>
                            </div>

                        </div>

                    </div>


                </form>




            </div>
        </div>
    );
};

export default FormicForm;