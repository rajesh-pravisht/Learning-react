import React, { useState } from 'react';

function MyForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted successfully!');
      // Do something with the data
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label><br />
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        {errors.name && <p style={{color: 'red'}}>{errors.name}</p>}
      </div>
      <div>
        <label>Email:</label><br />
        <input type="text" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
