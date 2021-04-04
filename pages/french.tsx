import Header from "../components/header";
import Content from "../components/content";
import Footer from "../components/footer";

export default function FrenchPage() {
  const welcomeText = "Welcome to Learning Ceeson"
  const pageTile = "Learn a French today!"
  return (
    <div>
      <Header />
      <Content title={pageTile} maintext={welcomeText}/>
      <Footer/>

    </div>
  );
}
