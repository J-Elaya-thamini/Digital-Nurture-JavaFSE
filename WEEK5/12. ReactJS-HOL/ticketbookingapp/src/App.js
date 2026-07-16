import React, { useState } from "react";
import GuestPage from "./components/GuestPage";
import UserPage from "./components/UserPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      {loggedIn ? (
        <UserPage onLogout={() => setLoggedIn(false)} />
      ) : (
        <GuestPage onLogin={() => setLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;