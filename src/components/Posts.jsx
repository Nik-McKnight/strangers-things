import { fetchAllPosts } from "api/post";
import { fetchMe } from "api/user";
import { Post, CreatePost, SearchBar } from "components";
import React, { useEffect, useState } from "react";

export default function Posts({ token, postList, setPostList }) {
  // const [postList, setPostList] = useState([]);
  const me = fetchMe();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [postsToDisplay, setPostsToDisplay] = useState([]);

  const getAllPosts = async () => {
    const results = await fetchAllPosts(token);
    setPostList(results.data.posts);
    setPostsToDisplay(searchTerm.length > 0 ? filteredPosts : postList);
    //setPostsToDisplay(postList);
    console.log(postsToDisplay);
  };

  useEffect(() => {
    getAllPosts();
    console.log("running");
  }, [filteredPosts]);

  function checkPost(post, text) {
    const title = post.title.toLowerCase();
    const price = post.price.toLowerCase();
    const description = post.description.toLowerCase();
    let location = post.location
      ? post.location.toLowerCase()
      : "available on request";
    let willDeliver = post.willDeliver ? "yes" : "no";
    const username = post.author.username.toLowerCase();
    if (title.includes(text.toLowerCase())) return true;
    if (price.includes(text.toLowerCase())) return true;
    if (description.includes(text.toLowerCase())) return true;
    if (location.includes("request")) {
      location = "available on request";
    }
    if (location.includes(text.toLowerCase())) return true;
    if (willDeliver.includes(text.toLowerCase())) return true;
    if (username.includes(text.toLowerCase())) return true;
    else return false;
  }

  function filterPosts(postList, searchTerm) {
    const result = postList.filter((post) => checkPost(post, searchTerm));
    console.log("SearchResult: ", result);
    setFilteredPosts(result);
    console.log("filtered: ", filteredPosts);
  }

  return (
    <div>
      {/* <SearchBar
        postList={postList}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterPosts={filterPosts}
      ></SearchBar> */}
      <form
        class="searchBar"
        onSubmit={(e) => {
          e.preventDefault();
          filterPosts(postList, searchTerm);
        }}
      >
        <input
          placeholder="Search"
          value={searchTerm}
          required={false}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <CreatePost
        postList={postList}
        setPostList={setPostList}
        token={token}
        filterPosts={filterPosts}
      />
      {postsToDisplay.map((post) => {
        return (
          <div>
            <Post
              key={post.id}
              token={token}
              post={post}
              postList={postList}
              setPostList={setPostList}
            />
          </div>
        );
      })}
    </div>
  );
}
