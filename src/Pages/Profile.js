import React from 'react'
import './Profile.css';
import {Card,Row} from 'react-bootstrap'
function Profile() {
  return (
    <>
    <Card className='shadow'>
      <Card.Body>
        <Row>
          <div className="col">
            <div className="profile_img d-flex justify-content-center">
              <img width={'200px'} height={'200px'} className='image p-1 border-rounded' src="https://th.bing.com/th/id/R.7d1eeb9a0b22fbbb9c99dbfbdad26915?rik=jIEtId79tVIW1w&riu=http%3a%2f%2ffiles.softicons.com%2fdownload%2fsocial-media-icons%2ffree-social-media-icons-by-aha-soft%2fpng%2f512x512%2fUser.png&ehk=lIKGnne%2biYXsJOk4mL2x9UH6WuAyrpFtmUPfXaqHm2s%3d&risl=&pid=ImgRaw&r=0" alt="" />
            </div>
          </div>
        </Row>
        <div className="text-center mt-3 text-align-justify">
        <h3>Max Miller</h3>
        <h5> <i className='fa-solid fa-envelope text-primary'></i>:- <span>maxmiller@gmail.com</span> </h5>
        <h5> <i class="fa-solid fa-mobile text-success"></i>:- &nbsp; <span>976543229</span> </h5>
        <h5> <i class="fa-solid fa-venus-mars text-warning"></i>:- &nbsp; <span>Male</span> </h5>
        <h5> <i class="fa-solid fa-location-dot text-info"></i>:- &nbsp; <span>Ranny</span> </h5>
        <h5> <i class="fa-solid fa-chart-line text-danger"></i>:- &nbsp; <span>Active</span> </h5>
       
        </div>
      </Card.Body>

    </Card>
    </>
  )
}

export default Profile