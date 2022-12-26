import * as React from 'react'
import FaqData from '../../../JSONCollection/faqdata'
import './FaqContent.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'

const FaqContent = () => {
  const [selected, setSelected] = React.useState(null)
  const toggle = i => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }
  return (
    <>
      <div className='accordion'>
        {FaqData.map((item, i) => (
          <div className='item'>
            <div className='title' onClick={() => toggle(i)}>
              <h6 className='title_heading'>{item.question}</h6>
              <span>
                {selected === i ? (
                  <ExpandLessIcon sx={{ transform: ' scale(1)' }} />
                ) : (
                  <ExpandMoreIcon sx={{ transform: ' scale(1)' }} />
                )}
              </span>
            </div>
            <div className={selected === i ? 'content show' : 'content'}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default FaqContent
