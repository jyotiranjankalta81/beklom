import * as React from 'react'
import "./Header.css";
import Navbar from '../Navbar/Navbar';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";


const images = ["images/imgcrobg1.png", "images/imgcrobg2.png", "images/imgcrobg3.png", "images/imgcrobg1.png", "images/imgcrobg2.png",];


function Header() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
      }
      else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 2000)

    return () => clearInterval(intervalId);
  }, [currentIndex])
  return (
    <div>
      {/* <Link to='/'> <img src="images/Header/logo.png" className="header-dots-img" data-aos="fade-down" alt="" /></Link> */}
      <div className="header_img_div">
        <img src={images[currentIndex]} className="header-header-bg" />
        {/* <img src="images/onboarding/vector1.png" className="navbar_img" alt="" /> */}
        <Navbar />

      </div>

      <div class="text-block">

        <div className="header-title" data-aos="fade-right">
          <div className="home" >
            <h1 className="home-h1-color">Beklom Technologies</h1>
            <div className='Home_Baklom_button11'>
              <Link to="/getstart"> <button type="btn" className="btn btn-primary border-0">Get Started</button></Link>
            </div>
          </div>
          {/* <h1 className="header-title-h1">Gurushree Minerals Pvt. Ltd.</h1>
            <h3 className="header-title-detail" >
              Sophisticated mining by deploying
              <br /> state of the art machines
            </h3> */}
        </div>

      </div>
      {/* <Carousel
        infiniteLoop={true}
        autoPlay={true}
        showIndicators={false}
        stopOnHover={true}
        autoFocus={true}
        showStatus={false}
        showThumbs={false}
        interval={2000}
        showArrows={false}
        dots={false}
      >
      <div className="section1-bg">
        <Navbar />
      </div>
      <div className="section2-bg">
        <Navbar />
        <div className="home" >
          <h1 className="home-h1-color">Beklom Technologies</h1>
          <div className='Home_Baklom_button11'>
            <Link to="/getstart"> <button type="btn" className="btn btn-primary border-0">Get Started</button></Link>
          </div>
        </div>
      </div>
      <div className="section3-bg">
        <Navbar />
        <div className="home" >
          <h1 className="home-h1-color">Beklom Technologies</h1>
          <div className='Home_Baklom_button11'>
            <Link to="/getstart"> <button type="btn" className="btn btn-primary border-0">Get Started</button></Link>
          </div>
        </div>
      </div>
      <div className="section4-bg">
        <Navbar />
        <div className="home" >
          <h1 className="home-h1-color">Beklom Technologies</h1>
          <div className='Home_Baklom_button11'>
            <Link to="/getstart"> <button type="btn" className="btn btn-primary border-0">Get Started</button></Link>
          </div>
        </div>
      </div>
      <div className="section5-bg">
        <Navbar />
        <div className="home" >
          <h1 className="home-h1-color">Beklom Technologies</h1>
          <div className='Home_Baklom_button11'>
            <Link to="/getstart"> <button type="btn" className="btn btn-primary border-0">Get Started</button></Link>
          </div>
        </div>
      </div>
      <div className="section6-bg">
        <Navbar />
        <div className="home" >
          <h1 className="home-h1-color">Beklom Technologies</h1>
          <div className='Home_Baklom_button11'>
            <Link to="/getstart"> <button type="btn" className="btn btn-primary border-0">Get Started</button></Link>
          </div>
        </div>
      </div>
      

      </Carousel> */}


    </div>
  )
}

export default Header