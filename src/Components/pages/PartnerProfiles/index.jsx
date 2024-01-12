import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import './PartnerProfiles.css';
import supabase from '../../../supa/supabase/supabaseClient';

const PartnerProfile = () => {

  const [formData, setFormData] = useState({
    
    total: '',
    weight: '',
    email: '',
    plucked_date: '',
    Personal_id: '',
    Name: '',

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


  const getDataIntoSupabase = async (e) => {

    e.preventDefault();

    const {  Name, total, email, weight, plucked_date, Personal_id } = formData;

    if (!Name || !total || !email || !plucked_date || !Personal_id || !weight) {
      showAlert('Please fill out all fields.');
      return;
    }


    const formDataToUpdateSupabase = {
      Name: Name,
      total: total,
      plucked_date: new Date(plucked_date).toISOString(),
      email: email,
      Personal_id: Personal_id,
      weight: weight,
    };

    insertDataIntoSupabase(formDataToUpdateSupabase);

  };


  const insertDataIntoSupabase = async (formDataToUpdateSupabase) => {
    try {
      const { data, error } = await supabase.from('Tea_leaf_supplier_lot').insert([
        {
          Name: formDataToUpdateSupabase.Name,
          total: formDataToUpdateSupabase.total,
          plucked_date: formDataToUpdateSupabase.plucked_date,
          email: formDataToUpdateSupabase.email,
          Personal_id: formDataToUpdateSupabase.Personal_id,
          weight: formDataToUpdateSupabase.weight,
        },
      ]);

      if (error) {
        alert('Invalid Account.' );
      } else {
        alert('Form submitted. ' );
        
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
    <div className="background-image-a">
      <div className="manager">
        <div className="manager-container">
          <form onSubmit={getDataIntoSupabase}>
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
              <div className="form-group">
              <label htmlFor="Name">Name</label>
              <input
                type="Name"
                className="form-control"
                id="Name"
                name="Name"
                placeholder="Enter your name"
                value={formData.Name}
                onChange={handleInputChange}
              />
            </div>
            </div>
            <div className="form-group">
              <label htmlFor="total">Total</label>
              <input
                type="total"
                className="form-control"
                id="total"
                name="total"
                placeholder="Enter your number of tea bags"
                value={formData.total}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="weight">Weight</label>
              <input
                type="weight"
                className="form-control"
                id="weight"
                name="weight"
                placeholder="Enter your weight"
                value={formData.weight}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="plucked_date">Plucked date</label>
              <input
                type="date"
                className="form-control"
                id="plucked_date"
                name="plucked_date"
                value={formData.plucked_date}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PartnerProfile;
