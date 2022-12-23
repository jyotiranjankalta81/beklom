import React, { useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { PlainInput } from '../../../../UtilComponents/inputs/PlainInput'
import Button from '@mui/material/Button'
import './CreateBlogs.css'

const MailSendingTemplate = ({ onchnage }) => {
  return (
    <div style={{ width: '100%' }}>
      <CKEditor
        style={{ border: '1px solid green' }}
        editor={ClassicEditor}
        data='<p>please write your blog here</p>'
        onReady={editor => {
          console.log('please write your blog here', editor)
        }}
        onChange={(event, editor) => {
          const data = editor.getData()
          onchnage(data)
          // console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          // console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          // console.log("Focus.", editor);
        }}
      />
    </div>
  )
}

const CreateBlogPost = () => {
  const [isheading, setisheading] = useState('')
  const [iscontent, setiscontent] = useState(null)
  const [isFile, setisFile] = useState(null)

  const submitblog = () => {
    // console.log(isheading, iscontent, isFile);

    // return false;
    const formdata = new FormData()
    formdata.append('HEADING', isheading)
    formdata.append('CONTENT', iscontent)
    formdata.append('IMAGE', isFile)
  }

  return (
    <>
      <div className='create_blogs'>
        <div className='create_blogs1'>
          <h3 style={{ textAlign: 'center' }}>Create Blog Post</h3>
          <PlainInput
            label='Title:'
            // value={isheading}
            onChange={e => setisheading(e.target.value)}
          />
          <br />
          <label htmlFor=''>Content:</label>
          <MailSendingTemplate onchnage={setiscontent} />
          <PlainInput
            label='Image:'
            type='file'
            onChange={e => setisFile(e.target.files[0])}
          />
          <Button
            type='buttton'
            variant='contained'
            className='profile_btn'
            sx={{
              width: 'auto',
              display: 'flex',
              margin: '2rem auto 0rem auto',
              textTransform: 'none',
              color: '#FFFFFF',
              background: '#3B85D7',
              '&:hover': {
                background: '#3B85D7'
              }
            }}
            onClick={submitblog}
          >
            Create Blog
          </Button>
        </div>
      </div>
    </>
  )
}

export default CreateBlogPost
