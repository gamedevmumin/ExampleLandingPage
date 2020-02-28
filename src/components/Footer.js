import React from "react";
import { FaTwitter, FaFacebookSquare, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="footer__social-media-list">
        <li>
          <a href="http://twitter.com">
            <FaTwitter className="footer__social-media-list__item" />
          </a>
        </li>
        <li>
          <a href="http://facebook.com">
            <FaFacebookSquare className="footer__social-media-list__item" />
          </a>
        </li>
        <li>
          <a href="http://instagram.com">
            <FaInstagram className="footer__social-media-list__item" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
