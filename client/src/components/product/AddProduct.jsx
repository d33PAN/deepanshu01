import React, { useState } from 'react';
import './productForm.css'; // Importing external CSS file for styling

function AddProductForm() {
  const [productData, setProductData] = useState({
    productName: '',
    productPrice: '',
    productImage: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(productData); // You can do something with this productData, like sending it to a server for validation
    // Here, you can write code to further process the productData, like sending it to a server for database insertion
    // After submission, you might want to clear the form fields, you can reset the state or perform any other action needed
    setProductData({
      productName: '',
      productPrice: '',
      productImage: ''
    });
  };

  return (
    <div className="add-product-container">
      <h2 className="add-product-heading">Add Product</h2>
      <form onSubmit={handleSubmit} className="add-product-form">
        <div className="form-group">
          <label htmlFor="productName" className="form-label">Product Name:</label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={productData.productName}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="productPrice" className="form-label">Product Price:</label>
          <input
            type="text"
            id="productPrice"
            name="productPrice"
            value={productData.productPrice}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="productImage" className="form-label">Product Image:</label>
          <input
            type="text"
            id="productImage"
            name="productImage"
            value={productData.productImage}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <button type="submit" className="btn">Add Product</button>
      </form>
    </div>
  );
}

export default AddProductForm;
