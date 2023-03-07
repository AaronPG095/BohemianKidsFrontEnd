import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { goToTopOfPage } from '../../util/goToTopPge';
import axios from 'axios';
import { useContext } from 'react';
import { newsContext } from '../context/NewsContext';
import PostComponent from '../secondary-pages/PostComponent';
import { v4 as uuidv4 } from 'uuid';
function IntroNews() {
  const [isLoading, setIsLoading] = useState(true);

  const { newsState, dispatchNewsState } = useContext(newsContext);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        'https://bohemian-kids-backend-server.onrender.com/posts/getAllPosts'
      )
      .then((posts) => {
        dispatchNewsState({
          type: 'NEWS_INITIALIZATION',
          payload: posts.data.posts.sort((a, b) => {
            if (new Date(a.date).getTime() < new Date(b.date).getTime())
              return -1;
            if (new Date(a.date).getTime() > new Date(b.date).getTime())
              return 1;
            return 0;
          }),
        });
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, []);

  return (
    <div className="news_background_container">
      <article className="news_content_container">
        <h1 className="intro_heading">NEWS</h1>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <PostComponent
              _id={newsState[newsState.length - 1]._id}
              title={newsState[newsState.length - 1].title}
              description={newsState[newsState.length - 1].description}
              img={newsState[newsState.length - 1].img}
              date={newsState[newsState.length - 1].date}
            />
          </>
        )}
        <section className="intro_button_container">
          <Link
            onClick={goToTopOfPage}
            aria-label="News button / link"
            className="button_link"
            to="/News"
          >
            <div className="button_large_colorThree"> NEWS</div>
          </Link>
        </section>
      </article>
    </div>
  );
}

export default IntroNews;
