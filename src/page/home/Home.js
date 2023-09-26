import React from "react";

import { COLORS } from "../../constant/constant";
import Button from "../../components/common/Button";

import culture from "../../assets/images/culture.png";
import science from "../../assets/images/science.png";
import art from "../../assets/images/art.png";
import education from "../../assets/images/education.png";
import calendar1 from "../../assets/images/calendar1.png";
import calendar2 from "../../assets/images/calendar2.png";
import calendar3 from "../../assets/images/calendar3.png";
import Azaa from "../../assets/images/Azaa.png";
import IntroCard from "../../components/cards/IntroCard";
import CalendarCard from "../../components/cards/CalendarCard";
import ResourceCard from "../../components/cards/ResourceCard";
import MemberCard from "../../components/cards/MemberCard";

const introData = [
  {
    title: "Who we are",
    icon: "mi-icon-users",
    content:
      "Mongol Identity is a UK-based non-governmental and non-profit organisation committed to ending the historical misuse of the term “Mongol” through education and awareness-raising about the dignity, culture, and tradition of people of Mongol ethnicity.",
  },
  {
    title: "vision",
    icon: "mi-icon-heart",
    content:
      "We aim to become the leading platform for educational and cultural content about Mongols, which international organizations and individuals can use to promote interculturalism, belonging and diversity",
  },
  {
    title: "mission",
    icon: "mi-icon-flag",
    content:
      "Our mission is to campaign for and advance a greater understanding of the word “Mongol” as it refers to an ethnicity and culture with its own history and language, in order to end the historical misuse of the term.",
  },
];

const calendarData = [
  {
    image: calendar1,
    isOnline: true,
    leftDays: 12,
    date: "2021/08/15",
    title: "Play time festival",
    location: "Mongolia",
  },
  {
    image: calendar2,
    isOnline: false,
    leftDays: 12,
    date: "2021/08/15",
    title: "Tsagaan sar",
    location: "Mongolia",
  },
  {
    image: calendar3,
    isOnline: false,
    leftDays: 12,
    date: "2021/08/15",
    title: "Tsagaan sar",
    location: "Mongolia",
  },
  {
    image: calendar3,
    isOnline: false,
    leftDays: 12,
    date: "2021/08/15",
    title: "Tsagaan sar",
    location: "Mongolia",
  },
];

const resourceData = [
  {
    icon: "mi-icon-medical",
    title: "Medicine & Health",
    guide: "Terminology guide",
    purpose: "for medical professionals",
  },
  {
    icon: "mi-icon-book",
    title: "Education & Linguistics",
    guide: "Open letter",
    purpose: "for dictionaries",
  },
  {
    icon: "mi-icon-film",
    title: "Entertainment & Media",
    guide: "An open letter for",
    purpose: "entertainment industry",
  },
  {
    icon: "mi-icon-medical",
    title: "Medicine & Health",
    guide: "Terminology guide",
    purpose: "for medical professionals",
  },
  {
    icon: "mi-icon-book",
    title: "Education & Linguistics",
    guide: "Open letter",
    purpose: "for dictionaries",
  },
  {
    icon: "mi-icon-film",
    title: "Entertainment & Media",
    guide: "An open letter for",
    purpose: "entertainment industry",
  },
  {
    icon: "mi-icon-medical",
    title: "Medicine & Health",
    guide: "Terminology guide",
    purpose: "for medical professionals",
  },
  {
    icon: "mi-icon-book",
    title: "Education & Linguistics",
    guide: "Open letter",
    purpose: "for dictionaries",
  },
  {
    icon: "mi-icon-film",
    title: "Entertainment & Media",
    guide: "An open letter for",
    purpose: "entertainment industry",
  },
];

const teamData = [
  { image: Azaa, name: "uuganaa ramsay", position: "Founder" },
  { image: Azaa, name: "uuganaa ramsay", position: "Founder" },
  { image: Azaa, name: "uuganaa ramsay", position: "Founder" },
  { image: Azaa, name: "uuganaa ramsay", position: "Founder" },
  { image: Azaa, name: "uuganaa ramsay", position: "Founder" },
  { image: Azaa, name: "uuganaa ramsay", position: "Founder" },
  { image: Azaa, name: "uuganaa ramsay", position: "Founder" },
  { image: Azaa, name: "uuganaa ramsay", position: "Founder" },
];

