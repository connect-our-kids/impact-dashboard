import React from 'react'
import './PersonalDashboard.scss'

export default function PersonalDashboard() {
    return (
        <>
        <header>
            <h1 className='calloutHeader'>Sam Wilsons Impact</h1>
            <a className='share-button'>Share My Impact</a>
        </header>
        <div className='personalmain'>
            <div className='card1'>
                <div className='left'>
                    <h3>Children Served</h3>
                    <p> Your total: <strong>500</strong></p>
                    <p>Next Threshold: <strong>700</strong></p>
                </div>
               
                <div className='right'>
                    <img src='Badge1.svg' alt='children served icon'></img>
                </div>
            </div>

            <div className='card2'>
                <div className='left'>
                    <h3>Connections Discovered</h3>
                    <p> Your total: <strong>100</strong></p>
                    <p>Next Threshold: <strong>700</strong></p>
                </div>
               
                <div className='right'>
                    <img src='/Badge2.svg' alt='connections discovered icon'></img>
                </div>
            </div>

            <div className='card3'>
                <div className='left'>
                    <h3>Engagements Events</h3>
                    <p> Your total: <strong>20</strong></p>
                    <p>Next Threshold: <strong>70</strong></p>
                </div>
               
                <div className='right'>
                    <img src='/Badge3.svg' alt='engagemnets events icon'></img>
                </div>
            </div>
        </div>

        <div className='bottomtext'>
            <p><strong>Thank you</strong> for being a super hero to kids in foster care. Your work is important and worth sharing. Now you can <strong>share your impact</strong> with the world. Encourage your colleagues to do the same! </p>
        </div>
        </>
    )
}
