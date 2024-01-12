
import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import './Location.css';

const supabaseUrl = 'https://vhgiorceculwhapsubbq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZoZ2lvcmNlY3Vsd2hhcHN1YmJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg4MTQzMzQsImV4cCI6MjAxNDM5MDMzNH0.Br1BNG84GcmJ205mT5Z98WzbmPms6isO57laqHQ5g8A';
const supabaseClient = createClient(supabaseUrl, supabaseKey);

const Location = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const { data, error } = await supabaseClient
          .from('Location')
          .select('Personal_id, Longitude, Latitude');

        if (error) {
          console.error('Error fetching data:', error.message);
        } else {
          setLocations(data || []);
        }
      } catch (error) {
        console.error('Unexpected error:', error.message);
      }
    };

    fetchLocations();
  }, []);

  return (
  <div className="background-LocationPic">"
    <div className='locate'>
      <h1>Find our locations here</h1>

      <table>
        <thead>
          <tr>
            <th>Personal id</th>
            <th>Longitude</th>
            <th>Latitude</th>
          </tr>
        </thead>
        <tbody>
          {locations.map((location) => (
            <tr key={location.Personal_id}>
              <td>{location.Personal_id}</td>
              <td>{location.Longitude}</td>
              <td>{location.Latitude}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Location;