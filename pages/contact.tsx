import Header from "../components/header";
import Content from "../components/content"
import Footer from "../components/footer"

const welcomeText = "Welcome to Learning Ceeson"
const pageTile = "Get in Contact with us now!"

export default function ContactPage() {
  return (
    <div>
      <Header />
      <Content title={pageTile} maintext={welcomeText}/>
      <Footer/>
    </div>
  );
}
