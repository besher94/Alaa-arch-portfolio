import { useState, useEffect } from "react";
import { IoHome, IoCallSharp } from "react-icons/io5";
import { IoIosInformationCircle } from "react-icons/io";
import { TfiGallery } from "react-icons/tfi";
import { PiList } from "react-icons/pi";
import "./Navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnim, setIsAnim] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggle = () => {
    if (!isOpen) {
      setIsOpen(true);
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 10);
    } else {
      setIsAnim(true);
      setTimeout(() => {
        setIsAnim(false);
        setIsOpen(false);
      }, 300);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setIsOpen(false); // سكّر المينيو إذا صارت شاشة كبيرة
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile && (
        <button className="toggle-btn" onClick={toggle}>
          <PiList size={30} />
        </button>
      )}
      <nav
        className={`navbar ${
          isMobile
            ? isAnim
              ? "close"
              : isVisible
              ? ""
              : isOpen
              ? "open"
              : ""
            : "open desktop"
        }`}
      >
        <Link className="l" to="/">
          <div className="d">
            <IoHome className="nav-icons b" size={30} />
          </div>
        </Link>
        <Link className="l" to="/Contact">
          <div className="d">
            <IoCallSharp className="nav-icons" size={30} />
          </div>
        </Link>
        <Link className="l" to="/About">
          <div className="d">
            <IoIosInformationCircle className="nav-icons" size={30} />
          </div>
        </Link>
        <Link className="l" to="/Gallery">
          <div className="d">
            <TfiGallery className="nav-icons" size={30} />
          </div>
        </Link>
      </nav>
    </>
  );
};

export default NavBar;
