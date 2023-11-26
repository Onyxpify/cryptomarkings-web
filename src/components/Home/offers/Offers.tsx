import React from 'react';
import './offers.scss';
import { offers } from './offersData';
import LearnMore from '../learnMore/LearnMore';

const Offers = () => {
  return (
      <div id='Offers'>
          <div className="line1">
              <h6>CRYPTOMARKINGS OFFERS</h6>
              <p>Explore the Outstanding Features that Make CryptoMarkings your Gateway to Unparalleled Success:</p>
          </div>
          <div className="offers">
              {
                  offers.map((offer: any) => {
                      return (
                          <div className='offer' key={offer.id} > 
                              <div className="img"> {offer.icon} </div>
                              <div className="info">
                                  <h3> {offer.title} </h3>
                                  <p> {offer.text} </p>
                                  <LearnMore />
                              </div>
                          </div>
                      )
                  })
              }
          </div>
    </div>
  )
}

export default Offers