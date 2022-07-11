import {
  Profile,
  Posts,
  NavBar,
  LogOut,
  Post,
  Register,
  CreatePost,
  EditPost,
} from "components";
import Login from "components/Login";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMe } from "api/user";

export default function App() {
  const [token, setToken] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const [postList, setPostList] = useState([]);

  const localStorageToken = localStorage.getItem("token");

  useEffect(() => {
    async function getMe() {
      const result = await fetchMe(localStorageToken);
      setCurrentUser(result.data);
      setToken(localStorageToken);
    }
    if (localStorageToken) {
      getMe();
    }
  }, [token]);

  // useEffect(() => {
  //   console.log("token = ", token);
  //   setToken("");
  //   console.log("token = ", token);
  //   console.log("user = ", currentUser);
  //   setCurrentUser({});
  //   console.log("user = ", currentUser);
  // }, [localStorageToken]);

  return (
    <div class="app">
      <NavBar />
      <Routes>
        <Route
          path="/profile"
          element={
            <Profile
              token={token}
              postList={postList}
              setPostList={setPostList}
            />
          }
        />
        <Route
          path="/"
          element={
            <Posts
              token={token}
              postList={postList}
              setPostList={setPostList}
            />
          }
        />
        <Route
          path="/logout"
          element={
            <LogOut
              setToken={setToken}
              setCurrentUser={setCurrentUser}
              token={token}
              currentUser={currentUser}
            />
          }
        />
        {/* <Route path="/post" element={<Post />} /> */}
        <Route path="/register" element={<Register setToken={setToken} />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route
          path="/createpost"
          element={
            <CreatePost
              token={token}
              postList={postList}
              setPostList={setPostList}
            />
          }
        />
      </Routes>
    </div>
  );
}
