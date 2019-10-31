import React, { useEffect, useState } from "react";

// Styles
import "./Pagination.scss";

function Pagination({ totalResults, currentPage, paginate, pageSize }) {
  const [pageNumbers, setPageNumbers] = useState([]);

  // Set Page Numbers
  useEffect(() => {
    const totalPageCount = Math.ceil(totalResults / pageSize);
    const page = [];

    for (let index = 1; index <= totalPageCount; index++) {
      page.push(index);
    }

    setPageNumbers(page);
  }, [totalResults, currentPage, pageSize]);

  return (
    <ul className="pagination">
      {currentPage > 1 && (
        <li>
          <button
            className="pagination__pager "
            onClick={() => paginate(currentPage - 1)}
          >
            Önceki Sayfa
          </button>
        </li>
      )}
      {pageNumbers.map((page, index) => {
        return (
          <li key={index}>
            <button
              className={
                currentPage === page
                  ? "pagination__pager pagination__pager--number pagination__pager--active"
                  : "pagination__pager pagination__pager--number"
              }
              onClick={() => paginate(page)}
            >
              {page}
            </button>
          </li>
        );
      })}
      {currentPage < pageNumbers.length && (
        <li>
          <button
            className="pagination__pager"
            onClick={() => paginate(currentPage + 1)}
          >
            Sonraki Sayfa
          </button>
        </li>
      )}
    </ul>
  );
}

export default Pagination;
