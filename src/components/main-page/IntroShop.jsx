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
              src="https://images.squarespace-cdn.com/content/v1/5e935794663e0a3ac22fcc6a/1608160457149-UOF08FAX8C60W2UTOZYX/1187EB67-BD66-4E00-A188-8976CA267AD2_1_201_a.jpeg?format=2500w"
              alt=""
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
              src="https://images.squarespace-cdn.com/content/v1/5e935794663e0a3ac22fcc6a/1608160457149-UOF08FAX8C60W2UTOZYX/1187EB67-BD66-4E00-A188-8976CA267AD2_1_201_a.jpeg?format=2500w"
              alt=""
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
              src="https://images.squarespace-cdn.com/content/v1/5e935794663e0a3ac22fcc6a/1608160457149-UOF08FAX8C60W2UTOZYX/1187EB67-BD66-4E00-A188-8976CA267AD2_1_201_a.jpeg?format=2500w"
              alt=""
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
