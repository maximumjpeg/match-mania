import React from 'react';
import useUserStore from './store.js';

const Home =(props) => {
  const count = useUserStore((state) => state.count);
  return <div className="app-wrapper">
    <h1>UserDashboard</h1>
    <h5>{count}</h5>
  </div>
}

export default Home