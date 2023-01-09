import React from 'react'
import Footer from '../../components/Footer/Footer'
import AboutSection from './AboutSection/AboutSection'
import CustomerReviews from './CustomerReview/CustomerReviews'
import OurTeam from './OurTeam/OurTeam'
import { Link } from 'react-router-dom'
import { Section1 } from '../../Redux/features/adminSlice'
import { imageBacked } from '../../API/axiosInstance'
import { useDispatch, useSelector } from 'react-redux'

const About = () => {
  const { section1 } = useSelector(state => state.admin)
  const [row, setrow] = React.useState([])
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(Section1())
  }, [])

  React.useEffect(() => {
    if (section1?.length !== 0) {
      var sectiondata = []
      var newArray = section1.filter(function (el) {
        return el.NAME == 'ABOUT_SECTION1'
      })

      if (newArray?.length !== 0) {
        newArray.forEach((data, index) => {
          sectiondata.push({
            id: index + 1,
            SE_ID: data.SE_ID,
            TITLE: data.TITLE,
            CONTENT: data.CONTENT,
            IMAGE: imageBacked + data.IMAGE,
            NAME: data.NAME
          })
        })
        setrow(sectiondata)
      }
    }
  }, [section1])
  return (
    <>
      {row.length !== 0 && (
        <div className='intro_container'>
          <div className='mail_intro_container'>
            <div className='left_intro'>
              <h1>{row[0].TITLE}</h1>
              <p>{row[0].CONTENT}</p>
              <Link to='/getstarted' className='Link_btn'>
                <div className='get_started'>GET STARTED</div>
              </Link>
            </div>
            <div className='right_intro'>
              <img src={row[0].IMAGE} alt='' crossOrigin='anonymous' />
            </div>
          </div>
        </div>
      )}
      <AboutSection />
      <OurTeam />
      <CustomerReviews />
      <Footer />
    </>
  )
}

export default About
