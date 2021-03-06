import React from 'react'
import { Button, Col, Row, Image, Container } from 'react-bootstrap'
import './main.css'
import Nft1 from '../../images/nft1.png'
import Nft2 from '../../images/nft2.png'
import Nft3 from '../../images/nft3.png'
import Nft4 from '../../images/nft4.png'
import Nft5 from '../../images/nft5.png'
import Nft6 from '../../images/nft6.png'
export default function Main() {
  return (
    <div className='mainContainer'>
      <div className='main-left'>
          <div>
            <h1>LIL <br/> ROCKSTAR</h1>
            <h2>IT’S TIME TO ROCK, STAKE, AND ROLL.</h2>
            <p>
              Get ready to take over the metaverse and the nft space with your own unique lil’rockstar! Lil’Rockstar is your Stairway to one of the largest and fastest growing NFT Project.
            </p>
            <button>MINT SOON</button>
          </div>
        </div>
        <div className='main-right'>
          <Row >
            <Col xs={4}>
              <img className='mainNftImg main1' src={Nft1}></img>
            </Col>
            <Col xs={4}>
              
              <img className='mainNftImg main2' src={Nft2}></img>
            </Col>
            <Col xs={4}>
              
              <img className='mainNftImg main3' src={Nft3}></img>
            </Col>
            <Col xs={4}>
              
              <img className='mainNftImg main4' src={Nft4}></img>
            </Col>
            <Col xs={4}>
              
              <img className='mainNftImg main5' src={Nft5}></img>
            </Col>
            <Col xs={4}>
              
              <img className='mainNftImg main6' src={Nft6}></img>
            </Col>
              
          </Row>
        </div>
        
    </div>
  )
}
