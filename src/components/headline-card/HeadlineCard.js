import React from "react";
import prettyTime from "../../helpers/PrettyTime"

// Styles
import "./HeadlineCard.scss";

// Image
import placeholderImg from '../../img/placeholder.jpg';

function HeadlineCard({headline}) {
  function removeSource(title) {
    if (title == null || title.indexOf(' - ') < 0) {
      return title;
    }
    var parts = title.split(' - ');
    parts.pop();
    return parts.join(' - ');
  }

  return (
    <article className="headlines-list__card">
      <figure>
        <a href={headline.url} target="_blank" rel="noopener noreferrer">
          {headline.urlToImage ? (
            <img src={headline.urlToImage} alt={removeSource(headline.title)} />
          ) : (
            <img src={placeholderImg} alt={removeSource(headline.title)} />
          )}
        </a>
      </figure>
      <figcaption>
        <div className="body">
          <a href={headline.url} target="_blank" rel="noopener noreferrer">
            {removeSource(headline.title)}
          </a>
        </div>
        <div className="tools">
          <span>{headline.source.name}</span>
          <span>{prettyTime(headline.publishedAt)}</span>
        </div>
      </figcaption>
    </article>
  );
}

export default HeadlineCard;
