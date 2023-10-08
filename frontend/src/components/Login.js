// Import the useHistory hook
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  // Create state variables to store user input
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Access the history object
  const history = useHistory();

  // Handle changes in the form input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your backend's authentication endpoint
      const response = await axios.post('/api/login', formData);

      // Handle successful login, e.g., store JWT token in local storage
      localStorage.setItem('jwtToken', response.data.token);

      // Redirect to a protected route or perform other actions
      history.push('/dashboard'); // Redirect to '/dashboard'
    } catch (error) {
      console.error('Login error:', error);
      // Handle login error, e.g., display an error message to the user
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        {/* Input fields and form elements */}
        {/* ... */}
      </form>
    </div>
  );
}

export default Login;
