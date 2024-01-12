import React, { useEffect, useState } from 'react';
import supabase from '../../../supa/supabase/supabaseClient';


const AdminDashboard_2 = () => {
  
  const [locations, setLocations] = useState([]);


  useEffect(() => {
    fetchLocations();
  }, []);

  async function fetchLocations() {
    try {
      const { data, error } = await supabase.from('Monetary_loan').select('Name, Personal_id,amount');
      if (error) {
        console.error('Error fetching locations:', error.message);
      } else {
        setLocations(data || []);
      }
    } catch (error) {
      console.error('Error fetching locations:', error.message);
    }
  }

  
  const handleDelete = async (personalId) => {
    try {
     
      
      const { error } = await supabase.from('Monetary_loan').delete().eq('Personal_id', personalId);

      if (error) {
        console.error('Error deleting data:', error.message);
        return;
      }

      
      fetchLocations();
    } catch (error) {
      console.error('Error handling delete:', error.message);
    }
  };

  return (
    <div className="background-D">
      <div className='locate'>
        <h1>Money Order</h1>

        <table>
          <thead>
            <tr>
              <th>Personal id</th>
              <th>Name</th>
              <th>Amount</th>
              <th>Delete</th>
             
            </tr>
          </thead>
          <tbody>
            {locations.map((location) => (
              <tr key={location.Personal_id}>
                <td>{location.Personal_id}</td>
                <td>{location.Name}</td>
                <td>{location.amount}</td>
                
                <td>
                  <button onClick={() => handleDelete(location.Personal_id)}>Delete</button>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard_2;