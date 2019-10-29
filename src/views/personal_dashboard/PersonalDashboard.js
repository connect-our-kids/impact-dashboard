import React from 'react'
import './PersonalDashboard.scss'
import styled from 'styled-components';

export default function PersonalDashboard() {
    
    const Button = styled.button`
    height: 3rem;
    width: 10rem;
    background-color: #1d8eb6;
    color: white;
    font-size: 20px;
    margin-left: 33rem;
    margin-top: 1rem;
    `;

    return (
        <>
        <header>
            <h1>Sam Wilsons Impact</h1>
            <Button>Share My Impact</Button>
        </header>
        <main>
            <div className='card1'>
                <div className='left'>
                    <h3>Children Served</h3>
                    <p> Your total:</p>
                    <p>Next Threshold:</p>

                </div>
               
                <div className='right'>
                    <img src='Badge1.svg'></img>
                </div>
            </div>

            <div className='card2'>
                <div className='left'>
                    <h3>Connections Discovered</h3>
                    <p> Your total:</p>
                    <p>Next Threshold:</p>

                </div>
               
                <div className='right'>
                <img src='/Badge2.svg'></img>
                </div>
            </div>

            <div className='card3'>
                <div className='left'>
                    <h3>Engagements Events</h3>
                    <p> Your total:</p>
                    <p>Next Threshold:</p>
                </div>
               
                <div className='right'>
                    <img src='/Badge3.svg'></img>
                </div>
            </div>
        </main>

        <div className='text'>
            <p>Thank you for being a super hero to kids in foster care. Your work is important and worth sharing. Now you can share your impact with the world. Encourage your colleagues to do the same! </p>
        </div>
        </>
    )
}
