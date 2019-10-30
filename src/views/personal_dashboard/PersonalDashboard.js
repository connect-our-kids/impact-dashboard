import React from 'react'
import './PersonalDashboard.scss'

export default function PersonalDashboard() {
    return (
        <>
        <header>
            <h1 className='calloutHeader'>Sam Wilsons Impact</h1>
            <button className='share-button'>Share My Impact</button>
        </header>
        <div className='personalmain'>
            <div className='card1'>
                <div className='left'>
                    <h3>Children Served</h3>
                    <p> Your total:</p>
                    <p>Next Threshold:</p>
                </div>
               
                <div className='right'>
                    <img src='Badge1.svg' alt='children served icon'></img>
                </div>
            </div>

            <div className='card2'>
                <div className='left'>
                    <h3>Connections Discovered</h3>
                    <p> Your total:</p>
                    <p>Next Threshold:</p>
                </div>
               
                <div className='right'>
                    <img src='/Badge2.svg' alt='connections discovered icon'></img>
                </div>
            </div>

            <div className='card3'>
                <div className='left'>
                    <h3>Engagements Events</h3>
                    <p> Your total:</p>
                    <p>Next Threshold:</p>
                </div>
               
                <div className='right'>
                    <img src='/Badge3.svg' alt='engagemnets events icon'></img>
                </div>
            </div>
        </div>

        <div className='bottomtext'>
            <p>Thank you for being a super hero to kids in foster care. Your work is important and worth sharing. Now you can share your impact with the world. Encourage your colleagues to do the same! </p>
        </div>
        </>
    )
}
