import * as React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import BlogsTable from '../Blogs/BlogsTable/BlogsTable'
import CreateBlogPost from '../Blogs/CreateBlogs/CreateBlogs'

function TabPanel (props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
}

function a11yProps (index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

export default function ManagePages () {
  const [value, setValue] = React.useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <div className='admin-dashboard'>
        <div className='admin-tabs'>
          <Tabs
            value={value}
            onChange={handleChange}
            variant='scrollable'
            scrollButtons='auto'
            aria-label='scrollable auto tabs example'
            sx={{
              fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
              //   bgcolor: '#F7FAF3'
              backgroundColor: '#F7FAF3'
            }}
          >
            <Tab label='View Blogs' {...a11yProps(0)} />
            <Tab label='Create Blogs' {...a11yProps(1)} />
          </Tabs>
        </div>
      </div>
      <TabPanel value={value} index={0}>
        <BlogsTable />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CreateBlogPost />
      </TabPanel>
    </Box>
  )
}
