import React from 'react';
import { MenuItems } from '../../data/Menu';
import { Link } from 'react-router-dom';
import { goToTopOfPage } from '../../util/goToTopPge';

function Menu() {
  return (
    <main className='menu_background_container'>
      <article className='menu_content_container'>
        <h1 className='menu_heading'>MENU</h1>
        <section className='menu_text_container'>
          <p className='menu_medium_text'>
            Our focus is on freshly brewed coffee; available as espresso,
            hand-brew filter, batch-brew filter and, naturally, all of your
            milk-based favourites. We work with a local dairy to ensure the best
            of milks and have a long-standing relationship with Oatly for those
            of you of a vegan persuasion.
          </p>
          <p className='menu_medium_text'>
            We source our coffee from all across Europe but we do tend to shine
            a light on the under-represented scenes of the countries to the east
            of Leipzig and as such regularly serve the best filter roasts coming
            out of the Czech Republic, Poland and beyond.
          </p>

          <p className='menu_medium_text'>
            The filter coffee’s change weekly (sometimes sooner, when they prove
            to be really popular) so there is always something new for regulars
            to experience.
          </p>
          <p className='menu_medium_text'>
            Our house espresso is roasted by our good friends in Münster,
            Roestbar. We created this blend to cut through milk and deliver the
            flavours of a spiced hot chocolate, despite there being not a hint
            of cocoa or a spice insight.
          </p>
        </section>

        <h2 className='menu_subHeading'>HOT</h2>
        <section className='menu_list_container'>
          {MenuItems.hot.map((ele, index) => {
            return (
              <ul key={index} className='menu_list_text'>
                <li>{ele.name}</li>
                <li>{ele.price}</li>
              </ul>
            );
          })}
        </section>

        <section className='menu_img_container'>
          <img
            className='menu_img'
            src='https://images.unsplash.com/photo-1504630083234-14187a9df0f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdCUyMGNvZmZlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
            alt='Hot Drinks Menu'
          />
        </section>

        {/**Cold Coffee Section */}

        <h2 className='menu_subHeading'>COLD</h2>
        <section className='menu_list_container'>
          {MenuItems.cold.map((ele, index) => {
            return (
              <ul key={index} className='menu_list_text'>
                <li>{ele.name}</li>
                <li>{ele.price}</li>
              </ul>
            );
          })}

          <section className='menu_img_container'>
            <img
              className='menu_img'
              src='https://images.unsplash.com/photo-1495214783159-3503fd1b572d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJyZWFrZmFzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
              alt='image_breakfast'
            />
          </section>

          <section className='menu_text_container'>
            <p className='menu_medium_text'>
              Our focus is on freshly brewed coffee; available as espresso,
              hand-brew filter, batch-brew filter and, naturally, all of your
              milk-based favourites. We work with a local dairy to ensure the
              best of milks and have a long-standing relationship with Oatly for
              those of you of a vegan persuasion.
            </p>
            <p className='menu_medium_text'>
              We source our coffee from all across Europe but we do tend to
              shine a light on the under-represented scenes of the countries to
              the east of Leipzig and as such regularly serve the best filter
              roasts coming out of the Czech Republic, Poland and beyond.
            </p>
            <p className='menu_medium_text'>
              The filter coffee’s change weekly (sometimes sooner, when they
              prove to be really popular) so there is always something new for
              regulars to experience.
            </p>
            <p className='menu_medium_text'>
              Our house espresso is roasted by our good friends in Münster,
              Roestbar. We created this blend to cut through milk and deliver
              the flavours of a spiced hot chocolate, despite there being not a
              hint of cocoa or a spice insight.
            </p>
          </section>
        </section>
        <section className='menu_img_container'>
          <img
            className='menu_img'
            src='https://images.unsplash.com/photo-1495214783159-3503fd1b572d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJyZWFrZmFzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
            alt='image_breakfast'
          />
        </section>

        {/**Breakfast Section */}
        <h2 className='menu_subHeading'>BREAKFAST</h2>
        <time>bis 1200 Mon - Fri </time>
        <time>bis 1400 Sat </time>

        <section className='menu_list_container'>
          {MenuItems.breakfast.map((ele, index) => {
            return (
              <div key={index} className='menu_item_container'>
                <ul className='menu_list_text'>
                  <li>{ele.name}</li>
                  <li>{ele.price}</li>
                </ul>
                <ul className='flex-align-center'>
                  {ele.ingredients.map((ele, index) => {
                    return <span key={index}>{ele} </span>;
                  })}
                </ul>
              </div>
            );
          })}
        </section>
        <section className='menu_img_container'>
          <img
            className='menu_img'
            src='https://images.unsplash.com/photo-1565895405138-6c3a1555da6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bHVuY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
            alt='image_lunch'
          />
        </section>
        {/**Lunch Section */}
        <h2 className='menu_subHeading'>LUNCH</h2>
        <time>ab 1200 Mon - Fri </time>
        <time>ab 1400 Sat </time>

        <section className='menu_list_container'>
          {MenuItems.lunch.map((ele, index) => {
            return (
              <div key={index} className='menu_item_container'>
                <ul className='menu_list_text'>
                  <li>{ele.name}</li>
                  <li>{ele.price}</li>
                </ul>
                <ul className='flex-align-center'>
                  {ele.ingredients.map((ele, index) => {
                    return <span key={index}>{ele} </span>;
                  })}
                </ul>
              </div>
            );
          })}
        </section>
        <section className='menu_home_button_container'>
          <Link
            onClick={goToTopOfPage}
            aria-label='Home button'
            className='button_link'
            to={'/'}
          >
            <button className='button_large_rightSideBoxShadow_colorThree'>
              HOME
            </button>
          </Link>
        </section>
      </article>
    </main>
  );
}
export default Menu;
