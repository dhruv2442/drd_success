import about from "./Demo/drd_success.png";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        title="Welcome to"
        imgsrc={about}
        visit="/contact"
        ctname="Contact now"
      />
    </>
  );
};

export default About;
