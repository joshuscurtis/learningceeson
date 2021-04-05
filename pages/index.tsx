import Header from "../components/header";
import Content from "../components/content";
import Footer from "../components/footer";
import React from "react";
import Link from "next/link";
import Hero from "../components/hero";
import home from "../styles/Home.module.css";

export default function IndexPage() {
  return (
    <div>
      <Header />
      <Hero />
      <div className={home.panels}>
        <Content title={"Learn French"} maintext={"Step by Step Teaching"} />
        <Content title={"Learn English"} maintext={"Step by Step Teaching"} />
        <Content title={"Learn Spanish"} maintext={"Step by Step Teaching"} />
      </div>
      <Footer />
    </div>
  );
}
