import React, { useEffect, useState } from 'react';
import supabase from '../../../supa/supabase/supabaseClient';
import './Monetary.css';

const Monetary = () => {
  const [formData, setFormData] = useState({
    Name: '',
    l_id: '',
    Personal_id: '',
    amount: '',
  });

  useEffect(() => {
    const personalId = localStorage.getItem('personalId');
    if (personalId) {
      setFormData((prevData) => ({ ...prevData, Personal_id: personalId }));
    }
  }, []);

  const showAlert = (message) => {
    alert(message);
  };

  const gatDataIntoSupabase = async (e) => {
    e.preventDefault();

    const personalId = formData.Personal_id;
    const Name = formData.Name;
    const amount = formData.amount;

    if (!Name || !personalId || !amount) {
      showAlert('Please fill out all fields.');
      return;
    }
    const { data: supplierData, error: supplierError } = await supabase
    .from('Supplier')
    .select('Personal_id')
    .eq('Personal_id', personalId);

  if (supplierError) {
    alert('Error fetching data from Supplier: ' + supplierError.message);
    return;
  }

  // Check if data exists in Supplier table
  if (!supplierData || supplierData.length === 0) {
    showAlert('Invalid Personal_id. Please enter a valid Personal_id');
    return;
  }
    
    const isUserLoggedIn = await checkUserLogin(personalId);

    if (isUserLoggedIn) {
      const formDataToUpdateSupabase = {
        Personal_id: personalId,
        Name: Name,
        amount: amount,
      };

      insertDataIntoSupabase(formDataToUpdateSupabase);
    } else {
      showAlert('Invalid Account.');
    }
  };

  const checkUserLogin = async (personalId) => {
    try {
      const { data, error } = await supabase
        .from('Supplier')
        .select('Personal_id')
        .eq('Personal_id', personalId);

      return data && data.length > 0; 
    } catch (error) {
      console.log('Error checking user login: ' + error.message);
      return false;
    }
  };

  const insertDataIntoSupabase = async (formDataToUpdateSupabase) => {
    try {
      const { data, error } = await supabase.from('Monetary_loan').insert([
        {
          Name: formDataToUpdateSupabase.Name,
          Personal_id: formDataToUpdateSupabase.Personal_id,
          amount: formDataToUpdateSupabase.amount,
        },
      ]);

      if (error) {
        alert('Failed to submit form: ' + error.message);
      } else {
        alert('Form submitted. ' /*+ JSON.stringify(data)*/);
      }
    } catch (error) {
      console.log('Error connecting to Supabase: ' + error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="background-imagez">
      <div className="Money">
        <div className="Loan-container">
          <form onSubmit={gatDataIntoSupabase}>
            <h1 className="form-header" data-component="header">
              Apply Monetary loan
            </h1>

            <div className="form-group">
              <label htmlFor="Personal_id">NIC</label>
              <input
                type="text"
                className="form-control"
                id="Personal_id"
                name="Personal_id"
                placeholder="Enter your NIC number"
                value={formData.Personal_id}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Name">Name</label>
              <input
                type="text"
                className="form-control"
                id="Name"
                name="Name"
                placeholder="Enter your Name"
                value={formData.Name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="amount">Amount</label>
              <input
                type="amount"
                className="form-control"
                id="amount"
                name="amount"
                placeholder="Rs"
                value={formData.amount}
                onChange={handleInputChange}
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

export default Monetary;
