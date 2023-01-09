import React from 'react'
import { useDispatch } from 'react-redux'
import { BasicSection2 } from '../../Redux/features/adminSlice'
import './WhyChoose.css'
import { useSelector } from 'react-redux'

const WhyChoose = () => {
  const { section2 } = useSelector(state => state.admin)
  const [row, setrow] = React.useState([])
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(BasicSection2())
  }, [])

  React.useEffect(() => {
    if (section2?.length !== 0) {
      var sectiondata = []
      var newArray = section2.filter(function (el) {
        return el.NAME == 'HOME_SECTION2'
      })
      if (newArray?.length !== 0) {
        newArray.forEach((data, index) => {
          sectiondata.push({
            id: index + 1,
            SE_ID: data.SE_ID,
            HEADING: data.HEADING,
            TITLE: data.TITLE,
            NAME: data.NAME,
            CONTENT: data.CONTENT
          })
        })
        setrow(sectiondata)
      }
    }
  }, [section2])

  return (
    <>
      {row.length !== 0 && (
        <div className='choose_container'>
          <div className='choose_main_container'>
            <div className='choose_left_container'>
              <img src='/Images/Home/whychooseusleft.png' alt='' />
            </div>
            <div className='choose_right_container'>
              <h1> Why Choose Us</h1>
              <h2>
                You can think of Beklom Technologies as a one-stop solution.
              </h2>
              <p>
                Web development, Social Media management, US Taxation,
                Book-keeping, Technical/Non-Technical recruitment, Graphic
                Designing, and Lead generation are all areas in which we
                specialize. After that, we perform all of the cold outreach to
                qualify prospects, generate interest, and open sales
                conversations for you.
              </p>
              <button className='start_btn'>Get Started</button>
            </div>
            <div className='far_right_container'>
              <img src='/Images/Home/choosebg.png' alt='' />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default WhyChoose
