//Sharing is done, but sharing badges is not. Take not on lambda functions in handler.js and serverless.yml

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
          quote={props.text}
          windowWidth={750}
          windowHeight={600}
          className="social__media--buttonFB"
        >
          <FacebookIcon
            size={40}
            round={true}
          />
        </FacebookShareButton>
      </div>
      <div className="social_media">
        <LinkedinShareButton
          url={props.url}
          title={props.text}
          windowWidth={750}
          windowHeight={600}
          ////unless you become a linkedin business partner, you can only share URL
          // https://business.linkedin.com/marketing-solutions/marketing-partners/become-a-partner/marketing-developer-program
          className="social__media--button"
        >

          <LinkedinIcon
            size={40}
            round={true}
          />
        </LinkedinShareButton>
      </div>
      <div className="social_media">
        <TwitterShareButton
          url={props.url}
          title="check out this! www.connectourkids.org "
          windowWidth={750}
          windowHeight={600}
          className="social__media--button"
        >
          <TwitterIcon
            size={40}
            round={true}
          />
        </TwitterShareButton>
      </div>
      <div className="social_media">
        <EmailShareButton
          url={props.url}
          text={props.text}
          body={`${props.url}`}
          windowWidth={750}
          windowHeight={600}
          className="social__media--button"
        >
          <EmailIcon
            size={40}
            round={true}
          />
        </EmailShareButton>
      </div>
    </div>
  );
}
