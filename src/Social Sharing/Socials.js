
import React from "react";
import "./Socials.scss";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton
} from "react-share";

import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  EmailIcon
} from "react-share";

export default function Socials(props) {
  return (
    <div className="social__sharing">
      <div className="social_media">
        <FacebookShareButton
          url={props.url}
          className="social__media--buttonFB"
        >
          {/* <p className="socials_name">Facebook</p> */}
          <FacebookIcon
            size={40}
            round={true}
          />
        </FacebookShareButton>
      </div>
      <div className="social_media">
        <LinkedinShareButton
          url={props.url}
          windowWidth={750}
          windowHeight={600}
          className="social__media--button"
        >
          {/* <p className="socials_name">Linkedin</p> */}

          <LinkedinIcon
            size={40}
            round={true}
          />
        </LinkedinShareButton>
      </div>
      <div className="social_media">
        <TwitterShareButton
          url={props.url}
          windowWidth={750}
          windowHeight={600}
          className="social__media--button"
        >
          {/* <p className="socials_name">Twitter</p> */}
          <TwitterIcon
            size={40}
            round={true}
          />
        </TwitterShareButton>
      </div>
      <div className="social_media">
        <EmailShareButton
          url={props.url}
          subject="Check out our organization"
          body={`${props.url}`}
          windowWidth={750}
          windowHeight={600}
          className="social__media--button"
        >
          {/* <p className="socials_name">Email</p> */}
          <EmailIcon
            size={40}
            round={true}
          />
        </EmailShareButton>
      </div>
    </div>
  );
}
