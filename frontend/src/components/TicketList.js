import React, { useEffect, useState } from 'react';
import axios from 'axios'; // You need to have axios installed

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
            {ticket.title} - {ticket.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TicketList;
