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
    <div>
      <h1>MEET OUR TEAM</h1>
      <Row>
        <Col md={4}>
          <div>
            <Image style={{width:'300px'}} src={Nft1}></Image>
            <h3>Stevens</h3>
            <h3>Co-Founder
</h3>
          </div>
        </Col>
        <Col md={4}>
          <div>
            <Image style={{width:'300px'}} src={Nft2}></Image>
            <h3>St Pierre</h3>
            <h3>CEO</h3>
          </div>
        </Col>
        <Col md={4}>
          <div>
            <Image style={{width:'300px'}} src={Nft3}></Image>
            <h3>Ptit RocheEtoile</h3>
            <h3>Community Manager</h3>
          </div>
        </Col>
        <Col md={4}>
          <div>
            <Image style={{width:'300px'}} src={Nft4}></Image>
            <h3>Benz</h3>
            <h3>Artist</h3>
          </div>
        </Col>
        <Col md={4}>
          <div>
            <Image style={{width:'300px'}} src={Nft5}></Image>
            <h3>Francois Cania</h3>
            <h3>Marketing Agent</h3>
          </div>
        </Col>
        <Col md={4}>
          <div>
            <Image style={{width:'300px'}} src={Nft6}></Image>
            <h3>David</h3>
            <h3>Lead Dev</h3>
          </div>
        </Col>
      </Row>
    </div>
  )
}
