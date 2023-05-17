import React from 'react'
import {Table,Row,Col,Card,Dropdown,ButtonGroup,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function Hometable() {
  return (
    <>
    <div className="container mt-5">
      <Row>
        <Col className='col'>
        <Card className='shadow'>
        <Table className='Table p-4 align-items-center' responsive="sm">

  
    <thead className='thead-dark'>
      <tr className='table-dark'>
      <th>ID</th>
      <th>FullName</th>
      <th>Email</th>
      <th>Gender</th>
      <th>Status</th>
      <th>Profile</th>
      <th>Action</th>
      </tr>
      
    </thead>
<tbody>
  <tr>
    <td>1</td>
    <td>Max Miller</td>
    <td>max@gmail.com</td>
    <td>M</td>
    <td>
<select name="" id="drop_down" style={{backgroundColor:'purple',color:'white'}}>
  <option value="" selected>Active</option>
  <option value="">InActive</option>
</select>

    </td>
    <td><img src="" alt="user img" /></td>
    <td>
    <Dropdown as={ButtonGroup}>
      <Button variant="light"><i class="fa-solid fa-ellipsis-vertical"></i></Button>

      <Dropdown.Toggle split variant="light" id="dropdown-split-basic" />
{/* split variant="light" id="dropdown-split-basic" */}
      <Dropdown.Menu>
        <Dropdown.Item >
          <Link to={'/profile/1'} className='text-decoration-none'>
          <i className='fa-solid fa-eye text-success'></i><span>View</span> 
          </Link>
          </Dropdown.Item>
        <Dropdown.Item >
        <Link to={'/edit/1'} className='text-decoration-none'>
          <i className='fa-solid fa-pen text-primary'></i><span>Edit</span> 
          </Link>

        </Dropdown.Item>
        <Dropdown.Item >
          <div>
            <i className='fa-solid fa-trash text-danger me-2 fs-5'></i>
            <span>Delete</span>
          </div>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>


    </td>
  </tr>
</tbody>

       </Table>
        </Card>
        </Col>
      </Row>
    
    </div>
 

    </>
  )
}

export default Hometable