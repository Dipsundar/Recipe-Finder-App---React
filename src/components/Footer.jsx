import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <footer>
        <Link to={"https://www.facebook.com"} target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </Link>
        <Link to={"https://www.youtube.com"} taraget="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </Link>
        <Link to={"https://www.linkedin.com/in/dipsundar-majhi-2b0a1b1b4/"} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/"} target="_blank" rel="noopener noreferrer">
          <RiInstagramFill />
        </Link>
        <Link to={"www.instagram.csom/"} target="_blank" rel="noopener noreferrer">
          <RiInstagramFill />
        </Link>
      </footer>
      <p className="footer-text">&copy; All Rights Reserved - Recipe Finder @2025</p>
    </>
  );
};

export default Footer;
