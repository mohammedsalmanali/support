// src/components/TicketDetail.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams
import './TicketDetail.css';

function TicketDetail() {
  const { id } = useParams(); // Get the id parameter from the route
  const [ticket, setTicket] = useState({});

  useEffect(() => {
    // Fetch ticket details from the backend API based on the ID in the route
    axios.get(`/api/tickets/${id}`)
      .then((response) => {
        setTicket(response.data);
      })
      .catch((error) => {
        console.error('Error fetching ticket details:', error);
      });
  }, [id]);

  return (
    <div>
      <h2>Ticket Details</h2>
      <h3>Title: {ticket.title}</h3>
      <p>Description: {ticket.description}</p>
      <p>Status: {ticket.status}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default TicketDetail;
