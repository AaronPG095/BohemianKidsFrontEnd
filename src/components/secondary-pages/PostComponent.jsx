import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function PostComponent({ title, date, img, description, _id }) {
  const path = useLocation();

  return (
    <section className="news_post_container">
      <div className="news_post_title_container">
        <h2 className="news_post_title">{title}</h2>
        <p className="news_post_title_label">
          Posted: {new Date(date).toLocaleDateString()}
        </p>
      </div>

      <div className="news_img_container">
        <img className="news_img" src={img} alt="News Post" />
      </div>

      <div className="news_text_container">
        {path.pathname.endsWith('News') || path.pathname.endsWith('/') ? (
          <p className="news_medium_text">
            {description.substring(0, 370)} ...
          </p>
        ) : (
          <p className="news_medium_text">{description}</p>
        )}
      </div>
      <div className="news_post_button_container">
        {path.pathname.endsWith('News') || path.pathname.endsWith('/') ? (
          <Link className="button_link" to={`/News/${_id}`}>
            <button className="button_large_colorFour">READ MORE</button>
          </Link>
        ) : null}
      </div>
    </section>
  );
}

export default PostComponent;
