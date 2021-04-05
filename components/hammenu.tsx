import Link from "next/link";
import hamburger from "../styles/Hamburger.module.css";

export default function Hamburger(props) {
  return (

<div className={hamburger.hamburgerMenu}>
        <ul>
          <Link href={"/"}><li>Home</li></Link>
          <Link href={"/french"}><li>Learn French</li></Link>
          <Link href={"/english"}><li>Learn English</li></Link>
          <Link href={"/contact"}><li>Contact Us</li></Link>
        </ul>
      </div>
  )}