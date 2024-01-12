import React, { useState, useEffect } from 'react';
import supabase from '../../../supa/supabase/supabaseClient';

const ProductCard = ({ Product, onEdit, onDelete }) => {
  return (
    <div className="card1">
      <div className="card1-body">
        <img src={Product.image} alt={Product.name} width="300px" height="300px" />
        <h5 className="card1-title">{Product.name}</h5>
        <p className="card1-text">Price: {Product.price} Rs<br />Weight: {Product.weight} g</p>
        <br /><br />
        <button onClick={() => onEdit(Product.id)} className="small-button">
          Edit
        </button>
        <button onClick={() => onDelete(Product.id)} className="small-button">
          Delete
        </button>
      </div>
    </div>
  );
};

const Products = () => {
  const [Products, setProducts] = useState([]);
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
  
  const handleEditProduct = async (id) => {
    const productToEdit = Products.find((product) => product.id === id);

    // Prompt the user to enter new details
    const newName = prompt('Enter new name:', productToEdit.name);
    const newPrice = prompt('Enter new price:', productToEdit.price);
    const newWeight = prompt('Enter new weight:', productToEdit.weight);
    const newImage = prompt('Enter new image URL:', productToEdit.image);

    // Update the product details in the database
    try {
      const { data, error } = await supabase
        .from('ProductCard')
        .upsert([
          {
            id,
            name: newName || productToEdit.name,
            price: newPrice || productToEdit.price,
            weight: newWeight || productToEdit.weight,
            image: newImage || productToEdit.image,
          },
        ]);

      if (error) {
        console.error('Error updating data in Supabase:', error);
      } else {
        console.log('Data updated successfully:', data);
        fetchProducts(); // Fetch the updated list after editing a product
      }
    } catch (error) {
      console.error('Error upserting data into Supabase:', error);
    }
  
    console.log('Edit Product with ID:', id);
  };

  const handleDeleteProduct = async (id) => {
    try {
      const { data, error } = await supabase
        .from('ProductCard')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Error deleting data from Supabase:', error);
      } else {
        console.log('Data deleted successfully:', data);
        fetchProducts(); // Fetch the updated list after deleting a Product
      }
    } catch (error) {
      console.error('Error deleting data from Supabase:', error);
    }
  };

  return (
    <div>
      <h1>Products</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {Products.map((Product) => (
          <div key={Product.id} className="col">
            <ProductCard
              Product={Product}
              onEdit={handleEditProduct}
              onDelete={handleDeleteProduct}
            />
          </div>
        ))}
        <div className="col">
          <div className="card1">
            <div className="card1-body">
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                value={newProduct.name}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="price"
                placeholder="Price"
                value={newProduct.price}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="weight"
                placeholder="Weight"
                value={newProduct.weight}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="image"
                placeholder="Image"
                value={newProduct.image}
                onChange={handleInputChange}
              />
              <button onClick={handleAddProduct} className="small-button">
                Add New Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
