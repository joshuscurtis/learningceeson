import header from "../styles/Header.module.css";
import Link from "next/link";
import Hamburger from "../components/hammenu"
import React, { useState } from 'react';

export default function Header() {
  const [count, setCount] = useState(0);


  if (count === 1) {
  return (
    <div className={header.container}>
  <style>{`
  @import-normalize;

    body {
      margin: 0;
      font-family: "SF Pro Text","Myriad Set Pro","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
      background: #FAEBEA;
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
      <div onClick={() => setCount(0)} className={header.hamburger}>Menu</div>
    </div>
    <Hamburger/>
    </div>
  );}
  if (count === 0 ) {
    return (
      <div className={header.container}>
    <style>{`
      body {
        margin: 0;
        font-family: "SF Pro Text","Myriad Set Pro","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
        background: #FAEBEA;
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
        <div onClick={() => setCount(1)} className={header.hamburger}>Menu</div>
      </div>
      </div>
    );
  }
}
