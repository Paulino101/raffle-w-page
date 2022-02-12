import React from "react";
import discordSvg from "../svg/discordSvg.svg";
import emailSvg from "../svg/emailSvg.svg";
import messageSvg from "../svg/messageSvg.svg";
import ebaySvg from "../svg/ebaySvg.svg";

const Contact = () => {
  return (
    <div>
      <h1>Contact:</h1>
      <div className="footer">
        <a href="mailto:paulinoiscoool@gmail.com" className="svg1">
          <img src={emailSvg} alt="email icon" className="svg1" />
        </a>
        <a
          href="https://discordapp.com/users/406925591682744320/"
          className="svg2"
        >
          <img src={discordSvg} alt="discord icon" className="svg2" />
        </a>
        <a href="tel:7077101688" className="svg3">
          <img src={messageSvg} alt="message icon" className="svg3" />
        </a>
        <a href="https://www.ebay.com/sch/al_431035/m.html?_nkw=&_armrs=1&_ipg=&_from=" className="svg4">
          <img src={ ebaySvg } alt="ebay icon" className="svg4"/>
        </a>
      </div>
    </div>
  );
};

export default Contact;
