import React from "react";
import DeletePost from "./DeletePost";
import Messages from "./Messages";
import EditPost from "./EditPost";
import SendMessage from "./SendMessage";
import "./style.css";

export default function Post({ token, post, postList, setPostList }) {
  return (
    <div class="post">
      <h3>
        <u>{post.title}</u>
      </h3>
      <ul>
        <li>
          <b>Price:</b> {post.price}
        </li>
        <li>
          <b>Description:</b> {post.description}
        </li>
        <li>
          {/* Location: {post.location} */}
          <b>Location:</b>{" "}
          {post.location === "[On Request]"
            ? "Available upon request."
            : post.location}
        </li>
        <li>
          <b>Will Deliver:</b> {post.willDeliver ? "Yes" : "No"}
        </li>
        {/* <li>Messages: {post.isAuthor ? post.messages : "No messages."}</li> */}
      </ul>
      {post.isAuthor ? <Messages token={token} post={post} /> : null}
      {post.isAuthor ? (
        <DeletePost
          token={token}
          post={post}
          postList={postList}
          setPostList={setPostList}
        />
      ) : null}
      {post.isAuthor ? (
        <EditPost
          token={token}
          post={post}
          postList={postList}
          setPostList={setPostList}
        />
      ) : null}

      {!post.isAuthor ? <SendMessage token={token} post={post} /> : null}
    </div>
  );
}
