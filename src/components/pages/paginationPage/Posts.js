import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../allpage.css'


const Posts = ({ posts, loading }) => {
    const navigate = useNavigate()
    const [flag,setFlag] = useState(false)
    const [flag1,setFlag1] = useState(true)
    return (
        <>
            {posts &&
                posts.map((item, index) => {
                    var a = "try"
                    return (
                                <div className='card border-0' onClick={()=>setFlag(true)}>
                                    <img src={item.path} alt="" className='blog-cat-img'/>
                                    <div style={{margin:10}}>
                                    <p>{item.title}</p>
                                    <p className="blog-cat-p">{item.question}</p>
                                    <p className="blog-cat-p1">{item.description}</p>
                                    {/* <Link
                                to={`/blog-categories/${item.id}`}
                                onClick={() => {
                                    navigate(`/blog-categories/${item.id}/`, {
                                        state: { itemId: item.id }
                                    })
                                }}
                                className='text-decoration text-violet font-weight-bold'
                            > */}
                              <button type="btn" className="btn btn-primary border-0 blog-cat-button" onClick={()=>setFlag(true)} >click me</button>
                         
                              {
                             flag ? <Link to="/" style={{textDecoration:"none"}}> <button type="btn" className="btn btn-primary border-0 blog-cat-button">Continue reading</button> </Link>:<></>
                            } 
                             {/* </Link> */}
                            </div>
                        <div>
                        </div>
                    </div>
                );
                       
                }
                )
            }
         
        </>
    );


};

export default Posts;