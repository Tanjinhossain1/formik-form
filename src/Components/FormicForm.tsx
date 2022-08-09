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
    const [label, setLabels] = useState('');

    const [mobileError, setMobileError] = useState('')


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
        // const label = event.target.labels.value;
        const guardianName = event.target.guardianName.value;
        const email = event.target.email.value;
        const emergencyNumber = event.target.emergencyNumber.value;
        const address = event.target.address.value;
        const country = event.target.country.value;
        const pinCode = event.target.pinCode.value;
        const occupation = event.target.occupation.value;
        const nationality = event.target.nationality.value;
        if (mobile.includes('+91') || mobile.includes('+88')) {

            console.log({ name, date, sex, mobile, idType, govtId, label, guardianName, email, emergencyNumber, address, state, city, country, pinCode, occupation, religion, marital, bloodGroup, nationality })
        } else {
            setMobileError('Give Country Code ')
        }
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
                        {/* Name field  */}
                        <div style={{ display: 'flex' }}>
                            <label htmlFor="name">Name<span style={{ color: 'red' }}>*</span></label>
                            <TextField name='name' sx={{ width: 600, marginLeft: 6 }} hiddenLabel placeholder='Enter Name' size="small" required
                            />
                        </div>

                        {/* Date of birth  field  */}
                        <div style={{ display: 'flex' }}>
                            <label htmlFor="name">Date of Birth or Age<span style={{ color: 'red' }}>*</span></label>
                            <TextField name='date' sx={{ width: 400, marginLeft: 6, }} hiddenLabel id="filled-hidden-label-small" placeholder='DD/MM/YY or Age in Years' size="small" required
                            />
                        </div>

                        {/* sex/gender  field  */}
                        <div style={{ display: 'flex' }}>
                            <label htmlFor="name">Sex<span style={{ color: 'red' }}>*</span></label>
                            <div>
                                <Select name='sex' sx={{ width: 250, marginLeft: 6 }}
                                    value={sex}
                                    size="small"
                                    onChange={handleChange}
                                    displayEmpty>
                                    <MenuItem value="male" >
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
                                <TextField name='mobile' sx={{ width: 400, marginLeft: 6 }} hiddenLabel placeholder='Enter mobile' size="small"
                                />
                                <span style={{color:'red'}} >{mobileError}</span>
                            </div>
                        </div>
                        {/* idType  field  */}
                        <div style={{ display: 'flex' }}>
                            <label htmlFor="mobile">Govt Issue Id </label>

                            <Select name='idType' sx={{ width: 250, marginLeft: 6 }}
                                value={idType}
                                onChange={handleGovtIdChange}
                                size="small"
                                displayEmpty>
                                <MenuItem value="national" >
                                    ID Type
                                </MenuItem>
                                <MenuItem value='national'>National</MenuItem>
                                <MenuItem value='passport'>Passport</MenuItem>
                            </Select>
                            {/* govt id  field  */}
                            <TextField name='govtId' sx={{ width: 520, marginLeft: 6 }} hiddenLabel placeholder='Enter Govt ID' size="small"
                            />
                        </div>
                    </div>

                    {/* Contact detail fields  */}
                    <Typography variant="h5" sx={{ textDecoration: 'underline', marginTop: 5 }} >Contact Detail</Typography>
                    <div style={{ display: 'flex', gap: 50, justifyContent: 'space-between', marginTop: 12 }}>

                        {/* labels  field  */}
                        <div style={{ display: 'flex' }}>
                            <label htmlFor="labels">Guardian Details</label>
                            <Select name='labels' sx={{ width: 200, marginLeft: 6 }}
                                value={label}
                                onChange={(e) => setLabels(e.target.value)}
                                size="small"
                                displayEmpty>
                                <MenuItem value="father" >
                                    Enter Label
                                </MenuItem>
                                <MenuItem value='father'>father</MenuItem>
                                <MenuItem value='mother'>mother</MenuItem>
                            </Select>

                            {/* guardian Name field */}
                            <TextField name='guardianName' sx={{ width: 300, marginLeft: 3 }} hiddenLabel placeholder='Enter Guardian Name' size="small"
                            />
                        </div>

                        {/* email field */}
                        <div style={{ display: 'flex' }}>
                            <label htmlFor="email">Email</label>
                            <TextField type='email' required name='email' sx={{ width: 320, marginLeft: 3, }} hiddenLabel id="filled-hidden-label-small" placeholder='Enter Email' size="small"
                            />
                        </div>
                        emergency Number field
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
                            {/* address field */}
                            <div style={{ display: 'flex' }}>
                                <label htmlFor="address">Address</label>
                                <TextField name='address' sx={{ width: 600, marginLeft: 6 }} hiddenLabel placeholder='Enter address' size="small"
                                />
                            </div>
                            {/* state field */}
                            <div style={{ display: 'flex' }}>
                                <label htmlFor="state">State</label>
                                <div>
                                    <Select name='state' sx={{ width: 420, marginLeft: 6 }}
                                        value={state}
                                        size="small"
                                        onChange={handleStateChange}
                                        displayEmpty>
                                        <MenuItem value="Uttar Pradesh" >
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
                                    <Select name='state' sx={{ width: 360, marginLeft: 6 }}
                                        value={city}
                                        size="small"
                                        onChange={handleCityChange}
                                        displayEmpty>
                                        <MenuItem value="Delhi" >
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
                            <TextField name='country' sx={{ width: 605, marginLeft: 6 }} hiddenLabel placeholder='Enter country' size="small"
                            />
                        </div>
                        {/* pin code field */}
                        <div style={{ display: 'flex', marginLeft: 30 }}>
                            <label htmlFor="pinCode">Pincode </label>
                            <TextField name='pinCode' sx={{ width: 350, marginLeft: 6 }} hiddenLabel placeholder='Enter Pin Code' size="small"
                            />
                        </div>

                    </div>


                    <div style={{ marginTop: 32 }}>
                        <Typography variant="h5" sx={{ textDecoration: 'underline' }} >Others Detail</Typography>
                        <div style={{ display: 'flex', gap: 50, justifyContent: 'space-between', marginTop: 12 }}>
                            {/* occupation field  */}
                            <div style={{ display: 'flex' }}>
                                <label htmlFor="occupation">Occupation </label>
                                <TextField name='occupation' sx={{ width: 300, marginLeft: 6 }} hiddenLabel placeholder='Enter Occupation' size="small"
                                />
                            </div>
                            {/* religion field */}
                            <div style={{ display: 'flex' }}>
                                <label htmlFor="Religion">Religion</label>
                                <div>
                                    <Select name='religion' sx={{ width: 300, marginLeft: 6 }}
                                        value={religion}
                                        size="small"
                                        onChange={(e) => setReligion(e.target.value)}
                                        displayEmpty>
                                        <MenuItem value="Islam" >
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
                                    <Select required name='marital' sx={{ width: 300, marginLeft: 6 }}
                                        value={marital}
                                        size="small"
                                        onChange={(e) => setMarital(e.target.value)}
                                        displayEmpty>
                                        <MenuItem value="Married" >
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
                                    <Select name='bloodGroup' sx={{ width: 200, marginLeft: 6 }}
                                        value={bloodGroup}
                                        size="small"
                                        onChange={(e) => setBloodGroup(e.target.value)}
                                        displayEmpty>
                                        <MenuItem value="A+" >
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
                            <TextField name='nationality' sx={{ width: 300, marginLeft: 6 }} hiddenLabel placeholder='Enter nationality' size="small"
                            />
                        </div>
                    </div>
                    {/* cancel or submit button  */}
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