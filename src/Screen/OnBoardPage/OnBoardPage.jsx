import React from 'react'
import Footer from '../../components/Footer/Footer'
import { OneLineInput } from '../../UtilComponents/inputs/PlainInput'
import './onboard.css'

const OnBoardPage = () => {
  return (
    <>
      <div className='intro_container'>
        <div className='mail_intro_container'>
          <div className='left_intros'>
            <h2>Onboarding</h2>
            <p>
              Leading Resource for Recruitment in Technical and Non-Technical
              backgrounds !
            </p>
          </div>
          <div className='right_intros'>
            <img src='/Images/Home/onboardheaderbg.png' alt='' />
          </div>
        </div>
      </div>
      <div className='onboard_form_container'>
        <div className='onboard_form_main_container'>
          <p>Please fill the folowing details !</p>
          <div className='onboard_form_content'>
            <div className='onboard_input_section'>
              <OneLineInput label='First Name' placeholder='Enter First Name' />
              <OneLineInput label='Last Name' placeholder='Enter Last Name' />
              <OneLineInput label='Email' placeholder='Enter Email' />
            </div>
            <div className='file_section'>
              <OneLineInput label='About Your Self' />
              <label htmlFor=''>
                <span>Upload File</span>
                <input type='file' className='plain-input-wrappers' />
              </label>
            </div>
            <div className='submit_get_started_form'>
              <button className='sumit_contact_form'>Send Message </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default OnBoardPage
