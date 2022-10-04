import React, { useState, useEffect } from 'react';
import Pagination1 from "./paginationPage/Pagination1"
import Posts from './paginationPage/Posts';
import axios from 'axios';

const Pagination= () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

const getAPI = (data) => {
    // console.log(data)
    fetch(data, {
        headers:
        {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setPosts(data.data);
        })
}
useEffect(() => {
  getAPI("./data.json")
}, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='container mt-5'>
      <div className='blog-count'>
      <Posts posts={currentPosts} loading={loading} />
      </div>
      <Pagination1
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};
export default Pagination;