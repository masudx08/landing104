import React from 'react'
import { Accordion, Col, Row } from 'react-bootstrap'
import './faq.css'
export default function Faq() {
  return (
    <div className='faqContainer'>
      <Row>
        <Col className='d-flex align-items-center justify-content-center'>
          <div className='faq-left'>
          <h1>FAQ</h1>
          </div>
        </Col>
        <Col>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>WHY LIL'ROCKSTAR?</Accordion.Header>
              <Accordion.Body>
                When you buy a Lil’Rockstar, you’re not simply buying a simple NFT, you are getting access to a game rewards and a community where benefits and utilities will increase with the time.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>HOW DO I GET WHITELISTED ?</Accordion.Header>
              <Accordion.Body>
                Whitelist is not open yet, you can check all the info on our discord.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                HOW I CAN MINT A LIL'ROCKSTAR ?
              </Accordion.Header>
              <Accordion.Body>
                You will be able to mint only on our game page when we launch.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>WHERE I WILL BE ABLE TO SEE MY LIL'ROCKSTAR?</Accordion.Header>
              <Accordion.Body>
                Once you have minted a Lilrockstar NFT, you will be able to see it by connecting your wallet to OpenSea.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </div>
  )
}
