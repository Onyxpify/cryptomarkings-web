import React from 'react'
import Hero from './hero/Hero'
import AboutUs from './aboutUs/AboutUs'
import Choose from './choose/Choose'
import GetStarted from './getStarted/GetStarted'
import Offers from './offers/Offers'
import JoinUs from './joinUs/JoinUs'
import Faq from './faq/Faq'
import Informed from './informed/Informed'

const Index = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Choose />
      <GetStarted />
      <Offers />
      <JoinUs />
      {/* <Best /> */}
      {/* <Table /> */}
      <Faq />
      <Informed />
    </div>
  )
}

export default Index