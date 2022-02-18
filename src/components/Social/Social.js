import React from 'react'
import './social.css'
import { BsDiscord } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { Col, Image, Row } from 'react-bootstrap'
export default function Social() {
  return (
    <div className='socialContainer'>
      <h1 className='section-title'>SOCIAL NETWORKS</h1>
      
          <div className='socialImgContainer'>
            <div>
              <BsDiscord />
              <p style={{fontSize:'20px'}}>Discord</p>
            </div>

            <div>
              <BsInstagram />
              <p style={{fontSize:'20px'}}>Instagram</p>
            </div>

            <div>
              <BsTwitter />
              <p style={{fontSize:'20px'}}>Twitter</p>
            </div>
          </div>
        
      
      <Row className='footer'>
        <Col >
          <p>Copyright Lil Rockstar 2022. All Rights Reserved</p>
        </Col>
      </Row>
    </div>
  )
}
