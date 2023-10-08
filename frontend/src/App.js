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
import ProtectedRoute from './ProtectedRoute'; // Import the ProtectedRoute component

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

          {/* Use Route for protected routes */}
          <Route
            path="/customers"
            element={<ProtectedRoute component={CustomerList} isAuthenticated={isAuthenticated} />}
          />
          <Route
            path="/tickets"
            element={<ProtectedRoute component={TicketList} isAuthenticated={isAuthenticated} />}
          />

          <Route path="/ticket/:id" element={<TicketDetail />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
