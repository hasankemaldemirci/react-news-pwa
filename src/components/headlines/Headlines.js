import React, { useEffect, useState } from "react";
import { fetchAPI } from "../../app/api";

// Components
import HeadlineCard from "../headline-card/HeadlineCard";
import Loader from "../loader/Loader";
import Timer from "../timer/Timer";
import Pagination from "../pagination/Pagination";

// Styles
import "./Headlines.scss";

function Headlines() {
  const [data, setData] = useState({ articles: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [timerSeconds] = useState(59);
  const [pageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch Data
  const fetchData = async (page, pageSize) => {
    setIsLoading(true);

    try {
      await fetchAPI(page, pageSize).then(res => {
        setData(res.data);
        localStorage.setItem("articles", JSON.stringify(res.data));
      });
    } catch (error) {
      setIsError(true);
      setData(JSON.parse(localStorage.getItem("articles")));
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  };

  useEffect(() => {
    fetchData(currentPage, pageSize);
  }, [currentPage, pageSize]);

  // Timer
  function isTimerFinished(time) {
    setCurrentPage(1);
    if (!time) {
      fetchData(currentPage, pageSize);
    }
  }

  // Pagination
  const paginate = page => {
    setCurrentPage(page);
  };

  return (
    <div className="headlines">
      <h1 className="hero">
        En Son Haberler
        {!isLoading && !isError && (
          <Timer seconds={timerSeconds} isFinished={isTimerFinished} />
        )}
      </h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div className="headlines-list">
            {data.articles.map((article, index) => {
              return <HeadlineCard headline={article} key={index} />;
            })}
          </div>
          <Pagination
            totalResults={data.totalResults}
            currentPage={currentPage}
            pageSize={pageSize}
            paginate={paginate}
          />
        </div>
      )}
    </div>
  );
}

export default Headlines;
