import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Content from "../components/content";
import slider from "../styles/Slider.module.css";

export default function Sliders() {
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1
                  }          
        return (
          <div className={slider.container}>
            <Slider {...settings}>
              <div >
              <Content className={slider.item} title={"Learn to Speak English"} maintext={"welcomeText"}/>
              </div>
              <div>
              <Content title={"Learn to Speak French"} maintext={"welcomeText"}/>
              </div>
              <div>
              <Content title={"Learn to Speak Spanish"} maintext={"welcomeText"}/>
              </div>
            </Slider>
          </div>
        );
      }
    