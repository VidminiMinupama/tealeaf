import React, { useState } from "react";
import ERP from './ERP.jpg';
import MOP from './MOP.jpg';
import Urea from './Urea.jpg';


const Fertilizer= () => {
 
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card1">
            <div className="card1-body">
              <img src={ERP} alt="theTeaLeaf" width="300px" height="300px" />
              <h5 className="card1-title">ERP</h5>
              <p className="card1-text">Price: 9000 Rs<br />50Kg</p>
              <br /><br />
              <a className="btn-0" aria-current="page" href="LoanF">Apply</a>
            </div>
          </div>
        </div>
        <div class="col">
    <div class="card1">
      <div class="card1-body">
      <img src={MOP} alt="theTeaLeaf" width="300px" height="300px" />
        <h5 class="card1-title">MOP</h5>
        <p class="card1-text">Price: 10000 Rs<br/>50Kg</p>
        <br/><br/>
        <a class="btn-0" aria-current="page" href="LoanF">Apply</a>
      </div>
      </div>
    </div>
  <div class="col">
    <div class="card1">
      <div class="card1-body">
      <img src={Urea} alt="theTeaLeaf" width="300px" height="300px" />
        <h5 class="card1-title">Urea</h5>
        <p class="card1-text">Price: 11000 Rs<br/>50Kg</p>
        <br/><br/>
        <a class="btn-0" aria-current="page" href="LoanF">Apply</a>
        </div>
      </div>
    </div>
    </div>
    </div>
      
  );
};


export default Fertilizer;