import React from "react";
import logo from "../assets/images/logo.png";
import home_image from "../assets/images/home_image.png";
import news_image from "../assets/images/news_image.png";
import about_us_image from "../assets/images/about_us_image.png";
import { COLORS } from "../constant/constant";
import Button from "./common/Button";
import DatePicker from "./common/DatePicker";
import NavButton from "./common/NavButton";
import SearchInput from "./common/SearchInput";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const onLogo = () => {
    navigate("/home");
  };

  return (
    <div>
      <div className="mi-header">
        <img src={logo} className="mi-header-logo" onClick={onLogo} />
        <div className="mi-header-items">
          <SearchInput />
          <DatePicker />
          <Button title="Donate" type="secondary" size="18px" />
        </div>
      </div>
      <div className="mi-home-menu-container">
        <img
          src={
            window.location.pathname.includes("/home")
              ? home_image
              : window.location.pathname.includes("/news")
              ? news_image
              : about_us_image
          }
          className="mi-home-image"
        />
        <div className="mi-home-image-blur"></div>
        <h1 className="mi-title">Mongol Identity</h1>
        <div className="mi-home-menus">
          <div className="mi-home-menu">
            <NavButton title="HOME" color={COLORS.primary} to={"home"} />
          </div>
          <div className="mi-home-menu" href="/mongol-world">
            <NavButton
              title="MONGOL WORLD"
              color={COLORS.primary}
              to={"mongol-world"}
            />
          </div>
          <div className="mi-home-menu">
            <NavButton
              title="CALENDAR"
              color={COLORS.primary}
              to={"calendar"}
            />
          </div>
          <div className="mi-home-menu">
            <NavButton title="NEWS" color={COLORS.primary} to={"news"} />
          </div>
          <div className="mi-home-menu">
            <NavButton
              title="RESOURCES"
              color={COLORS.primary}
              to={"resources"}
            />
          </div>
          <div className="mi-home-menu">
            <NavButton
              title="ABOUT US"
              color={COLORS.primary}
              to={"about-us"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
