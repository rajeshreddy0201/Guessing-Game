import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    preferredContact: "email",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted: \nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}\nPreferred Contact: ${formData.preferredContact}`);
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label>Name: <input name="name" value={formData.name} onChange={handleChange} /></label>
        <label>Email: <input name="email" value={formData.email} onChange={handleChange} /></label>
        <label>Message: <textarea name="message" value={formData.message} onChange={handleChange}></textarea></label>
        <label>Preferred Contact: 
          <select name="preferredContact" value={formData.preferredContact} onChange={handleChange}>
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
