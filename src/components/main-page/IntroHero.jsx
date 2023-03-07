import React from 'react';

function IntroHero() {
  return (
    <article className="intro_article_container">
      <section className="intro_text_container">
        <h1 className="intro_hero_text_large">
          WE BREW SPECIALITY COFFEE IN THE HEART OF LEIPZIG.OUR MENU IS BASED
          AROUND BRUNCH CLASSICS AND SWEET TREATS.
        </h1>
        <p className="intro_hero_text_large">
          WE ARE OPEN FROM 0900 - 1800 MONDAY TO SATURDAY.
        </p>
        <p className="intro_hero_text_large">
          VISIT US AT UNIVERSITTSSTR. 18 04109 LEIPZIG
        </p>
      </section>
      <section className="small_text_container">
        <p className="intro_hero_text_small">
          A little cafe in the city centre, next to the oldest erotic shop in
          Leipzig. About as we respond to the question, where because of our
          Café is located. We Bara and Michael, have actually studied law in
          Münster, at the latest, in Leipzig, we have not realised, however,
          that IT is the right career for us.
        </p>

        <p className="intro_hero_text_small">
          For this reason, we pursue the big step dared our common dream and
          opened a cafe. And we must confess, there is nothing Better in the
          world than to the passion into a profession.
        </p>

        <p className="intro_hero_text_small">
          We are still every morning with the feeling that the decision we made
          at that time, was exactly the Right thing to do. To us, it is
          especially important that all of us feel our guests at ease. We have
          built up a really cool Team, the day with freshly brewed coffee and
          home-made cake, which is baked right in the cafe, to be supplied.
        </p>
      </section>

      <section className="intro_img_container">
        <img
          className="intro_img_portrait"
          src="https://images.squarespace-cdn.com/content/v1/5e935794663e0a3ac22fcc6a/1587562268977-LMBWTILFUBXANW14V11T/IMG_2114.jpeg?format=1000w"
          alt="Introduction"
        />
      </section>
    </article>
  );
}

export default IntroHero;
