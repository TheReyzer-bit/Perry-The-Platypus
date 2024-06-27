import React, { useState } from 'react';
import axios from 'axios';

const AddUserForm = () => {
  const [user, setUser] = useState({
    first_name: '',
    second_name: '',
    role: '',
    login: '',
    password: '',
    id_group: 1 // Example: default group ID
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users', user);
      console.log('User added:', response.data);
      // Optionally, update UI or trigger fetchUsers in parent component
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="first_name" placeholder="First Name" value={user.first_name} onChange={handleChange} />
      <input type="text" name="second_name" placeholder="Second Name" value={user.second_name} onChange={handleChange} />
      <input type="text" name="role" placeholder="Role" value={user.role} onChange={handleChange} />
      <input type="text" name="login" placeholder="Login" value={user.login} onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUserForm;
