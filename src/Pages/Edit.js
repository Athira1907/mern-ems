import React from 'react'
import {Form , Button,Row,Col,Card} from 'react-bootstrap'

import Hometable from '../Components/Hometable/Hometable'
import { useNavigate } from 'react-router-dom';

import'./Edit.css';
import Select from 'react-select';
function Edit() {
  const option=[
    {value:'Active',label:'Active'},
    {value:'InActive',label:'InActive'}
  ]
  return (
  
    
 
    <>
    <h3 className='text-center-primary'>Update Employee Details</h3>
    <Card className='shadow p-5'>
      <div className='center'>
        <img width={'100px'} height={'100px'}  className='center border p-1 rounded-circle' src="https://th.bing.com/th/id/R.7d1eeb9a0b22fbbb9c99dbfbdad26915?rik=jIEtId79tVIW1w&riu=http%3a%2f%2ffiles.softicons.com%2fdownload%2fsocial-media-icons%2ffree-social-media-icons-by-aha-soft%2fpng%2f512x512%2fUser.png&ehk=lIKGnne%2biYXsJOk4mL2x9UH6WuAyrpFtmUPfXaqHm2s%3d&risl=&pid=ImgRaw&r=0" alt="" />
      </div>
<Form className='p-5'>
<Row>
<Form.Group className="mb-3 col-lg-6" controlId="formBasicfname">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" name='fname' placeholder="First Name" />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasiclname">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" name='lname' placeholder="Last Name" />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" name='mail' placeholder="Email Address" />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicmobile">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="text" name='mobile' placeholder="Mobile" />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicgender">
        <Form.Label>Select Gender</Form.Label>
        <Form.Check
            type='radio'
            label={'Male'}
            name="gender"
            value="male"
          />
         <Form.Check
            type='radio'
            label={'Female'}
            name="gender"
            vaalue="female"
          />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicstatus">
        <Form.Label>Select Employee Status</Form.Label>
       <Select options={option}></Select>
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicpicture">
        <Form.Label>Choose Profile Picture</Form.Label>
        <Form.Control type="file" name='user_profile'  />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasiclocation">
        <Form.Label>Enter Employee Location</Form.Label>
        <Form.Control type="text" name='location' placeholder='Enter Employee Location' />
      </Form.Group>
      <Button className='mt-3' variant='primary'>Submit</Button>
</Row>   
</Form>
    </Card>
    </>
  
    
  )
}

export default Edit