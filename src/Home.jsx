import "./App.css";
import web from "./Demo/web.svg";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        title="Grow Your skills with"
        imgsrc={web}
        visit="/service"
        ctname="contact now"
      />
    </>
  );
};

export default Home;
