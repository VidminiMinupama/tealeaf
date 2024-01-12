import React, { useState } from 'react';
import supabase from '../../../supa/supabase/supabaseClient';
import Loan1 from './Loan1.css';



const Loan = () => {
  
  const [formData, setFormData] = useState({
    
    l_id: '',
    Personal_id: '',
    Name: '',
    l:'',
    type:'',
  });

  const showAlert = (message) => {
    alert(message);
  };

  const gatDataIntoSupabase = async (e) => {
    e.preventDefault();

    const personalId = document.getElementById('Personal_id').value;
    const Name = document.getElementById('Name').value;
    const l = document.getElementById('l').value;
    const type = document.getElementById('type').value;

    
    if ( !personalId  || !Name  || !l || !type) {
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

 
  if (!supplierData || supplierData.length === 0) {
    showAlert('Invalid Personal_id. Please enter a valid Personal_id');
    return;
  }

    const formDataToUpdateSupabase = {
      
      Personal_id: personalId,
      Name: Name,
      l: l,
      type: type,
    };

    insertDataIntoSupabase(formDataToUpdateSupabase);
    
  };
  
  const insertDataIntoSupabase = async (formDataToUpdateSupabase) => {
    try {
      const { data, error } = await supabase.from('Pesticides').insert([
        {
          Personal_id: formDataToUpdateSupabase.Personal_id,
          Name: formDataToUpdateSupabase.Name,
          l: formDataToUpdateSupabase.l,
          type: formDataToUpdateSupabase.type,
        },
      ]);
  
      if (error) {
        alert('Error inserting data into Supabase: ' + error.message);
      } else {
        alert('Form submitted ' );
       
      }
    } catch (error) {
      console.log('Error connecting to Supabase: ' + error.message);
    }
  };

  return (
    <div className="baclround-imagez">
      <div className="Loan">
        <div className="Loan-container">
          <form onSubmit={gatDataIntoSupabase}>
            <h1 className="form-header" data-component="header">
              Apply Pesticide
            </h1>
            
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
              <label htmlFor="Name">Name</label>
              <input
                type="text"
                className="form-control"
                id="Name"
                name="Name"
                placeholder="Enter your Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="l">Poverty</label>
              <input
                type="l"
                className="form-control"
                id="l"
                name="l"
                placeholder="l"
              />
              </div>
              <div class="form-group">
    <label for="type">Type</label>
    <select class="form-control" id="type" name="type">
      <option value="Carbosulfan">Carbosulfan</option>
      <option value="Thiamethoxam">Thiamethoxam</option>
      <option value="Diazinon">Diazinon</option>
    </select>
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

export default Loan;

