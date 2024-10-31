import React, { useState } from "react";
import './contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    preferredContact: "email",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      alert(`Form submitted: \nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}\nPreferred Contact: ${formData.preferredContact}`);
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name: 
          <input 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </label>
        
        <label>
          Email: 
          <input 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </label>
        
        <label>
          Message: 
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange}
          ></textarea>
          {errors.message && <p className="error">{errors.message}</p>}
        </label>
        
        <label>
          Preferred Contact: 
          <select 
            name="preferredContact" 
            value={formData.preferredContact} 
            onChange={handleChange}
          >
            <option value="email">Email</option>
            <option value="phone">Phone</option>
            <option value="text">Text</option>
          </select>
        </label>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
