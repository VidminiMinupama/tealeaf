import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import supabase from '../../../supa/supabase/supabaseClient';

const ExploreProducts = () => {
  const Navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    weight: '',
    image: '',
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('ProductCard')
        .select('*');
      if (error) {
        console.error('Error fetching data from Supabase:', error);
      } else {
        setProducts(data || []);
      }
    } catch (error) {
      console.error('Error fetching data from Supabase:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddProduct = async () => {
    try {
      const { data, error } = await supabase
        .from('ProductCard')
        .upsert([
          {
            name: newProduct.name || '',
            price: newProduct.price || '',
            weight: newProduct.weight || '',
            image: newProduct.image || '',
          },
        ]);

      if (error) {
        console.error('Error adding data to Supabase:', error);
      } else {
        console.log('Data added successfully:', data);
        setNewProduct({ name: '', price: '', weight: '', image: '' });
        fetchProducts(); // Fetch the updated list after adding a new Product
      }
      
    } catch (error) {
      console.error('Error upserting data into Supabase:', error);
    }
  };

  const handleBuyNow = (id) => {
    Navigate('/BuyNow');
    console.log('Buy Now for Product with ID:', id);
  };

  return (
    <div>
      <h1>Explore Products</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((product) => (
          <div key={product.id} className="col">
            <div className="card1">
              <div className="card1-body">
                <img src={product.image} alt={product.name} width="300px" height="300px" />
                <h5 className="card1-title">{product.name}</h5>
                <p className="card1-text">Price: {product.price} Rs<br />Weight: {product.weight}</p>
                <br /><br />
                <button onClick={() => handleBuyNow(product.id)} className="small-button">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default ExploreProducts;
