import React from 'react'
import { OneLineInput } from '../../../UtilComponents/inputs/PlainInput'
import '../getstartedform.css'

const GetStartedForm = () => {
  return (
    <>
      <div className='form_container'>
        <div className='main_form_container'>
          <p>
            You can think of Beklom Technologies as a one-stop shop for all of
            your outsourced company development needs. Web development, Social
            Media management, US Taxation, Book-keeping, Technical/Non-Technical
            recruitment, Graphic Designing, and Lead generation are all areas in
            which we specialize. After that, we perform all of the cold outreach
            to qualify prospects, generate interest, and open sales
            conversations for you.
          </p>
          <div className='form_get_started'>
            <div className='get_input_form'>
              <OneLineInput label='First Name' placeholder='Enter First Name' />
              <OneLineInput label='Last Name' placeholder='Enter Last Name' />
              <OneLineInput label='Email' placeholder='Enter Email' />
              <OneLineInput label='Phonw' placeholder='Enter Phone' />
            </div>
            <div className='submit_get_started_form'>
              <button className='sumit_contact_form'>Send Message </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GetStartedForm
