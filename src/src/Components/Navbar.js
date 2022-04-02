import React, { useState, useEffect } from "react";
import { HashLink as Link} from "react-router-hash-link";
import "../App.css";
import { css } from "@emotion/css";

export default function Navbar() {
  const [navSize, setnavSize] = useState("6rem");
  const [navShadow, setnavShadow] = useState("none");
  const [navColor, setnavColor] = useState("transparent");
  const [font, setFont] = useState("#F6F6F6");
  const [fontShadow, setfontShadow] = useState("#382a26");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#F6F6F6") : setnavColor("transparent");
    window.scrollY > 10 ? setFont("#382a26") : setFont("#F6F6F6");
    window.scrollY > 10 ? setfontShadow("none") : setfontShadow("#382a26");
    window.scrollY > 10 ? setnavShadow("0px 1px 10px #999") : setnavShadow("none");
    window.scrollY > 10 ? setnavSize("4rem") : setnavSize("6rem");


  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const hoverStyle = css`
    filter: drop-shadow(0px 0px 5px ${fontShadow});
    color: ${font};
    text-decoration : none;
    position: relative;
    &:hover {
      color: ${font};
    }
    &::after {
      position: absolute;
      bottom: -4px;
      left: 0;
      content: '';
      width: 100%;
      height: 2px;
      background: ${font};
      transform: scale(0, 1);
      transform-origin: center top;
      transition: transform .3s;
    }
    &:hover::after { 
      transform: scale(1, 1);
    }

  `;

  return (
    <div className="navbar">
      <nav
        style={{
          backgroundColor: navColor,
          height: navSize,
          boxShadow: navShadow,
          transition: "all 1s",
          textDecoration: "none",
        }}
      >
        <ul className="nav-links">
          <li>
            <Link className={hoverStyle} smooth to="#home">
              Top
            </Link>
          </li>
          <li>
            <Link className={hoverStyle} smooth to="#profile">
              Profile
            </Link>
          </li>
          <li>
            <Link className={hoverStyle} smooth to="#works">
              Works
            </Link>
          </li>
          <li>
            <Link className={hoverStyle} smooth to="#skills">
              Skills
            </Link>
          </li>
          <li>
            <Link className={hoverStyle} smooth to="#contact">
              Contact
            </Link>
          </li>
        </ul>

      </nav>
    </div>
  );
}
