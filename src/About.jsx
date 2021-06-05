import "./App.css";
import about from "./Demo/about.svg";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        title="Welcome to About Page"
        imgsrc={about}
        visit="/contact"
        ctname="Contact now"
      />
    </>
  );
};

export default About;
