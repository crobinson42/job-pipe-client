import React from 'react'
import PropTypes from 'prop-types'

const Pagination = ({ currentPage, onPageClick, total }) => {
  const beforeCount = currentPage > 4 ? 4 : currentPage
  const afterCount = total - currentPage > 3 ? 3 : total - currentPage
  const pageNumbers = beforeCount + afterCount

  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li className="page-item disabled">
          <a className="page-link" tabIndex="-1">
            {'<'}
          </a>
        </li>
        {new Array(pageNumbers).fill(0).map((a, p) => {
          const page = ((currentPage + afterCount) - pageNumbers) + (p + 1)

          return (
            <li className={`page-item ${page === currentPage && 'active'}`} key={page}>
              <a className="page-link" onClick={onPageClick}>{page}</a>
            </li>
          )
        })}
        <li className="page-item">
          <a className="page-link">{'>'}</a>
        </li>
      </ul>
    </nav>
  )
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  onPageClick: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
}

export default Pagination
