
import React from 'react';
import './ManagerDashboard.css';
import graph from './graph.jpg';
import { useNavigate } from 'react-router-dom';

const ManagerDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    navigate('/');
  }
  return (
    <div className="container">
      <aside className="sidebar">
        <div className="user">
          <div className="user-avatar">
            <p>M</p>
          </div>
          <div className="user-info">
            <h3>Manager</h3>
            <p>Manger</p>
          </div>
        </div>
        <div className="hr"></div>
        <ul className="menu one">
          <li>
            <a href="AdminDashboard">
              <ion-icon name="home-outline"></ion-icon>
              <span>Pesticide</span>
            </a>
          </li>
          <li>
            <a href="AdminDashboard_1">
              <ion-icon name="person-outline"></ion-icon>
              <span>Fertilizer</span>
            </a>
          </li>
          <li className="active">
            <a href="AdminDashboard_2">
              <ion-icon name="calendar-outline"></ion-icon>
              <span>Money</span>
            </a>
          </li>
          <li>
            <a href="AdminDashboard_4">
              <ion-icon name="mail-outline"></ion-icon>
              <span>Tea Supply Lot</span>
            </a>
          </li>
          <li>
            <a href="Products">
              <ion-icon name="mail-outline"></ion-icon>
              <span>Edit Tea Products</span>
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
      <img src={graph} alt="theTeaLeaf"  />
      </main>
    </div>
  );
};

export default ManagerDashboard;
