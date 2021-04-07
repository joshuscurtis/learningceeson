import header from "../styles/Header.module.css";
import Link from "next/link";
import Hamburger from "../components/hammenu";
import React, { useState } from "react";
import hamburger from "../styles/Hamburger.module.css";

export default function Header() {
  const [showMe, setShowMe] = useState(false);
  function toggle(){
    setShowMe(!showMe);
    console.log(showMe);
  }
    return (
      <div className={header.container}>
        <style>
          {`
    body {
      margin: 0;
      font-family: "SF Pro Text","Myriad Set Pro","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
      background: #FAEBEA;
    }
    @media only screen and (max-width: 600px) {
      .hamburgerMenu {
          color: white;
          display: flex;
          visibility: visible;
          justify-content: center;
          height: auto; opacity: 1;
          transition: height 0ms 0ms, opacity 1500ms 0ms;
      }
      .hamburgerMenu > ul {
          display: flex;
          flex-direction: column;
          padding: 0;
      }
      .hamburgerMenu > ul> li {
          margin-top: 10px;
          font-size: 20px;
          list-style: none;
          border : 1px solid;
          width:80vw;
          padding:8px;
      }
      .hamburgerMenuNone {
        overflow: hidden;  /* Hide the element content, while height = 0 */
        height: 0;
        opacity: 0;
        transition: height 0ms 1000ms, opacity 1000ms 0ms;

      }
  }
  `}
        </style>
        <div className={header.nav}>
          <Link href="/">
            <div className={header.logo}>Learning Ceeson</div>
          </Link>
          <div className={header.items}>
            <Link href="/">
              <div className={header.item}>Home</div>
            </Link>
            <Link href="french">
              <div className={header.item}>Learn French</div>
            </Link>
            <Link href="english">
              <div className={header.item}>Learn English</div>
            </Link>
            <Link href="contact">
              <div className={header.item}>Contact</div>
            </Link>
          </div>
          <div onClick={toggle} className={header.hamburger}>
            Menu
          </div>
        </div>    
        <div className={showMe == true ? 'hamburgerMenu' : 'hamburgerMenuNone'}>
          <ul>
            <Link href={"/"}>
              <li>Home</li>
            </Link>
            <Link href={"/french"}>
              <li>Learn French</li>
            </Link>
            <Link href={"/english"}>
              <li>Learn English</li>
            </Link>
            <Link href={"/contact"}>
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>{" "}
      </div>
    );
  }
