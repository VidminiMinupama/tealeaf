
import React, { useState } from "react";
import carbo from './carbosalfan.webp';
import guard from './Guardian.jpg';
import thio from './thioxam.png';
import './Pesticide.css';


const Pesticide= () => {
 
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card1">
            <div className="card1-body">
              <img src={carbo} alt="theTeaLeaf" width="300px" height="300px" />
              <h5 className="card1-title">Carbosulfan</h5>
              <p className="card1-text">Price: 1850 Rs<br />1549 ml/ha</p>
              <br /><br />
              <a className="btn-0" aria-current="page" href="Loan">Apply</a>
            </div>
          </div>
        </div>
        <div class="col">
    <div class="card1">
      <div class="card1-body">
      <img src={guard} alt="theTeaLeaf" width="300px" height="300px" />
        <h5 class="card1-title">Thiamethoxam</h5>
        <p class="card1-text">Price: 2150 Rs<br/>600 ml/ha</p>
        <br/><br/>
        <a class="btn-0" aria-current="page" href="Loan">Apply</a>
      </div>
      </div>
    </div>
  <div class="col">
    <div class="card1">
      <div class="card1-body">
      <img src={thio} alt="theTeaLeaf" width="300px" height="300px" />
        <h5 class="card1-title">Diazinon</h5>
        <p class="card1-text">Price: 1900 Rs<br/>1600 ml/ha</p>
        <br/><br/>
        <a class="btn-0" aria-current="page" href="Loan">Apply</a>
        </div>
      </div>
    </div>
    </div>
    </div>
      
  );
};

export default Pesticide;

