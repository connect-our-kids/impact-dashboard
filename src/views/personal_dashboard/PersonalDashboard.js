//added in modal for social sharing
import React, { useState } from "react";
import "./PersonalDashboard.scss";
import Modal from 'react-modal'
import Socials from "../../Social Sharing/Socials";
import ShareIcon from "../../Social Sharing/entypo-share.svg";

export default function PersonalDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        parentSelector={() => document.body}
        className="Modal"
      >
        <h3 className="modal__h3">Share Badge</h3>
        <p className="modal__p">Which sharing platform would you like to use?</p>
        <Socials url="www.connectourkids.org"
                  text="Check out Connect Our Kids" />
        <img src="close-button.svg" className="modal-close" alt="close modal" onClick={toggleModal} />
      </Modal>
 
      <header className="personal">
        <h1 className="personal__title">Sam Wilsons Impact</h1>
      </header>
      <div className="personal__main">
        <div className="personal__card1">
          <div className="personal__card1--left">
            <h3>Children Served</h3>
            <p>
              {" "}
              Your total: <strong>500</strong>
            </p>
            <p>
              Next Threshold: <strong>700</strong>
            </p>
          </div>

          <div className="personal__card1--right">
            <img src="/Badge1.svg" alt="children served icon"></img>
            <div className="personal__card1--shareicon">
              <p className="personal__card1--p">Share</p>
              <img
                src={ShareIcon}
                alt="share icon"
                className="personal__card1--share"
                title="Share"
                onClick={toggleModal}
              ></img>
            </div>
          </div>
        </div>

        <div className="personal__card2">
          <div className="personal__card2--left">
            <h3>Connections Discovered</h3>
            <p>
              {" "}
              Your total: <strong>100</strong>
            </p>
            <p>
              Next Threshold: <strong>700</strong>
            </p>
          </div>

          <div className="personal__card2--right">
            <img src="/Badge2.svg" alt="connections discovered icon"></img>
            <div className="personal__card2--shareicon">
              <p className="personal__card2--p">Share</p>
              <img
                src={ShareIcon}
                alt="share icon"
                className="personal__card2--share"
                title="Share"
                onClick={toggleModal}
              ></img>
            </div>
          </div>
        </div>

        <div className="personal__card3">
          <div className="personal__card3--left">
            <h3>Engagements Events</h3>
            <p>
              {" "}
              Your total: <strong>20</strong>
            </p>
            <p>
              Next Threshold: <strong>70</strong>
            </p>
          </div>

          <div className="personal__card3--right">
            <img src="/Badge3.svg" alt="engagemnets events icon"></img>
            <div className="personal__card3--shareicon">
              <p className="personal__card3--p">Share</p>
              <img
                src={ShareIcon}
                alt="share icon"
                className="personal__card3--share"
                title="Share"
                onClick={toggleModal}
              ></img>
            </div>
          </div>
        </div>
      </div>

      <div className="personal__bottomtext">
        <p>
          <strong>Thank you</strong> for being a super hero to kids in foster
          care. Your work is important and worth sharing. Now you can{" "}
          <strong>share your impact</strong> with the world. Encourage your
          colleagues to do the same!{" "}
        </p>
      </div>
    </>
  );
}