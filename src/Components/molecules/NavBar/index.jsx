import React from "react" 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from "bootstrap";
import './index.css';
import theTeaLeaf from'./theTeaLeaf.png';

const NavBar=()=>{
 return(
  <nav class="navbar navbar-expand-lg navbar-light">

  <div class="container-fluid">
  <img src={theTeaLeaf} alt="theTeaLeaf" width="100px" height="100px" />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="LoginM">Manager</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="Login">Supplier</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="LoginC">Customer</a>
        </li>
      
        

  </div>
  </nav>

 )
};
export default NavBar;