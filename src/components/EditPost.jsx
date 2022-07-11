import { editPost } from "api/post";
import React, { useState } from "react";

export default function EditPost({ token, post, postList, setPostList }) {
  const [title, setTitle] = useState(post.title);
  const [description, setDescription] = useState(post.description);
  const [price, setPrice] = useState(post.price);
  const [location, setLocation] = useState(post.location);
  const [willDeliver, setWillDeliver] = useState(post.willDeliver);
  const id = post._id;
  const [formHidden, setFormHidden] = useState(true);

  return (
    <div>
      <form
        class="editPost"
        hidden={formHidden}
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await editPost(token, {
            title,
            description,
            price,
            location,
            willDeliver,
            id,
          });
          if (result.success) alert("Edited successfully");
          else console.log(result);
          if (!token) alert("You must be logged in to edit a post!");

          editPostList(post, postList, setPostList);
          setFormHidden(true);
        }}
      >
        <input
          placeholder="Title"
          value={title}
          required={true}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Description"
          value={description}
          required={true}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          placeholder="Price"
          value={price}
          required={true}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          placeholder="Location"
          value={location}
          required={false}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          placeholder="Will Deliver"
          value={willDeliver}
          required={false}
          onChange={(e) => setWillDeliver(e.target.value)}
        />
        <button type="submit" disabled={token === null ? true : false}>
          Submit
        </button>
      </form>
      <form
        hidden={!formHidden}
        onSubmit={(e) => {
          e.preventDefault();
          setFormHidden(false);
        }}
      >
        <button type="submit">Edit Post?</button>
      </form>
    </div>
  );
}

function editPostList(post, postList, setPostList) {
  let newList = postList;
  const index = postList.indexOf(post);
  newList[index] = post;
  setPostList(newList);
}
