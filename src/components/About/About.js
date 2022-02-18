import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

import './about.css'
import Nft1 from '../../images/nft1.png'
import Nft2 from '../../images/nft2.png'
import Nft3 from '../../images/nft3.png'
import Nft4 from '../../images/nft4.png'
import Nft5 from '../../images/nft5.png'
import Nft6 from '../../images/nft6.png'
export default function About() {

  
  return (
    <div className='aboutContainer'>
        <Row className='m-0'>
          <Col className='all-carousel'>
            <div className='custom-carousel'>
                  <div>
                    <img src={Nft1}  alt="" />
                  </div>
                  <div>
                    <img src={Nft2}  alt="" />
                  </div>
                  <div>
                    <img src={Nft3}  alt="" />
                  </div>
                  <div>
                    <img src={Nft4}  alt="" />
                  </div>
                  <div>
                    <img src={Nft5}  alt="" />
                  </div>
                  <div>
                    <img src={Nft6}  alt="" />
                  </div>
                  <div>
                    <img src={Nft1}  alt="" />
                  </div>
                  <div>
                    <img src={Nft2}  alt="" />
                  </div>
                  <div>
                    <img src={Nft3}  alt="" />
                  </div>
                  <div>
                    <img src={Nft4}  alt="" />
                  </div>
                  <div>
                    <img src={Nft5}  alt="" />
                  </div>
                  <div>
                    <img src={Nft6}  alt="" />
                  </div>
            </div>
            <div className='custom-carousel2'>
                  <div>
                    <img src={Nft1}  alt="" />
                  </div>
                  <div>
                    <img src={Nft2}  alt="" />
                  </div>
                  <div>
                    <img src={Nft3}  alt="" />
                  </div>
                  <div>
                    <img src={Nft4}  alt="" />
                  </div>
                  <div>
                    <img src={Nft5}  alt="" />
                  </div>
                  <div>
                    <img src={Nft6}  alt="" />
                  </div>
                  <div>
                    <img src={Nft1}  alt="" />
                  </div>
                  <div>
                    <img src={Nft2}  alt="" />
                  </div>
                  <div>
                    <img src={Nft3}  alt="" />
                  </div>
                  <div>
                    <img src={Nft4}  alt="" />
                  </div>
                  <div>
                    <img src={Nft5}  alt="" />
                  </div>
                  <div>
                    <img src={Nft6}  alt="" />
                  </div>
            </div>
            
          </Col>
          <Col>
            <div className='about-right'>
              <p>WELCOME TO LIL’ROCKSTAR</p>
              <h1>What the <br /> <span style={{color:'#B13FFF'}}>ROCK?</span></h1>
              <p>
                Lil’RockStar is ready to Rock the World with its Unique NFT Collection. get your own and join us on the Journey to Stardom.
              </p>
              <p>
                Lil’RockStar is also an NFT Staking Game that allows the user to use his own Unique NFT in order to earn $ROCC, get your Lil’RockStar, grab your guitar and Record some Sick Albums in Studios, And if the Rock Gods are on your Side, you might even make it to the Hall Of Fame.
              </p>
              <h3>Discord</h3>
              <p>
                Join Our Discord and be Part of a Devoted Family of Rock Fanatics and NFT enthusiasts. Be Part of the New NFT Space Era.
              </p>
            <button className='aboutBtn'>Join Our Discord</button>
            </div>
          </Col>
        </Row>
    </div>
  )
}
