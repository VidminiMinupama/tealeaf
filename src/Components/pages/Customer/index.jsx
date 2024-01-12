import React, { useState } from 'react';
import './Customer.css';
import { useNavigate } from 'react-router-dom';
import supabase from '../../../supa/supabase/supabaseClient';


const Customer = () => {
  const Navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    m_id: '',
    Personal_id: '',
    dateOfBirth: '',
    Email: '',
    Contact: '',
    password: '',
    country:'',
    companyName:'',
  });

  const showAlert = (message) => {
    alert(message);
  };

  const gatDataIntoSupabase = async (e) => {
    e.preventDefault();

    const personalId = document.getElementById('Personal_id').value;
    const fullName = document.getElementById('full_name').value;
    const dateOfBirth = document.getElementById('DOB').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;
    const password = document.getElementById('password').value;
    const country = document.getElementById('country').value;
    const company_name = document.getElementById('company_name').value;

    
    if (!fullName || !personalId || !dateOfBirth || !email || !contact || !password || !country || !company_name) {
      showAlert('Please fill out all fields.');
      return;
    }

    const formDataToUpdateSupabase = {
      
      Personal_id: personalId,
      fullName:fullName,
      dateOfBirth: new Date(dateOfBirth).toISOString(),
      Email: email,
      Contact: contact,
      password: password,
      country: country,
      company_name: company_name,
    };

    insertDataIntoSupabase(formDataToUpdateSupabase);
    
  };
  
  const insertDataIntoSupabase = async (formDataToUpdateSupabase) => {
    try {
      const { data, error } = await supabase.from('Customer').insert([
        {
          Personal_id: formDataToUpdateSupabase.Personal_id,
          full_name: formDataToUpdateSupabase.fullName,
          DOB: formDataToUpdateSupabase.dateOfBirth,
          email: formDataToUpdateSupabase.Email,
          contact: formDataToUpdateSupabase.Contact,
          password: formDataToUpdateSupabase.password,
          country: formDataToUpdateSupabase.country,
          company_name: formDataToUpdateSupabase.company_name,
        },
      ]);
  
      if (error) {
        alert('Error inserting data into Supabase: ' + error.message);
      } else {

        showAlert('You are successfully registered.');
        Navigate('/LoginC');
      }
      
    } catch (error) {
      console.log('Error connecting to Supabase: ' + error.message);
    }
  };

  return (
    <div className="background-image4">
      <div className="customer">
        <div className="customer-container">
          <form onSubmit={gatDataIntoSupabase}>
            <h1 className="form-header" data-component="header">
              customer
            </h1>
            <div className="form-group">
              <label htmlFor="full_name">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="full_name"
                name="full_name"
                placeholder="Enter your full name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Personal_id">NIC</label>
              <input
                type="text"
                className="form-control"
                id="Personal_id"
                name="Personal_id"
                placeholder="Enter your NIC number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter your email address"
              />
            </div>
            <div className="form-group">
              <label htmlFor="DOB">Date of Birth</label>
              <input type="date" className="form-control" id="DOB" name="DOB" />
            </div>
            <div className="form-group">
              <label htmlFor="contact">Contact</label>
              <input
                type="contact"
                className="form-control"
                id="contact"
                name="contact"
                placeholder="Enter your contact numbers"
              />
            </div>
            <div className="form-group">
              <label htmlFor="company_name">Company Name</label>
              <input
                type="company_name"
                className="form-control"
                id="company_name"
                name="company_name"
                placeholder="Enter your company name"
              />
              </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <input
                type="country"
                className="form-control"
                id="country"
                name="country"
                placeholder="Enter your country"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>
            <br />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Customer;