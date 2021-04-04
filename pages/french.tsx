import Header from "../components/header";
import Content from "../components/content";
import Footer from "../components/footer";
import SubMenu from "../components/submenu";
export default function FrenchPage() {
  const welcomeText = "Welcome to Learning Ceeson"
  const pageTile = "Learn a French today!"
  return (
    <div>
      <Header />
      <SubMenu/>
      <Content id="speak" title={"Learn to Speak French"} maintext={welcomeText}/>
      <Content id='read' title={"Learn to Read French"} maintext={welcomeText}/>
      <Content id='listen' title={"Listen to Spoken French"} maintext={welcomeText}/>      <Footer/>

    </div>
  );
}
