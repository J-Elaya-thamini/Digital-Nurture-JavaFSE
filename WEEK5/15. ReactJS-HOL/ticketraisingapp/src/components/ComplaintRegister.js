import React, { useState } from "react";

function ComplaintRegister() {

  const [employeeName, setEmployeeName] = useState("");
  const [complaint, setComplaint] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const referenceNumber = Math.floor(
      100000 + Math.random() * 900000
    );

    alert(
      "Complaint Registered Successfully!\n\n" +
      "Employee Name: " + employeeName +
      "\nReference Number: " + referenceNumber
    );

    setEmployeeName("");
    setComplaint("");
  };

  return (
    <div style={{ margin: "30px" }}>

      <h2>Ticket Raising Application</h2>

      <form onSubmit={handleSubmit}>

        <div>
          <label>Employee Name:</label>
          <br />

          <input
            type="text"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label>Complaint:</label>
          <br />

          <textarea
            rows="5"
            cols="40"
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
            required
          />
        </div>

        <br />

        <button type="submit">
          Submit Complaint
        </button>

      </form>

    </div>
  );
}

export default ComplaintRegister;