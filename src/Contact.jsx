import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { IoMailSharp } from "react-icons/io5";

const Contact = () => {
  return (
    <main className="contact-main">
      <h1 id="c">ALAADIN ABOSHAAR</h1>
      <h1>Contact Me</h1>
      <p>Let's get in touch and create something great together</p>
      <a href="https://Wa.me/971544991702" target="_blank" id="wa">
        <FaSquareWhatsapp width={70} />
        WhatsApp
      </a>
      <a href="https://facebook.com/alaa.aboshar" target="_blank" id="fa">
        <FaFacebookSquare />
        Facebook
      </a>
      <a href="https://instagram.com/alaa_aboshaar" target="_blank" id="inst">
        <FaInstagram />
        instagram
      </a>
      <a href="https://t.me/+9715449991702" target="_blank" id="tele">
        <BsTelegram />
        Telegram
      </a>
      <a href="mailto:ALAADINABOSHAAR@GMAIL.C0M" target="_blank" id="mail">
        <IoMailSharp />
        e-Mail
      </a>
    </main>
  );
};

export default Contact;
