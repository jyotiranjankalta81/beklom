import React from 'react'
import './Onboard.css'
import DraftsIcon from '@mui/icons-material/Drafts'
import CallIcon from '@mui/icons-material/Call'
import { OnBoardInput } from '../../UtilComponents/inputs/PlainInput'
import PlainTextArea from '../../UtilComponents/inputs/PlainTextArea'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { onboardhome } from '../../Redux/features/commonSlice'
import { toast } from 'react-toastify'
// import OnBoardInput from '../../UtilComponents/inputs/PlainInput'

let initialState = {
  NAME: '',
  EMAIL: '',
  CONTACT_US: '',
  ADDRESS: '',
  MESSAGE: ''
}

const Onboard = () => {
  const [formdata, setFormdata] = React.useState(initialState)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()
  const dispatch = useDispatch()

  const onSubmit = formdata => {
    dispatch(onboardhome({ formdata, toast }))
  }
  return (
    <>
      <div className='onboard_container'>
        <div className='header_container'>
          <div className='inside_header'>
            <img src='/Images/Home/LeftArrow.png' alt='bg' />
          </div>
          <div className='inside_headers'>
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
            <form className='input_section' onSubmit={handleSubmit(onSubmit)}>
              <OnBoardInput
                label='Name:'
                errors={errors}
                name='NAME'
                validation={{
                  ...register('NAME', { required: 'Name is required' })
                }}
              />
              <OnBoardInput
                label='Contact No:'
                type='number'
                name='CONTACT_US'
                errors={errors}
                validation={{
                  ...register('CONTACT_US', {
                    required: 'Contact is required'
                  })
                }}
              />
              <OnBoardInput
                label='Email Address:'
                name='EMAIL'
                type='email'
                errors={errors}
                validation={{
                  ...register('EMAIL', { required: 'Email is required' })
                }}
              />
              <OnBoardInput
                label='Select Address Type:'
                name='ADDRESS'
                errors={errors}
                validation={{
                  ...register('ADDRESS', { required: 'Address is required' })
                }}
              />
            </form>
            <PlainTextArea
              label='Enter Your message'
              name='MESSAGE'
              errors={errors}
              validation={{
                ...register('MESSAGE', {
                  required: 'Message Field is required'
                })
              }}
            />
            <button
              className='btn btn--primary'
              onClick={handleSubmit(onSubmit)}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Onboard
