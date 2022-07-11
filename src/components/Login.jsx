import React, { useState } from "react";
import { loginUser } from "api/user";
import { useNavigate } from "react-router-dom";

export default function Login({ setToken }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  function logOut() {
    localStorage.setItem("token", null);
  }

  return (
    <div>
      <form
        class="login"
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await loginUser(userName, password);
          if (result.success === false) {
            alert(result.error.message);
          } else {
            setToken(result.data.token);
            localStorage.setItem("token", result.data.token);
            alert(result.data.message);
            navigate("/");
          }
        }}
      >
        <input
          placeholder="Username"
          value={userName}
          required={true}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          placeholder="Password"
          value={password}
          required={true}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
