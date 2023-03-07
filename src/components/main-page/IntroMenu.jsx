import React from 'react';
import { Link } from 'react-router-dom';
import { goToTopOfPage } from '../../util/goToTopPge';

function IntroMenu() {
  return (
    <>
      <article className="intro_article_container">
        <h1 className="intro_heading">MENU</h1>
        <section className="intro_img_container">
          <img
            className="intro_img_landscape"
            src="https://images.squarespace-cdn.com/content/v1/5e935794663e0a3ac22fcc6a/1586983505415-VN0MQUL596ARIP2BDRQ0/DSC_0328.jpeg?format=2500w"
            alt=""
          />
        </section>

        <section className="intro_menu_text_container">
          <p className="intro_menu_text">
            Our focus is on freshly brewed coffee; available as espresso,
            hand-brew filter, batch-brew filter and, naturally, all of your
            milk-based favourites.
          </p>
          <p className="intro_menu_text">
            We work with a local dairy to ensure the best of milks and have a
            long-standing relationship with Oatly for those of you of a vegan
            persuasion.
          </p>
          <p className="intro_menu_text">
            We source our coffee from all across Europe but we do tend to shine
            a light on the under-represented scenes of the countries to the east
            of Leipzig and as such regularly serve the best filter roasts coming
            out of the Czech Republic, Poland and beyond.
          </p>
          <p className="intro_menu_text">
            Filter coffee changes weekly (sometimes sooner, when they prove to
            be really popular) so there is always something new to experience.
          </p>
          <p className="intro_menu_text">
            The house espresso is roasted by our good friends in Münster,
            Roestbar. We created this blend to cut through milk and deliver the
            flavours of a spiced hot chocolate, despite there being not a hint
            of cocoa or a spice insight.
          </p>
        </section>
        <section className="intro_button_container">
          <Link
            onClick={goToTopOfPage}
            aria-label="Menu button / link"
            className="button_link"
            to="/Menu"
          >
            <div className="button_large_colorTwo">MENU</div>
          </Link>
        </section>
      </article>
    </>
  );
}

export default IntroMenu;
