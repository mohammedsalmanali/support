import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'; 
function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/customers">Customers</Link>
        </li>
        <li>
          <Link to="/tickets">Tickets</Link>
        </li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
}

export default Navigation;
