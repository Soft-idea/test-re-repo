import "./Hero.css";
import studio_2 from "../../assets/images/studio_2.jpg";

import AnchorLink from "react-anchor-link-smooth-scroll";
 
const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={studio_2} alt="" />
      <h1>
        <span>I am Anthony,</span> frontend developer based in Nigeria
      </h1>
      <p>I am a developer from Plateau, NGA with 8 years of experience.</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
