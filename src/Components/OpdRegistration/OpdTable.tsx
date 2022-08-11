import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';

const OpdTable = () => {
    
    return (
        <div>
            <div>
                <Formik
                    initialValues={{ detail: [''], name: ['Consultation Fees (Dr. DK Vatsal)','STITCHING CHAREGES','2D ECHO Dr. SWAPNIL', 'FIRST AID CHARGES'], rate: ['1200.00','100','1000','500'], remark: [''] }}
                    onSubmit={values =>
                        alert(JSON.stringify(values, null, 2))
                    }
                    render={({ values }) => (
                        <Form>
                                <div style={{ display: 'flex', justifyContent: 'end',fontWeight:700,fontSize:19,width:'75%',margin:'auto'  }}>
                                            <p>Grand Total: Rs. 2800.00</p>
                                        </div>
                            <FieldArray
                                name="detail"
                                render={arrayHelpers => (
                                    <div>
                                        <table style={{width:'75%',margin:'auto' }}>
                                        <tr style={{ backgroundColor: '#f27650' }}>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Rate(Rs.)</th>
                                            <th>Qty</th>
                                            <th>Unit</th>
                                            <th>Discount</th>
                                            <th>Total</th>
                                            <th>Remark</th>
                                            <th>Add</th>
                                            <th>Remove</th>
                                        </tr>
                                        {values.name && values.name.length > 0 ? (
                                            values.name.map((detail: any, index: any) => (
                                                <tr key={index}>
                                                    <td> {index + 1}</td>
                                                    <td> <Field style={{ width: 400, backgroundColor: 'transparent', padding: 2, border: '2px solid gray', borderRadius: 5 }} placeholder='Enter Name' name={`name.${index}`} /></td>

                                                    <td>  <Field style={{ width: 100, backgroundColor: 'transparent', padding: 2, border: '2px solid gray', borderRadius: 5 }} placeholder='Enter Rate' name={`rate.${index}`} /></td>
                                                    <td>  1 </td>
                                                    <td>   </td>
                                                    <td>   </td>
                                                    <td>  <Field style={{ width: 100, backgroundColor: 'transparent', padding: 2, border: '0px solid gray', borderRadius: 5 }} placeholder='Enter Rate' name={`rate.${index}`} /></td>

                                                    <td>  <Field style={{ width: 100, backgroundColor: 'transparent', padding: 2, border: '2px solid gray', borderRadius: 5 }} placeholder='Enter Remark' name={`remark.${index}`} /></td>


                                                    <td>
                                                        <button style={{ backgroundColor: 'transparent', border: 0 }}
                                                            type="button"
                                                            onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
                                                        >
                                                            <img width={30} src="https://i.ibb.co/9sddPZN/icons8-add-48.png" alt="" />
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <button
                                                            style={{ backgroundColor: 'transparent', border: 0 }}
                                                            type="button"
                                                            onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                                        >
                                                            <img width={30} src="https://i.ibb.co/wcVqJ49/icons8-remove-48.png" alt="" />
                                                        </button> </td>
                                                </tr>
                                            ))
                                        ) : (

                                            <button type="button" onClick={() => arrayHelpers.push('')}>
                                                {/* show this when user has removed all detail from the list */}
                                                Add a Detail
                                            </button>
                                        )}

<div>
                                            <button style={{ marginTop: 12 }} type="submit">Submit</button>
                                        </div>
                                        
                                    </table>
                                    </div>

                                )}
                                
                            />
                            
                        </Form>
                    )}
                />
            </div>
            
                                        
            {/* <table>
                <tr style={{ backgroundColor: '#f27650' }}>
                    <th></th>
                    <th>Contact</th>
                    <th>Country</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                </tr>
                <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                </tr>
                <tr>
                    <td>Ernst Handel</td>
                    <td>Roland Mendel</td>
                    <td>Austria</td>
                </tr>
                <tr>
                    <td>Island Trading</td>
                    <td>Helen Bennett</td>
                    <td>UK</td>
                </tr>
                <tr>
                    <td>Laughing Bacchus Winecellars</td>
                    <td>Yoshi Tannamuri</td>
                    <td>Canada</td>
                </tr>
                <tr>
                    <td>Magazzini Alimentari Riuniti</td>
                    <td>Giovanni Rovelli</td>
                    <td>Italy</td>
                </tr>
            </table> */}

        </div>
    );
};

export default OpdTable;