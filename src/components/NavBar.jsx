import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav>
        <Link class="link" to="/">
          Posts
        </Link>
        {/* <Link to="/post">Post</Link> */}
        {/* <Link class="link" to="/profile">
          Profile
        </Link> */}
        <Link class="link" to="/register">
          Register
        </Link>
        <Link class="link" to="/login">
          Log In
        </Link>
        <Link class="link" to="/logout">
          Log Out
        </Link>
        <Link class="link" to="/createpost">
          Create Post
        </Link>
      </nav>
    </div>
  );
}
