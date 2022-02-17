import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './roadmap.css'

export default function Roadmap() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }
  return (
    <div className='roadmapContainer'>
      <h1>Career</h1>
      <Carousel responsive={responsive}>
      <div>
        <h2>INTRO</h2>
        <p>
           After the Launch of Our Fully Operational Website , We Begin our Progressive Marketing Campaign, and Supporting our Social Media Presence Through Whitelists and Events to Solidify Our Spot And Broadcast our Launch. We will announce our drop release date once we are satisfied with the project’s quality and technical parts
        </p>
      </div>
      <div>
        <h2>VERSE</h2>
        <p>
          After the successful initial mint, Comes the good part! We will start an aggressive Marketing campaign.We Aim to Achieve the Biggest OutReach,To Have a Word out That a New Sheriff is in Town,We want our Community project to echo all around the NFT SPACE, that’s why we will be fully focused on this part of the project.
        </p>
      </div>
      <div>
        <h2>PRE-CHORUS</h2>
        <p>
        Token Presale <br />
        -Token fairlaunch <br />
        -Audit Report <br />
        -Game launch <br />
        -Lands available &amp; Upgradable <br />
        -Second generation Mint available <br />
        -OpenSea Listing <br />
        -Special Events along the journey <br />
        </p>
      </div>
      <div>
        <h2>CHORUS</h2>
        <p>
          The lil RockStar Community Branches Out Beyond the Screens,Our Community Will Choose How To Impact The Real World , Choosing What Charity we will Donate to through a voting Process , And The Donation Will be Broadcasted Live On Our Discord
        </p>
      </div>
      <div>
        <h2>BRIDGE</h2>
        <p>
          We begin to build out sandbox and metaverse operability for all Lil’RockStar holders.We are planning to buy some lands for our Community ,The Lil ROCKSTAR community will have access to private events in the Metaverse
        </p>
      </div>
      <div>
        <h2>OUTRO</h2>
        <p>
          The Sky's Our Limit
        </p>
      </div>
    </Carousel>
    <h2>
      PHASE 2 TO BE ANNOUNCED
    </h2>
    </div>
  )
}
