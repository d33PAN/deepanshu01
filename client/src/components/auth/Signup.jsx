import React, { useState } from 'react';
// import './SignupForm.css'; // Importing external CSS file for styling
import "./styles.css"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignupForm() {
const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    category: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const res = await axios.post("http://localhost:3000/register",formData)
      console.log(res);
      
    } catch (error) {
      console.log(error);
    }
      };

  return (
    <div className="signup-container">
      <h2 className="signup-heading">Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="category" className="form-label">Category:</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="form-input"
            required
          >
            <option value="">Select Category</option>
            <option value="admin">Admin</option>
            <option value="vendor">Vendor</option>
            <option value="user">User</option>
          </select>
        </div>
        <button type="submit" className="btn">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupForm;
