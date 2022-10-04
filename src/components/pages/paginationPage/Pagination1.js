import React from 'react';

 const Pagination1 = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='ul_page'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <button onClick={() => paginate(number)}  className='page-link'>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Pagination1;

