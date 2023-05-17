import React from 'react'
import './Home.css';
import {Form , Button,Row,Col} from 'react-bootstrap'
import Hometable from '../Components/Hometable/Hometable'
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate=useNavigate()
  const adduser=()=>{
    //navigate to register paagge
    navigate('/register')
  }
  return (
    <div>
      <Row>
        <Col className='p-3'>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Col>
        <Col></Col>
        <Col className='p-3'>
        <Button onClick={adduser}><i className='fa-solid fa-plus'></i> Add User</Button>
        </Col>
      </Row>
      <div>
      <Hometable/>
      </div>
       
    </div>
  )
}

export default Home