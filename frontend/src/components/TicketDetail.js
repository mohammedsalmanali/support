import React, { useEffect, useState } from 'react';
import axios from 'axios'; // You need to have axios installed
import { useParams } from 'react-router-dom';

function TicketDetail() {
  const { id } = useParams();
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
