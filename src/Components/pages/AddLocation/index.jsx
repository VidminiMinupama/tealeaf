import React, { useState } from "react";
import Swal from 'sweetalert2';
import supabase from "../../../supa/supabase/supabaseClient";
import './AddLocation.css';

const AddLocation = () => {
  const [formData, setFormData] = useState({
    Personal_id: '',
    Latitude: '',
    Longitude: '',
    location_id:'',
  });

  const showAlert = (message) => {
    alert(message);
  };

  const getDataIntoSupabase = async (e) => {
    e.preventDefault();

    const { Personal_id, Latitude, Longitude } = formData;

    if (!Personal_id || !Latitude || !Longitude) {
      showAlert('Please fill out all fields.');
      return;
    }

    const formDataToUpdateSupabase = {
      Personal_id: Personal_id,
      Latitude: Latitude,
      Longitude: Longitude,
    };

    insertDataIntoSupabase(formDataToUpdateSupabase);
  };

  const insertDataIntoSupabase = async (formDataToUpdateSupabase) => {
    try {
      const { data, error } = await supabase.from('Location').insert([
        {
          Personal_id: formDataToUpdateSupabase.Personal_id,
          Latitude: formDataToUpdateSupabase.Latitude,
          Longitude: formDataToUpdateSupabase.Longitude,
        },
      ]);

      if (error) {
        alert('Error inserting data into Supabase: ' + error.message);
      } else {
      
        showAlert('You are successfully added location.');

      }
    } catch (error) {
      console.log('Error connecting to Supabase: ' + error.message);
    }
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setFormData({
          ...formData,
          Latitude: position.coords.latitude,
          Longitude: position.coords.longitude,
        });
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Geolocation Error',
        text: 'Geolocation is not supported by this browser.',
      });
    }
  };

  return (
    <form onSubmit={getDataIntoSupabase}>
      
      <div>
      <div className="background-image-g">
        <h1><b>GeoHunt</b></h1>
        <br/><br/>
      
        <div className="form-group">
          <label htmlFor="Personal_id">NIC</label>
          <input
            type="text"
            className="form-control"
            id="Personal_id"
            name="Personal_id"
            placeholder="Enter your NIC number"
            onChange={(e) => setFormData({ ...formData, Personal_id: e.target.value })}
          />
        </div>
        <br/><br/>

        <p><b>Click the button to add your coordinates.</b></p><br/><br/>
        <button type="button" onClick={getLocation}>Click here</button>
        <br/><br/>
        <p><b>Latitude:</b>{formData.Latitude}</p><br/><br/>
        <p><b>Longitude:</b>{formData.Longitude}</p>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
      </div>
    </form>
  );
};

export default AddLocation;
