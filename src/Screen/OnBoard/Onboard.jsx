import React from 'react'
import './Onboard.css'
import DraftsIcon from '@mui/icons-material/Drafts'
import CallIcon from '@mui/icons-material/Call'
import { OnBoardInput } from '../../UtilComponents/inputs/PlainInput'
import PlainTextArea from '../../UtilComponents/inputs/PlainTextArea'
// import OnBoardInput from '../../UtilComponents/inputs/PlainInput'

const Onboard = () => {
  return (
    <>
      <div className='onboard_container'>
        <div className='header_container'>
          <div className='inside_header'>
            <img src='/Images/Home/LeftArrow.png' alt='bg' />
          </div>
          <div className='inside_header'>
            <div className='inside_heading'>
              <h3>Get Onboard</h3>
            </div>
          </div>
          <div className='inside_header'>
            <img src='/Images/Home/RightArrow.png' alt='bg' />
          </div>
        </div>
        <div className='onboard_content'>
          <div className='lets_touch_content'>
            <h3>Let's get in touch!</h3>
            <p>
              Your information is safe with us. We guarantees 100% data
              security. We don’t use emails for spamming.
            </p>
            <br />
            <div className='contact_card'>
              <h4>
                <DraftsIcon sx={{ color: '#3B85D7' }} />
                &nbsp; Send Us an Email:
              </h4>
              <p>
                Our support team will get back to in 24-h during standard
                business hours.
              </p>
              <h4>info@yourwebsite.com</h4>
            </div>
            <br />
            <div className='contact_card'>
              <h4>
                <CallIcon sx={{ color: '#3B85D7' }} />
                &nbsp; Phone/Whatsapp:
              </h4>
              <p>Assistance Hours: Mon – Sat, 10 am to 7 pm</p>
              <h4>+1 604 780 5352</h4>
            </div>
          </div>
          <div className='form_section'>
            <h3>Hey!there:</h3>
            <div className='input_section'>
              <OnBoardInput label='Name:' />
              <OnBoardInput label='Contact No:' />
              <OnBoardInput label='Email Address:' />
              <OnBoardInput label='Select Address Type:' />
            </div>
            <PlainTextArea label='Enter Your message' />
            <div className='btn btn--primary'>Submit</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Onboard
