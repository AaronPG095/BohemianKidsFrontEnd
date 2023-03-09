import React from 'react';
import { Link } from 'react-router-dom';
import { goToTopOfPage } from '../../util/goToTopPge';

function IntroShop() {
  return (
    <>
      <article className="intro_article_container">
        <h1 className="intro_heading">SHOP</h1>
        <section className="shop_category_container">
          <div className="intro_img_container">
            <img
              className="intro_img_landscape"
              src="https://ucarecdn.com/c9f02f9c-c7e6-4a04-86d4-b2dad102692b/-/preview/jzzGlIPh"
              alt="showing shop section"
            />
          </div>

          <Link
            className="button_link"
            onClick={goToTopOfPage}
            aria-label="Shop coffee section link"
            to="/Shop"
          >
            <div className="button_large_colorFour">COFFEE</div>
          </Link>
        </section>

        <section className="shop_category_container">
          <div className="intro_img_container">
            <img
              className="intro_img_landscape"
              src="https://www.coffeedesk.com/blog/wp-content/uploads/2019/07/JJF_3805-1920x1280.jpg"
              alt="showing shop section"
            />
          </div>
          <Link
            onClick={goToTopOfPage}
            aria-label="Shop equipment section link"
            className="button_link"
            to="/Shop"
          >
            <div className="button_large_colorFour">EQUIPMENT</div>
          </Link>
        </section>

        <section className="shop_category_container">
          <div className="intro_img_container">
            <img
              className="intro_img_landscape"
              src="https://cdn.shopify.com/s/files/1/0504/8654/2523/products/custom_resized_5e291184-b9e8-4d01-a70f-980f29062188_1400x.jpg?v=1660210235"
              alt="showing shop section"
            />
          </div>

          <Link
            onClick={goToTopOfPage}
            aria-label="Shop merchandise section link"
            className="button_link"
            to="/Shop"
          >
            <div className="button_large_colorFour">MERCHANDISE</div>
          </Link>
        </section>
      </article>
    </>
  );
}

export default IntroShop;
