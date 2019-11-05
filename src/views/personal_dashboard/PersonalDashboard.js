import React, { useState, useContext } from 'react'
import { Facebook, Twitter, Linkedin } from 'react-social-sharing'
import Modal from 'react-modal'
import { Auth0Context } from '../../auth0-wrapper'

import './PersonalDashboard.scss'

export default function PersonalDashboard() {
  const { user } = useContext(Auth0Context);
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <header className='personal'>
        <h1 className='personal__title'>Sam Wilsons Impact</h1>
        <a className='personal__share'>Share My Impact</a>
      </header>
      <Modal isOpen={isOpen} parentSelector={() => document.body} className="Modal" >
        <p>Modal Content.</p>
        <button onClick={toggleModal}>Close</button>
      </Modal>
      <div className='personal__main'>
        <div className='personal__card'>
          <div className='personal__card--left'>
            <h3>Children Served</h3>
            <p> Your total: <strong>500</strong></p>
            <p>Next Threshold: <strong>700</strong></p>
          </div>

          <div className='personal__card--right'>
            <img className="badgeIcon" src='Badge1.svg' alt='children served icon' />
            <div className="shareIcon">
              <img src="icons8-share.svg" alt="Share Icon" title="Share" onClick={toggleModal} />
            </div>
          </div>
        </div>

        <div className='personal__card'>
          <div className='personal__card--left'>
            <h3>Connections Discovered</h3>
            <p> Your total: <strong>100</strong></p>
            <p>Next Threshold: <strong>700</strong></p>
          </div>

          <div className='personal__card--right'>
            <img className="badgeIcon" src='/Badge2.svg' alt='connections discovered icon' />
            <div className="shareIcon">
              <img src="icons8-share.svg" alt="Share Icon" title="Share" onClick={toggleModal} />
            </div>
          </div>
        </div>

        <div className='personal__card'>
          <div className='personal__card--left'>
            <h3>Engagements Events</h3>
            <p> Your total: <strong>20</strong></p>
            <p>Next Threshold: <strong>70</strong></p>
          </div>

          <div className='personal__card--right'>
            <img className="badgeIcon" src='/Badge3.svg' alt='engagemnets events icon' />
            <div className="shareIcon">
              <img src="icons8-share.svg" alt="Share Icon" title="Share" onClick={toggleModal} />
            </div>
          </div>
        </div>
      </div>

      <div className="sharing">
        <h2>React Social Sharing</h2>
        <Facebook link="https://google.com" small />
        <Twitter link="https://google.com" small />
        <Linkedin link="https://google.com" small />
      </div>
      <div className='personal__bottomtext'>
        <p><strong>Thank you</strong> for being a super hero to kids in foster care. Your work is important and worth sharing. Now you can <strong>share your impact</strong> with the world. Encourage your colleagues to do the same! </p>
      </div>
    </>
  )
}
