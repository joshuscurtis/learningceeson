import Link from "next/link";
import hero from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <div className={hero.container}>
      <div className={hero.image}>
        <div className={hero.content}>
          <div className={hero.text}>
            <h1>Learn A New Language Today</h1>
            <h3>Step by Step Teaching For Everyone!</h3>
            <div className={hero.buttons}>
              <div className={hero.button}>Learn More</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
