import header from "../styles/Header.module.css";
import Link from "next/link";
export default function Header() {
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
      <div className={header.hamburger}>Menu</div>

    </div>
    </div>
  );
}
