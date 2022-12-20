import React from 'react'
import Footer from '../../components/Footer/Footer'
import { OneLineInput } from '../../UtilComponents/inputs/PlainInput'
import Button from '@mui/material/Button'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import './onboard.css'

const OnBoardPage = () => {
  return (
    <>
      <div className='intro_container'>
        <div className='mail_intro_container'>
          <div className='left_intros'>
            <h1>Onboarding</h1>
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
              <OneLineInput
                label='About Your Self'
                placeholder='Write about your self'
              />
              <Button
                sx={{
                  width: '100%',
                  height: '7vh',
                  justifyContent: 'space-around',
                  textTransform: 'none',
                  border: '1px dashed #456bb4',
                  background: '#e6f1fd',
                  color: '#000000',
                  '&:hover': {
                    backgroundColor: '#e6f1fd',
                    border: '1px dashed #456bb4'
                  }
                }}
                color='warning'
                variant='outlined'
                component='label'
              >
                <CloudUploadIcon sx={{ color: '#456bb4' }} />
                Drag and Drop or Browse File
                <input
                  hidden
                  accept='image/*'
                  multiple
                  type='file'
                  // onChange={(e) => onChangeText("CV", e.target.files[0])}
                  name='CV'
                />
              </Button>
            </div>
            <br />
            <br />
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
