import React, { useEffect, useState } from 'react';
import supabase from '../../../supa/supabase/supabaseClient';
import './AdminDashboard.css';



const AdminDashboard_4 = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetchLocations();
  }, []);

  async function fetchLocations() {
    try {
      const { data, error } = await supabase .from('Tea_leaf_supplier_lot').select('Name, Personal_id, total, weight, plucked_date, email');
      if (error) {
        console.error('Error fetching locations:', error.message);
      } else {
        setLocations(data || []);
      }
    } catch (error) {
      console.error('Error fetching locations:', error.message);
    }
  }

  const handleTotalChange = async (personalId, newTotal) => {
    try {
      // Update the local state
      setLocations((prevLocations) =>
        prevLocations.map((location) =>
          location.Personal_id === personalId
            ? { ...location, total: newTotal }
            : location
        )
      );

      // Update the database
      await supabase
        .from('Tea_leaf_supplier_lot')
        .update({ total: newTotal })
        .eq('Personal_id', personalId);
    } catch (error) {
      console.error('Error updating total:', error.message);
    }
  };

  const handleWeightChange = async (personalId, newWeight) => {
    try {
      // Update the local state
      setLocations((prevLocations) =>
        prevLocations.map((location) =>
          location.Personal_id === personalId
            ? { ...location, weight: newWeight }
            : location
        )
      );

      // Update the database
      await supabase
        .from('Tea_leaf_supplier_lot')
        .update({ weight: newWeight })
        .eq('Personal_id', personalId);
    } catch (error) {
      console.error('Error updating weight:', error.message);
    }
  };

  return (
    <div className="background-D">
      <div className="locate">
        <h1>Tea Supply lot</h1>

        <table>
          <thead>
            <tr>
              <th>Personal id</th>
              <th>Name</th>
              <th>Total</th>
              <th>Weight</th>
              <th>Plucked date</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {locations.map((location) => (
              <tr key={location.Personal_id}>
                <td>{location.Personal_id}</td>
                <td>{location.Name}</td>
                <td>
                  <input
                    type="number"
                    value={location.total}
                    onChange={(e) =>
                      handleTotalChange(location.Personal_id, e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={location.weight}
                    onChange={(e) =>
                      handleWeightChange(location.Personal_id, e.target.value)
                    }
                  />
                </td>
                <td>{location.plucked_date}</td>
                <td>{location.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard_4;