import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { goToTopOfPage } from '../../util/goToTopPge';
import axios from 'axios';
import { useContext } from 'react';
import { newsContext } from '../context/NewsContext';
import PostComponent from '../secondary-pages/PostComponent';
import { v4 as uuidv4 } from 'uuid';
function OneNewsPost() {
  const { id } = useParams();
  const { newsState, dispatchNewsState } = useContext(newsContext);
  const [isDeleted, setIsDeleted] = useState(false);
  const user = JSON.parse(localStorage.getItem('role'));

  const onePost = JSON.parse(localStorage.getItem('CURRENT_NEWS')).filter(
    (post) => post._id === id
  );

  function handlePostDelete() {
    axios
      .delete(
        `https://bohemian-kids-backend-server.onrender.com/posts/deletePost/${id}`
      )
      .then((res) => {
        dispatchNewsState({ type: 'DELETE_POST', payload: id });
        setIsDeleted(true);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="news_background_container">
      <article className="news_content_container">
        {isDeleted ? (
          <p>Post deleted.</p>
        ) : (
          <PostComponent
            _id={onePost[0]._id}
            title={onePost[0].title}
            description={onePost[0].description}
            img={onePost[0].img}
            date={onePost[0].date}
          />
        )}

        <section className="news_post_button_container">
          <Link
            onClick={goToTopOfPage}
            aria-label="News button / link"
            className="button_link"
            to="/News"
          >
            <button className="button_large_colorThree">BACK TO NEWS</button>
          </Link>
          {isDeleted ? null : user === 'admin' ? (
            <Link className="button_link" to="#" onClick={handlePostDelete}>
              <button className="button_large_colorFour">DELETE</button>
            </Link>
          ) : null}
        </section>
      </article>
    </div>
  );
}

export default OneNewsPost;
