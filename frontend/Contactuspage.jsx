import React, { useState } from 'react';

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    issue: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Your message has been submitted!');
    setFormData({ name: '', email: '', issue: '' });
  };

  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <p>If you have any questions about your return,exchange,delivery please reach out to us:</p>
      <form onSubmit={handleSubmit} className="contact-form">
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Issue Description:</label>
          <textarea
            name="issue"
            value={formData.issue}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>

    </div>
  );
};

export default Contactus;
