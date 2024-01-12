import React, { useState, useEffect } from 'react';
import supabase from '../../../supa/supabase/supabaseClient';
import'./index.css';

const FertilizerCard = () => {
    const [formData, setFormData] = useState({
          name: '',
          id: '',
          price: '',
          weight: '',
    });
  
    const [FertilizerCard, setFertilizerCard] = useState([]);
    const [driveSchoolData, setDriveSchoolData] = useState([]);
    const [editIndex, setEditIndex] = useState(-1);
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const { data, error } = await supabase
        .from('fer_ORIENTED_CAMPAIGN')
        .select('*');
        if (error) {
          console.error('Error fetching data from Supabase:', error);
        } else {
          setFertilizerCard(data);
        }
      } catch (error) {
        console.error('Error fetching data from Supabase:', error);
      }
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        if (editIndex === -1) {
          // Add new campaign
          const { data, error } = await supabase
            .from('fer_ORIENTED_CAMPAIGN')
            .upsert([
              {
                ferName: formData.name || '',
                description: formData.price || '',
                venue: formData.weight || '',
                
              },
            ]);
  
          if (error) {
            console.error('Error adding data to Supabase:', error);
          } else {
            console.log('Data added successfully:', data);
            fetchData();
          }
        } else {
          // Edit existing campaign
          const { data, error } = await supabase
            .from('fer_ORIENTED_CAMPAIGN')
            .upsert([
              {
                fer_id: FertilizerCard[editIndex].fer_id,
                ferName: formData.name || '',
                description: formData.price || '',
                venue: formData.weight || '',
                
              },
            ]);
  
          if (error) {
            console.error('Error updating data in Supabase:', error);
          } else {
            console.log('Data updated successfully:', data);
            fetchData();
          }
          setEditIndex(-1);
        }
      } catch (error) {
        console.error('Error upserting data into Supabase:', error);
      }
  
      setFormData({
          name: '',
          id: '',
          price: '',
          weight: '',
      });
    };
  
    const handleEdit = (ferId) => {
      const index = FertilizerCard.findIndex((fer) => fer.fer_id === ferId);
      if (index !== -1) {
        setFormData(FertilizerCard[index]);
        setEditIndex(index);
      }
    };
  
    const handleDelete = async (ferId) => {
      try {
        const { data, error } = await supabase
          .from('fer_ORIENTED_CAMPAIGN')
          .delete()
          .eq('fer_id', ferId);
  
        if (error) {
          console.error('Error deleting data from Supabase:', error);
        } else {
          console.log('Data deleted successfully:', data);
          fetchData();
        }
      } catch (error) {
        console.error('Error deleting data from Supabase:', error);
      }
    };
  
    return (
      <div>
        <h1 className="fercatite">ADD FERTILIZER</h1>
        <form onSubmit={handleSubmit} className="form-container">
          <input
            type="text"
            name="Fertilizer"
            placeholder="Fertilizer Name"
            value={formData.ferName}
            onChange={handleChange}
          />
          
          <input
            type="text"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
          />
          <input
            type="text"
            name="weight"
            placeholder="Weight"
            value={formData.weight}
            onChange={handleChange}
          />
          <button type="submit" className="small-button">
            {editIndex === -1 ? 'Add' : 'Edit'}
          </button>
        </form>
        <div className="fertilizerCard">
      {FertilizerCard.map((fer) => (
        <React.Fragment key={fer._id}>
          <div className="feranization-card">
            <div className="fertilizerCard">
              <h2>{fer.name}</h2>
              <p>{fer.weight}</p>
              <p>price: {fer.price}</p>
              <button onClick={() => handleEdit(fer.fer_id)} className="small-button">
                Edit
              </button>
              <button onClick={() => handleDelete(fer.fer_id)} className="small-button">
                Delete
              </button>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  </div>
    );
  };
  export default FertilizerCard;