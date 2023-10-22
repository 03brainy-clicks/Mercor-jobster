import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <div className="w-2/3 mx-auto flex justify-between py-12">
      <div className="text-jobster-gray text-xs">
        © 2023 Mercor.io Corporation. All rights reserved.
      </div>
      <div className="flex gap-7 text-jobster-gray-light   items-center">
        <a href="www.facebook.com" target="_blank">
          <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />
        </a>
        <a href="www.instagram.com" target="_blank">
          <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
        </a>
        <a href="www.twitter.com" target="_blank">
          <FontAwesomeIcon icon={faTwitter} className="w-6 h-6" />
        </a>
        <a href="www.youtube.com" target="_blank">
          <FontAwesomeIcon icon={faYoutube} className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
