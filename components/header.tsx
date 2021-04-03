import header from "../styles/Header.module.css";
import Link from "next/link";
export default function Header() {
  return (
    <div className={header.container}>
      <div className={header.logo}>LOGO</div>
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
        <Link href="about">
          <div className={header.item}>About Us</div>
        </Link>
      </div>
    </div>
  );
}
