import React from "react";
import Button from "./common/Button";

import logo from "../assets/images/logo.png";
import oscr from "../assets/images/oscr.png";

const Footer = () => {
  return (
    <div className="mi-footer-container">
      <div className="mi-footer-report">
        <h1>Report an incident</h1>
        <Button title="REPORT" type="primary-white" size="28px" />
      </div>
      <div className="mi-footer row no-gutters">
        <div className="col col-sm-12 col-md-4 col-lg-4 col-xl-4 mi-copyright">
          <div>
            <img src={logo} className="mi-footer-logo" />
            <div className="mi-text-small">
              Copyright © 2021 Mongol Identity
            </div>
            <div className="mi-text-small">All rights reserved</div>
            <div className="mi-social-links">
              <a
                className="mi-social-link"
                href="https://facebook.com"
                target="_blank"
              >
                <i className="mi-icon-facebook" />
              </a>
              <a
                className="mi-social-link"
                href="https://twitter.com"
                target="_blank"
              >
                <i className="mi-icon-twitter" />
              </a>
              <a
                className="mi-social-link"
                href="https://linkedin.com"
                target="_blank"
              >
                <i className="mi-icon-linkedin" />
              </a>
              <a
                className="mi-social-link"
                href="https://youtube.com"
                target="_blank"
              >
                <i className="mi-icon-youtube" />
              </a>
              <a
                className="mi-social-link"
                href="https://instagram.com"
                target="_blank"
              >
                <i className="mi-icon-instagram" />
              </a>
              <a
                className="mi-social-link"
                href="https://gmail.com"
                target="_blank"
              >
                <i className="mi-icon-mail" />
              </a>
            </div>
          </div>
        </div>
        <div className="col col-sm-12 col-md-8 col-lg-8 col-xl-8">
          <div className="row no-gutter">
            <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="row no-gutter">
                <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <h6 className="mi-text-small mi-footer-menu-title">
                    Mongol Identity
                  </h6>
                  <a className="mi-footer-menu mi-text" href="/mongol-world">
                    Mongol World
                  </a>
                  <div className="mi-footer-menu-split"></div>
                  <a className="mi-footer-menu mi-text" href="/latest">
                    Latest
                  </a>
                  <div className="mi-footer-menu-split"></div>
                  <a className="mi-footer-menu mi-text" href="/calendar">
                    Calendar
                  </a>
                  <div className="mi-footer-menu-split"></div>
                  <a className="mi-footer-menu mi-text" href="/resources">
                    Resources
                  </a>
                  <div className="mi-footer-menu-split"></div>
                  <a className="mi-footer-menu mi-text" href="/about-us">
                    About us
                  </a>
                  <div className="mi-footer-menu-split"></div>
                </div>
                <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <h6 className="mi-text-small mi-footer-menu-title">
                    Get Involved
                  </h6>
                  <a
                    className="mi-footer-menu mi-text"
                    href="/donate-fundraise"
                  >
                    Donate & Fundraise
                  </a>
                  <div className="mi-footer-menu-split"></div>
                  <a className="mi-footer-menu mi-text" href="/volunteer">
                    Volunteer
                  </a>
                  <div className="mi-footer-menu-split"></div>
                  <a className="mi-footer-menu mi-text" href="/join">
                    Join as expert
                  </a>
                  <div className="mi-footer-menu-split"></div>
                  <a className="mi-footer-menu mi-text" href="/work-with-us">
                    Work with us
                  </a>
                  <div className="mi-footer-menu-split"></div>
                  <a className="mi-footer-menu mi-text" href="/report">
                    Report
                  </a>
                  <div className="mi-footer-menu-split"></div>
                </div>
              </div>
            </div>
            <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <h6 className="mi-text-small mi-footer-menu-title">
                Subscribe for Newsletter
              </h6>
              <div className="mi-email-subscribe">
                <input placeholder="Your email address"/>
                <div className="mi-email-subscribe-button">
                  <i className="mi-icon-send" />
                </div>
              </div>
              <img className="mi-footer-oscr" src={oscr} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
