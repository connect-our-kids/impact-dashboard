import React from 'react'
import './PersonalDashboard.scss'

export default function PersonalDashboard() {
    return (
        <>
        <header className='personal'>
            <h1 className='personal__title'>Sam Wilsons Impact</h1>
            <a className='personal__share'>Share My Impact</a>
        </header>
        <div className='personal__main'>
            <div className='personal__card1'>
                <div className='personal__card1--left'>
                    <h3>Children Served</h3>
                    <p> Your total: <strong>500</strong></p>
                    <p>Next Threshold: <strong>700</strong></p>
                </div>
               
                <div className='personal__card1--right'>
                    <img src='Badge1.svg' alt='children served icon'></img>
                </div>
            </div>

            <div className='personal__card2'>
                <div className='personal__card2--left'>
                    <h3>Connections Discovered</h3>
                    <p> Your total: <strong>100</strong></p>
                    <p>Next Threshold: <strong>700</strong></p>
                </div>
               
                <div className='personal__card2--right'>
                    <img src='/Badge2.svg' alt='connections discovered icon'></img>
                </div>
            </div>

            <div className='personal__card3'>
                <div className='personal__card3--left'>
                    <h3>Engagements Events</h3>
                    <p> Your total: <strong>20</strong></p>
                    <p>Next Threshold: <strong>70</strong></p>
                </div>
               
                <div className='personal__card3--right'>
                    <img src='/Badge3.svg' alt='engagemnets events icon'></img>
                </div>
            </div>
        </div>

        <div className='personal__bottomtext'>
            <p><strong>Thank you</strong> for being a super hero to kids in foster care. Your work is important and worth sharing. Now you can <strong>share your impact</strong> with the world. Encourage your colleagues to do the same! </p>
        </div>
        </>
    )
}
