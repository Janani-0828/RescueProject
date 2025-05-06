import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './serviceProvider.css'; // Optional: your styling

const ServiceProvider = () => {
  const [name, setName] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [available, setAvailable] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();

    const serviceProviderData = {
      name,
      serviceType,
      available: available === 'true' // Convert string to boolean
    };

    console.log('Submitting:', serviceProviderData);
    setLoading(true);

    // Simulated delay for "backend" processing
    setTimeout(() => {
      setLoading(false);
      alert('Service Provider registered successfully!');
      navigate('/vol'); // Redirect to /vol after submission
    }, 1500);
  };

  return (
    <div className="serviceform-container">
      <h2 className="serviceform-heading">Register for Service Provider</h2>

      <form onSubmit={onSubmit} className="service-provider-form">
        <div className="serviceform-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            required
            className="serviceform-control"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="serviceform-group">
          <label htmlFor="serviceType">Service Type</label>
          <select
            id="serviceType"
            required
            className="serviceform-control"
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
          >
            <option value="">Select</option>
            <option value="food">Food</option>
            <option value="shelter">Shelter</option>
            <option value="logistics">Logistics</option>
            <option value="medical">Medical</option>
          </select>
        </div>

        <div className="serviceform-group">
          <label htmlFor="available">Availability</label>
          <select
            id="available"
            required
            className="serviceform-control"
            value={available}
            onChange={(e) => setAvailable(e.target.value)}
          >
            <option value="">Select</option>
            <option value="true">Available</option>
            <option value="false">Not Available</option>
          </select>
        </div>

        <button type="submit" className="servicebtn btn-primary" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default ServiceProvider;