const Home = () => {
  return (
    <>
      <div className="mi-home-container">
        <div>
          <div className="mi-home-info">
            {introData.map((d, i) => {
              return (
                <IntroCard title={d.title} icon={d.icon} content={d.content} />
              );
            })}
          </div>
          <div className="mi-home-section">
            <div className="mi-home-title">
              <div className="col col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <h2>MONGOL WORLD</h2>
              </div>
            </div>
            <div className="mi-mongol-world row no-gutters">
              <div className="col col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <div className="row no-gutters">
                  <div
                    className="col col-sm-12 col-md-12 col-lg-6 col-xl-6"
                    style={{ padding: 0, paddingRight: 18 }}
                  >
                    <div className="mi-mongol-world-card">
                      <img src={culture} />
                      <div className="mi-mongol-world-gradient-culture"></div>
                      <div className="mi-mongol-world-card-text">
                        <h2>culture</h2>
                        <div className="mi-text">SINCE 1209</div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col col-sm-12 col-md-12 col-lg-6 col-xl-6"
                    style={{ padding: 0, paddingLeft: 18 }}
                  >
                    <div className="mi-mongol-world-card">
                      <img src={science} />
                      <div className="mi-mongol-world-gradient-science"></div>
                      <div className="mi-mongol-world-card-text">
                        <h2>science</h2>
                        <div className="mi-text">SINCE 1209</div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col col-sm-12 col-md-12 col-lg-6 col-xl-6"
                    style={{ padding: 0, paddingRight: 18 }}
                  >
                    <div className="mi-mongol-world-card">
                      <img src={art} />
                      <div className="mi-mongol-world-gradient-art"></div>
                      <div className="mi-mongol-world-card-text">
                        <h2>art</h2>
                        <div className="mi-text">SINCE 1209</div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col col-sm-12 col-md-12 col-lg-6 col-xl-6"
                    style={{ padding: 0, paddingLeft: 18 }}
                  >
                    <div className="mi-mongol-world-card">
                      <img src={education} />
                      <div className="mi-mongol-world-gradient-education"></div>
                      <div className="mi-mongol-world-card-text">
                        <h2>education</h2>
                        <div className="mi-text">SINCE 1209</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mi-home-section">
            <div className="mi-home-title">
              <div className="mi-home-title-more col col-sm-12 col-md-12 col-lg-8 col-xl-8">
                <h2>CALENDAR</h2>
                <div className="mi-see-more">
                  <span>see more</span>
                  <i className="mi-icon-chevron-right-circle" />
                </div>
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col col-sm-12 col-md-12 col-lg-2 col-xl-2"></div>
              <div className="mi-home-card-container col col-sm-12 col-md-12 col-lg-8 col-xl-8">
                <div className="mi-home-card-container-scroll">
                  {calendarData.map((c, i) => {
                    return <CalendarCard data={c} />;
                  })}
                </div>
              </div>
              <div className="col col-sm-12 col-md-12 col-lg-2 col-xl-2"></div>
            </div>
          </div>
          <div className="mi-home-section">
            <div className="mi-home-title">
              <div className="mi-home-title-more col col-sm-12 col-md-12 col-lg-8 col-xl-8">
                <h2>Resources</h2>
                <div className="mi-see-more">
                  <span>see more</span>
                  <i className="mi-icon-chevron-right-circle" />
                </div>
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col col-sm-12 col-md-12 col-lg-2 col-xl-2"></div>
              <div className="mi-home-card-container col col-sm-12 col-md-12 col-lg-8 col-xl-8">
                <div className="mi-home-card-container-scroll">
                  {resourceData.map((r, i) => {
                    return <ResourceCard data={r} />;
                  })}
                </div>
              </div>
              <div className="col col-sm-12 col-md-12 col-lg-2 col-xl-2"></div>
            </div>
          </div>
          <div className="mi-home-section">
            <div className="mi-home-title">
              <div className="mi-home-title-more col col-sm-12 col-md-12 col-lg-8 col-xl-8">
                <h2>Our team</h2>
                <div className="mi-see-more">
                  <span>see more</span>
                  <i className="mi-icon-chevron-right-circle" />
                </div>
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col col-sm-12 col-md-12 col-lg-2 col-xl-2"></div>
              <div className="mi-home-card-container col col-sm-12 col-md-12 col-lg-8 col-xl-8">
                <div className="mi-home-card-container-scroll">
                  {teamData.map((t, i) => {
                    return <MemberCard data={t} />;
                  })}
                </div>
              </div>
              <div className="col col-sm-12 col-md-12 col-lg-2 col-xl-2"></div>
            </div>
          </div>
          <div className="mi-home-section">
            <div className="mi-home-title">
              <div className="col col-sm-12 col-md-12 col-lg-8 col-xl-8">
                <h2>Get involved</h2>
                <div className="mi-home-sub-title">
                  Passionate about creating a fairer, more just and equal
                  society?
                </div>
              </div>
            </div>
            <div className="mi-home-card-container row no-gutters">
              <div className="col col-sm-12 col-md-12 col-lg-2 col-xl-2"></div>
              <div className="col col-sm-12 col-md-12 col-lg-8 col-xl-8">
                <div className="row no-gutters">
                  <div className="col col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <div className="mi-get-involved-card mi-get-involved-card-first">
                      <div className="mi-get-involved-card-header">
                        <div className="mi-get-involved-card-icon">
                          <i className="mi-icon-gift" />
                        </div>
                        <div className="mi-get-involved-card-title">
                          {"Donate & Fundraise"}
                        </div>
                      </div>
                      <div className="mi-get-involved-card-footer">
                        <Button
                          title="Donate"
                          type="secondary"
                          size="18px"
                          width={"150px"}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <div className="mi-get-involved-card mi-get-involved-card-second">
                      <div className="mi-get-involved-card-header">
                        <div className="mi-get-involved-card-icon">
                          <i className="mi-icon-hand" />
                        </div>
                        <div className="mi-get-involved-card-title">
                          {"Volunteer for us"}
                        </div>
                      </div>
                      <div className="mi-get-involved-card-footer">
                        <Button
                          title="Apply"
                          type="primary1"
                          size="18px"
                          width={"150px"}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <div className="mi-get-involved-card mi-get-involved-card-third">
                      <div className="mi-get-involved-card-header">
                        <div className="mi-get-involved-card-icon">
                          <i className="mi-icon-corner-up-right" />
                        </div>
                        <div className="mi-get-involved-card-title">
                          {"Join our expert list"}
                        </div>
                      </div>
                      <div className="mi-get-involved-card-footer">
                        <Button
                          title="Register"
                          type="secondary3"
                          size="18px"
                          width={"150px"}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <div className="mi-get-involved-card mi-get-involved-card-fourth">
                      <div className="mi-get-involved-card-header">
                        <div className="mi-get-involved-card-icon">
                          <i className="mi-icon-handshake" />
                        </div>
                        <div className="mi-get-involved-card-title">
                          {"Work with us"}
                        </div>
                      </div>
                      <div className="mi-get-involved-card-footer">
                        <Button
                          title="Collaborate"
                          type="secondary2"
                          size="18px"
                          width={"150px"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
