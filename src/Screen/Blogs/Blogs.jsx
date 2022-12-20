import React from 'react'
import './blogs.css'
import BlogsData from '../../JSONCollection/blogs'
import BlogsCard from './BlogsCard/BlogsCard'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate'

const Blogs = () => {
  const [pageNumber, setPageNumber] = React.useState(0)

  const blogsPerPage = 6
  const pagesVisited = pageNumber * blogsPerPage

  const pageCount = Math.ceil(BlogsData?.length / blogsPerPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }
  return (
    <>
      <div className='intro_container'>
        <div className='mail_intro_container'>
          <div className='left_intro'>
            <h1>Blogs</h1>
            <p>
              Beklom Technologies has the greatest tools and people to help you
              grow your business. Does this seem like something you're
              interested in? Start your onboarding process today!.
            </p>
            <Link to='/getstarted' className='Link_btn'>
              <div className='get_started'>GET STARTED</div>
            </Link>
          </div>
          <div className='right_intro'>
            <img src='/Images/Home/blogsrightbg.png' alt='' />
          </div>
        </div>
      </div>
      <div className='blogs_container'>
        <div className='blogs_card_container'>
          {BlogsData.slice(pagesVisited, pagesVisited + blogsPerPage).map(
            (BlogList, index) => (
              <BlogsCard key={index} {...BlogList} />
            )
          )}
        </div>
      </div>
      <div className='Blogs-Carousel-Track'>
        <ReactPaginate
          previousLabel={'Prev'}
          nextLabel={'Next'}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={'paginationBttns'}
          previousLinkClassName={'previousBttn'}
          nextLinkClassName={'nextBttn'}
          disabledClassName={'paginationDisabled'}
          activeClassName={'paginationActive'}
        />
      </div>
      <br />
      <BlogSubscribe />
      <Footer />
    </>
  )
}

export default Blogs

function BlogSubscribe () {
  return (
    <div className='subscribe_blog'>
      <div className='subscribe'>
        <div className='subscribe_left_container'>
          <img src='/Images/Home/subscribeleft.png' alt='' />
        </div>
        <div className='subscribe_right_container'>
          <h1>STAY TUNED</h1>
          <p>
            Subscribe to our newsletter and never miss our Tech, latest news,
            etc.
          </p>
          <p>Our newsletter is sent once a week, every Monday</p>
          <div className='input_box'>
            <input type='email' placeholder='Subscribe' />
          </div>
        </div>
      </div>
    </div>
  )
}
