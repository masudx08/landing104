import React from 'react'
import './social.css'
import {BsDiscord} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import { Col, Image, Row } from 'react-bootstrap'
export default function Social() {
  return (
    <div>
      <h1>SOCIAL NETWORKS</h1>
      <Row>
        <Col>
          <div>
            <BsDiscord />
          </div>
          <h4>Discord</h4>
        </Col>
        <Col>
          <div>
            <BsInstagram />
          </div>
          <h4>Instagram</h4>
        </Col>
        <Col>
          <div>
            <BsTwitter />
          </div>
          <h4>Twitter</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Copyright Lil Rockstar 2022. All Rights Reserved</p>
        </Col>
      </Row>
    </div>
  )
}
