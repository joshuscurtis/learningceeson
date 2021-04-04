import Header from "../components/header";
import Content from "../components/content";
import Footer from "../components/footer";
import React from "react";
import Link from "next/link";
import Slider from "../components/slider";
export default function IndexPage() {
  const welcomeText = "Welcome to Learning Ceeson";
  const pageTile = "Learn a new language today!";
  return (
    <div>
      <Header />
      <Slider/>
      <Link href={"/french"}>
        <Content link="french"title={"French"} maintext={welcomeText} />
      </Link>
      <Content title={pageTile} maintext={welcomeText} />
      <Content title={pageTile} maintext={welcomeText} />
      <Content title={pageTile} maintext={welcomeText} />
      <Content title={pageTile} maintext={welcomeText} />

      <Footer />
    </div>
  );
}
