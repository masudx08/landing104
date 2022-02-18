import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import './team.css'
import Nft1 from '../../images/nft1.png'
import Nft2 from '../../images/nft2.png'
import Nft3 from '../../images/nft3.png'
import Nft4 from '../../images/nft4.png'
import Nft5 from '../../images/nft5.png'
import Nft6 from '../../images/nft6.png'
export default function Team() {
  return (
    <div className='teamContainer' id='team'>
      <h1 className='section-title'>MEET OUR TEAM</h1>
      <Row className='teamCardContainer pt-5'>
        <Col md={3}>
          <div>
            <img alt='' src={Nft1}></img>
            <h5 className='name'>Stevens</h5>
            <h5 className='title'>Co-Founder</h5>
          </div>
        </Col>
        <Col md={3}>
          <div>
            <img alt='' src={Nft2}></img>
            <h5 className='name'>St Pierre</h5>
            <h5 className='title'>CEO</h5>
          </div>
        </Col>
        <Col md={3}>
          <div>
            <img alt='' src={Nft3}></img>
            <h5 className='name'>Ptit RocheEtoile</h5>
            <h5 className='title'>Community Manager</h5>
          </div>
        </Col>
      </Row>
      <Row className='teamCardContainer'> 
        <Col md={3}>
          <div>
            <img alt='' src={Nft4}></img>
            <h5 className='name'>Benz</h5>
            <h5 className='title'>Artist</h5>
          </div>
        </Col>
        <Col md={3}>
          <div>
            <img alt='' src={Nft5}></img>
            <h5 className='name'>Francois Cania</h5>
            <h5 className='title'>Marketing Agent</h5>
          </div>
        </Col>
        <Col md={3}>
          <div>
            <img alt='' src={Nft6}></img>
            <h5 className='name'>David</h5>
            <h5 className='title'>Lead Dev</h5>
          </div>
        </Col>
      </Row>
    </div>
  )
}