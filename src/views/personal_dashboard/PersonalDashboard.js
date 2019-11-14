//added in modal for social sharing
import React, { useState, useEffect } from "react";
import "./PersonalDashboard.scss";
import Modal from 'react-modal'
import Socials from "../../Social Sharing/Socials";
import ShareIcon from "../../Social Sharing/entypo-share.svg";

const Badge = ({ title, total, nextThreshold, icon, toggleModal }) => (
  <div className="badge">
    <div className="info">
      <h3>{title}</h3>
      <p>Your Total: <strong>{total}</strong></p>
      <p>Next Threshold: <strong>{nextThreshold}</strong></p>
    </div>
    <div className="icon">
      <img src={icon} alt="badge icon" />
    </div>
    <div className="personal__share">
      <button onClick={toggleModal}>
        <p>Share</p>
        <img
          src={ShareIcon}
          alt="share icon"
          title="Share"
        ></img>
      </button>
    </div>
  </div>
)

export default function PersonalDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const [data, setData] = useState();
  console.log('Data fetched: ', data)
  useEffect(() => {
    //// at end of url, try /api/shakespeareQuotes, /api/commits, or /api/moonPhases
    fetch('https://bv9cpgqr4l.execute-api.us-east-1.amazonaws.com/dev-nisa/Personal-Dashboard-Metrics')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setData(data)
      })
      .catch(error => console.log(error))
  }, [])
  

  return (
    <>
      <Modal
        isOpen={isOpen}
        parentSelector={() => document.body}
        className="Modal"
        appElement={document.getElementById('root')}
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
        <Badge title="Children Served" total={data ? data.Served : 'Loading...'} nextThreshold="700" icon="Badge1.svg" toggleModal={toggleModal} />
        <Badge title="Connections Discovered" total={data ? data.Connections : 'Loading...'} nextThreshold="700" icon="Badge2.svg" toggleModal={toggleModal} />
        <Badge title="Engagements Events" total={data ? data.Events : 'Loading...'} nextThreshold="70" icon="Badge3.svg" toggleModal={toggleModal} />
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