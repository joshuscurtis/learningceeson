import header from "../styles/Header.module.css";
import Link from "next/link";
export default function Header() {
  return (
    <div class={header.container}>
      <div class={header.logo}>LOGO</div>
      <div class={header.items}>
        <Link href="/">
          <div class={header.item}>Home</div>
        </Link>

        <Link href="french">
          <div class={header.item}>Learn French</div>
        </Link>
        <Link href="english">
          <div class={header.item}>Learn English</div>
        </Link>
        <Link href="about">
          <div class={header.item}>About Us</div>
        </Link>
      </div>
    </div>
  );
}
