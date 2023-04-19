import React from "react"
import _ from 'lodash';


const Pagination = ({ itemCount, pageSize, currentPage, onPageChange,href }) => {


  const pagesCount = itemCount / pageSize
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1)

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center"> 
      
        {pages.map(page => (
          <li key={page} className={page === currentPage ? "page-item active" : "page-item "}  >
            <a className="page-link" href={href} style={{cursor:"pointer"}} onClick={() => onPageChange(page)}>{page}</a>
          </li>
        ))}

        {/* <li 
          className="page-item"
          onClick={() => onPageChange()}>
            <a className="page-link">Next</a></li> */}
      </ul>
    </nav>
  )
}

export default Pagination