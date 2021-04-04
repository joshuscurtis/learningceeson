import content from "../styles/Content.module.css";
import Link from "next/link";
import React from "react";


export default function Content(props) {
  
  return (
    <div id={props.id} className={content.container}>
      <h1 className={content.title}>{props.title}</h1>
      <p className={content.maintext}>{props.maintext}</p>
    </div>
  );
}
