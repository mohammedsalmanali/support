// src/components/TicketList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link
import './TicketList.css';

function TicketList() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    // Fetch tickets from the backend API when the component mounts
    axios.get('/api/tickets')
      .then((response) => {
        setTickets(response.data);
      })
      .catch((error) => {
        console.error('Error fetching tickets:', error);
      });
  }, []);

  return (
    <div>
      <h2>Ticket List</h2>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id}>
            <Link to={`/ticket/${ticket.id}`}>{ticket.title} - {ticket.status}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TicketList;
