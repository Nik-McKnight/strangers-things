import React from "react";

export default function LogOut({
  setToken,
  setCurrentUser,
  token,
  currentUser,
}) {
  // return <div onClick={() =>{
  //   console.log("logging out");
  //   localStorage.setItem("token", "")}>Log Out</div>

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("logging out");
        localStorage.setItem("token", "");
        const tempUser = {};
        const tempToken = "";
        setCurrentUser(tempUser);
        setToken(tempToken);
        if (
          token === "" &&
          localStorage.getItem("token") === "" &&
          Object.keys(currentUser).length < 1
        ) {
          alert("Successfully logged out");
        }
      }}
    >
      <button type="submit">Log Out</button>
    </form>
  );
}
