import React from 'react'
import { OnBoardInput } from '../../../../../UtilComponents/inputs/PlainInput'
import { OnBoardTextArea } from '../../../../../UtilComponents/inputs/PlainTextArea'
import Button from '@mui/material/Button'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { Avatar } from '@mui/material'

const CustomerRevies = () => {
  return (
    <>
      <div className='section_container'>
        <div className='crousel_section_container'>
          <label htmlFor='' className='crousel_background_image'>
            Image:
          </label>

          <Button
            sx={{
              //   width: '100%',
              //   height: '6vh',
              justifyContent: 'space-around',
              textTransform: 'none',
              //   borderRadius: '10px',
              //   border: '1px dashed #456bb4',
              border: 'none',
              //   background: '#FFFFFF',
              color: '#000000',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              justifyContent: 'flex-end'

              //   '&:hover': {
              //     backgroundColor: '#e6f1fd',
              //     border: '1px dashed #456bb4'
              //   }
            }}
            color='warning'
            variant='outlined'
            component='label'
          >
            <Avatar
              src='https://images.unsplash.com/photo-1626126090003-8b2b2e1b2b1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
              sx={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                border: '1px dashed'
              }}
            />
            {/* // {isFile ? isFile.name : 'Drag and Drop or Browse File'} */}
            <input
              hidden
              accept='image/*'
              multiple
              type='file'
              //   onChange={e => setisFile(e.target.files[0])}
            />
            <CloudUploadIcon
              sx={{
                // color: isFile ? 'green' : '#456bb4',
                transform: 'scale(1.5)',
                margin: '-1.5rem 0rem 0rem -1.8rem'
              }}
            />
          </Button>
          <OnBoardInput />
          <OnBoardInput />
          <OnBoardTextArea />
        </div>
      </div>
    </>
  )
}

export default CustomerRevies
