import * as React from 'react'
import FaqData from '../../../JSONCollection/faqdata'
import './FaqContent.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import { useSelector } from 'react-redux'

const FaqContent = () => {
  const { section3 } = useSelector(state => state.admin)
  const [row, setrow] = React.useState([])
  React.useEffect(() => {
    if (section3?.length !== 0) {
      var sectiondata = []
      var newArray = section3.filter(function (el) {
        return el.NAME == 'FAQ_SECTION2'
      })
      if (newArray?.length !== 0) {
        newArray.forEach((data, index) => {
          sectiondata.push({
            id: index + 1,
            SE_ID: data.SE_ID,
            HEADING: data.HEADING,
            CONTENT: data.CONTENT,
            NAME: data.NAME
          })
        })
        setrow(sectiondata)
      }
    }
  }, [section3])
  console.log(row)

  const [selected, setSelected] = React.useState(null)
  const toggle = i => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }
  return (
    <>
      {row?.length !== 0 && (
        <div className='accordion'>
          {row.map((item, i) => (
            <div className='item'>
              <div className='title' onClick={() => toggle(i)}>
                <h6 className='title_heading'>{item.HEADING}</h6>
                <span>
                  {selected === i ? (
                    <ExpandLessIcon sx={{ transform: ' scale(1)' }} />
                  ) : (
                    <ExpandMoreIcon sx={{ transform: ' scale(1)' }} />
                  )}
                </span>
              </div>
              <div className={selected === i ? 'content show' : 'content'}>
                {item.CONTENT}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default FaqContent
