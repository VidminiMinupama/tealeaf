import React from 'react';
import './SupplierDashboard.css';
import graph1 from './graph1.jpg';
import { useNavigate } from 'react-router-dom';

const SupplierDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };
  return (
    <div className="container">
      <aside className="sidebar">
        <div className="user">
          <div className="user-avatar">
            <p>S</p>
          </div>
          <div className="user-info">
            <h3>Supplier</h3>
            <p>Supplier</p>
          </div>
        </div>
        <div className="hr"></div>
        <ul className="menu one">
          <li>
            <a href="Partner">
              <ion-icon name="home-outline"></ion-icon>
              <span>Add Tea Supply lot</span>
            </a>
          </li>
          <li>
            <a href="Pesticide">
              <ion-icon name="person-outline"></ion-icon>
              <span>Pesticide</span>
            </a>
          </li>
          <li className="active">
            <a href="Fertilizer">
              <ion-icon name="calendar-outline"></ion-icon>
              <span>Fertilizer</span>
            </a>
          </li>
          <li>
            <a href="Monetary">
              <ion-icon name="mail-outline"></ion-icon>
              <span>Monetary Loan</span>
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
      <img src={graph1} alt="theTeaLeaf"  />
      </main>
    </div>
  );
};

export default SupplierDashboard;
