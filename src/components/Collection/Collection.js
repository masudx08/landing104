import { Button, Col, Row } from 'react-bootstrap'
import React from 'react'
import './collection.css'
import Nft1 from '../../images/nft1.png'
import Nft2 from '../../images/nft2.png'
import Nft3 from '../../images/nft3.png'
import Nft4 from '../../images/nft4.png'
import Nft5 from '../../images/nft5.png'
import Nft6 from '../../images/nft6.png'
export default function Collection() {
  return (
    <div className='collectionContainer'>
      <div className="innerContainer">
      <h1>OUR SPECIAL LEGENDARY COLLECTION</h1>
      <Row>
      <Col className='collection-carousels'>
            <div className='collection-caro'>
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
            <div className='collection-caro2'>
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
      </Row>
      <button>Game Page</button>
      </div>
    </div>
  )
}
