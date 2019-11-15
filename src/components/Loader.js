import React from 'react';
import './Loader.scss';

const Loader = ({ isLoading }) => (
  <div className={`page-loader${isLoading ? " on" : " off"}`}>
    <img src="loading.gif" alt="page loader animation"/>
  </div>
)

export default Loader;