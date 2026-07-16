import officeImage from "./images/office.jpg";

function App() {

  const office = {
    Name: "Smart Office",
    Rent: 55000,
    Address: "Chennai"
  };

  const officeList = [
    {
      Name: "Smart Office",
      Rent: 55000,
      Address: "Chennai"
    },
    {
      Name: "Tech Park",
      Rent: 70000,
      Address: "Bangalore"
    },
    {
      Name: "Business Hub",
      Rent: 85000,
      Address: "Hyderabad"
    }
  ];

  return (

    <div style={{ padding: "20px" }}>

      <h1>Office Space Rental App</h1>

      <img
        src={officeImage}
        alt="Office"
        width="500"
      />

      <h2>Single Office Details</h2>

      <p><b>Name:</b> {office.Name}</p>

      <p
        style={{
          color: office.Rent < 60000 ? "red" : "green"
        }}
      >
        <b>Rent:</b> ₹{office.Rent}
      </p>

      <p><b>Address:</b> {office.Address}</p>

      <hr />

      <h2>Available Office Spaces</h2>

      {officeList.map((item, index) => (

        <div
          key={index}
          style={{
            border: "1px solid gray",
            margin: "10px",
            padding: "10px"
          }}
        >

          <h3>{item.Name}</h3>

          <p
            style={{
              color: item.Rent < 60000 ? "red" : "green"
            }}
          >
            <b>Rent:</b> ₹{item.Rent}
          </p>

          <p><b>Address:</b> {item.Address}</p>

        </div>

      ))}

    </div>

  );

}

export default App;