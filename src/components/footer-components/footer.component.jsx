/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"

import "./footer.styles.scss"

const Footer = () => (
  <footer className="footer">
    <div className="footer-icon">
      <div className="icon">
        <a href="https://t.me/adamovuch_ps">
          <img
            src="https://cdn0.iconfinder.com/data/icons/social-media-2092/100/social-56-512.png"
            alt="telegram"
          />
        </a>
      </div>
      <div className="icon">
        <a href="https://www.instagram.com/adamovich_ps/?igshid=2rl7e5y71xkf">
          <img
            src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_instagram-512.png"
            alt="instagram"
          />
        </a>
      </div>
      <div className="icon">
        <a href="https://github.com/puchaps">
          <img
            src="https://cdn4.iconfinder.com/data/icons/social-media-and-logos-11/32/Logo_Github-256.png"
            alt="github"
          />
        </a>
      </div>
    </div>
    <div className="footer-year">&#169; 2021</div>
  </footer>
)

export default Footer
