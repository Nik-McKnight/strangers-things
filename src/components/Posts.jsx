import { fetchAllPosts } from "api/post";
import React, { useEffect, useState } from "react";

export default function Posts() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const getAllPosts = async () => {
      const results = await fetchAllPosts();
      console.log("results:", results);
      setPostList(results.data.posts);
    };
    getAllPosts();
    //console.log(postList.data.posts);
  }, []);

  console.log("postList:", postList);

  return (
    <div>
      {postList.map((post, index) => {
        return <div>{post.location}</div>;
      })}
    </div>
  );
}