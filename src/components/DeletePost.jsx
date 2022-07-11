import React from "react";
import { deletePost } from "api/post";

export default function DeletePost({ token, post, postList, setPostList }) {
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const result = await deletePost(token, post);
        if (result.success) {
          removeFromPostList(post, postList, setPostList);
          alert("Deleted post");
        }
      }}
    >
      <button type="submit">Delete Post?</button>
    </form>
  );
}

function removeFromPostList(post, postList, setPostList) {
  let newList = postList;
  const index = postList.indexOf(post);
  newList.splice(index, 1);
  setPostList(newList);
}
