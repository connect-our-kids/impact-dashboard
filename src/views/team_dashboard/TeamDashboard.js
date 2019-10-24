import React from 'react'

import './TeamDashboard.scss';

export default function TeamDashboard() {
    return (
        <>
        <header>
   <h1>Team Impact</h1>
 </header>
 <main>
   <div className="public-stats-grid">
     <div className="metric">
       <b>#</b>
       <p>Metric 1</p>
     </div>
     <div className="metric">
       <b>#</b>
       <p>Metric 2</p>
     </div>
     <div className="metric">
       <b>#</b>
       <p>Metric 3</p>
     </div>
     <div className="metric">
       <b>#</b>
       <p>Metric 4</p>
     </div>
     <div className="metric">
       <b>#</b>
       <p>Metric 5</p>
     </div>
     <div className="metric">
       <b>#</b>
       <p>Metric 6</p>
     </div>
   </div>
 </main>


  
<div className='paragraph'>
   <p>Here's how your team is doing when it comes to placing children.</p>
</div>
</>
    )
}
