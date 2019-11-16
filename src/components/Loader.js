import React from 'react';
import './Loader.scss';

const Loader = ({ isLoading }) => (
  <div className={`page-loader${isLoading ? " on" : " off"}`}>
    <div className="gif-container">
      <img src={process.env.PUBLIC_URL + '/loading.gif'} alt="page loader animation" width="50" />
    </div>
  </div>
)

export default Loader;