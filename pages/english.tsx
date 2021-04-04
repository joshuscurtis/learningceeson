import Header from "../components/header";
import Content from "../components/content";
import Footer from "../components/footer";
import SubMenu from "../components/submenu"

export default function EnglishPage() {
  const welcomeText = "Welcome to Learning Ceeson"
  const pageTile = "Learn a English today!"
  return (
    <div>
      <Header />
      <SubMenu/>
      <Content title={"Learn to Speak English"} maintext={welcomeText}/>
      <Content title={"Learn to Read English"} maintext={welcomeText}/>
      <Content title={"Listen to Spoken English"} maintext={welcomeText}/>


      <Footer/>

    </div>
  );
}
