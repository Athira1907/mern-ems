import React from 'react'
import {Navbar,Container} from 'react-bootstrap'
function Header() {
  return (
    <div>
        <header>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src=""
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            EMS Application
          </Navbar.Brand>
        </Container>
      </Navbar>
        </header>
       
    </div>
  )
}

export default Header