import Header from "../components/header";
import Content from "../components/content";
import Footer from "../components/footer";

export default function IndexPage() {

  const welcomeText = "Welcome to Learning Ceeson"
  const pageTile = "Learn a new language today!"
  return (
    <div>
      <Header />
      <Content title={pageTile} maintext={welcomeText}/>
      <Content title={pageTile} maintext={welcomeText}/>
      <Content title={pageTile} maintext={welcomeText}/>
      <Content title={pageTile} maintext={welcomeText}/>
      <Content title={pageTile} maintext={welcomeText}/>

      <Footer/>

    </div>
  );
}
