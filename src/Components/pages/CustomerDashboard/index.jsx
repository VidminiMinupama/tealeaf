import React from 'react';
import './CustomerDashboard.css';
import graph2 from './graph2.jpg';
import { useNavigate } from 'react-router-dom';

const CustomerDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    navigate('/');
  };
  return (
    <div className="container">
      <aside className="sidebar">
        <div className="user">
          <div className="user-avatar">
            <p>C</p>
          </div>
          <div className="user-info">
            <h3>Customer</h3>
            <p>Customer</p>
          </div>
        </div>
        <div className="hr"></div>
        <ul className="menu one">
          <li>
            <a href="Location">
              <ion-icon name="home-outline"></ion-icon>
              <span>Find our locations</span>
            </a>
          </li>
          <li>
            <a href="ExploreProducts">
              <ion-icon name="person-outline"></ion-icon>
              <span>Buy Now</span>
            </a>
          </li>
          
         
         
        </ul>
        <div className="hr"></div>
        <ul className="menu two">
         
          <li>
          <a href="#" onClick={handleLogout}>
              <ion-icon name="log-out-outline"></ion-icon>
              <span>Log out</span>
            </a>
          </li>
        </ul>
      </aside>
      <main className="events">
      <img src={graph2} alt="theTeaLeaf"  />
      </main>
    </div>
  );
};

export default CustomerDashboard;
