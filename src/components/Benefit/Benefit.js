import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './benefit.css'
import BenefitImg from '../../images/benefit.jpg'
import Benefit1 from '../../images/benefit1.jpg'
import Benefit2 from '../../images/benefit2.jpg'
import Value from '../../images/value.png'
import Reward from '../../images/reward.png'
import Charity from '../../images/charity.png'
import Meta from '../../images/meta.png'

export default function Benefit() {
  return (
    <div className='benefitContainer'>
      <div className='text-center benefitTitle'>
        <h1 className='section-title'>BENEFITS & UTILITIES</h1>
      </div>
      <Row className='d-flex justify-content-center m-0'>
        <Col xs={10} lg={3} >
          <div className='benefit-col'>
            <div>
              <img src={Value} alt="" />
            </div>
            <div>
              <h3>Increases Value</h3>
              <p>
                If you manage to mint one of our Lil'ALLStars NFTs you can possibly 2x, 5x, maybe even 10x the value of your investment within a few days.
              </p>
            </div>
          </div>
          <div className='benefit-col'>
            <div>
              <img src={Reward} alt="" />
            </div>
            <div>
              <h3>Holders Reward</h3>
              <p>
                Lil’RockStar holders will passively gain $ROCC when staking their NFTs in the Lil’RockStar game. The holders will have private access to our community funds that are used to ​​invest, reward, and collaborate with the best projects in the space and as well as project ideas of our members.
              </p>
            </div>
          </div>
        </Col>
        <Col xs={10} lg={5}>
          <div className='benefitMiddle'>
            <img className='benefit-img' src={BenefitImg}></img>
              <img className='benefit1' src={Benefit1}></img>
            <img className='benefit2' src={Benefit2}></img>
          </div>
        </Col>
        <Col xs={10} lg={3} className='bene-right'>
          <div className='benefit-col2 r-ben'>
              
              <div>
              <h3>Events & Charity</h3>
              <p>
                Special events that allow our users to obtain various exclusive ingame
                perks throughout the Project duration ,
                Note that 5% of it will be used for charity purposes.
              </p>
              </div>
              <div style={{marginLeft: '15px'}}>
                <img src={Charity} alt="" />
              </div>
            </div>
            <div className='benefit-col2 r-ben'>
              <div >
              <h3>Metaverse</h3>
              <p>
                You will be able to wear a 3D Lil’Rockstar (Yes there will be a UPgrade of your Lil’Rockstar) and join Lil’RockStars City, a Private Land on the Metaverse where only our community can have access as well as a benefit from events like Casino!
              </p>
              </div>
              <div style={{marginLeft: '15px'}}>
                <img src={Meta} alt="" />
              </div>
            </div>
        </Col>
      </Row>
    </div>
  )
}
