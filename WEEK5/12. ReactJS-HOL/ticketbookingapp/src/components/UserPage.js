import React from "react";
import LogoutButton from "./LogoutButton";

function UserPage({ onLogout }) {
  return (
    <div>
      <h1>Flight Ticket Booking</h1>

      <h2>Welcome User</h2>

      <h3>You can now book tickets.</h3>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Flight</th>
            <th>From</th>
            <th>To</th>
            <th>Price</th>
            <th>Book</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>AI101</td>
            <td>Chennai</td>
            <td>Delhi</td>
            <td>₹5000</td>
            <td><button>Book</button></td>
          </tr>

          <tr>
            <td>IN202</td>
            <td>Coimbatore</td>
            <td>Bangalore</td>
            <td>₹2500</td>
            <td><button>Book</button></td>
          </tr>

          <tr>
            <td>SG303</td>
            <td>Mumbai</td>
            <td>Hyderabad</td>
            <td>₹3500</td>
            <td><button>Book</button></td>
          </tr>
        </tbody>
      </table>

      <br />

      <LogoutButton onLogout={onLogout} />
    </div>
  );
}

export default UserPage;