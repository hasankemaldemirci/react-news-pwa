import React, { useEffect, useState } from "react";
import { fetchAPI } from "../../app/api";

// Components
import HeadlineCard from "../headline-card/HeadlineCard";
import Loader from "../loader/Loader";
import Timer from "../timer/Timer";

// Styles
import "./Headlines.scss";

function Headlines() {
  const [data, setData] = useState({ articles: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      await fetchAPI().then(res => {
        setData(res.data);
        localStorage.setItem('articles', JSON.stringify(res.data));
      });
    } catch (error) {
      setIsError(true);
      setData(JSON.parse(localStorage.getItem('articles')));
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function isTimerFinished(time) {
    if (!time) {
      fetchData();
    }
  }

  return (
    <div className="headlines">
      <h1 className="hero">
        En Son Haberler
        {!isLoading && !isError &&
          <Timer seconds="59" isFinished={isTimerFinished} />
        }
      </h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="headlines-list">
          {data.articles.map((article, index) => {
            return (
              <HeadlineCard
                headline={article}
                key={index}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Headlines;
