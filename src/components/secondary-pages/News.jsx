import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { goToTopOfPage } from '../../util/goToTopPge';
import { newsContext } from '../context/NewsContext';
import PostComponent from './PostComponent';
import { v4 as uuidv4 } from 'uuid';
function News() {
  const { newsState, dispatchNewsState } = useContext(newsContext);
  return (
    <>
      <main className="news_background_container">
        {/** I just wrap all the sections in menu_background container */}
        <article className="news_content_container">
          <h1 className="news_heading">NEWS</h1>
          {newsState.map((post) => (
            <PostComponent
              key={uuidv4()}
              _id={post._id}
              title={post.title}
              description={post.description}
              date={post.date}
              img={post.img}
            />
          ))}

          <section className="news_home_button_container">
            <Link
              onClick={goToTopOfPage}
              aria-label="Home button"
              className="button_link"
              to={'/'}
            >
              <button className="button_large_rightSideBoxShadow_colorFour">
                HOME
              </button>
            </Link>
          </section>
        </article>
      </main>
    </>
  );
}
export default News;
