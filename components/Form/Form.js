'use client';
import React, { useState } from 'react';
import './Form.css';  // Import the CSS file
// GC from firebase video tut
import {push, ref, set } from 'firebase/database';
import { database } from '../../lib/firebase/firebaseConfig'; // import the database reference from config

export default function Form() {
  // Set up state to store form data
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    message: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;  // name is the name given to the input field below.each one has one.
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission // GC this is the action that happens when submit button is clicked
  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, we'll just log the data to the console
    console.log(formData);
    const firstName = formData.first_name;  // Correctly access the first_name
    alert(`Form Submitted! Thank you, ${firstName}`); // two ways to do this..
    alert(`Form Submitted!\nFirst Name: ${formData.first_name}\nLast Name: ${formData.last_name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
// now code from firebase tut video to put data in db
try {   // if the node users was not created, it will create it here
  const usersRef = ref(database, 'users'); // ref is a firebase "method" to create a referene (this one is to 'users')
  const newDataRef = push(usersRef); // push is a method that creates a uniqie child id ref, then assigned to newDataRef
// save entire form to the database
  set(newDataRef, { // set is a method that writes data to the ref id given (the 'users' one)
    first_name: formData.first_name, // these are the data objects that are written in the set.
    last_name: formData.last_name,
    email: formData.email,
    message: formData.message,
  });
  // reset the form after database submit update
setFormData ({
  first_name: '',
  last_name: '',
  email: '',
  message: '',
});
  
  //alert(`Form Submitted! Thank you, ${firstName}`); // two ways to do this..
} catch (error) {
  console.error('firebase error', error)
}
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label htmlFor="first_name">First Name:</label>
        <input
          type="text"
          placeholder="First Name"
          id="first_name"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          required
        />
        </div>
        <div className="form-group">
        <label htmlFor="last_name">Last Name:</label>
        <input
          type="text"
          id="last_name"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button className="submit-button" type="submit">Submit</button>
    </form>
  );
}
