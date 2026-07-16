import React from "react";

function LoginButton({ onLogin }) {
  return (
    <button onClick={onLogin}>
      Login
    </button>
  );
}

export default LoginButton;