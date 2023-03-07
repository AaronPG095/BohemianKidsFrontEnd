import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { newsContext } from '../context/NewsContext';
import UploadImage from './UploadImage';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AddBlogPost() {
  const { newsState, dispatchNewsState } = useContext(newsContext);

  const [post, setPost] = useState({
    title: '',
    description: '',
    img: '',
    date: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;
    setPost((prevValue) => ({ ...prevValue, [name]: value }));
  }

  function handleAddPost(e) {
    e.preventDefault();
    setIsLoading(true);
    axios
      .put('https://bohemian-kids-backend-server.onrender.com/posts/addPost', {
        title: post.title,
        description: post.description,
        img: post.img,
        date: new Date(),
      })
      .then((post) => {
        setIsLoading(false);
        setPost({
          title: '',
          description: '',
          img: '',
          date: '',
        });
        setMessage(post.data.msg);
        dispatchNewsState({
          type: 'ADD_POST',
          payload: {
            _id: post.data.post._id,
            title: post.data.post.title,
            img: post.data.post.img,
            description: post.data.post.description,
            date: post.data.post.date,
          },
        });
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }

  return (
    <main className="add_blog_post_page">
      <article className="add_blog_post_outer_container">
        <section className="add_blog_post_inner_container">
          <h1 className="add_blog_post_heading">ADD NEW NEWS</h1>
          {message && <p>{message}</p>}
          <form className="add_blog_post_form" onSubmit={handleAddPost}>
            <label className="add_blog_post_form_item" htmlFor="title">
              <input
                value={post.title}
                id="title"
                onChange={handleChange}
                className="add_blog_post_form_inputField"
                type="text"
                name="title"
                placeholder="TITLE"
              />
            </label>
            <div className="add_blog_post_form_uploadImage_container">
              <label
                className="add_blog_post_form_uploadImage_item"
                htmlFor="img"
              >
                UPLOAD img:
                <UploadImage setPost={setPost} />
              </label>
            </div>

            <label className="add_blog_post_form_item" htmlFor="description">
              <textarea
                value={post.description}
                onChange={handleChange}
                className="add_blog_post_form_largeInputField"
                type="text"
                name="description"
                id="description"
                placeholder="WHAT DO YOU HAVE TO SAY?"
                rows="10"
              />
            </label>

            <div className="add_blog_post_button_container" htmlFor="submit">
              {isLoading ? (
                <button className="button_link" type="submit">
                  <div className="button_add_blog_post">
                    <i
                      className="fas fa-spinner fa-spin"
                      style={{ marginRight: '5px', marginBottom: '3px' }}
                    ></i>
                    POST
                  </div>
                </button>
              ) : (
                <button className="button_link" type="submit">
                  <div className="button_add_blog_post">
                    <i style={{ marginRight: '5px', marginBottom: '3px' }}></i>
                    POST
                  </div>
                </button>
              )}
            </div>
          </form>
        </section>
      </article>
    </main>
  );
}

export default AddBlogPost;
