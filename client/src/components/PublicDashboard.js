import React from 'react';

import './PublicDashboard.scss';

const PublicDashboard = () => {

  return (
    <>
      <header>
        <h1>Public Dashboard</h1>
        <h2>Check out how our efforts are making an impact:</h2>
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
    </>
  )
}

export default PublicDashboard;