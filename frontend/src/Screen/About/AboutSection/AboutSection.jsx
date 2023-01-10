import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BasicSection3 } from '../../../Redux/features/adminSlice'
import './AboutSection.css'

const AboutSection = () => {
  const { section3 } = useSelector(state => state.admin)
  const [row, setrow] = React.useState([])
  const dispatch = useDispatch()
  React.useEffect(() => {
    if (section3?.length !== 0) {
      var sectiondata = []
      var newArray = section3.filter(function (el) {
        return el.NAME == 'ABOUT_SECTION2'
      })
      if (newArray?.length !== 0) {
        newArray.forEach((data, index) => {
          sectiondata.push({
            id: index + 1,
            SE_ID: data.SE_ID,
            HEADING: data.HEADING,
            NAME: data.NAME,
            CONTENT: data.CONTENT
          })
        })
        setrow(sectiondata)
      }
    }
  }, [section3])

  return (
    <>
      {row.length !== 0 && (
        <div className='about_container'>
          <div className='about_main_container'>
            <div className='about_left_container'>
              <img src='/Images/About/aboutleftbg.png' alt='' />
            </div>
            <div className='about_right_container'>
              <h1>{row[0].HEADING}</h1>
              <p>{row[0].CONTENT}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default AboutSection
