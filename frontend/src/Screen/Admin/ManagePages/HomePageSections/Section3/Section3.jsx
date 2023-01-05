import React from 'react'
import { OnBoardInput } from '../../../../../UtilComponents/inputs/PlainInput'
import { OnBoardTextArea } from '../../../../../UtilComponents/inputs/PlainTextArea'
import '../CrouselSection/CrouselSection.css'

const Section3 = () => {
  return (
    <>
      <div className='section_container'>
        <div className='crousel_section_container'>
          <OnBoardInput label='Title' />
          <OnBoardTextArea label='Content' />
          <div className='btn_section'>
            <button className='section_submit_btn'>Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section3
