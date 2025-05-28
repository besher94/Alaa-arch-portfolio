import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import Projects from "./Projects";
import { useEffect } from "react";
import "./Home.css";
// code
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="main">
      <div className="hero-section">
        <h1>
          <em>Alaadin Aboshaer</em>
        </h1>
        <img
          className="main-img"
          src="src/assets/modern living & dinning 2.JPEG"
          alt="interior design"
        />
        <img
          className="alaa"
          src="src/assets/photo_2025-05-19_14-22-27.jpg"
          alt=""
        />
      </div>
      <div className="cv">
        <p>ARCHITECH - INTERIOR DESIGNER - 3D VISUALIZER</p>

        <div className="profile">
          <h1>PROFILE</h1>
          <p>
            Dedicated Interior Designer with a Proven Track Record Of creating
            Innovative And Functional Spaces . Seeking an Opportunity To Bring
            My Unique Design Prespective And Passion for Creating .Inspiring
            Enviroment to a Dynamic Design Team.
          </p>
        </div>
      </div>
      <ul className="list">
        <li>
          NATIONALITY: <span>SYRIAN</span>
        </li>
        <li>
          VISA STATUS: <span>UAE TOURIST VISA</span>
        </li>
        <li>
          BIRTH DATE: <span>1 / JANUARY / 2001</span>
        </li>
      </ul>

      <div className="contact">
        <h1>CONTACT</h1>
        <div className="home-icons-div">
          <div className="mail-div">
            <MdEmail className="home-icons" />
            <span className="contact-details">ALAADINABOSHAAR@GMAIL.C0M </span>
          </div>
          <div className="mail-div">
            <IoCallSharp className="home-icons" />
            <span className="contact-details">00971502749558</span>
          </div>
          <FaLocationDot className="home-icons" />
          <span className="contact-details">UNITED ARAB EMIRATES</span>
        </div>
        <Projects></Projects>
      </div>
    </div>
  );
};

export default Home;
