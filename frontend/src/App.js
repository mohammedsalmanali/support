import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import 'Routes' instead of 'Switch'
import Navigation from './components/Navigation';
import CustomerList from './components/CustomerList';
import TicketList from './components/TicketList';
import TicketDetail from './components/TicketDetail';

function App() {
  return (
    <Router>
      <div>
      <Navigation />
        <Routes> {/* Use 'Routes' instead of 'Switch' */}
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
