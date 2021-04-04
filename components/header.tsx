import header from "../styles/Header.module.css";
import Link from "next/link";
export default function Header() {
  return (
    
    <div className={header.container}>
  <style>{`
    body {
      margin: 0;
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
      <div className={header.hamburger}>Menu</div>

    </div>
    </div>
  );
}
