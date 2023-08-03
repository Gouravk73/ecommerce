import React, { useState } from 'react';

const AddDataForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: email,
      name: name,
    };
    console.log(data)
    try {
      const response = await fetch('https://crudcrud.com/api/00107a305d544825af9013e048a15784/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to add data.');
      }

      // Data added successfully, do something here if needed.
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Data</button>
    </form>
  );
};

export default AddDataForm;
