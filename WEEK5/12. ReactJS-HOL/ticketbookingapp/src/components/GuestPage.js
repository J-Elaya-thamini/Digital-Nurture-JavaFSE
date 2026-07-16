import React from "react";
import LoginButton from "./LoginButton";

function GuestPage({ onLogin }) {
  return (
    <div>
      <h1>Flight Ticket Booking</h1>

      <h2>Guest Page</h2>

      <h3>Available Flights</h3>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Flight</th>
            <th>From</th>
            <th>To</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>AI101</td>
            <td>Chennai</td>
            <td>Delhi</td>
            <td>₹5000</td>
          </tr>

          <tr>
            <td>IN202</td>
            <td>Coimbatore</td>
            <td>Bangalore</td>
            <td>₹2500</td>
          </tr>

          <tr>
            <td>SG303</td>
            <td>Mumbai</td>
            <td>Hyderabad</td>
            <td>₹3500</td>
          </tr>
        </tbody>
      </table>

      <br />

      <LoginButton onLogin={onLogin} />
    </div>
  );
}

export default GuestPage;