import React from 'react'
import CardData from '../../../JSONCollection/Servicecard'
import './OurServices.css'

const OurServices = () => {
  return (
    <>
      <div className='our_service_container'>
        <h3>Our Services</h3>
        <div className='small_cards'>
          {CardData.map(value => (
            <div className='service_card'>
              <img src={value.image} alt='' />
              <p>{value.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default OurServices
