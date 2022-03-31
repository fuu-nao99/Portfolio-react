import React, { useState, useEffect } from "react";
import { HashLink as Link} from "react-router-hash-link";
import "../App.css";
import { css } from "@emotion/css";

export default function Navbar() {
  const [navSize, setnavSize] = useState("6rem");
  const [navShadow, setnavShadow] = useState("none");
  const [navColor, setnavColor] = useState("transparent");
  const [font, setFont] = useState("#8a8a8a");
  const [fontColor, setfontColor] = useState("#F6F6F6");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#F6F6F6") : setnavColor("transparent");
    window.scrollY > 10 ? setFont("#382a26") : setFont("#8a8a8a");
    window.scrollY > 10 ? setfontColor("#8a8a8a") : setfontColor("#F6F6F6");
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
    color: ${font};
    &:hover { 
      color: ${fontColor};
    }
    text-decoration : none;
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
        <ul>
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
