import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import CustomerList from './components/CustomerList';
import TicketList from './components/TicketList';
import TicketDetail from './components/TicketDetail';

// Import your authentication components
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';

function App() {
  // Create a state to manage authentication
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          {/* Render authentication components conditionally */}
          {isAuthenticated ? (
            // Render the Logout component if authenticated
            <Route path="/logout" element={<Logout />} />
          ) : (
            // Render login and registration components if not authenticated
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </>
          )}
          {/* Render other components */}
          <Route path="/customers" element={<CustomerList />} />
          <Route path="/tickets" element={<TicketList />} />
          <Route path="/ticket/:id" element={<TicketDetail />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
