import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import supabase from '../../../supa/supabase/supabaseClient';
import { useNavigate } from 'react-router-dom';
import './loginM.css'

const LoginM = () => {
  const Navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      await handleManagerLogin();
    } else {
      alert('Please fill out all the fields!');
    }
  };

  const handleManagerLogin = async () => {
    try {
      const { data: ManagerData, error: ManagerError } = await supabase
        .from('Manager')
        .select('Personal_id,password,full_name')
        .eq('email', email);

      if (ManagerError) {
        alert(ManagerError.message);
        return;
      }

      if (ManagerData && ManagerData.length > 0) {
        const storedPassword = ManagerData[0].password;

        
        if (password === storedPassword) {
          
          alert(`Hello ${ManagerData[0].full_name}`);
          Navigate('/ManagerDashboard');
        } else {
          alert('Wrong password!');
        }
      } else {
        alert('No user with that email!');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="background-image10">
      <div className="login-container" id="login-container">
        <form className="form-signin text-center" onSubmit={handleSubmit} id="form-signin">
          <div className="login-form" id="form-container">
            <div id="form-child">
              <div className="mb-4">
                <div className="form-group form-group-1">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter your email"
                    required
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  />
                </div>

                <div className="form-group form-group-2">
                  <label htmlFor="inputPassword">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    placeholder="Enter your password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="alert alert-danger" id="login-error">
                {loginError && <i className="fas fa-exclamation-circle"></i>} {loginError}
              </div>

              <button className="btn btn-outline-light btn-lg btn-block form-group-3" type="submit">
                Log in
              </button>
              <br />
              <br />
              <p className="link">
                <a href="Manager">
                  <center>Don't have an account? Sign Up here</center>
                </a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginM;
