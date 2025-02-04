import * as React from 'react'
import './Footer.css'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import CallIcon from '@mui/icons-material/Call'
import MailIcon from '@mui/icons-material/Mail'
import { Link } from 'react-router-dom'
import { PlainInput } from '../../UtilComponents/inputs/PlainInput'
import { Button } from '@mui/material'
import { useForm } from 'react-hook-form'
import axiosInstance from '../../../src/API/axiosInstance'
import { toast } from 'react-toastify'

function Footer () {
  const [formdata, setFormdata] = React.useState({
    EMAIL: ''
  })
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const onSubmit = data => {
    axiosInstance.post('main/subscribe', data).then(res => {
      if (res.data.success == 1) {
        toast.success(res.data.message)
        setTimeout(() => {
          window.location.reload()
        }, 3000)
      } else {
        toast.error(res.data.message)
      }
    })
  }

  return (
    <>
      <div className='footer_container'>
        <div className='footer_main_container'>
          <div className='footer_content_section'>
            <Link to='/'>
              <div className='logo'>
                <img src='/Images/Navbar/BeklomLogo.png' alt='' />
              </div>
            </Link>
            <section className='map_section'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15258072.40570261!2d82.75252935!3d20.98801345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a272531e0101161%3A0x86b40035be7b9641!2sGurushree%20Minerals%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1660806423162!5m2!1sen!2sin'
                allowfullscreen=''
                loading='lazy'
                title='Beklom Technologies Inc. 4 McHugh Rd, Ajax, ON - L1Z 0M8'
                referrerpolicy='no-referrer-when-downgrade'
              ></iframe>
            </section>
          </div>
          <div className='footer_content_sections'>
            <div className='link_contacts'>
              <div className='links_section'>
                <h6>Links</h6>
                <div className='contacts_data'>
                  <p>Terms &amp; Conditations</p>
                  <p>Privacy Policy</p>
                  <p>Partner with us</p>
                  <p>
                    <Link to='/auth/adminLogin' className='Link_btn'>
                      Admin Login
                    </Link>
                  </p>
                </div>
              </div>
              <div className='get_in_touch_section'>
                <h6>Get In Touch</h6>
                <div className='contacts_data'>
                  <div className='contacts_via'>
                    <CallIcon sx={{ color: '#3B85D7' }} />
                    +1-647-468-7713, <br /> +1-647-954-4590
                  </div>
                  <div className='contacts_via'>
                    <MailIcon sx={{ color: '#3B85D7' }} />
                    info@beklom.com
                  </div>
                  <div className='contacts_via'>
                    <LocationOnIcon sx={{ color: '#3B85D7' }} />
                    Beklom Technologies Inc. 4 McHugh Rd, Ajax, ON - L1Z 0M8
                  </div>
                </div>
              </div>
            </div>
            <br />
          </div>
          <div className='footer_content_section'>
            <div className='subscribe_mail'>
              <h6>Subscribe to Newsletter</h6>
              <form
                className='input_subscribe'
                onSubmit={handleSubmit(onSubmit)}
              >
                <label htmlFor=''>
                  Email:
                  <PlainInput
                    placeholder='e.g beklom@gmail.com'
                    name='EMAIL'
                    errors={errors}
                    validation={{
                      ...register('EMAIL', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid Email'
                        }
                      })
                    }}
                  />
                </label>
                <Button
                  sx={{
                    width: '37%',
                    textTransform: 'none',
                    color: '#FFFFFF',
                    backgroundColor: '#456BB4',
                    '&:hover': {
                      backgroundColor: '#456BB4'
                    }
                  }}
                  onClick={handleSubmit(onSubmit)}
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
        <div className='footer_main_containers'>
          <div className='footer_content_section'>
            <div className='footer_img'>
              <img src='/Images/Footer/FooterPrimary.png' alt='' />
            </div>
          </div>
          <div className='footer_content_sectionsss'>
            <div className='footer_img'>
              <img src='/Images/Footer/FooterSecondary.png' alt='' />
            </div>
          </div>
          <div className='footer_content_section'>
            <div className='footer_img'>
              <img src='/Images/Footer/FooterTertairy.png' alt='' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
