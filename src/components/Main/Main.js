import React from 'react'
import { Button, Col, Row, Image } from 'react-bootstrap'
import './main.css'
import Nft1 from '../../images/m1.png'
import Nft2 from '../../images/m2.png'
import Nft3 from '../../images/m3.png'
import Nft4 from '../../images/m4.png'
import Nft5 from '../../images/m5.png'
import Nft6 from '../../images/m6.png'
export default function Main() {
  return (
    <div>
      <Row>
        <Col md={4}>
          <h1>LIL ROCKSTAR</h1>
          <h2>IT’S TIME TO ROCK, STAKE, AND ROLL.</h2>
          <p>
            Get ready to take over the metaverse and the nft space with your own unique lil’rockstar! Lil’Rockstar is your Stairway to one of the largest and fastest growing NFT Project.
          </p>
          <Button>Mint Soon</Button>
        </Col>
        <Col md={8}>
          <Row>
            <Col md={4}>
              <Image className='mainNftImg' src={Nft1}></Image>
            </Col>
            <Col  md={4}>
              <Image className='mainNftImg' src={Nft2}></Image>
            </Col>
            <Col  md={4}>
              <Image className='mainNftImg' src={Nft3}></Image>
            </Col>
            <Col  md={4}>
              <Image className='mainNftImg' src={Nft4}></Image>
            </Col>
            <Col  md={4}>
              <Image className='mainNftImg' src={Nft5}></Image>
            </Col>
            <Col  md={4}>
              <Image className='mainNftImg' src={Nft6}></Image>
            </Col>
              
          </Row>
        </Col>
      </Row>
    </div>
  )
}
