import React, { Component } from "react";

class Getuser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      firstName: "",
      lastName: "",
      image: "",
      email: "",
      country: "",
      loading: true
    };
  }

  componentDidMount() {
    fetch("https://api.randomuser.me/")
      .then((response) => response.json())
      .then((data) => {
        const user = data.results[0];

        this.setState({
          title: user.name.title,
          firstName: user.name.first,
          lastName: user.name.last,
          image: user.picture.large,
          email: user.email,
          country: user.location.country,
          loading: false
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    if (this.state.loading) {
      return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
    }

    return (
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <h1>User Details</h1>

        <img
          src={this.state.image}
          alt="User"
          style={{
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            border: "3px solid #333"
          }}
        />

        <table
          border="1"
          cellPadding="10"
          style={{
            margin: "20px auto",
            borderCollapse: "collapse",
            width: "400px"
          }}
        >
          <tbody>
            <tr>
              <th>Title</th>
              <td>{this.state.title}</td>
            </tr>

            <tr>
              <th>First Name</th>
              <td>{this.state.firstName}</td>
            </tr>

            <tr>
              <th>Last Name</th>
              <td>{this.state.lastName}</td>
            </tr>

            <tr>
              <th>Email</th>
              <td>{this.state.email}</td>
            </tr>

            <tr>
              <th>Country</th>
              <td>{this.state.country}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Getuser;