// import { Button } from '@mui/material';
import { MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const FormicForm = () => {

    const [idType, setIdType] = useState('');
    const [sex, setSex] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [religion, setReligion] = useState('');
    const [marital, setMarital] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');


    const handleGovtIdChange = (event: any) => {
        setIdType(event.target.value as string);
    };
    const handleCityChange = (event: any) => {
        setCity(event.target.value as string);
    };
    const handleStateChange = (event: any) => {
        setState(event.target.value as string);
    };
    const handleChange = (event: any) => {
        setSex(event.target.value as string);
    };

    const onSubmitDetail = (event: any) => {
        event.preventDefault()
        const name = event.target.name.value;
        const date = event.target.date.value;
        const sex = event.target.sex.value;
        const mobile = event.target.mobile.value;
        const idType = event.target.idType.value;
        const govtId = event.target.govtId.value;
        const label = event.target.labels.value;
        const guardianName = event.target.guardianName.value;
        const email = event.target.email.value;
        const emergencyNumber = event.target.emergencyNumber.value;
        const address = event.target.address.value;
        const country = event.target.country.value;
        const pinCode = event.target.pinCode.value;
        const occupation = event.target.occupation.value;
        const nationality = event.target.nationality.value;
        console.log({ name, date, sex, mobile, idType, govtId, label, guardianName, email, emergencyNumber, address, state, city, country, pinCode, occupation, religion, marital, bloodGroup,nationality })
    }
    return (
        <div style={{
            margin: 50
        }} >
            <div>
                <Typography variant="h5" sx={{ textDecoration: 'underline' }} >Personal Detail</Typography>

                <form onSubmit={onSubmitDetail} style={{
                    marginTop: 20
                }} >

                    <div style={{ display: 'flex', gap: 50, justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex' }}>
                            <label htmlFor="name">Name<span style={{ color: 'red' }}>*</span></label>
                            <TextField name='name' sx={{ width: 600, marginLeft: 6 }} hiddenLabel placeholder='Enter Name' size="small"
                            />
                        </div>
                        <div style={{ display: 'flex' }}>
                            <label htmlFor="name">Date of Birth or Age<span style={{ color: 'red' }}>*</span></label>
                            <TextField name='date' sx={{ width: 400, marginLeft: 6, }} hiddenLabel id="filled-hidden-label-small" placeholder='DD/MM/YY or Age in Years' size="small"
                            />
                        </div>
                        <div style={{ display: 'flex' }}>
                            <label htmlFor="name">Sex<span style={{ color: 'red' }}>*</span></label>
                            <div>
                                <Select name='sex' sx={{ width: 250, marginLeft: 6 }}
                                    value={sex}
                                    size="small"
                                    onChange={handleChange}
                                    displayEmpty>
                                    <MenuItem value="" >
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

                        <div style={{ display: 'flex' }}>
                            <label htmlFor="mobile">Mobile</label>
                            <TextField name='mobile' sx={{ width: 400, marginLeft: 6 }} hiddenLabel placeholder='Enter mobile' size="small"
                            />
                        </div>
                        <div style={{ display: 'flex' }}>
                            <label htmlFor="mobile">Govt Issue Id </label>

                            <Select name='idType' sx={{ width: 250, marginLeft: 6 }}
                                value={idType}
                                onChange={handleGovtIdChange}
                                size="small"
                                displayEmpty>
                                <MenuItem value="" >
                                    ID Type
                                </MenuItem>
                                <MenuItem value='national'>National</MenuItem>
                                <MenuItem value='passport'>Passport</MenuItem>
                            </Select>
                            <TextField name='govtId' sx={{ width: 520, marginLeft: 6 }} hiddenLabel placeholder='Enter Govt ID' size="small"
                            />
                        </div>
                    </div>

                    {/* Contact detail fields  */}
                    <Typography variant="h5" sx={{ textDecoration: 'underline', marginTop: 5 }} >Contact Detail</Typography>
                    <div style={{ display: 'flex', gap: 50, justifyContent: 'space-between', marginTop: 12 }}>
                        <div style={{ display: 'flex' }}>
                            <label htmlFor="labels">Guardian Details</label>
                            <Select name='labels' sx={{ width: 200, marginLeft: 6 }}
                                value={idType}
                                onChange={handleGovtIdChange}
                                size="small"
                                displayEmpty>
                                <MenuItem value="" >
                                    Enter Label
                                </MenuItem>
                                <MenuItem value='national'>father</MenuItem>
                                <MenuItem value='passport'>mother</MenuItem>
                            </Select>
                            <TextField name='guardianName' sx={{ width: 300, marginLeft: 3 }} hiddenLabel placeholder='Enter Guardian Name' size="small"
                            />
                        </div>
                        <div style={{ display: 'flex' }}>
                            <label htmlFor="email">Email</label>
                            <TextField name='email' sx={{ width: 320, marginLeft: 3, }} hiddenLabel id="filled-hidden-label-small" placeholder='Enter Email' size="small"
                            />
                        </div>
                        <div style={{ display: 'flex' }}>
                            <label htmlFor="emergencyNumber">Emergency Contact  Number</label>
                            <TextField name='emergencyNumber' sx={{ width: 300, marginLeft: 4, }} hiddenLabel id="filled-hidden-label-small" placeholder='Enter Emergency Number' size="small"
                            />
                        </div>
                    </div>

                    {/* Address detail field  */}
                    <div style={{ marginTop: 32 }}>
                        <Typography variant="h5" sx={{ textDecoration: 'underline' }} >Personal Detail</Typography>
                        <div style={{ display: 'flex', gap: 50, justifyContent: 'space-between', marginTop: 12 }}>

                            <div style={{ display: 'flex' }}>
                                <label htmlFor="address">Address</label>
                                <TextField name='address' sx={{ width: 600, marginLeft: 6 }} hiddenLabel placeholder='Enter address' size="small"
                                />
                            </div>

                            <div style={{ display: 'flex' }}>
                                <label htmlFor="state">State</label>
                                <div>
                                    <Select name='state' sx={{ width: 420, marginLeft: 6 }}
                                        value={state}
                                        size="small"
                                        onChange={handleStateChange}
                                        displayEmpty>
                                        <MenuItem value="" >
                                            Enter State
                                        </MenuItem>
                                        <MenuItem value='male'>Uttar Pradesh</MenuItem>
                                        <MenuItem value='male'>Assam</MenuItem>
                                        <MenuItem value='female'>Dhaka</MenuItem>
                                    </Select>
                                </div>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <label htmlFor="City">City</label>
                                <div>
                                    <Select name='state' sx={{ width: 360, marginLeft: 6 }}
                                        value={city}
                                        size="small"
                                        onChange={handleCityChange}
                                        displayEmpty>
                                        <MenuItem value="" >
                                            Enter City
                                        </MenuItem>
                                        <MenuItem value='male'>Delhi</MenuItem>
                                        <MenuItem value='female'>Narayanganj</MenuItem>
                                    </Select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: 50, marginTop: 12 }}>
                        <div style={{ display: 'flex' }}>
                            <label htmlFor="country">country</label>
                            <TextField name='country' sx={{ width: 605, marginLeft: 6 }} hiddenLabel placeholder='Enter country' size="small"
                            />
                        </div>
                        <div style={{ display: 'flex',marginLeft: 30 }}>
                            <label  htmlFor="pinCode">Pincode </label>
                            <TextField name='pinCode' sx={{ width: 350, marginLeft: 6 }} hiddenLabel placeholder='Enter Pin Code' size="small"
                            />
                        </div>

                    </div>


                    <div style={{ marginTop: 32 }}>
                        <Typography variant="h5" sx={{ textDecoration: 'underline' }} >Others Detail</Typography>
                        <div style={{ display: 'flex', gap: 50, justifyContent: 'space-between', marginTop: 12 }}>
                            <div style={{ display: 'flex' }}>
                                <label htmlFor="occupation">Occupation </label>
                                <TextField name='occupation' sx={{ width: 300, marginLeft: 6 }} hiddenLabel placeholder='Enter Occupation' size="small"
                                />
                            </div>

                            <div style={{ display: 'flex' }}>
                                <label htmlFor="Religion">Religion</label>
                                <div>
                                    <Select name='religion' sx={{ width: 300, marginLeft: 6 }}
                                        value={religion}
                                        size="small"
                                        onChange={(e) => setReligion(e.target.value)}
                                        displayEmpty>
                                        <MenuItem value="" >
                                            Enter Religion
                                        </MenuItem>
                                        <MenuItem value='male'>Islam</MenuItem>
                                        <MenuItem value='female'>Hindu</MenuItem>
                                    </Select>
                                </div>
                            </div>

                            <div style={{ display: 'flex' }}>
                                <label htmlFor="marital">Marital Status</label>
                                <div>
                                    <Select name='marital' sx={{ width: 300, marginLeft: 6 }}
                                        value={marital}
                                        size="small"
                                        onChange={(e) => setMarital(e.target.value)}
                                        displayEmpty>
                                        <MenuItem value="" >
                                            Enter Marital
                                        </MenuItem>
                                        <MenuItem value='Married'>Married</MenuItem>
                                        <MenuItem value='UnMarried'>UnMarried</MenuItem>
                                    </Select>
                                </div>
                            </div>

                            <div style={{ display: 'flex' }}>
                                <label htmlFor="bloodGroup">Blood Group</label>
                                <div>
                                    <Select name='bloodGroup' sx={{ width: 200, marginLeft: 6 }}
                                        value={bloodGroup}
                                        size="small"
                                        onChange={(e) => setBloodGroup(e.target.value)}
                                        displayEmpty>
                                        <MenuItem value="" >
                                            Group
                                        </MenuItem>
                                        <MenuItem value='male'>A+</MenuItem>
                                        <MenuItem value='female'>A-</MenuItem>
                                        <MenuItem value='female'>B+</MenuItem>
                                        <MenuItem value='female'>AB+</MenuItem>
                                    </Select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: 20 }}>
                        <div style={{ display: 'flex' }}>
                            <label htmlFor="nationality">Nationality </label>
                            <TextField name='nationality' sx={{ width: 300, marginLeft: 6 }} hiddenLabel placeholder='Enter nationality' size="small"
                            />
                        </div>
                    </div>
                    <div className='buttons-container'>
                        <button type='button' className='cancelButton' >CANCEL <br /> <span>(ESC)</span></button>
                        <button type="submit" className='submitButton' value='SUBMIT'>SUBMIT <br /> <span>(% S)</span></button>

                    </div>
                    {/* <input type="submit" value="submit" /> */}
                </form>




            </div>
        </div>
    );
};

export default FormicForm;