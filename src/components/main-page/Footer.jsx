import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import { goToTopOfPage } from '../../util/goToTopPge';

function Footer() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <footer className="footer_container">
      <section className="footer_button_container">
        {path === '/Imprint' ? (
          <Link
            onClick={goToTopOfPage}
            aria-label="Home button from Imprint"
            to="/"
            className="button_link"
          >
            <div className="button_phone_footer">HOME</div>
          </Link>
        ) : (
          <Link
            onClick={goToTopOfPage}
            aria-label="Legal information button / link"
            to="Imprint"
            className="button_link"
          >
            <div className="button_phone_footer">IMPRINT</div>
          </Link>
        )}
      </section>
      <section className="about_container"></section>
      <section className="footer_social_media_container">
        <p>
          <a
            aria-label="Instagram icon and link"
            className="footer_icon_link"
            href="https://www.instagram.com/bohemiankids.cafe/?hl=en"
          >
            <FaInstagram className="footer_social_media_icon" />
          </a>
        </p>

        <a
          aria-label="Facebook icon and link"
          className="footer_icon_link"
          href="https://www.facebook.com/BohemianKidsCafe/"
        >
          <FaFacebookSquare className="footer_social_media_icon" />
        </a>
      </section>
    </footer>
  );
}

export default Footer;
