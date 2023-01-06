import * as React from 'react'
import { OnBoardInput } from '../../../../../UtilComponents/inputs/PlainInput'
import { OnBoardTextArea } from '../../../../../UtilComponents/inputs/PlainTextArea'
import '../CrouselSection/CrouselSection.css'
import { useForm } from 'react-hook-form'
import axiosInstance from '../../../../../API/axiosInstance'
import { toast } from 'react-toastify'

let initialStates = {
  HEADING: '',
  TITLE: '',
  CONTENT: '',
  NAME: ''
}
const Section2 = props => {
  console.log(props)
  const [formdata, setFormdata] = React.useState(initialStates)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()

  const onSubmit = formdata => {
    console.log(props)
    var data = props.datas[0].name
    formdata.NAME = data
    // return false

    axiosInstance.post(`main/${props.datas[0].link}`, formdata).then(res => {
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
      <div className='section_container'>
        <form
          className='crousel_section_container'
          onSubmit={handleSubmit(onSubmit)}
        >
          <OnBoardInput
            label='Heading'
            errors={errors}
            validation={{
              ...register('HEADING', {
                required: 'Heading is required'
              })
            }}
          />
          <OnBoardInput
            label='Title'
            errors={errors}
            validation={{
              ...register('TITLE', {
                required: 'Title is required'
              })
            }}
          />
          <OnBoardTextArea
            label='Content'
            errors={errors}
            validation={{
              ...register('CONTENT', {
                required: 'Content is required'
              })
            }}
          />
          <div className='btn_section'>
            <button
              className='section_submit_btn'
              onClick={handleSubmit(onSubmit)}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Section2
