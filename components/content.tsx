import content from "../styles/Content.module.css";
import Link from "next/link";
export default function Content(props) {
  return (
    <div className={content.container}>
      <h1 className={content.title}>{props.title}</h1>
      <p className={content.maintext}>{props.maintext}</p>
    </div>
  );
}
