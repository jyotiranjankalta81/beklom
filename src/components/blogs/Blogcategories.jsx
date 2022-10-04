import React, { useEffect, useState } from 'react'
// import Pagination from '../pages/pagination';
import '../blogs/blogs.css'
// import Navbar from "../Navbar";
import Blogs from "./Blogs";
import Navbar from '../Navbar/Navbar';
import { Link, useParams, useHistory, useLocation } from 'react-router-dom'
import Footer from '../Footer/Footer';

const Blogcategories = () => {
    const location = useLocation()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState([false])
    console.log('location ', location.pathname.split('/'[2]))

    return (
        <>
      
            <div className="blog-cate-bg">
                 <Navbar /> 
            </div>
            <section className="blog-cate-content">
                <div >
                    <img className='blog-cate-content1' src="images/dark-line.png" />
                    <img className='blog-cate-content2' src="images/home/mid-vector.png" />
                    <img className='blog-cate-content3' src="images/dark-line.png" />
                </div>
            </section>
            <section>
                <div className="row justify-content-evenly sec1-blogs-space">
                    <div className="col-4">
                        <img className='col-4-img' src="images/blogs/img1.png" />
                    </div>
                    <div className="col-4">
                       <div className="sec1-blogs-p1">
                        <p className="">BigCommerce is the best CMS software because it contains built-in SEO that 
                        enables you to optimize your site to appear in more relevant search results.
                          Email integration: If you want to send promotions and content about your products,
                         BigCommerce makes it easy.</p>
                        <p className="">BigCommerce is the best CMS software because it contains built-in SEO that enables you to optimize your site to appear in more</p>
                            </div>
                    </div>
                </div>
                <div className="row">
                  <div className="col-1"></div>
                    <div className="col-10 blog-cate-p">
                        <p >BigCommerce is a NASDAQ-listed ecommerce platform that provides software as a service services to retailers.
                            The company’s platform includes online store creation, search engine optimization,
                            hosting, and marketing and security from small to Enterprise sized businesses. </p>
                        <p >BigCommerce is a NASDAQ-listed ecommerce platform that provides software as a service services
                            to retailers. The company’s platform includes online store creation, search engine optimization,
                            hosting, and marketing and security from small to Enterprise sized businesses. </p>
                   <img src="images/blogs/heart.png" />
                   <img src="images/blogs/comment.png" className="blog-cate-icon"/>
                    </div>
                    <div className="col-1"></div>
                    </div>           
            </section>
            <section className="blog-cate-content">
                <div >
                <img className='blog-cate-content1' src="images/line.png" />
                <img className='blog-cate-content2'src="images/home/mid-vector.png" />
                <img className='blog-cate-content3' src="images/line.png" />
                </div>
            </section>
            <section>
                {/* <h1 className="text-center blog-caterorie-h1">Categorie</h1> */}
                {/* <div className="d-flex justify-content-around blog-img-footer"> */}
                <h1 className='Blog_cat_Imagee_Categorie'>Categorie</h1>
                <div className='Blog_cat_Imagee'>
                     <img className='Blog_cat_Imagee1' src={require('../blogs/image11.png')}/>
                     <img  className='Blog_cat_Imagee2' src={require('../blogs/image22.png')}/>
                     <img  className='Blog_cat_Imagee3' src={require('../blogs/image3.png')}/>
                     <img  className='Blog_cat_Imagee4' src={require('../blogs/image4.png')}/>
                     <img  className='Blog_cat_Imagee5' src={require('../blogs/image5.png')}/>
                     <img  className='Blog_cat_Imagee6' src={require('../blogs/image6.png')}/>
                     {/* <img src="images/blogs/image22.png"/>
                    <img src="images/blogs/image3.png"/>
                    <img src="images/blogs/image4.png"/>
                    <img src="images/blogs/image5.png"/>
                    <img src="images/blogs/image6.png"/> */}
                </div>
            </section>
            <Footer/>
        </>
    )
}
export default Blogcategories;