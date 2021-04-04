import Header from "../components/header";
import Content from "../components/content";
import Footer from "../components/footer";

export default function EnglishPage() {
  const welcomeText = "Welcome to Learning Ceeson"
  const pageTile = "Learn a English today!"
  return (
    <div>
      <Header />
      <Content title={pageTile} maintext={welcomeText}/>
      <Footer/>

    </div>
  );
}
