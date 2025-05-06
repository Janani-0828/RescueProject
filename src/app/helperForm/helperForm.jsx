import React, { useState } from 'react';
import './helperForm.css'; // Copy your existing CSS if needed

const HelperForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    availabilityStatus: 'Available'
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false); // just for demo feedback

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.availabilityStatus) newErrors.availabilityStatus = 'Status is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // 🚀 PLACEHOLDER: Connect your backend POST request here later
    console.log('Form submitted:', formData);
    setSubmitted(true); // show basic confirmation
  };

  return (
    <div className="form-container">
      <br /><br />
      <h1>Register Helper</h1><br /><br />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="availabilityStatus">Availability Status:</label>
          <select 
            id="availabilityStatus" 
            name="availabilityStatus"
            value={formData.availabilityStatus}
            onChange={handleChange}
            required
          >
            <option value="Available">Available</option>
            <option value="Unavailable">Unavailable</option>
          </select>
          {errors.availabilityStatus && <p className="error">{errors.availabilityStatus}</p>}
        </div>

        <button type="submit">Submit</button>
        {submitted && <p className="success">Form submitted successfully! ✅</p>}
      </form>
    </div>
  );
};

export default HelperForm;
